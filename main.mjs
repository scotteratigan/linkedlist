import { LinkedList } from './linkedlist.mjs'

const myList = new LinkedList();
myList.addLast(0);
myList.addLast(1);
myList.addLast(2);
myList.addLast(3);
const reduceFn = (accumulator, currentValue) => (accumulator += currentValue);
const reduced = myList.reduce(reduceFn);
console.log('reduced:', reduced);

// const myClone = myList.clone();
// console.log('myClone:', myClone);
// myList.forEach(elm => console.log(elm));
// console.log(JSON.stringify(myList));
// console.log(JSON.stringify(myList.clone()));