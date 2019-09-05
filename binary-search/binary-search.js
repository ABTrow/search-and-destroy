'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	if (array.length === 0) {
		return false;
	} else if (array.length === 1 && array[0] !== target) {
		return false;
	}

	array.sort((a,b) => a - b);

	let mid = Math.floor(array.length / 2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);

	if (array[mid] === target) {
		return true;
	} else if (target < array[mid]) {
		return binarySearch(left, target);
	} else if (target > array[mid]) {
		return binarySearch(right, target);
	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const extraBinarySearch = (array, target) => {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (array[mid] === target) {
			return true;
		} else if (target < array[mid]) {
			end = mid - 1;
		} else if (target > array[mid]) {
			start = mid + 1;
		}
	}

	return false;

};

module.exports = {binarySearch, extraBinarySearch}
