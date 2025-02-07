const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdown = document.querySelectorAll(".dropdown select"),
  button = document.querySelector(".btn"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select"),
  message = document.querySelector(".message"),
  input = document.querySelector("form input");

dropdown.forEach((currentEle) => {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (currentEle.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (currentEle.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    currentEle.appendChild(newOption);
  }
  currentEle.addEventListener("change", ({ target }) => updateFlag(target));
});

const updateFlag = (element) => {
  const currentCode = element.value;
  let countryCode = countryList[currentCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const getExchangeValue = async () => {
  let amountValue = input.value;
  if (amountValue === "" || amountValue < 1) {
    amountValue = 1;
    input.value = "1";
  }
  try {
    const URI = `${BASE_URL}/${fromCurrency.value.toLowerCase()}.json`;
    const response = await fetch(URI);
    const data = await response.json();
    let rate =
      data[fromCurrency.value.toLowerCase()][toCurrency.value.toLowerCase()];
    let finalAmount = amountValue * rate;
    message.innerText = `${amountValue} ${
      fromCurrency.value
    }= ${finalAmount.toFixed(2)} ${toCurrency.value}`;
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener("click", (event) => {
  event.preventDefault();
  getExchangeValue();
});

window.addEventListener("load", () => {
  getExchangeValue();
});
