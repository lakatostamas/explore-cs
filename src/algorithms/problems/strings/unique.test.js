import unique from './unique';

describe('unique', () => {
  test('it should return true for empty string', () => {
    expect(unique('')).toBeTruthy();
  });
  test('it should return true for abc', () => {
    expect(unique('abc')).toBeTruthy();
  });
  test('it should return false for aaa', () => {
    expect(unique('aaa')).toBeFalsy();
  });
  test('it should return false for aba', () => {
    expect(unique('aaa')).toBeFalsy();
  });
});
