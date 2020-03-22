import { LinkedList } from './linkedlist.mjs'

testLength();
// todo: add actual unit tests

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

function testReduce() {
  const myList = new LinkedList();
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  const reduceFn = (accumulator, currentValue) => (accumulator += currentValue);
  const reduced = myList.reduce(reduceFn);
  console.log('reduced:', reduced);
}

function testClone() {
  const myList = new LinkedList();
  myList.addLast(0);
  myList.addLast(1);
  myList.addLast(2);
  myList.addLast(3);
  // const myClone = myList.clone();
  // console.log('myClone:', myClone);
  // myList.forEach(elm => console.log(elm));
  // console.log(JSON.stringify(myList));
  // console.log(JSON.stringify(myList.clone()));
}