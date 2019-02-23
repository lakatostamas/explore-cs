// https://leetcode.com/problems/jewels-and-stones/
function jewels(jewelsPattern, string) {
  const patterns = jewelsPattern.split('');
  return patterns
    .reduce((sum, curr) => {
      const r = new RegExp(curr, 'g');
      return sum + (string.match(r) || []).length;
    }, 0);
}

export default jewels;
