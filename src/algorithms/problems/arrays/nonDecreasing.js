// https://leetcode.com/problems/non-decreasing-array/submissions/
function nonDecreasing(arr) {
  let changed = false;

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    }

    if (changed) {
      return false;
    }

    const nextValue = arr[i - 1];

    if (nextValue > arr[i + 1]) {
      arr[i + 1] = arr[i];
      changed = true;
    } else {
      arr[i] = nextValue;
      changed = true;
    }

    if (arr[i] > arr[i + 1]) {
      return false;
    }

    changed = true;
  }

  return true;
}

export default nonDecreasing;
