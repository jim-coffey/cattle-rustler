import { processTurn } from '../game-logic/processTurn';

export const RESET_GAME = 'RESET_GAME';
export const STORE_SECRET = 'STORE_SECRET';
export const MAKE_GUESS = 'GUESS';

export function resetGame() {
  return { type: RESET_GAME };
}

export function storeSecret(secret) {
  return { type: STORE_SECRET, secret };
}

export function makeGuess(guess) {
  const result = processTurn(guess);

  return { type: MAKE_GUESS, result };
}
