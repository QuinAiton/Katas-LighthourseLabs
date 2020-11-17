const sumLargestNumbers = (arr) => {
  let largest = 0;
  let second = 0;
  for (const element of arr) {
    if (element > largest) {
      largest = element;
    }
  }
  for (element of arr) {
    if (element > second && element != largest) {
      second = element;
    }
  }
  return largest + second;
}