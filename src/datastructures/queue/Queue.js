class Queue {
  constructor(capacity = 0) {
    this.capacity = capacity;
    this.queue = [];
  }

  get front() {
    return this.queue[0];
  }

  get rear() {
    return this.queue[this.queue.length - 1];
  }

  isFull() {
    return this.queue.length === this.capacity;
  }

  isEmpty() {
    return !this.queue.length;
  }

  add(item) {
    if (this.isFull()) {
      throw new Error('the queue is full');
    }

    this.queue.push(item);
  }

  remove() {
    if (this.empty()) {
      throw new Error('the queue is empty');
    }

    this.queue.shift();
  }
}

export default Queue;
