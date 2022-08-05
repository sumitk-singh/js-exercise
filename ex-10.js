// fetch API
// then fetch the title only

const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url)
  .then((res) => res.Json())
  .then((data) =>
    data.map((x) => {
      return console.log(x.title);
    })
  );
