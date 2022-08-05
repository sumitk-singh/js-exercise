// find out the max and min from the given array

const arr = [0, 3, 5, 2, 0, 6];

//method 1
// const result_1 = Math.max.apply(null, arr);
// console.log(result_1);

//method 2
// using spread operator

const result_2 = Math.max(...arr);
console.log(result_2);
