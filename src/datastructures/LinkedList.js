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

  findNode(value) {
    let selectedNode = this.head;

    while (selectedNode && selectedNode.value !== value) {
      selectedNode = selectedNode.next;
    }

    return selectedNode;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    const deletedNode = this.findNode(value);

    if (!deletedNode) {
      return null;
    }

    if (deletedNode.prev) {
      deletedNode.prev.next = deletedNode.next;
    } else {
      this.head = deletedNode.next;
    }

    if (deletedNode.next) {
      deletedNode.next.prev = deletedNode.prev;
    } else {
      this.tail = deletedNode.prev;
    }

    return deletedNode;
  }

  reverse() {
    let current = this.head;
    let temp;

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    this.tail = this.head;
    this.head = temp.prev;
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
