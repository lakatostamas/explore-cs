import BinarySearchTreeNode from './BinarySearchTreeNode';

test('BinarySearchListNode should create an empty binary search tree', () => {
  const bstNode = new BinarySearchTreeNode(5);

  expect(bstNode.value).toBe(5);
  expect(bstNode.left).toBeNull();
  expect(bstNode.right).toBeNull();
});

test('BinarySearchListNode should create an empty binary search tree', () => {
  const bstNode = new BinarySearchTreeNode(5);

  expect(bstNode.value).toBe(5);
  expect(bstNode.left).toBeNull();
  expect(bstNode.right).toBeNull();
});
