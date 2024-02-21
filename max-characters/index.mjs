// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (!result[str[i]]) {
      result[str[i]] = 1;
    } else if (result[str[i]]) {
      result[str[i]] += 1;
    }
  }
  console.log(result);

  let setOfChar = [];
  for (let i = 0; i < str.length; i++) {
    if (!setOfChar.includes(str[i])) setOfChar.push(str[i]);
  }
  console.log(setOfChar);

  let maxChar = "";
  let max = 0;
  for (let i = 0; i < setOfChar.length; i++) {
    console.log(result[setOfChar[i]]);
    if (result[setOfChar[i]] > max) {
      max = result[setOfChar[i]];
      maxChar = setOfChar[i];
    }
  }
  console.log(maxChar);
  return maxChar;
};
console.log(getMaxCharacters("apple 1231111"));
