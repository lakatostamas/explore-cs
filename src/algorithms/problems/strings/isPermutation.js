// another solution is to order the chars, anagrams
function isPermutation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const charsetOfS1 = s1
    .split('')
    .reduce((soFar, curr) => {
      if (!soFar[curr]) {
        soFar[curr] = true;
      }

      return soFar;
    }, {});

  return s2
    .split('')
    .every(char => charsetOfS1[char]);
}

export default isPermutation;
