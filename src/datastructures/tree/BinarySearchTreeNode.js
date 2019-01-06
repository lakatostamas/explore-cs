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

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('Node not found');
    }

    if (!nodeToRemove.left && !nodeToRemove.right) {
      const { parent } = nodeToRemove;

      if (parent) {
        parent.removeChild(nodeToRemove);
        nodeToRemove.parent = null;
        return true;
      }
    }

    if (nodeToRemove.left && nodeToRemove.right) {
      const minNodeInTheRightTree = nodeToRemove.right.findMin();
      this.remove(minNodeInTheRightTree.value);

      nodeToRemove.setValue(minNodeInTheRightTree.value);
      nodeToRemove.parent = null;
      return true;
    }

    // nodeToRemove has only one child
    const childNodeOfNodeToRemove = nodeToRemove.left || nodeToRemove.right;
    const { parent } = nodeToRemove;

    if (parent) {
      if (parent.left && parent.left.value === nodeToRemove.value) {
        parent.left = childNodeOfNodeToRemove;
      } else {
        parent.right = childNodeOfNodeToRemove;
      }

      parent.removeChild(nodeToRemove);
      nodeToRemove.parent = null;
      return true;
    }

    // if nodeToRemove is the root
    nodeToRemove.setValue(childNodeOfNodeToRemove.value);
    nodeToRemove.setRight(childNodeOfNodeToRemove.right);
    nodeToRemove.setLeft(childNodeOfNodeToRemove.left);

    nodeToRemove.parent = null;

    return true;
  }
}

export default BinarySearchTreeNode;
