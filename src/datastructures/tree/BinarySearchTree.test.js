import BinarySearchTree from './BinarySearchTree';

test('BinarySearchTree should be empty', () => {
  const bst = new BinarySearchTree();

  expect(bst.root.value).toBeNull();
});

test('BinarySearchTree first insert should set the root value', () => {
  const bst = new BinarySearchTree();

  bst.insert(10);

  expect(bst.root.value).toBe(10);
});

test('BinarySearchTree insert should add nodes', () => {
  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(11);
  bst.insert(12);
  bst.insert(13);

  expect(bst.root.height).toBe(3);
});

test('BinarySearchTree contains should return true if the node is exist', () => {
  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(11);
  bst.insert(12);
  bst.insert(13);

  const isContained = bst.contains(12);

  expect(isContained).toBeTruthy();
});

test('BinarySearchTree contains should return false if the node is not exist', () => {
  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(11);
  bst.insert(12);
  bst.insert(13);

  const isContained = bst.contains(15);

  expect(isContained).toBeFalsy();
});


test('BinarySearchTree remove should remove a node from tree', () => {
  const bst = new BinarySearchTree();

  bst.insert(10);
  bst.insert(11);
  bst.insert(12);
  bst.insert(13);

  bst.remove(11);

  expect(bst.root.right.value).toBe(12);
  expect(bst.height).toBe(2);
});
