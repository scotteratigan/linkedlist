/* eslint-disable no-console */
const LinkedList = require('./src/linkedlist.js');

const myList = new LinkedList();
myList.addLast(1);
myList.addLast(2);
myList.addLast(3);
console.log(myList.getArray());
