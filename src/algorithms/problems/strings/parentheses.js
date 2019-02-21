// ()[]{}
function parentheses(string) {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];
  for (let i = 0; i < string.length; i += 1) {
    if (stack.length && stack[stack.length - 1] === pairs[string[i]]) {
      stack.pop();
    } else {
      stack.push(string[i]);
    }
  }

  return !stack.length;
}

export default parentheses;
