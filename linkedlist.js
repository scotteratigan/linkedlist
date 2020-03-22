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
}

const myList = new LinkedList();
myList.addLast('1');
myList.addLast('2');
myList.addLast('4');
myList.addFirst('0');
myList.addAtIndex(3, '3');
console.log(JSON.stringify(myList));
myList.removeAtIndex(0);
console.log(JSON.stringify(myList));