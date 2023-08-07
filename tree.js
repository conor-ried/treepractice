class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

     addChild(childNode) {
    this.children.push(childNode);
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

   sumValues(node = this.root) {
    if (!node) {
      return 0;
    }
    let sum = node.val;
    for (const child of node.children) {
      sum += this.sumValues(child);
    }
    return sum;
  }

  countEvens(node = this.root) {
    if (!node) {
      return 0;
    }
    let count = node.val % 2 === 0 ? 1 : 0;
    for (const child of node.children) {
      count += this.countEvens(child);
    }
    return count;
  }

  numGreater(lowerBound, node = this.root) {
    if (!node) {
      return 0;
    }
    let count = node.val > lowerBound ? 1 : 0;
    for (const child of node.children) {
      count += this.numGreater(lowerBound, child);
    }
    return count;
  }
  
}

const train = new Tree();
const childTrain1 = new TreeNode(1);
const childTrain2 = new TreeNode(2);
const childTrain3 = new TreeNode(4);
const childTrain4 = new TreeNode(5);
const childTrain5 = new TreeNode(6);

train.root =childTrain1;
childTrain1.addChild(childTrain2);
childTrain2.addChild(childTrain3);
childTrain3.addChild(childTrain4, childTrain5);

module.exports = { Tree, TreeNode };
