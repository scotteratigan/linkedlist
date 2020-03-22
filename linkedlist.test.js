const LinkedList = require('./linkedlist.js');

test('can add an element', () => {
  const myList = new LinkedList();
  myList.addFirst(1);
  expect(myList.getValueAtIndex(0)).toBe(1);
});
