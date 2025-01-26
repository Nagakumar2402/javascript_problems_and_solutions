"useStrict";

const mostFrequentlyOccurringValue = (arr) => {
  let frequency = {};
  let maxFrequency = 0;
  let mode = null;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
      mode = num;
    }
  }
  return mode;
};

console.log(mostFrequentlyOccurringValue([1, 2, 3, 4, 4, 4, 3, 2, 1]));
