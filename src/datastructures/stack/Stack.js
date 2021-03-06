class Stack {
  constructor(maxSize = 0) {
    this.maxSize = maxSize;
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  isEmpty() {
    return !this.stack.length;
  }

  push(item) {
    if (this.stack.length === this.maxSize) {
      throw new Error('Stack Overflow');
    }

    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack Underflow');
    }

    return this.stack.pop();
  }
}

export default Stack;
