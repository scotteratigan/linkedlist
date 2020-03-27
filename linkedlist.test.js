const LinkedList = require('./linkedlist.js');


test('can add an element', () => {
  const myList = new LinkedList();
  expect(myList.getValueAtIndex(0)).toBe(undefined);
  myList.addFirst(1);
  expect(myList.getValueAtIndex(0)).toBe(1);
});

test('can remove an element', () => {
  const myList = new LinkedList();
  myList.addFirst(1);
  expect(myList.getValueAtIndex(0)).toBe(1);
  myList.removeFirst();
  expect(myList.getValueAtIndex(0)).toBe(undefined);
});

test('it can track length', () => {
  const myList = new LinkedList();
  expect(myList).toHaveLength(0);
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  myList.addLast(4);
  myList.addLast(5);
  expect(myList).toHaveLength(5);
  myList.removeFirst();
  expect(myList).toHaveLength(4);
  myList.removeAtIndex(1);
  expect(myList).toHaveLength(3);
  myList.addLast(6);
  expect(myList).toHaveLength(4);
});

test('it can return an arbitrary index', () => {
  const myList = new LinkedList();
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  expect(myList.getValueAtIndex(1)).toBe(2);
});

test('addAtIndex can insert into middle', () => {
  const myList = new LinkedList();
  myList.addLast(1);
  myList.addLast(3);
  myList.addLast(4);
  myList.addAtIndex(1, 2);
  expect(myList.getValueAtIndex(0)).toBe(1);
  expect(myList.getValueAtIndex(1)).toBe(2);
  expect(myList.getValueAtIndex(2)).toBe(3);
});

test('addAtIndex can insert at beginning', () => {
  const myList = new LinkedList();
  myList.addLast(2);
  myList.addLast(3);
  myList.addAtIndex(0, 1);
  expect(myList.getValueAtIndex(0)).toBe(1);
  expect(myList.getValueAtIndex(1)).toBe(2);
});

test('addAtIndex can insert at end', () => {
  const myList = new LinkedList();
  myList.addLast(1);
  myList.addLast(2);
  myList.addAtIndex(2, 3);
  expect(myList.getValueAtIndex(0)).toBe(1);
  expect(myList.getValueAtIndex(1)).toBe(2);
  expect(myList.getValueAtIndex(1)).toBe(3);
});
