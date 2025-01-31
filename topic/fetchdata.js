const xhrFetchFunction = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1/posts", true);
  xhr.responseType = "json";
  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    } else {
      console.log("someThing went Wrong");
    }
  };
  xhr.onerror = () => {
    console.error("Error: " + xhr.status);
  };
  xhr.send();
};
// xhrFetchFunction();

const fetchWithPromise = () => {
  fetch("https://jsonplaceholder.typicode.com/users/1/posts", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

// fetchWithPromise();

const fetchWithAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/posts",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchWithAsync();
