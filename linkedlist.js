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
}

const myList = new LinkedList();
myList.add('0');
myList.add('1');
myList.add('2');
console.log(myList.getIndex(1));
console.log(JSON.stringify(myList));