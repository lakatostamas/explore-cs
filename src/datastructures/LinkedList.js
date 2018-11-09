class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    if (!this.head) {
      this.head = newNode;
    }

    this.tail = newNode;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default LinkedList;
