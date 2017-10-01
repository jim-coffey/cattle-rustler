import { expect } from 'chai';

import { isCodeValid } from '../src/game-logic/validateCode';
import { generateSecretCode } from '../src/game-logic/generateSecretCode';

describe('generate secret code', () => {

  it('returns a valid secret code', () => {
    const code = generateSecretCode();

    const valid = isCodeValid(code);
    expect(valid).to.equal(true);
  });

});
