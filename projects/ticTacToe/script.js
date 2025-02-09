const boxes = document.querySelectorAll(".box");
const messageContainer = document.querySelector(".message_container");
const message = document.querySelector(".message");
const newGame = document.querySelector(".new_game");
const resetGame = document.querySelector(".reset");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.textContent = "O";
      box.style.color = "#780c28";
      turnO = false;
    } else {
      box.textContent = "X";
      box.style.color = "#E5989B";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetAll = () => {
  turnO = true;
  enableBoxes();
  messageContainer.classList.add("hide");
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.setAttribute("disabled", true);
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.removeAttribute("disabled");
    box.textContent = "";
  }
};
const showMessage = (winner) => {
  message.textContent = `Congratulations, Winner is ${winner}`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let onePosition = boxes[pattern[0]].innerText;
    let twoPosition = boxes[pattern[1]].innerText;
    let threePosition = boxes[pattern[2]].innerText;

    if (onePosition !== "" && twoPosition !== "" && threePosition !== "") {
      if (onePosition === twoPosition && twoPosition === threePosition) {
        showMessage(onePosition);
      }
    }
  }
};
newGame.addEventListener("click", resetAll);
resetGame.addEventListener("click", resetAll);
