class HashTable {
  constructor() {
    this.list = {};
  }

  get(x) {
    const key = hash(x);

    if (!this.list[key]) {
      return null;
    }

    const result = this.list[key].find(pairs => pairs[0] === x);

    if (!result) {
      return null;
    }

    return result[1];
  }

  set(x, y) {
    const key = hash(x);

    if (!this.list[key]) {
      this.list[key] = [];
    }

    this.list[key].push([x, y]);
  }
}

function hash(x) {
  // TODO: implement
}

export default HashTable;
