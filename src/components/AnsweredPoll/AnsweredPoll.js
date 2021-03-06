import React from 'react';
import { PollHeader } from '../PollHeader';
import { AvatarImage } from '../AvatarImage';
import { PollResultOption } from '../PollResultOption';
import PropTypes from 'prop-types';

export const AnsweredPoll = ({
  optionOne,
  optionTwo,
  pollAuthor,
  votesOptionOne,
  votesOptionTwo,
  totalVotes,
  percentageOptionOne,
  percentageOptionTwo,
  authedUser,
}) => {
  return (
    <div className='poll-anwered'>
      <PollHeader author={pollAuthor} />

      <div className='poll-anwered__body'>
        <div className='poll-anwered__left'>
          <AvatarImage user={pollAuthor} size='medium' />
        </div>

        <div className='poll-anwered__question'>
          <strong>Results:</strong>

          <PollResultOption
            option={optionOne}
            percentageOption={percentageOptionOne}
            votesOption={votesOptionOne}
            totalVotes={totalVotes}
            authedUser={authedUser}
          />

          <PollResultOption
            option={optionTwo}
            percentageOption={percentageOptionTwo}
            votesOption={votesOptionTwo}
            totalVotes={totalVotes}
            authedUser={authedUser}
          />
        </div>
      </div>
    </div>
  );
};

AnsweredPoll.propTypes = {
  optionOne: PropTypes.object.isRequired,
  optionTwo: PropTypes.object.isRequired,
  pollAuthor: PropTypes.object.isRequired,
  votesOptionOne: PropTypes.number.isRequired,
  votesOptionTwo: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  percentageOptionOne: PropTypes.string.isRequired,
  percentageOptionTwo: PropTypes.string.isRequired,
  authedUser: PropTypes.string.isRequired,
};
