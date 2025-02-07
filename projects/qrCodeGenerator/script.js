let url = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";

const generateBtn = document.querySelector(".btn");
const qrContainer = document.querySelector(".qr_container");
const qrImage = document.querySelector(".qr_container img");
const textInput = document.querySelector("#textInput");

generateBtn.addEventListener("click", () => {
  if (textInput.value.length > 0) {
    qrImage.src = url + textInput.value;
    qrContainer.classList.add("showImg");
    textInput.value = "";
  }
});
