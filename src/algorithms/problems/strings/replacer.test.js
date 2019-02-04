import replacer from './replacer';

describe('replacer', () => {
  test('it should return true for empty string', () => {
    expect(replacer('Mr John Smith')).toBe('Mr%20John%20Smith');
  });
  test('it should work on empty string', () => {
    expect(replacer('')).toBe('');
  });
});
