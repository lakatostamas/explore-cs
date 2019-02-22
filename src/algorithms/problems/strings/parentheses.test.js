import parentheses from './parentheses';

describe('unique', () => {
  test('it should return true for empty string', () => {
    expect(parentheses('')).toBeTruthy();
  });

  test('it should return true when ()[]{} is given', () => {
    expect(parentheses('()[]{}')).toBeTruthy();
  });

  test('it should return false when ()[]{ is given', () => {
    expect(parentheses('()[]{')).toBeFalsy();
  });

  test('it should return false when ([]{} is given', () => {
    expect(parentheses('([]{}')).toBeFalsy();
  });
});
