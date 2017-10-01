import { expect } from 'chai';

import { isCodeValid } from '../src/game-logic/validateCode';

describe('validate 4 digit codes', () => {

  it('accepts valid codes', () => {
    const code = '6352';
    const valid = isCodeValid(code);

    expect(valid).to.equal(true);
  });

  it('rejects non string codes', () => {
    const code = 6352;
    const valid = isCodeValid(code);

    expect(valid).to.equal(false);
  });

  it('rejects codes without 4 characters', () => {
    const code = '635';
    const valid = isCodeValid(code);

    expect(valid).to.equal(false);
  });

  it('rejects codes containing zero', () => {
    const code = '6350';
    const valid = isCodeValid(code);

    expect(valid).to.equal(false);
  });

  it('rejects codes containing non-numerics', () => {
    const code = '635X';
    const valid = isCodeValid(code);

    expect(valid).to.equal(false);
  });

  it('rejects codes containing duplicate digits', () => {
    const code = '6355';
    const valid = isCodeValid(code);

    expect(valid).to.equal(false);
  });

});
