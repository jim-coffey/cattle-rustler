import React from 'react';
import { connect } from 'react-redux';

import {
  resetGame,
  storeSecret,
  makeGuess
} from '../redux/actions';

import GameUi from '../components/GameUi';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    computer: state.computer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    resetGame: () => {
      dispatch(resetGame())
    },
    storeSecret: (secret) => {
      dispatch(storeSecret(secret));
    },
    makeGuess: (guess) => {
      dispatch(makeGuess(guess));
    }
  }
}

const Game = connect(mapStateToProps, mapDispatchToProps)(GameUi);

export default Game;
