const showData = document.querySelector(".allPosts");

const fetchData = async () => {
  let URI = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(URI, { method: "GET" });
  const data = await response.json();
  show(data);
};

const show = (data) => {
  showData.innerHTML = data
    .map(
      (d) => `
  <div class="q_container">
<div class="qns">${d.title}</div>
  <p class="ans"> ${d.body} </p>
  </div>

  `
    )
    .join("");
};

fetchData();
