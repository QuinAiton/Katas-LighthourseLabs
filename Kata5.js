const urlEncode = (text) => {
  let newString;
  const split = text.split(' ');
  newString = split.join('%20');
  return newString;
}