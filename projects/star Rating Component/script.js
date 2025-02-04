// const stars = document.querySelectorAll(".ri-star-line");
// const value = document.querySelector(".selected_value");

// let currentRating = -1;

// const updateStars = (rating) => {
//   stars.forEach((star, index) => {
//     star.classList.toggle("ri-star-fill", index < rating);
//     star.classList.toggle("ri-star-line", index >= rating);
//   });
// };

// const handleMouseOver = (event) => {
//   const rating = parseInt(event.target.dataset.rating, 10);
//   if (rating) updateStars(rating);
// };

// const handleClick = (event) => {
//   const rating = parseInt(event.target.dataset.rating, 10);
//   if (rating) {
//     currentRating = rating;
//     value.textContent = rating;
//     updateStars(rating);
//   }
// };

// const handleMouseLeave = () => {
//   updateStars(currentRating);
// };

// // Initialize event listeners
// stars.forEach((star, index) => {
//   star.dataset.rating = index + 1;
//   star.addEventListener("mouseover", handleMouseOver);
//   star.addEventListener("click", handleClick);
//   star.addEventListener("mouseleave", handleMouseLeave);
// });

const stars = document.querySelectorAll(".ri-star-line");
const value = document.querySelector(".selected_value");

let currentRating = -1;

const updateStars = (rating) => {
  stars.forEach((star, index) => {
    const isFullStar = index < Math.floor(rating);
    const isHalfStar = index === Math.floor(rating) && rating % 1 !== 0;

    star.classList.toggle("ri-star-fill", isFullStar);
    star.classList.toggle("ri-star-half-line", isHalfStar);
    star.classList.toggle("ri-star-line", !isFullStar && !isHalfStar);
  });
};

const handleMouseOver = (event) => {
  const star = event.target;
  const rating = parseFloat(star.dataset.rating);
  const isHalf = event.offsetX < star.offsetWidth / 2; // Check if mouse is on the left half

  updateStars(isHalf ? rating - 0.5 : rating);
};

const handleClick = (event) => {
  const star = event.target;
  const rating = parseFloat(star.dataset.rating);
  const isHalf = event.offsetX < star.offsetWidth / 2; // Check if mouse is on the left half

  currentRating = isHalf ? rating - 0.5 : rating;
  value.textContent = currentRating.toFixed(1); // Show one decimal place
  updateStars(currentRating);
};

const handleMouseLeave = () => {
  updateStars(currentRating);
};

// Initialize event listeners
stars.forEach((star, index) => {
  star.dataset.rating = index + 1; // Set full-star ratings as data attributes
  star.addEventListener("mouseover", handleMouseOver);
  star.addEventListener("click", handleClick);
  star.addEventListener("mouseleave", handleMouseLeave);
});
