function nonDecreasing(arr) {
  let changed = false;

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    }

    if (changed) {
      return false;
    }

    arr[i] = arr[i - 1] || 1;
    changed = true;
  }

  return true;
}

export default nonDecreasing;
