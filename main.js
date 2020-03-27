/* eslint-disable no-console */
const LinkedList = require('./linkedlist.js');

// eslint-disable-next-line no-unused-vars
function testLength() {
  const myList = new LinkedList();
  myList.addLast(0);
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  console.log('length:', myList.length);
  myList.removeFirst();
  console.log('length:', myList.length);
}

// eslint-disable-next-line no-unused-vars
function testReduce() {
  const myList = new LinkedList();
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  const reduceFn = (accumulator, currentValue) => (accumulator + currentValue);
  const reduced = myList.reduce(reduceFn);
  console.log('reduced:', reduced);
}

// eslint-disable-next-line no-unused-vars
function testClone() {
  const myList = new LinkedList();
  myList.addLast(0);
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  const myClone = myList.clone();
  console.log('myClone:', myClone);
  myList.forEach((elm) => console.log(elm));
  console.log(JSON.stringify(myList));
  console.log(JSON.stringify(myList.clone()));
}

const myList = new LinkedList();
myList.addLast(1);
myList.addLast(2);
myList.addAtIndex(5, 3);
