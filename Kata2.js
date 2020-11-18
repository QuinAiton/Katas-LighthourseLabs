const conditionalSum = (values, condition) => {
  let sum = 0;
  for (const elements of values) {
    if (condition === 'even') {
      if (elements % 2 === 0) {
        sum += elements;
      }
    } else {
      if (elements % 2 != 0) {
        sum += elements;
      }
    }
  }
  return sum;
}