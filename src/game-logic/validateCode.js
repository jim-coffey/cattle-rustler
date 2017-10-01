export const isCodeValid = (code) => {
  let valid = true;

  // String, length 4, only 1-9, no duplicates
  if (typeof(code) !== 'string'
   || code.length !== 4
   || !code.match(/^[1-9]*$/)
   || (/([1-9]).*?\1/).test(code)) {
    valid = false;
  }

  return valid;
}
