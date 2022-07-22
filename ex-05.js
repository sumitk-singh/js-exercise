//fetch an the data from API

fetch("https://opentdb.com/api.php?amount=10&category=28&type=multiple")
  .then((response) => response.json())
  .then((response) => console.log(response.results[5].question))
  .catch((err) => console.log(err));
