'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let visited = [];
    let current = linkedlist.head;
    while (current) {
        if (visited.includes(current.value)) {
            return true
        } else {
            visited.push(current.value);
            current = current.next
        }
    }
    return false
};
//jdjkdjdjdjd

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop