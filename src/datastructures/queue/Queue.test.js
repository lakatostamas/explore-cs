import Queue from './Queue';

describe('Queue', () => {
  test('it should be empty by default', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  test('the capacity should be zero by default', () => {
    const queue = new Queue();

    expect(queue.capacity).toBe(0);
  });

  test('it should add item the queue', () => {
    const queue = new Queue(5);

    queue.push(10);

    expect(queue.length).toBe(1);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('it should throw an error if the queue is full', () => {
    const queue = new Queue(0);

    expect(() => {
      queue.push(10);
    }).toThrow();
  });

  test('it should return the first element of the queue', () => {
    const queue = new Queue(10);

    queue.push(10);
    queue.push(11);

    expect(queue.length).toBe(2);

    expect(queue.remove()).toBe(10);
    expect(queue.length).toBe(1);
  });

  test('it should throw an error if the queue is full', () => {
    const queue = new Queue();

    expect(() => {
      queue.remove();
    }).toThrow();
  });

  test('it should return the first element of the queue', () => {
    const queue = new Queue(5);

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.front).toBe(1);
  });

  test('it should return the last element of the queue', () => {
    const queue = new Queue(5);

    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.rear).toBe(3);
  });

  test('it should return true if the queue is full', () => {
    const queue = new Queue(2);

    queue.push(1);
    queue.push(2);

    expect(queue.isFull()).toBeTruthy();
  });
});
