import distinct from './distinct';

describe('distinct', () => {
  test('it should [1, 2, 3] when [1, 1, 2, 2, 3, 3] is given', () => {
    expect(distinct([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
  test('it should [1, 2, 3] when [1, 2, 3] is given', () => {
    expect(distinct([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('it should work on empty arrays', () => {
    expect(distinct([])).toEqual([]);
  });
});
