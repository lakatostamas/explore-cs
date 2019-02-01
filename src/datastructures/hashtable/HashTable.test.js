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

  test('it should store and return the correct value', () => {
    const hashTable = new HashTable();
    hashTable.set('foo', 'bar');

    expect(hashTable.get('foo')).toBe('bar');
  });

  test('it should store and return the correct value', () => {
    const hashTable = new HashTable();

    expect(hashTable.get('foo')).toBe(null);
  });

  test('it should overwrite the value if the key is exists', () => {
    const hashTable = new HashTable();

    hashTable.set('foo', 'bar');
    hashTable.set('foo', 'baz');

    expect(hashTable.get('foo')).toBe('baz');
  });

  test('it should remove the value from hashmap', () => {
    const hashTable = new HashTable();

    hashTable.set('foo', 'bar');

    expect(hashTable.remove('foo')).toBeTruthy();
    expect(hashTable.get('foo')).toBe(null);
  });

  test('it should return false if the value not exists', () => {
    const hashTable = new HashTable();

    hashTable.set('foo', 'bar');

    expect(hashTable.remove('bar')).toBeFalsy();
    expect(hashTable.get('foo')).toBe('bar');
  });
});
