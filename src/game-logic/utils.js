import { isCodeValid } from './validateCode';

const SMALLEST_VALID = 1234;
const LARGEST_VALID = 9876;

// utility function used once to limit the codes
// tested to those without zeros or duplicates
export const getPotentialCodes = () => {
  const potentialCodes = [];
  const baseCodeList = [];

  for (let i=SMALLEST_VALID; i<LARGEST_VALID+1; i++) {
    baseCodeList.push(i);
  }

  baseCodeList.forEach(code => {
    var codeStr = code.toString();
    if (isCodeValid(codeStr)) {
      potentialCodes.push(codeStr);
    }
  });

  return potentialCodes;
}

export const compareCodes = (code, guess) => {
  const valid = isCodeValid(code) && isCodeValid(guess);

  if (!valid) {
    return {
      error: 'Invalid code(s)'
    }
  }

  return scoreGuess(code, guess);
};
