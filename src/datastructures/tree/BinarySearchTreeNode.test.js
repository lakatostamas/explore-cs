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

test('BinarySearchListNode findMin should return the node with the lowest value', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(10);
  bstNode.insert(5);

  const minNode = bstNode.findMin();

  expect(minNode.value).toBe(5);
});

test('BinarySearchListNode findMin should return the node with the lowest value (root)', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(5);
  bstNode.insert(10);

  const minNode = bstNode.findMin();

  expect(minNode.value).toBe(5);
});

test('BinarySearchListNode remove should remove a leaf', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(5);
  bstNode.insert(10);

  bstNode.remove(10);
  expect(bstNode.height).toBe(0);
  expect(bstNode.left).toBeNull();
  expect(bstNode.right).toBeNull();
});

test('BinarySearchListNode remove should remove a node with one child', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(5);
  bstNode.insert(10);
  bstNode.insert(11);

  bstNode.remove(10);
  expect(bstNode.height).toBe(1);
  expect(bstNode.right.value).toBe(11);
});

test('BinarySearchListNode remove should remove the root with one child', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(5);
  bstNode.insert(10);
  bstNode.insert(11);

  bstNode.remove(5);

  expect(bstNode.value).toBe(10);
  expect(bstNode.right.value).toBe(11);
});

test('BinarySearchListNode remove should remove the root with one child', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(5);
  bstNode.insert(10);
  bstNode.insert(11);

  bstNode.remove(5);

  expect(bstNode.value).toBe(10);
  expect(bstNode.right.value).toBe(11);
});

test('BinarySearchListNode remove should remove a node with two children', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(5);
  bstNode.insert(2);
  bstNode.insert(1);
  bstNode.insert(4);

  bstNode.remove(2);

  expect(bstNode.left.value).toBe(4);
  expect(bstNode.left.left.value).toBe(1);
});

test('BinarySearchListNode remove should remove a node with two children', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(50);
  bstNode.insert(70);
  bstNode.insert(20);
  bstNode.insert(10);
  bstNode.insert(40);
  bstNode.insert(38);
  bstNode.insert(35);
  bstNode.insert(22);
  bstNode.insert(28);
  bstNode.insert(45);

  bstNode.remove(20);

  expect(bstNode.left.value).toBe(22);
  expect(bstNode.left.left.value).toBe(10);
  expect(bstNode.left.right.value).toBe(40);
});

test('BinarySearchListNode remove should the root with two children', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(50);
  bstNode.insert(70);
  bstNode.insert(20);
  bstNode.insert(10);
  bstNode.insert(40);
  bstNode.insert(38);
  bstNode.insert(35);
  bstNode.insert(22);
  bstNode.insert(28);
  bstNode.insert(45);

  bstNode.remove(50);

  expect(bstNode.value).toBe(70);
  expect(bstNode.right).toBeNull();
  expect(bstNode.left.value).toBe(20);
});

test('BinarySearchListNode remove should throw an error if the node is not exist', () => {
  const bstNode = new BinarySearchTreeNode(null);

  bstNode.insert(50);
  bstNode.insert(70);
  bstNode.insert(20);
  bstNode.insert(10);
  bstNode.insert(40);
  bstNode.insert(38);
  bstNode.insert(35);
  bstNode.insert(22);
  bstNode.insert(28);
  bstNode.insert(45);

  expect(() => bstNode.remove(51)).toThrow();
});
