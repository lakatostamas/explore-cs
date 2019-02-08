// O(1) space complexity
function distinct(array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array.lastIndexOf(array[i]) !== i) {
      array = array.slice(0, i).concat(array.slice(i + 1));
    }
  }

  return array;
}

export default distinct;
