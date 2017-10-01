import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

function GameUi(props) {
  const { user, computer, resetGame, storeSecret, makeGuess } = props;
  const gameComplete = user.discovered || computer.discovered;

  return (
    <div className="container">
      <h1 className="centered">Bulls &amp; Cows</h1>
      <div className="centered">
        <b>Make 4 digit guesses and the computer will give feedback. No zeroes and no digit can be repeated.</b>
        <p>If you want to compete with the computer, enter your own 4 digit code for the computer to guess and see who guesses first.</p>
        <p>
          Click&nbsp;
          <button className="button" onClick={e => {
            e.preventDefault();
            resetGame();
          }}>&nbsp;
            Reset
          </button>
          at any time.
        </p>
      </div>
      <div className="row">
        <Player player="User" gameData={user} storeSecret={storeSecret} makeGuess={makeGuess} gameComplete={gameComplete} />
        <Player player="Computer" gameData={computer} />
      </div>
    </div>
  );
}

GameUi.propTypes = {
  user: PropTypes.object.isRequired,
  computer: PropTypes.object.isRequired,
  resetGame: PropTypes.func.isRequired,
  storeSecret: PropTypes.func.isRequired,
  makeGuess: PropTypes.func.isRequired
}

export default GameUi;
