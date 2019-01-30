class HashTable {
  constructor(hashTableSize = 10) {
    this.hashTableSize = hashTableSize;
    this.buckets = Array(hashTableSize);
  }

  get(key) {
    const keyHash = this.hash(key);

    if (!this.buckets[keyHash]) {
      return null;
    }

    const result = this.buckets[keyHash].find(pairs => pairs[0] === key);

    if (!result) {
      return null;
    }

    return result[1];
  }

  set(key, value) {
    const keyHash = this.hash(key);

    if (!this.buckets[keyHash]) {
      this.buckets[keyHash] = [];
    }

    this.buckets[keyHash].push([key, value]);
  }

  hash(key) {
    const keyHash = Array.from(key).reduce((acc, keySymbol) => (
      acc + keySymbol.charCodeAt(0)
    ), 0);

    return keyHash % this.hashTableSize;
  }
}

export default HashTable;
