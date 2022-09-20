// operation in between number and string

const x1 = 10;          //a number
const x2 = "5";         //a string

const cal = (a, b) => {
    const sum = x1 + x2;
    const sub = x1 - x2;
    const prod = x1 * x2;
    const div = x1 / x2;
    console.log(sum);
    console.log(sub);
    console.log(prod);
    console.log(div);
}

cal();