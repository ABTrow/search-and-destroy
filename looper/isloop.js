'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let visited = [];
    let current = linkedlist.head;
    while (current) {
        if (visited.includes(current.value)) {
            return true;
        } else {
            visited.push(current.value);
            current = current.next
        }
    }
    return false
};
//jdjkdjdjdjd

const otherLoop = (linkedlist) => {
  let slowpointer = linkedlist.head;
  let fastpointer = linkedlist.head;
  while (fastpointer.next && fastpointer.next.next) {
    fastpointer = fastpointer.next.next;
    slowpointer = slowpointer.next;
    console.log('fast: ', fastpointer.value, ' slow: ', slowpointer.value);
    if (fastpointer === slowpointer) {
      return true;
    }
  }
  return false;
};

/*
EXTRA CREDIT:




Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!




*/

const findLoop = (linkedlist) => {
  let visited = [];
  let current = linkedlist.head;
  while (current) {
      if (visited.includes(current.value)) {
          return current.value;
      } else {
          visited.push(current.value);
          current = current.next;
      }
  }
  return false;
};





module.exports = {isLoop, findLoop, otherLoop};
