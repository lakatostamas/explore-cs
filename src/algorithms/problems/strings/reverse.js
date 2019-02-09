// reverse a null terminated string in place
function reverse(str) {
  if (!str) {
    return str;
  }
  let start = 0;
  let end = str.length - 1;
  let tmp = '';

  str = str.split('');

  while (start <= end) {
    tmp = str[start];
    str[start] = str[end];
    str[end] = tmp;
    start += 1;
    end -= 1;
  }

  return str.join('');
}

export default reverse;
