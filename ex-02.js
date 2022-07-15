//count the number greater the 5 in the given array

const arr = [2, 4, 2, 45, 3, 42, 345, 432];

const countEvenNumber = () => {
  for (let i = 0; i < arr.length; i++) {
    const totalEvenNumber = arr.filter((x) => x > 5);
    console.log(totalEvenNumber.length);
  }
};

countEvenNumber();
