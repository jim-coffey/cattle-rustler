import { scoreGuess } from '../game-logic/scoreGuess';
import { computerGuess } from '../game-logic/computerGuess';
import { generateSecretCode } from '../game-logic/generateSecretCode';
import store from '../redux/store';

// user guess
export const userTurn = (guess) => {
  let discovered = false;
  let computerSecret = store.getState().computer.secret;
  if (!computerSecret) {
    computerSecret = generateSecretCode();
  }

  const score = scoreGuess(computerSecret, guess);
  if (score.bulls === 4) {
    discovered = true;
  }

  return {
    guess,
    computerSecret,
    score,
    discovered
  }
}

// computer guess
export const computerTurn = () => {
  let userSecret = store.getState().user.secret;
  let computer = store.getState().computer;
  if (userSecret) {
    return computerGuess(computer, userSecret);
  }
}

export const processTurn = (guess) => {
  const phase1 = userTurn(guess);
  const phase2 = computerTurn();

  return {
    phase1,
    phase2
  }
}
