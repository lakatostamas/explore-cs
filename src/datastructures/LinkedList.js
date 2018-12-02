class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  delete(value) {
    if (this.head && this.head.value === value) {
      const deletedNode = this.head;
      this.head = this.head.next;
      return deletedNode;
    }

    let currentNode = this.head;

    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return null;
    }

    const deletedNode = currentNode.next;
    currentNode.next = deletedNode.next;

    return deletedNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default LinkedList;
