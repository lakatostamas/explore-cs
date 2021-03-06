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

  setValue(value) {
    this.value = value;

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
      result = result.concat(this.left.traversePreOrder());
    }

    if (this.right) {
      result = result.concat(this.right.traversePreOrder());
    }

    return result;
  }

  traversePostOrder() {
    let result = [];

    if (this.left) {
      result = result.concat(this.left.traversePostOrder());
    }

    if (this.right) {
      result = result.concat(this.right.traversePostOrder());
    }

    result.push(this.value);

    return result;
  }

  removeChild(node) {
    if (this.left && this.left.value === node.value) {
      this.left = null;
      return true;
    }

    if (this.right && this.right.value === node.value) {
      this.right = null;
      return true;
    }

    return false;
  }
}

export default BinaryTreeNode;
