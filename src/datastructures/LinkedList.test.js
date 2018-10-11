import LinkedList from './LinkedList';

test('LinkedList is empty by default', () => {
  const linkedList = new LinkedList();

  expect(linkedList.head).toBeNull();
  expect(linkedList.tail).toBeNull();
});

test('LinkedList addTohead works on empty list', () => {
  const linkedList = new LinkedList();
  const expectedNode = {
    prev: null,
    next: null,
    value: 10,
  };

  linkedList.addToHead(10);

  expect(linkedList.head).toEqual(expectedNode);
});

test('LinkedList addTohead works on non-empty list', () => {
  const linkedList = new LinkedList();

  linkedList.addToHead(10);
  linkedList.addToHead(20);

  const firstNode = linkedList.head;
  const secondNode = linkedList.head.next;

  expect(firstNode.value).toBe(20);
  expect(secondNode.value).toBe(10);
});

test('LinkedList addToTail works on empty list', () => {
  const linkedList = new LinkedList();
  const expectedNode = {
    prev: null,
    next: null,
    value: 10,
  };

  linkedList.addToTail(10);

  expect(linkedList.tail).toEqual(expectedNode);
});

test('LinkedList addToTail works on non-empty list', () => {
  const linkedList = new LinkedList();

  linkedList.addToTail(10);
  linkedList.addToTail(15);

  expect(linkedList.tail.value).toBe(15);
  expect(linkedList.tail.prev.value).toBe(10);
});

test('LinkedList addToHead and addToHead works on the same LinkedList', () => {
  const linkedList = new LinkedList();

  linkedList.addToHead(10);
  linkedList.addToTail(15);

  expect(linkedList.head.value).toBe(10);
  expect(linkedList.tail.value).toBe(15);
  expect(linkedList.head.next).toEqual(linkedList.tail);
  expect(linkedList.tail.prev).toEqual(linkedList.head);
});
