import LinkedList from './LinkedList';

test('LinkedList is empty by default', () => {
  const linkedList = new LinkedList();
  expect(linkedList.head).toBeNull();
});

test('LinkedList addNode adds node to the head', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(5);

  expect(linkedList.head.value).toBe(5);
});

test('LinkedList addNode works on non-empty list', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(5);
  linkedList.addNode(6);

  expect(linkedList.head.value).toBe(5);
  expect(linkedList.head.next.value).toBe(6);
});


test('LinkedList find returns the correct node', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(7);
  linkedList.addNode(10);
  linkedList.addNode(5);

  const actualNode = linkedList.find(7);

  expect(actualNode.next.value).toBe(10);
});

test('LinkedList find returns the correct node (not head)', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(7);
  linkedList.addNode(10);
  linkedList.addNode(5);

  const actualNode = linkedList.find(10);

  expect(actualNode.next.value).toBe(5);
});

test('LinkedList find works on an empty list', () => {
  const linkedList = new LinkedList();

  const actualNode = linkedList.find();

  expect(actualNode).toBeNull();
});

test('LinkedList delete removes head', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(5);
  linkedList.addNode(6);

  const deletedNode = linkedList.delete(5);

  expect(deletedNode.value).toBe(5);
});

test('LinkedList delete removes not head', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(5);
  linkedList.addNode(6);
  linkedList.addNode(7);

  const deletedNode = linkedList.delete(6);

  expect(deletedNode.value).toBe(6);
  expect(linkedList.head.value).toBe(5);
  expect(linkedList.head.next.value).toBe(7);
});

test('LinkedList delete removes tail', () => {
  const linkedList = new LinkedList();

  linkedList.addNode(5);
  linkedList.addNode(6);
  linkedList.addNode(7);

  const deletedNode = linkedList.delete(7);

  expect(deletedNode.value).toBe(7);
  expect(linkedList.head.value).toBe(5);
  expect(linkedList.head.next.value).toBe(6);
  expect(linkedList.head.next.next).toBe(null);
});
