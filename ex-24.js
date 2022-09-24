// remove duplicate element in an array

var arr = [1,2,4,3,5,1,1,1,1,3,3,3];

function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));