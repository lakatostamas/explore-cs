// determine if the string has all unique characters
function unique(str) {
  const map = {};

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (map[char]) {
      return false;
    }

    map[char] = true;
  }

  return true;
}

export default unique;
