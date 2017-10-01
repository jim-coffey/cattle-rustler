export const scoreGuess = (secretCode, guess) => {
  const score = {
    bulls: 0,
    cows: 0
  };

  if (secretCode === guess) {
    score.bulls = 4;

  } else {

    [...guess].forEach((testValue, testIndex) => {
      let codeIndex = secretCode.indexOf(testValue);

      if (codeIndex > -1) {
        if (codeIndex === testIndex) {
          score.bulls++;
        } else {
          score.cows++;
        }
      }
    })

  }

  return score;
}
