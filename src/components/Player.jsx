import React from 'react';
import PropTypes from 'prop-types';

import History from './History';
import Status from './Status';
import Guess from './Guess';

function Player(props) {
  const { player } = props;
  const id = (player + "-secret").toLowerCase();

  return (
    <div className="column">
      <h2 className="centered">{player}</h2>
      <label htmlFor={id}>
        Secret code :
      </label>
      <input id={id}
             placeholder="XXXX"
             type="text"
             autoComplete="off"
             disabled={player === 'Computer' ? true : false}
             onChange={() => {}} />
      <History />
      <Status />
      {player === 'User' &&
       <Guess />
      }
    </div>
  );
}

Player.propTypes = {
  player: PropTypes.string.isRequired
}

export default Player;
