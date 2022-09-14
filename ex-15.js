//Check Armstrong Number
//a number that is equal to the sum of cubes of its digits
//for example
//153 = 1*1*1 + 5*5*5 + 3*3*3

let sum = 0;
const number = 153;

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}