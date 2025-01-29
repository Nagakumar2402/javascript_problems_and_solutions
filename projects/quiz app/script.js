const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O", "H2O", "CO2", "NaCl"],
    correctAnswer: "H2O",
  },
  {
    question: "Which continent is known as the 'Dark Continent'?",
    options: ["Asia", "Africa", "South America", "Europe"],
    correctAnswer: "Africa",
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "500,000 km/s"],
    correctAnswer: "300,000 km/s",
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
];

const quizAppContainer = document.querySelector(".quizApp_container"),
  question = document.querySelector(".question"),
  options = document.querySelectorAll(".questions"),
  radioBtn = document.querySelectorAll("input[type=radio]"),
  finalBtn = document.querySelector(".btn");

let currentQuiz = 0;
let score = 0;
const displayQuestion = () => {
  question.textContent = quiz[currentQuiz].question;
  options.forEach((option, index) => {
    option.textContent = quiz[currentQuiz].options[index];
    radioBtn[index].checked = false;
  });
};
displayQuestion();

finalBtn.addEventListener("click", () => {
  const selectedOption = Array.from(radioBtn).findIndex(
    (radio) => radio.checked
  );
  if (selectedOption !== -1) {
    if (
      quiz[currentQuiz].options[selectedOption] ===
      quiz[currentQuiz].correctAnswer
    ) {
      options.forEach((option, index) => {
        option.style.color = "green";
      });
      score++;
    }
    if (currentQuiz < quiz.length - 1) {
      currentQuiz++;
      displayQuestion();
    } else {
      quizAppContainer.innerHTML = `
        <div class="result_container">
        <h1>Quiz completed! Your score is ${score}/${quiz.length}</h1>
        <button class="btn try_again" onClick=location.reload()>Try Again</button>
      </div>
      `;
    }
  } else {
    alert("please select option");
  }
});
