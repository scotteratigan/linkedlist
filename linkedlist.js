class LinkedList {
  // Be design, cannot hold undefined value.
  constructor() {
    this.list = {};
  }
  getLast(node) {
    if (node.next === undefined) return node;
    return this.getLast(node.next);
  }
  addLast(newVal) {
    const lastNode = this.getLast(this.list);
    lastNode.value = newVal;
    lastNode.next = {};
  }
  addFirst(newVal) {
    const originalBaseNode = this.list;
    this.list = {
      value: newVal,
      next: originalBaseNode
    };
  }
  getIndex(index, currIndex = 0, node = this.list) {
    if (index === currIndex) {
      return node;
    }
    return this.getIndex(index, currIndex + 1, node.next);
  }
  addAtIndex(index, newVal) {
    const node = this.getIndex(index);
    const currNodeValue = node.value;
    const currNodeNext = node.next;
    node.value = newVal;
    node.next = {
      value: currNodeValue,
      next: currNodeNext
    };
  }
  removeAtIndex(index) {
    const node = this.getIndex(index);
    node.value = undefined;
    if (node.next) {
      node.value = node.next.value;
      node.next = node.next.next;
    }
  }
  clear() {
    this.list = {};
  }
  map(fn, node = this.list, returnArr = []) {
    if (node.value !== undefined) {
      returnArr.push(fn(node.value));
      this.map(fn, node.next, returnArr);
      return returnArr;
    } else {
      return returnArr;
    }
  }
}

const myList = new LinkedList();
myList.addLast(0);
myList.addLast(1);
myList.addLast(2);
myList.addLast(3);
console.log(myList.map(num => num * 2));