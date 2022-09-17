//Checking Prime Number 
//Prime Numbers upto N 

const number = 25;
let count = 0;

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        count = count + 1;
        break;
    }
}

if (count == 2) {
    console.log(`${number} is prime number`);
}
else {
    console.log(`${number} is not a prime number`);
}