class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default LinkedList;
