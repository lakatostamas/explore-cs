import BinaryTreeNode from './BinaryTreeNode';

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value) {
    super(value);
  }

  insert(value) {
    if (this.value === null) {
      this.value = value;
      return this;
    }

    if (this.value > value) {
      if (this.left) {
        return this.left.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value);
      this.setLeft(newNode);

      return newNode;
    }

    if (this.value < value) {
      if (this.right) {
        return this.right.insert(value);
      }

      const newNode = new BinarySearchTreeNode(value);
      this.setRight(newNode);

      return newNode;
    }

    return this;
  }

  find(value) {
    if (this.value === value) {
      return this;
    }

    if (value < this.value && this.left) {
      return this.left.find(value);
    }

    if (value > this.value && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  contains(value) {
    return !!this.find(value);
  }

  findMin() {
    if (!this.left) {
      return this;
    }

    return this.left.findMin();
  }
}

export default BinarySearchTreeNode;
