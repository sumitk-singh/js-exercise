// find out the max from the given array

const arr = [0, 3, 5, 2, 0, 16];

//method 1
// using apply
const result_1 = Math.max.apply(null, arr);
console.log(result_1);

//method 2
// using spread operator

const result_2 = Math.avg(...arr);
console.log(result_2);
