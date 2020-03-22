class LinkedList {
  // Be design, cannot hold undefined value.
  constructor() {
    this.list = {};
  }
  getLast(node) {
    if (node.next === undefined) return node;
    return this.getLast(node.next);
  }
  add(newVal) {
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
}

const myList = new LinkedList();
myList.add('0');
myList.add('1');
myList.add('2');
myList.addAtIndex(1, 'scott');
console.log(myList.getIndex(1));
console.log(JSON.stringify(myList));