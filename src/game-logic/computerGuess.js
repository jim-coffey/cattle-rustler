import { getPotentialCodes } from './utils';
import { scoreGuess } from './scoreGuess';

const potentialCodes = getPotentialCodes();

const findNextGuess = (history, guessIndex, firstGuess) => {
  let nextFound = false;
  let guess, previousGuess, comparitiveScore;

  while (!nextFound) {
    guessIndex++;
    if (guessIndex > potentialCodes.length - 1) {
      guessIndex = 0;
    }
    guess = potentialCodes[guessIndex];
    nextFound = true;

    if (guess !== firstGuess) {

      for (let i=0; i<history.length; i++) {
        previousGuess = history[i];
        comparitiveScore = scoreGuess(guess, previousGuess.guess);
        if (comparitiveScore.bulls != previousGuess.score.bulls
         || comparitiveScore.cows != previousGuess.score.cows) {
          nextFound = false;
          break;
        }
      }

    }
  }

  return { guess, guessIndex };
};

export const computerGuess = (computer, userSecret) => {
  let nextGuess = {};
  let guessIndex = computer.guessIndex;
  let firstGuess = computer.firstGuess;
  let history = computer.history;
  let discovered = false;

  if (!computer.history.length) {
    nextGuess.guessIndex = Math.floor(Math.random() * potentialCodes.length);
    nextGuess.guess = potentialCodes[nextGuess.guessIndex];
    firstGuess = nextGuess.guess;

  } else {
    nextGuess = findNextGuess(history, guessIndex, firstGuess);
    if (!nextGuess.guess || nextGuess.guess === firstGuess) {
      console.log('No possible guess remaining !');
    }
  }

  const score = scoreGuess(nextGuess.guess, userSecret);

  if (score.bulls === 4) {
    discovered = true;
  }

  return {
    guess: nextGuess.guess,
    guessIndex: nextGuess.guessIndex,
    firstGuess,
    score,
    discovered
  }
};
