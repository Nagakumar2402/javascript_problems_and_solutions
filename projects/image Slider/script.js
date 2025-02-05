const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dot-container");

async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    const imageData = await response.json();
    if (imageData && imageData.length > 0) {
      displayImages(imageData);
      initializeSlider();
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

function displayImages(images) {
  slider.innerHTML = images
    .map(
      (image) => `
      <div class="slide">
        <img src="${image.download_url}" alt="${image.author}" />
      </div>`
    )
    .join("");

  dotContainer.innerHTML = images
    .map(
      (_, index) => `
      <span class="dot ${
        index === 0 ? "active" : ""
      }" data-slide="${index}"></span>`
    )
    .join("");
}

function initializeSlider() {
  const previousBtn = document.querySelector(".previous");
  const nextBtn = document.querySelector(".next");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  // Set initial slide positions
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
  });

  const updateActiveSlide = (slideIndex) => {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");

    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
    });
  };

  const goToNextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateActiveSlide(currentSlide);
  };

  const goToPreviousSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateActiveSlide(currentSlide);
  };

  previousBtn.addEventListener("click", goToPreviousSlide);
  nextBtn.addEventListener("click", goToNextSlide);

  dotContainer.addEventListener("click", ({ target }) => {
    if (target.classList.contains("dot")) {
      currentSlide = parseInt(target.dataset.slide, 10);
      updateActiveSlide(currentSlide);
    }
  });
}

fetchListOfImages();
