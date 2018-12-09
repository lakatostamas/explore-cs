import BinaryTreeNode from './BinaryTreeNode';

test('Binary tree is empty by default', () => {
  const binaryTreeNode = new BinaryTreeNode();

  expect(binaryTreeNode.height).toBe(0);
});

