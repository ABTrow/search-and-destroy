'use strict';

// Complete this algo
const minJumps = arr => {
    if (arr[0] >= arr.length - 1) {
        return 1;
    }
    let furthest = 0;
    let bestNode = 0;

    for (let i = 1; i <= arr[0]; i++) {
       if (i + arr[i] > furthest) {
           furthest = arr[i];
           bestNode = i;
       }
    }
    return 1 + minJumps(arr.slice(bestNode));
};

module.exports = minJumps;
