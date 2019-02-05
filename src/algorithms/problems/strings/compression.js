function compression(string) {
  let newString = '';
  let i = 0;
  while (i < string.length) {
    let j = i;
    while (string[j] === string[i] && j < string.length) {
      j += 1;
    }
    newString = newString.concat(string[i] + (j - i));
    i += (j - i);
  }

  return (newString.length < string.length) ? newString : string;
}

export default compression;
