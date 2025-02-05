const slider = document.querySelector(".slider"),
  dotContainer = document.querySelector(".dot-container");
async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10",
      {
        method: "GET",
      }
    );
    const imageData = await response.json();
    if (imageData && imageData.length > 0) {
      displayImage(imageData);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayImage(getImageData) {
  slider.innerHTML = getImageData
    .map(
      (image) => `<div class="slide">
    <img src=${image?.download_url} alt=${image?.author} />
    </div>
    `
    )
    .join("");
  dotContainer.innerHTML = getImageData
    .map(
      (_, index) => `<span class="dot ${
        index === 0 ? "active" : ""
      }" data-slide=${index}></span>
    `
    )
    .join("");
}
fetchListOfImages();

setTimeout(() => {
  const previousBtn = document.querySelector(".previous"),
    nextBtn = document.querySelector(".next"),
    slides = document.querySelectorAll(".slide");

  let currentSlide = 0;
  function activeSlide(slide) {
    document
      .querySelectorAll(".dot")
      .forEach((activeDot) => activeDot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  }
  function currentSlideImg(slide) {
    slides.forEach(
      (singleSlide, index) =>
        (singleSlide.style.transform = `
    translateX(${100 * (index - slide)}%)
    `)
    );
  }
  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    activeSlide(currentSlide);
    currentSlideImg(currentSlide);
  });
  previousBtn.addEventListener("click", () => {
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }
    activeSlide(currentSlide);
    currentSlideImg(currentSlide);
  });
  dotContainer.addEventListener("click", ({ target }) => {
    if (target.classList.contains("dot")) {
      currentSlide = target.dataset.slide;
      currentSlideImg(currentSlide);
      activeSlide(currentSlide);
    }
  });
}, 1000);
