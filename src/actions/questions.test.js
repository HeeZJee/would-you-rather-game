import {
  receiveQuestions,
  RECEIVE_QUESTIONS,
  handleSaveNewQuestion,
  SAVE_QUESTION,
} from './questions';
import * as api from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

jest.mock('../utils/api');

afterEach(() => {
  jest.clearAllMocks();
});

test('should return a receiveQuestions action', () => {
  const questions = '::questions::';
  const action = receiveQuestions(questions);

  expect(action).toEqual({
    type: RECEIVE_QUESTIONS,
    questions,
  });
});

test('handleSaveNewQuestion should return a function that receives dispatch as parameter', () => {
  const optionOneText = '::optionOneText::';
  const optionTwoText = '::optionTwoText::';
  const author = '::author::';

  const dispatch = jest.fn();

  const handleActionFunction = handleSaveNewQuestion({
    optionOneText,
    optionTwoText,
    author,
  });

  //   console.log('api', api);

  const saveQuestionPromise = handleActionFunction(dispatch);

  expect(dispatch).toHaveBeenNthCalledWith(1, showLoading());
  expect(api.saveQuestion).toHaveBeenCalledWith({
    optionOneText,
    optionTwoText,
    author,
  });

  saveQuestionPromise.then(() => {
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      question: '::question::',
      type: SAVE_QUESTION,
    });
    expect(dispatch).toHaveBeenNthCalledWith(3, hideLoading());
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

  // cleanup
  api.saveQuestion.mockReset();
});
