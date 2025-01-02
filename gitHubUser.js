const userName = ["hiteshchoudhary", "nagakumar2402", "codewithharry"];
const URI = `https://api.github.com/users/${userName[1]}`;

const getFetchData = async () => {
  try {
    const response = await fetch(URI, { method: "GET" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  const data = await getFetchData();

  const body = document.getElementsByTagName("body")[0];
  body.innerHTML += `
  <div class="card">
     <div class="profile">
      <div class="circle">
      <img src=${data.avatar_url} alt=${data.login}/>
      </div>
            <p class="bio"> 
            ${data.bio}</p>
     </div>
      <div class="details">
        <h1 id="name">${data.name}</h1>
        <h3 id="username">${data.login} </h3>
        <p id="email">${data.email}</p>
        <p id="location">${data.location}</P>
        <p id="followers">followers: <span class="followersNumber">${data?.followers}</span></p>
        <p id="following">following: <span class="followingNumber">${data?.following}</span></p>
      </div>
    </div>
  
  
  `;
};
getUser();
