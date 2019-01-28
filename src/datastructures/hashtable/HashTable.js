class HashTable {
  constructor() {
    this.list = {};
  }

  get(key) {
    const keyHash = hash(key);

    if (!this.list[keyHash]) {
      return null;
    }

    const result = this.list[keyHash].find(pairs => pairs[0] === key);

    if (!result) {
      return null;
    }

    return result[1];
  }

  set(key, value) {
    const keyHash = hash(key);

    if (!this.list[keyHash]) {
      this.list[keyHash] = [];
    }

    this.list[keyHash].push([key, value]);
  }
}

function hash(key) {
  return Array.from(key).reduce((acc, keySymbol) => (
    acc + keySymbol.charCodeAt(0)
  ), 0);
}

export default HashTable;
