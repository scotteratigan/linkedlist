module.exports = (function () {

  interface LLNode {
    next?: LLNode;
    value?: any;
  }
  
  /* eslint-disable no-param-reassign */
  class LinkedList {
    list: LLNode;
    length: number;
    // Be design, cannot hold undefined value.
    // todo: revisit this to check against node.next instead of node.next.value
    // todo: create linked list from iterable
    constructor() {
      this.list = {};
      this.length = 0;
    }
  
    getLastNode(node: LLNode): LLNode {
      if (node.next === undefined) return node;
      return this.getLastNode(node.next);
    }
  
    addLast(newVal: any): number {
      if (newVal === undefined) return;
      const lastNode = this.getLastNode(this.list);
      lastNode.value = newVal;
      lastNode.next = {};
      this.length += 1;
      return this.length;
    }
  
    addFirst(newVal: any): number {
      if (newVal === undefined) return;
      const baseNode = this.list;
      this.list = {
        value: newVal,
        next: baseNode,
      };
      this.length += 1;
      return this.length;
    }
  
    getIndex(index: number, currIndex: number = 0, node: LLNode = this.list): LLNode {
      if (index === currIndex) {
        return node;
      }
      if (node.next) {
        return this.getIndex(index, currIndex + 1, node.next);
      }
      throw new Error("Index doesn't exist!");
    }
  
    getValueAtIndex(index: number): any {
      return this.getIndex(index).value;
    }
  
    addAtIndex(index: number, newVal: any): number {
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
      this.length += 1;
      return this.length;
    }
  
    removeAtIndex(index: number): any {
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
  
    removeFirst(): any {
      return this.removeAtIndex(0);
    }
  
    clear(): void {
      this.list = {};
      this.length = 0;
    }
  
    contains(value: any, node: LLNode = this.list): boolean {
      if (node.value === value) return true;
      if (node.next) return this.contains(value, node.next);
      return false;
    }
  
    map(fn: Function, node: LLNode = this.list, array: Array<any> = []): Array<any> {
      if (node.value === undefined) return array;
      array.push(fn(node.value));
      this.map(fn, node.next, array);
      return array;
    }
  
    filter(fn: Function, node: LLNode = this.list, array: Array<any> = []): Array<any> {
      if (node.value === undefined) return array;
      if (fn(node.value)) {
        array.push(node.value);
      }
      if (node.next !== undefined) {
        return this.filter(fn, node.next, array);
      }
      return array;
    }
  
    forEach(fn: Function, node: LLNode = this.list): void {
      if (node.value !== undefined) {
        fn(node.value);
        this.forEach(fn, node.next);
      }
    }
  
    getArray(node: LLNode = this.list, array: Array<any> = []): Array<any> {
      if (node.value !== undefined) {
        array.push(node.value);
        return this.getArray(node.next, array);
      }
      return array;
    }
  
    reduce(reduceFn: Function, accumulator: any, node: LLNode = this.list): any {
      const currentValue = node.value;
      if (accumulator === undefined) {
        accumulator = currentValue;
      } else {
        accumulator = reduceFn(accumulator, currentValue);
      }
      if (node.next.value !== undefined) return this.reduce(reduceFn, accumulator, node.next);
      return accumulator;
    }
  
    getSet(node: LLNode = this.list, set: Set<any> = new Set()): Set<any> {
      if (node.value !== undefined) {
        set.add(node.value);
        return this.getSet(node.next, set);
      }
      return set;
    }
  
    clone(): LinkedList {
      const elements = this.getArray();
      const newList = new LinkedList();
      elements.forEach((elm) => newList.addLast(elm));
      return newList;
    }
  }

  return LinkedList;
})();
