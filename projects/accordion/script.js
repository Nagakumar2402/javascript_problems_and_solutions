const data = [
  {
    question:
      "What is the difference between relative and absolute positioning in CSS?",
    answer:
      "Relative positioning positions an element relative to its normal position, while absolute positioning positions an element relative to its nearest positioned ancestor or the viewport if no ancestor is positioned.",
  },
  {
    question: "What are pseudo-classes in CSS?",
    answer:
      "Pseudo-classes define the special state of an element, such as `:hover` for when a user hovers over an element, or `:nth-child()` for selecting specific children of an element.",
  },

  {
    question: "What is the purpose of the z-index property?",
    answer:
      "The `z-index` property specifies the stack order of elements. Higher values are displayed in front of lower values. It only works on elements with a position value other than `static`.",
  },
  {
    question:
      "What is the difference between `em`, `rem`, and `px` units in CSS?",
    answer:
      "`px` is an absolute unit representing pixels. `em` is a relative unit based on the font-size of the parent element. `rem` is a relative unit based on the font-size of the root element (usually `<html>`).",
  },
  {
    question: "How do you center a div horizontally and vertically?",
    answer:
      "One way to center a div is using Flexbox: `display: flex; justify-content: center; align-items: center;`. Another way is using `position: absolute;` with `top: 50%; left: 50%; transform: translate(-50%, -50%);`.",
  },
  {
    question: "What is the difference between CSS Grid and Flexbox?",
    answer:
      "CSS Grid is used for two-dimensional layouts (rows and columns), whereas Flexbox is ideal for one-dimensional layouts (either rows or columns).",
  },
  {
    question:
      "What is the difference between `visibility: hidden` and `display: none`?",
    answer:
      "`visibility: hidden` hides the element but still takes up space in the layout. `display: none` removes the element from the layout, so it doesn’t take up any space.",
  },
  {
    question: "What are media queries in CSS?",
    answer:
      "Media queries are used to apply styles based on device characteristics, such as screen width, height, resolution, or orientation. Example: `@media (max-width: 600px) { body { background-color: lightgray; } }`.",
  },
  {
    question: "What is the box model in CSS?",
    answer:
      "The box model describes how an element's dimensions are calculated: it includes content, padding, border, and margin.",
  },
];

const accordionContainer = document.querySelector(".accordion");

const createAccordion = () => {
  accordionContainer.innerHTML = data
    .map(
      (currentData) => `
  <div class="accordion_item">
  <div class="accordion_title">
  <h3>${currentData.question}</h3>
  <i class="ri-arrow-down-line"></i>
  </div>
  <div class="accordion_content">
  <p>${currentData.answer}</p>
  </div>
  
  </div>

`
    )
    .join("");
};
createAccordion();

const accordionTitle = document.querySelectorAll(".accordion_title");
accordionTitle.forEach((currentTitle) => {
  currentTitle.addEventListener("click", () => {
    if (currentTitle.classList.contains("active")) {
      currentTitle.classList.remove("active");
    } else {
      let accordionAccordionElement = document.querySelectorAll(".active");
      accordionAccordionElement.forEach((currentActive) =>
        currentActive.classList.remove("active")
      );
      currentTitle.classList.add("active");
    }
  });
});
