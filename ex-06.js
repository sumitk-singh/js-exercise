// program to merge property of two objects

// object 1
const person = {
  name: "Jack",
  age: 26
};

// object 2
const student = {
  gender: "male"
};

// merge two objects

const x = { ...person, ...student };
console.log(x);
