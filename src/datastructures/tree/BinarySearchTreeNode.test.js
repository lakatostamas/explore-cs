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

test('BinarySearchListNode find should return the correct node', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(10);
  bstNode.insert(22);
  bstNode.insert(33);
  bstNode.insert(3);
  bstNode.insert(5);

  const foundNode = bstNode.find(5);

  expect(foundNode.value).toBe(5);
  expect(foundNode.parent.value).toBe(3);
});

test('BinarySearchListNode find should return null if the node not exist', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(10);
  bstNode.insert(5);

  const foundNode = bstNode.find(200);

  expect(foundNode).toBeNull();
});

test('BinarySearchListNode contain should return true if the node is exist in the tree', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(10);
  bstNode.insert(5);

  const isContains = bstNode.contains(10);

  expect(isContains).toBeTruthy();
});

test('BinarySearchListNode contain should return true if the node is exist in the tree', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(10);
  bstNode.insert(5);

  const isContains = bstNode.contains(11);

  expect(isContains).toBeFalsy();
});
