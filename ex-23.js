//Find the most frequent item of an array

const arr = [1, 1, 1, 1, 1, 1, 1, 2, 2];

let arr_Length = arr.length;
let max_Number = Math.max(...arr);

let count_of_one = 0;
let count_of_two = 0;

for (let i = 0; i <= arr_Length; i++) {

  if (arr[i] == 1) {
    count_of_one = count_of_one + 1;
  }

  else if (arr[i] == 2) {
    count_of_two = count_of_two + 1;
  }
}

console.log(`count of one: ${count_of_one}`);
console.log(`count of two: ${count_of_two}`);

