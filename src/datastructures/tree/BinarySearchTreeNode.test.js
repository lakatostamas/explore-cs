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

test('BinarySearchListNode should insert value to itself if it is empty', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(10);

  expect(bstNode.value).toBe(10);
});

test('BinarySearchListNode should insert unique numbers', () => {
  const bstNode = new BinarySearchTreeNode(1);

  bstNode.insert(10);

  expect(bstNode.right.value).toBe(10);
});
