/* eslint-disable no-console */
const LinkedList = require('./linkedlist');

const myList = new LinkedList();
try {
  myList.addAtIndex(5, 1);
} catch (err) {
  console.error(err);
} finally {
  console.log(myList.getArray());
}
