import DoublyLinkedList from './DoublyLinkedList';

test('DoublyLinkedList is empty by default', () => {
  const doublyLinkedList = new DoublyLinkedList();

  expect(doublyLinkedList.head).toBeNull();
  expect(doublyLinkedList.tail).toBeNull();
});

test('DoublyLinkedList addTohead works on empty list', () => {
  const doublyLinkedList = new DoublyLinkedList();
  const expectedNode = {
    prev: null,
    next: null,
    value: 10,
  };

  doublyLinkedList.addToHead(10);

  expect(doublyLinkedList.head).toEqual(expectedNode);
});

test('DoublyLinkedLisDoublyLinkedList works on non-empty list', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(10);
  doublyLinkedList.addToHead(20);

  const firstNode = doublyLinkedList.head;
  const secondNode = doublyLinkedList.head.next;

  expect(firstNode.value).toBe(20);
  expect(secondNode.value).toBe(10);
});

test('DoublyLinkedList addToTail works on empty list', () => {
  const doublyLinkedList = new DoublyLinkedList();
  const expectedNode = {
    prev: null,
    next: null,
    value: 10,
  };

  doublyLinkedList.addToTail(10);

  expect(doublyLinkedList.tail).toEqual(expectedNode);
});

test('DoublyLinkedList addToTail works on non-empty list', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToTail(10);
  doublyLinkedList.addToTail(15);

  expect(doublyLinkedList.tail.value).toBe(15);
  expect(doublyLinkedList.tail.prev.value).toBe(10);
});

test('DoublyLinkedList addToHead and addToHead works on the same DoublyLinkedList', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(10);
  doublyLinkedList.addToTail(15);

  expect(doublyLinkedList.head.value).toBe(10);
  expect(doublyLinkedList.tail.value).toBe(15);
  expect(doublyLinkedList.head.next).toEqual(doublyLinkedList.tail);
  expect(doublyLinkedList.tail.prev).toEqual(doublyLinkedList.head);
});

test('DoublyLinkedList delete should remove the selected node', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(10);
  doublyLinkedList.addToTail(12);
  doublyLinkedList.addToTail(13);
  doublyLinkedList.addToTail(15);

  doublyLinkedList.delete(12);

  expect(doublyLinkedList.head.next.value).toBe(13);
});

test('DoublyLinkedList delete should remove the head node', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(10);
  doublyLinkedList.addToTail(12);
  doublyLinkedList.addToTail(15);

  doublyLinkedList.delete(10);

  expect(doublyLinkedList.head.value).toBe(12);
});

test('DoublyLinkedList delete should remove the tail node', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(10);
  doublyLinkedList.addToTail(12);
  doublyLinkedList.addToTail(15);

  doublyLinkedList.delete(15);

  expect(doublyLinkedList.tail.value).toBe(12);
});

test('DoublyLinkedList findNode should return the first node with the correct value', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(10);
  doublyLinkedList.addToTail(12);
  doublyLinkedList.addToTail(15);

  const selectedNode = doublyLinkedList.findNode(12);

  expect(selectedNode.value).toBe(12);
  expect(selectedNode.prev.value).toBe(10);
  expect(selectedNode.next.value).toBe(15);
});

test('DoublyLinkedList reverse should reverse the DoublyLinkedList', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToTail(10);
  doublyLinkedList.addToTail(11);
  doublyLinkedList.addToTail(12);
  doublyLinkedList.addToTail(13);

  doublyLinkedList.reverse();

  expect(doublyLinkedList.head.value).toBe(13);
  expect(doublyLinkedList.tail.value).toBe(10);
  expect(doublyLinkedList.head.next.value).toBe(12);
});

test('DoublyLinkedList delete should work on empty list', () => {
  const doublyLinkedList = new DoublyLinkedList();

  const deletedNode = doublyLinkedList.delete(10);

  expect(deletedNode).toBeNull();
});

test('DoublyLinkedList delete should return null if the deletedNode does not exist', () => {
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.addToHead(11);

  const deletedNode = doublyLinkedList.delete(10);

  expect(deletedNode).toBeNull();
});
