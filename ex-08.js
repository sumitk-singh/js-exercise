//splice : The splice() method adds and/or removes array elements. The splice() method overwrites the original array.
//syntax
//array.splice(index, howmany, item1, ....., itemX)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(fruits);
