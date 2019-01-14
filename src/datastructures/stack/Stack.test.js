import Stack from './Stack';

describe('Stack', () => {
  test('it is empty by default', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();
  });

  test('it max size is 0 by default', () => {
    const stack = new Stack();

    expect(stack.maxSize).toBe(0);
  });

  test('it should store max size if it is given', () => {
    const stack = new Stack(10);

    expect(stack.maxSize).toBe(10);
  });

  test('push should add an element to stack', () => {
    const stack = new Stack(10);

    stack.push(1);

    expect(stack.length).toBe(1);
  });

  test('push should throw an error if the stack is full', () => {
    const stack = new Stack(0);

    expect(() => {
      stack.push(2);
    }).toThrow();
  });

  test('pop should remove the last element', () => {
    const stack = new Stack(2);

    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2);
  });

  test('pop should throw an error if the stack is empty', () => {
    const stack = new Stack(2);

    expect(() => {
      stack.pop();
    }).toThrow();
  });
});
