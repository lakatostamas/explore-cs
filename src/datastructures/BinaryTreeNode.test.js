import BinaryTreeNode from './BinaryTreeNode';

test('Binary tree is empty by default', () => {
  const binaryTreeNode = new BinaryTreeNode();

  expect(binaryTreeNode.height).toBe(0);
});

test('Binary tree set right increases height', () => {
  const binaryTreeNode = new BinaryTreeNode(5);
  const rightNode = new BinaryTreeNode(6);
  const rightNode2 = new BinaryTreeNode(7);

  binaryTreeNode.setRight(rightNode);
  rightNode.setRight(rightNode2);

  expect(binaryTreeNode.height).toBe(2);
});

test('Binary tree set left increases height', () => {
  const binaryTreeNode = new BinaryTreeNode(5);
  const leftNode = new BinaryTreeNode(6);
  const leftNode2 = new BinaryTreeNode(7);

  binaryTreeNode.setLeft(leftNode);
  leftNode.setLeft(leftNode2);

  expect(binaryTreeNode.height).toBe(2);
});

test('Binary tree traverseInOrder', () => {
  const binaryTreeNode = new BinaryTreeNode(5);
  const leftNode = new BinaryTreeNode(1);
  const rightNode = new BinaryTreeNode(10);

  binaryTreeNode
    .setLeft(leftNode)
    .setRight(rightNode);

  expect(binaryTreeNode.traverseInOrder()).toEqual([1, 5, 10]);
});

test('Binary tree traverseInOrder', () => {
  const binaryTreeNode = new BinaryTreeNode(5);
  const leftNode = new BinaryTreeNode(1);
  const rightNode = new BinaryTreeNode(10);

  binaryTreeNode
    .setLeft(leftNode)
    .setRight(rightNode);

  expect(binaryTreeNode.traversePreOrder()).toEqual([5, 1, 10]);
});
