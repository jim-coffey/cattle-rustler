import { expect } from 'chai';

import { scoreGuess } from '../src/game-logic/scoreGuess';

describe('application logic', () => {

  describe('give the submitted guess a score', () => {
    it('ends game with correct guess', () => {
      const code = '9487';
      const solved = {
        bulls: 4,
        cows: 0
      };

      const score = scoreGuess(code, code);

      expect(score).to.deep.equal(solved);
    });

    it('returns correct score if no digits match', () => {
      const code = '6789';
      const guess = '1234';
      const expectedScore = {
        bulls: 0,
        cows: 0
      };

      const score = scoreGuess(code, guess);

      expect(score).to.deep.equal(expectedScore);
    });

    it('returns correct score if some digits match in wrong position', () => {
      const code = '4719';
      const guess = '1234';
      const expectedScore = {
        bulls: 0,
        cows: 2
      };

      const score = scoreGuess(code, guess);

      expect(score).to.deep.equal(expectedScore);
    });

    it('returns correct score if some digits match in same position', () => {
      const code = '1734';
      const guess = '1234';
      const expectedScore = {
        bulls: 3,
        cows: 0
      };

      const score = scoreGuess(code, guess);

      expect(score).to.deep.equal(expectedScore);
    });

    it('returns correct score if mix of matching digits in right & wrong positions', () => {
      const code = '1734';
      const guess = '1374';
      const expectedScore = {
        bulls: 2,
        cows: 2
      };

      const score = scoreGuess(code, guess);

      expect(score).to.deep.equal(expectedScore);
    });

  });

});
