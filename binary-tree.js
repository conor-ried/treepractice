/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth(node = this.root) {
    if (!node) {
      return 0;
    }
    if (!node.left && !node.right) {
      return 1;
    }
    if (!node.left) {
      return this.minDepth(node.right) + 1;
    }
    if (!node.right) {
      return this.minDepth(node.left) + 1;
    }
    return Math.min(this.minDepth(node.left), this.minDepth(node.right)) + 1;
  }

  maxDepth(node = this.root) {
    if (!node) {
      return 0;
    }
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right)) + 1;
  }

  maxSum(node = this.root) {
    if (!node) {
      return 0;
    }
    return node.val + Math.max(this.maxSum(node.left), this.maxSum(node.right));
  }

  nextLarger(lowerBound, node = this.root) {
    if (!node) {
      return null;
    }
    if (node.val <= lowerBound) {
      return this.nextLarger(lowerBound, node.right);
    }
    const left = this.nextLarger(lowerBound, node.left);
    return left !== null && left > lowerBound ? left : node.val;
  }
}

const tree = new BinaryTree();
const node1 = new BinaryTreeNode(5);
const node2 = new BinaryTreeNode(10);
const node3 = new BinaryTreeNode(3);
const node4 = new BinaryTreeNode(7);
const node5 = new BinaryTreeNode(15);

tree.root = node1;
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(tree.minDepth()); 
console.log(tree.maxDepth()); 
console.log(tree.maxSum());  
console.log(tree.nextLarger(6)); 

module.exports = { BinaryTree, BinaryTreeNode };
