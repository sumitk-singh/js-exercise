//to generate Fibonacci series

function fibonacci(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      result.push(i);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
}

console.log(fibonacci(10));
