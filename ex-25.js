//sort in accending and decending order
const product = ["speaker", "shoes", "bag"];
const price = [23, 8, 1, 2, 3, 4, 5];

// in accending order
const acc_order_product = product.sort();
console.log(acc_order_product);

const acc_order_price = price.sort(function (a, b) {
    return (a - b);
})
console.log(acc_order_price);

//in decending order
const dec_order_product = product.sort().reverse();
console.log(dec_order_product);

const dec_order_price = price.sort(function (a, b) {
    return (b - a);
})
console.log(dec_order_price);