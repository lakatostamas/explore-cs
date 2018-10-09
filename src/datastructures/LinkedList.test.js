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
