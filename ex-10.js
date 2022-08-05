// fetch API
// then fetch the title only

const url = "https://jsonplaceholder.typicode.com/todos";

async function fetchAPI() {
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.map((x) => {
        return console.log(x.title);
      })
    )
    .catch((err) => console.log(err));
}

fetchAPI();

// bacaise Fetch is based on async and await
