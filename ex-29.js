const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

function getRandomFruit() {
  // Generate a random index between 0 and the last index of the fruits array
  const randomIndex = Math.floor(Math.random() * fruits.length);
  
  // Return the fruit name at the randomly generated index
  return fruits[randomIndex];
}

console.log(getRandomFruit()); // Example output: "Banana"
