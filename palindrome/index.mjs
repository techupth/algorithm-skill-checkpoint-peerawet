// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  let backwardStr = "";

  for (let i = 0; i < str.length; i++) {
    backwardStr = backwardStr + str[str.length - i - 1];
    console.log(backwardStr);
  }

  if (str.toLowerCase() === backwardStr.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("aaaa"));
