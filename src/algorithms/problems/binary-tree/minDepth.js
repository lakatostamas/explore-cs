// Given a binary tree, find its minimum depth.
function minDepth(tree) {
  if (!tree) {
    return 0;
  }
  let i = 0;
  let currentWidth = 1;
  while (i < tree.length) {
    for (let j = i; j < i + currentWidth; j += 1) {
      if (tree[j] === null) {
        return i;
      }
    }
    i += 1;
    currentWidth = i * 2;
  }

  return i;
}

export default minDepth;
