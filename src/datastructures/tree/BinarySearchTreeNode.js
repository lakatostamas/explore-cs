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
}

export default BinarySearchTreeNode;
