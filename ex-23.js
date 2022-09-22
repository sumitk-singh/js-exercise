//Find the most frequent item of an array

const arr = [1,1,1,1,1,1,1, 2, 2, 5, 4, 4, 4, 4, 6];

let arr_Length = arr.length;
let max_Number = Math.max(...arr);

let count_of_one = 0;

for (let i = 0; i <= arr_Length; i++) {

  //count number of one in array

  if (arr[i] == 1) {
    count_of_one = count_of_one + 1;
  }

}

console.log(count_of_one);




