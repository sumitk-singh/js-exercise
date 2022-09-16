//LCM of 2 Numbers

const num1 = 10;
const num2 = 20;

const min = (num1 > num2) ? num1 : num2;

while (min) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
}