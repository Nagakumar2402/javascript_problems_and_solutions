const imgContainer = document.querySelector(".container");
const loadMore = document.querySelector(".load_more");
let moreProduct = 0;
const fetchData = async (moreProduct) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${
        moreProduct === 0 ? 0 : moreProduct * 10
      }`,
      { method: "GET" }
    );
    const result = await response.json();
    if (result && result.products) displayProduct(result.products);
  } catch (error) {
    console.log(error);
  }
};

const displayProduct = (getProducts) => {
  console.log(getProducts);
  getProducts.forEach((getProduct) => {
    //createElement
    const productWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productImage = document.createElement("img");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");
    const productRating = document.createElement("p");
    //showData
    productImage.src = getProduct.images[0] || images || images[1] || images[2];
    productTitle.textContent = getProduct.title;
    productDescription.textContent = getProduct.description;
    productPrice.textContent = "Price :" + getProduct.price;
    productRating.textContent = "Rating :" + getProduct.rating;

    //addClass
    productWrapper.classList.add("product_wrapper");
    productTitle.classList.add("product_title");
    productDescription.classList.add("product_desc");
    productPrice.classList.add("product_price");
    productRating.classList.add("product_rating");
    //appendData
    productWrapper.appendChild(productImage);
    productWrapper.appendChild(productTitle);
    productWrapper.appendChild(productDescription);
    productWrapper.appendChild(productPrice);
    productWrapper.appendChild(productRating);
    imgContainer.appendChild(productWrapper);
  });
  if (imgContainer.children.length === 100) {
    loadMore.setAttribute("disabled", "true");
  }
};

fetchData(moreProduct);

loadMore.addEventListener("click", () => {
  fetchData((moreProduct += 1));
});
