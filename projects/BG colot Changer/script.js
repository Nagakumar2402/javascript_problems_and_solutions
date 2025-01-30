const leftEl = document.querySelector(".left"),
  hexButton = document.querySelector(".hex_btn"),
  hexText = document.querySelector(".hex_color"),
  rgbText = document.querySelector(".rgb_color"),
  rightEl = document.querySelector(".right"),
  rgbButton = document.querySelector(".rgb_btn"),
  range = document.querySelectorAll(".range_btn input"),
  hexCopyBtn = document.querySelector(".hexCopy_btn"),
  rgbCopyBtn = document.querySelector(".rgbCopy_btn");

const generateHexColor = () => {
  hexCode = "0123456789ABCDEF";
  const HexColor = Array.from(
    { length: 6 },
    () => hexCode[Math.floor(Math.random() * 16)]
  ).join("");
  return `#${HexColor}`;
};
const generateRgbColor = () => {
  let rgbValues = [];
  range.forEach((element) => {
    rgbValues.push(element.value);
  });
  return `rgb(${rgbValues.join(",")})`;
};
hexButton.addEventListener("click", () => {
  const newHexColor = generateHexColor();
  leftEl.style.backgroundColor = newHexColor;
  hexText.innerText = newHexColor;
  hexButton.style.color = newHexColor;
});

rgbButton.addEventListener("click", () => {
  const rgbColor = generateRgbColor();
  rightEl.style.backgroundColor = rgbColor;
  rgbText.textContent = rgbColor;
});

hexCopyBtn.addEventListener("click", () => {
  const hexColor = hexText.innerText;
  navigator.clipboard.readText(hexColor);
  alert(`Copied Hex Color: ${hexColor} 😍`);
});
rgbCopyBtn.addEventListener("click", () => {
  const rgbColor = rgbText.innerText.toLowerCase();
  navigator.clipboard.readText(rgbColor);
  alert(`Copied Hex Color: ${rgbColor} 😍`);
});
