import longest from './longest';

describe('unique', () => {
  test('it should return 0 for empty string', () => {
    expect(longest('')).toBe(0);
  });
  test('it should return 3 when abcabcbb is given', () => {
    expect(longest('abcabcbb')).toBe(3);
  });
  test('it should return 1 when bbbb is given', () => {
    expect(longest('bbbb')).toBe(1);
  });
  test('it should return 3 when bbbb is given', () => {
    expect(longest('pwwkew')).toBe(3);
  });
  test('it should return 2 when aab is given', () => {
    expect(longest('aab')).toBe(2);
  });
  test('it should return 3 dvdf is given', () => {
    expect(longest('dvdf')).toBe(3);
  });
  test('it should return 2 when abba is given', () => {
    expect(longest('abba')).toBe(2);
  });
});
