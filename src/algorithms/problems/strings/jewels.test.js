import jewels from './jewels';

describe('unique', () => {
  test('it should return 3 when aA and aAAbbbb are given', () => {
    expect(jewels('aA', 'aAAbbbb')).toBe(3);
  });
  test('it should return zero when z and ZZ are given', () => {
    expect(jewels('z', 'ZZ')).toBe(0);
  });
  test('it should return 1 when ab and aB are given', () => {
    expect(jewels('ab', 'aB')).toBe(1);
  });
});
