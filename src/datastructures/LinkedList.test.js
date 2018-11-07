import LinkedList from './LinkedList';

test('LinkedList is empty by default', () => {
  const linkedList = new LinkedList();
  expect(linkedList.head).toBeNull();
});

test('LinkedList addToHead adds node to the head', () => {
  const linkedList = new LinkedList();

  linkedList.addToHead(5);

  expect(linkedList.head.value).toBe(5);
});

test('LinkedList addToHead works on non-empty list', () => {
  const linkedList = new LinkedList();

  linkedList.addToHead(5);
  linkedList.addToHead(6);

  expect(linkedList.head.value).toBe(6);
  expect(linkedList.head.next.value).toBe(5);
});

test('LinkedList addToTail works adds node to the tail', () => {
  const linkedList = new LinkedList();

  linkedList.addToTail(5);

  expect(linkedList.tail.value).toBe(5);
});

test('LinkedList addToTail works on non-empty list', () => {
  const linkedList = new LinkedList();

  linkedList.addToTail(5);
  linkedList.addToTail(6);

  expect(linkedList.tail.value).toBe(6);
});

test('LinkedList find returns the correct node', () => {
  const linkedList = new LinkedList();

  linkedList.addToHead(7);
  linkedList.addToHead(10);
  linkedList.addToTail(5);

  const actualNode = linkedList.find(10);

  expect(actualNode.next.value).toBe(7);
});

test('LinkedList find works on an empty list', () => {
  const linkedList = new LinkedList();

  const actualNode = linkedList.find();

  expect(actualNode).toBeNull();
});
