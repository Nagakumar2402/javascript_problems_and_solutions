const leftEl = document.querySelector(".left"),
  hexButton = document.querySelector(".btn"),
  hexText = document.querySelector(".hex_color");

const generateHexColor = () => {
  hexCode = "0123456789ABCDEF";
  const HexColor = Array.from(
    { length: 6 },
    () => hexCode[Math.floor(Math.random() * 16)]
  ).join("");
  return `#${HexColor}`;
};
hexButton.addEventListener("click", () => {
  const newHexColor = generateHexColor();
  leftEl.style.backgroundColor = newHexColor;
  hexText.innerText = newHexColor;
  hexButton.style.color = newHexColor;
});
