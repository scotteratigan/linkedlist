/* eslint-disable no-param-reassign */
class LinkedList {
  // Be design, cannot hold undefined value.
  // todo: revisit this to check against node.next instead of node.next.value
  // todo: create linked list from iterable
  constructor() {
    this.list = {};
    this.length = 0;
  }

  getLastNode(node) {
    if (node.next === undefined) return node;
    return this.getLastNode(node.next);
  }

  addLast(newVal) {
    if (newVal === undefined) return;
    const lastNode = this.getLastNode(this.list);
    lastNode.value = newVal;
    lastNode.next = {};
    this.length += 1;
  }

  addFirst(newVal) {
    if (newVal === undefined) return;
    const baseNode = this.list;
    this.list = {
      value: newVal,
      next: baseNode,
    };
    this.length += 1;
  }

  getIndex(index, currIndex = 0, node = this.list) {
    if (index === currIndex) {
      return node;
    }
    return this.getIndex(index, currIndex + 1, node.next);
  }

  getValueAtIndex(index) {
    return this.getIndex(index).value;
  }

  addAtIndex(index, newVal) {
    const node = this.getIndex(index);
    if (node === undefined) {
      throw new Error('Index out of bounds');
    }
    const currNodeValue = node.value;
    const currNodeNext = node.next;
    node.value = newVal;
    node.next = {
      value: currNodeValue,
      next: currNodeNext,
    };
  }

  removeAtIndex(index) {
    let node = this.getIndex(index);
    const returnValue = node.value;
    // node.value = undefined;
    if (node.next) {
      node.value = node.next.value;
      node.next = node.next.next;
    } else {
      node = {};
    }
    this.length -= 1;
    return returnValue;
  }

  removeFirst() {
    return this.removeAtIndex(0);
  }

  clear() {
    this.list = {};
    this.length = 0;
  }

  contains(value, node = this.list) {
    if (node.value === value) return true;
    if (node.next) return this.contains(value, node.next);
    return false;
  }

  map(fn, node = this.list, array = []) {
    if (node.value === undefined) return array;
    array.push(fn(node.value));
    this.map(fn, node.next, array);
    return array;
  }

  filter(fn, node = this.list, array = []) {
    if (node.value === undefined) return array;
    if (fn(node.value)) {
      array.push(node.value);
    }
    if (node.next !== undefined) {
      return this.filter(fn, node.next, array);
    }
    return array;
  }

  forEach(fn, node = this.list) {
    if (node.value !== undefined) {
      fn(node.value);
      this.forEach(fn, node.next);
    }
  }

  getArray(node = this.list, array = []) {
    if (node.value !== undefined) {
      array.push(node.value);
      return this.getArray(node.next, array);
    }
    return array;
  }

  reduce(reduceFn, accumulator, node = this.list) {
    const currentValue = node.value;
    if (accumulator === undefined) {
      accumulator = currentValue;
    } else {
      accumulator = reduceFn(accumulator, currentValue);
    }
    if (node.next.value !== undefined) return this.reduce(reduceFn, accumulator, node.next);
    return accumulator;
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
    const newList = new LinkedList();
    elements.forEach((elm) => newList.addLast(elm));
    return newList;
  }
}

module.exports = LinkedList;
