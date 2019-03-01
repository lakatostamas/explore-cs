import nonDecreasing from './nonDecreasing';

describe('nonDecreasing', () => {
  test('it should return true when [4, 2, 3] is given', () => {
    expect(nonDecreasing([4, 2, 3])).toBeTruthy();
  });
  test('it should return false when [4, 2, 1] is given', () => {
    expect(nonDecreasing([4, 2, 1])).toBeFalsy();
  });
  test('it should return true when [2, 2, 2] is given', () => {
    expect(nonDecreasing([2, 2, 2])).toBeTruthy();
  });
  test('it should return true when [1, 2, 3] is given', () => {
    expect(nonDecreasing([1, 2, 3])).toBeTruthy();
  });
  test('it should return false when [3, 2, 1] is given', () => {
    expect(nonDecreasing([3, 2, 1])).toBeFalsy();
  });
  test('it should return false when [3, 4, 2, 3] is given', () => {
    expect(nonDecreasing([3, 4, 2, 3])).toBeFalsy();
  });
  test('it should return true when [2, 3, 3, 2, 4] is given', () => {
    expect(nonDecreasing([2, 3, 3, 2, 4])).toBeTruthy();
  });
  test('it should return true when [-1,4,2,3] is given', () => {
    expect(nonDecreasing([-1, 4, 2, 3])).toBeTruthy();
  });
  test('it should return true when [1, 2, 4, 5, 3] is given', () => {
    expect(nonDecreasing([1, 2, 4, 5, 3])).toBeTruthy();
  });
});
