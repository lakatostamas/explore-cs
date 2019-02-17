import reverse from './reverse';

describe('reverse', () => {
  test('it should return the parameter if its falsy', () => {
    expect(reverse('')).toBe('');
  });
  test('it should reverse the string', () => {
    expect(reverse('abc')).toBe('cba');
  });
  test('it should reverse the palindrome', () => {
    expect(reverse('god')).toBe('dog');
  });
  test('it should work on single letter words', () => {
    expect(reverse('a')).toBe('a');
  });
  test('it should work on 2 letters words', () => {
    expect(reverse('ab')).toBe('ba');
  });
});
