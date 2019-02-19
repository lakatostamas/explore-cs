import longestCommonPrefix from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  test('it should return empty string for empty string', () => {
    expect(longestCommonPrefix([''])).toBe('');
  });
  test('it should return fl when ["flower","flow","flight"] is given', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
  });
  test('it should return fl when ["flower","flow","flight"] is given', () => {
    expect(longestCommonPrefix(["flow","flower","flight"])).toBe('fl');
  });
});
