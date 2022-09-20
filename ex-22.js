// operation in between number and string

const x1 = 10;          //a number
const x2 = "5";         //a string

const cal = (a, b) => {
    const sum = a + b;
    const sub = a - b;
    const prod = a * b;
    const div = a / b;
    console.log(sum);
    console.log(sub);
    console.log(prod);
    console.log(div);
}

cal(x1, x2);