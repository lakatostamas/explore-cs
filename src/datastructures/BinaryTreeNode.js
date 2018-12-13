class BinaryTreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  setLeft(node) {
    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;
  }

  traverseInOrder() {
    let result = [];

    if (this.left) {
      result = result.concat(this.left.traverseInOrder());
    }

    result.push(this.value);

    if (this.right) {
      result = result.concat(this.right.traverseInOrder());
    }

    return result;
  }

  traversePreOrder() {
    let result = [];

    result.push(this.value);

    if (this.left) {
      result = result.concat(this.left.traverseInOrder());
    }

    if (this.right) {
      result = result.concat(this.right.traverseInOrder());
    }

    return result;
  }
}

export default BinaryTreeNode;
