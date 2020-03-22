class LinkedList {
  // Be design, cannot hold undefined value.
  constructor() {
    this.list = {};
  }
  getLast(node) {
    console.log('getLast received node:', node);
    if (node.next === undefined) return node;
    return this.getLast(node.next);
  }
  add(newVal) {
    console.log('adding value:', newVal);
    const lastNode = this.getLast(this.list);
    console.log('lastNode returned:', lastNode);
    lastNode.value = newVal;
    lastNode.next = {};
  }
}

const myList = new LinkedList();
myList.add('scott was here');
myList.add('someone else was also here');
console.log(myList);