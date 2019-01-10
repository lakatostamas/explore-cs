import Stack from './Stack';

describe('Stack', () => {
  test('it is empty by default', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBeTruthy();
  });
});
