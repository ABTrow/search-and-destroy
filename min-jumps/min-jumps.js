'use strict';

// Complete this algo
const minJumps = arr => {
    if (arr[0] >= arr.length - 1) {
        return 1
    } 
    let shortest = Infinity
    for (let i = 1; i <= arr[0]; i++) {
       let route = 1 + minJumps(arr.slice(i))

       if (route < shortest) {
            shortest = route
       }
    }
    return shortest
};

module.exports = minJumps