import compression from './compression';

describe('compression', () => {
  test('it should return a3 when aaa is given', () => {
    expect(compression('aaa')).toBe('a3');
  });
  test('it should return a2b1c5a3 when aabcccccaaa is given', () => {
    expect(compression('aabcccccaaa')).toBe('a2b1c5a3');
  });
  test('it should work on empty string', () => {
    expect(compression('')).toBe('');
  });
  test('it should return the original string when abc is given', () => {
    expect(compression('abc')).toBe('abc');
  });
});
