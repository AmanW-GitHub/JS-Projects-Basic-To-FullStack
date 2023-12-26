// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const nums = array1.concat(array2);
console.log(nums);

// Check if 1 is inside of nums
console.log(nums.includes(1));

// Add elements into nums
nums.push(9);
nums.unshift(0);
console.log(nums);

// Remove elements from nums
nums.pop();
nums.shift();
console.log(nums);

console.log(nums.sort());

const text = ['values', "values2"];
let newText = text.slice(0, 1);


const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]