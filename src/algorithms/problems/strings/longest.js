// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(string) {
  const hashmap = {};
  let longest = 0;
  let curr = 0;
  let currStart = 0;

  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];
    if (hashmap[char] !== undefined && currStart <= hashmap[char]) {
      curr = i - hashmap[char];
      currStart = hashmap[char];
    } else {
      curr += 1;
      longest = Math.max(longest, curr);
    }
    hashmap[char] = i;
  }

  return longest;
}

module.exports = lengthOfLongestSubstring;
