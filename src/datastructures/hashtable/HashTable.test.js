import HashTable from './HashTable';

describe('HashTable', () => {
  test('it should be have 10 buckets by default', () => {
    const hashTable = new HashTable();

    expect(hashTable.buckets.length).toBe(10);
  });

  test('it should accept size as first parameter', () => {
    const hashTable = new HashTable(200);

    expect(hashTable.buckets.length).toBe(200);
  });

  test('it should generate proper hash', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).toBe(7);
    expect(hashTable.hash('amb')).toBe(4);
  });
});
