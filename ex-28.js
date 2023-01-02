function countDuplicates(arr) {
  const count = {};
  arr.forEach(function(x) { count[x] = (count[x] || 0)+1; });
  return count;
}


const arr = [1, 2, 2, 3, 3, 3];
const counts = countDuplicates(arr);
// counts is now { 1: 1, 2: 2, 3: 3 }
