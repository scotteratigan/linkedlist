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
    if (newVal === undefined) return;
    const lastNode = this.getLast(this.list);
    lastNode.value = newVal;
    lastNode.next = {};
  }
  addFirst(newVal) {
    if (newVal === undefined) return;
    const baseNode = this.list;
    this.list = {
      value: newVal,
      next: baseNode
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
  contains(value, node = this.list) {
    if (node.value === value) return true;
    if (node.next) return this.contains(value, node.next);
    return false;
  }
  map(fn, node = this.list, array = []) {
    if (node.value !== undefined) {
      array.push(fn(node.value));
      this.map(fn, node.next, array);
      return array;
    } else {
      return array;
    }
  }
  filter(fn, node = this.list, array = []) {
    if (node.value !== undefined) {
      if (fn(node.value)) {
        array.push(node.value);
      }
      if (node.next !== undefined) {
        return this.filter(fn, node.next, array);
      }
    }
    return array;
  }
  forEach(fn, node = this.list) {
    if (node.value !== undefined) {
      fn(node.value);
      this.forEach(fn, node.next)
    }
  }
  getArray(node = this.list, array = []) {
    if (node.value !== undefined) {
      array.push(node.value);
      return this.getArray(node.next, array);
    }
    return array;
  }
  getSet(node = this.list, set = new Set()) {
    if (node.value !== undefined) {
      set.add(node.value);
      return this.getSet(node.next, set);
    }
    return set;
  }
  clone() {
    const elements = this.getArray();
    const newList = new LinkedList;
    elements.forEach(elm => newList.addLast(elm));
    return newList;
  }
}

const myList = new LinkedList();
myList.addLast(0);
myList.addLast(1);
myList.addLast(2);
myList.addLast(3);
const myClone = myList.clone();
console.log('myClone:', myClone);
// myList.forEach(elm => console.log(elm));
// console.log(JSON.stringify(myList));
// console.log(JSON.stringify(myList.clone()));