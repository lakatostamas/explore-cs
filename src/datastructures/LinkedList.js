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

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    if (!deletedNode) {
      let currentNode = this.head;

      if (currentNode) {
        while (currentNode.next) {
          currentNode = currentNode.next;

          if (currentNode.value === value) {
            deletedNode = currentNode;
            break;
          }
        }
      }
    }

    if (!deletedNode) {
      return null;
    }

    if (deletedNode.prev) {
      deletedNode.prev.next = deletedNode.next;
    }

    if (deletedNode.next) {
      deletedNode.next.prev = deletedNode.prev;
    } else {
      this.tail = deletedNode.prev;
    }

    return deletedNode;
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
