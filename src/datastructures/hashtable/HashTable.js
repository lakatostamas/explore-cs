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

    const currentBucket = this.buckets[keyHash];

    const indexOfCurrentElement = currentBucket
      .findIndex(([currKey]) => currKey === key);


    if (indexOfCurrentElement === -1) {
      currentBucket.push([key, value]);
      return true;
    }

    this.buckets[keyHash] = [
      ...currentBucket.slice(0, indexOfCurrentElement),
      [key, value],
      ...currentBucket.slice(indexOfCurrentElement + 1),
    ];
    return true;
  }

  remove(key) {
    const keyHash = this.hash(key);

    if (!this.buckets[keyHash]) {
      return false;
    }

    const currentBucket = this.buckets[keyHash];

    const indexOfCurrentElement = currentBucket
      .findIndex(([currKey]) => currKey === key);


    if (indexOfCurrentElement === -1) {
      return false;
    }

    this.buckets[keyHash] = [
      ...currentBucket.slice(0, indexOfCurrentElement),
      ...currentBucket.slice(indexOfCurrentElement + 1),
    ];

    return true;
  }

  hash(key) {
    const keyHash = Array.from(key).reduce((acc, keySymbol) => (
      acc + keySymbol.charCodeAt(0)
    ), 0);

    return keyHash % this.hashTableSize;
  }
}

export default HashTable;
