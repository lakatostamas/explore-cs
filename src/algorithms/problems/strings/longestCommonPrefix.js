// Write a function to find the longest common prefix string amongst an array of strings.
function longestCommonPrefix(arr) {
  let result = '';
  const firstWord = arr.shift();
  if (!firstWord) {
    return '';
  }
  for (let i = 0; i < firstWord.length; i += 1) {
    const isContained = arr.every(word => word[i] === firstWord[i]);
    if (isContained) {
      result += firstWord[i];
    } else {
      return result;
    }
  }

  return result;
}

export default longestCommonPrefix;
