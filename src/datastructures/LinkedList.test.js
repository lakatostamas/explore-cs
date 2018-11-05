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
