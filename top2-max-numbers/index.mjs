// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  let top1Max = Number.NEGATIVE_INFINITY;
  let top2Max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > top1Max) {
      top1Max = numbers[i];
    } else if (numbers[i] > top2Max && numbers[i] !== top1Max) {
      top2Max = numbers[i];
    }
  }
  return [top1Max, top2Max];
};
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]));
