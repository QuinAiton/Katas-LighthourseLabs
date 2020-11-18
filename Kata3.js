const numberOfVowels = (data) => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (data[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
} 
