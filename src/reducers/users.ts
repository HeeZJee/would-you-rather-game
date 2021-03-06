import { RECEIVE_USERS } from '../actions/users';
import {
  SAVE_ANSWER_TO_QUESTION,
  REMOVE_ANSWER_TO_QUESTION,
  SAVE_QUESTION,
} from '../actions/questions';
import { UsersState, ReceiveUsersAction, QuestionsActionTypes } from '../types';

const initialState: UsersState = {};

export const users = (
  state = initialState,
  action: ReceiveUsersAction | QuestionsActionTypes,
): UsersState => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case SAVE_ANSWER_TO_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    case REMOVE_ANSWER_TO_QUESTION: {
      const allAnswers = state[action.authedUser].answers;
      //remove the answer that failed saving
      // eslint-disable-next-line no-unused-vars
      const { [action.qid]: removedAnswer, ...restAnswers } = allAnswers;

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: restAnswers,
        },
      };
    }

    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      };

    default:
      return state;
  }
};
