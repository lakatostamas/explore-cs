class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const node = new Node({
      value,
      next: this.head,
      prev: null,
    });

    if (this.head) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }

    this.head = node;
  }

  addToTail(value) {
    const node = new Node({
      value,
      next: null,
      prev: this.tail,
    });

    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }
}

class Node {
  constructor({ value, prev, next }) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export default LinkedList;
