import isPermutation from './isPermutation';

describe('isPermutation', () => {
  test('it should return true', () => {
    expect(isPermutation('foo', 'ofo')).toBeTruthy();
  });

  test('it should return false', () => {
    expect(isPermutation('foo', 'ofoo')).toBeFalsy();
  });

  test('it should return false', () => {
    expect(isPermutation('foo', 'boo')).toBeFalsy();
  });
});
