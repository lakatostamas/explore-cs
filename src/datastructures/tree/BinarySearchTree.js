import BinarySearchTreeNode from './BinarySearchTreeNode';

class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null);
  }

  get height() {
    return this.root.height;
  }

  insert(value) {
    return this.root.insert(value);
  }

  contains(value) {
    return this.root.contains(value);
  }

  remove(value) {
    return this.root.remove(value);
  }
}

export default BinarySearchTree;
