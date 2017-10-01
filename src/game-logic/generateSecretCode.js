const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffleArray = array => {
    for (let i=array.length-1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const generateSecretCode = () => {
  const arr = shuffleArray(digits);
  return arr.slice(0, 4).join('');
}
