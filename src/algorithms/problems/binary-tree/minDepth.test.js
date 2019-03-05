import minDepth from './minDepth';

describe('minDepth', () => {
  test('it should return 2 when [3,9,20,null,null,15,7] is given', () => {
    expect(minDepth([3, 9, 20, null, null, 15, 7])).toBe(2);
  });
  test('it should return 0 when [] is given', () => {
    expect(minDepth([])).toBe(0);
  });
  test('it should return 1 when [1, null] is given', () => {
    expect(minDepth([1, null])).toBe(1);
  });
  test('it should return 0 when null is given', () => {
    expect(minDepth(null)).toBe(0);
  });
});
