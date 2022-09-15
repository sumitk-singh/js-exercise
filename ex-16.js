// List all the even number in between 1 to 100

let count = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
        count += 1;
    }
}
console.log(`Total number of even number is ${count}`);
