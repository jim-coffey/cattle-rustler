import { combineReducers } from 'redux';

import {
  RESET_GAME,
  STORE_SECRET,
  MAKE_GUESS
} from './actions';

const initialState = {
  user: {
    secret: '',
    history: [],
    discovered: false
  },
  computer: {
    secret: '',
    history: [],
    discovered: false,
    guessIndex: -1,
    firstGuess: ''
  }
};

function gameReducers(state = initialState, action) {
  switch (action.type) {
    case RESET_GAME:
      return Object.assign({}, initialState);

    case STORE_SECRET:
      return Object.assign({}, initialState, {
        user: {
          secret: action.secret,
          history: [],
          discovered: false
        }
      });

    case MAKE_GUESS:
      const phase2Executed = action.result.phase2;
      const phase1 = action.result.phase1;
      const phase2 = phase2Executed
                   ? action.result.phase2
                   : initialState.computer;
      const lastComputerGuess = phase2Executed
                              ? [{ guess: phase2.guess, score: phase2.score }]
                              : [];

      return Object.assign({}, state, {
        user: {
          secret: state.user.secret,
          history: [{
            guess: phase1.guess,
            score: phase1.score
          }].concat(state.user.history),
          discovered: phase2.discovered
        },
        computer: {
          secret: phase1.computerSecret,
          history: lastComputerGuess.concat(state.computer.history),
          discovered: action.result.phase1.discovered,
          guessIndex: phase2.guessIndex,
          firstGuess: phase2.firstGuess
        }
      });

    default:
      return state;
  }
}

export default gameReducers;
