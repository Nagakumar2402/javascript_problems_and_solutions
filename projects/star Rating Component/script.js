const stars = document.querySelectorAll(".ri-star-line");
const value = document.querySelector(".selected_value");

let currentRating = -1;

const updateStars = (rating) => {
  stars.forEach((star, index) => {
    star.classList.toggle("ri-star-fill", index < rating);
    star.classList.toggle("ri-star-line", index >= rating);
  });
};

const handleMouseOver = (event) => {
  const rating = parseInt(event.target.dataset.rating, 10);
  if (rating) updateStars(rating);
};

const handleClick = (event) => {
  const rating = parseInt(event.target.dataset.rating, 10);
  if (rating) {
    currentRating = rating;
    value.textContent = rating;
    updateStars(rating);
  }
};

const handleMouseLeave = () => {
  updateStars(currentRating);
};

// Initialize event listeners
stars.forEach((star, index) => {
  star.dataset.rating = index + 1;
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});
