// const questions = [
//   {
//     question: "Which bird cannot fly?",
//     answers: [
//       { text: "Chicken", correct: false },
//       { text: "Duck", correct: false },
//       { text: "Ostrich", correct: true },
//       { text: "Pigeon", correct: false },
//     ],
//   },
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "Berlin", correct: false },
//       { text: "Madrid", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Lisbon", correct: false },
//     ],
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     answers: [
//       { text: "Vincent Van Gogh", correct: false },
//       { text: "Pablo Picasso", correct: false },
//       { text: "Leonardo da Vinci", correct: true },
//       { text: "Michelangelo", correct: false },
//     ],
//   },
// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerText = "Next";
//   showQuestion();
// }

// function showQuestion() {
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   questionElement.innerText = currentQuestion.question;

//   currentQuestion.answers.forEach((answer) => {
//     const button = document.createElement("button");
//     button.innerText = answer.text;
//     button.classList.add("btn");
//     if (answer.correct) {
//       button.dataset.correct = answer.correct;
//     }
//     button.addEventListener("click", selectAnswer);
//     answerButtons.appendChild(button);
//   });
// }

// function resetState() {
//   nextButton.style.display = "none";
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const correct = selectedBtn.dataset.correct === "true";
//   if (correct) {
//     score++;
//     selectedBtn.style.background = "#4CAF50"; // green
//   } else {
//     selectedBtn.style.background = "#E63946"; // red
//   }

//   Array.from(answerButtons.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.style.background = "#4CAF50";
//     }
//     button.disabled = true;
//   });

//   nextButton.style.display = "block";
// }

// function showScore() {
//   resetState();
//   questionElement.innerText = `You scored ${score} out of ${questions.length}! 🎉`;
//   nextButton.innerText = "Play Again";
//   nextButton.style.display = "block";
// }

// function handleNextButton() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     showQuestion();
//   } else {
//     showScore();
//   }
// }

// nextButton.addEventListener("click", () => {
//   if (currentQuestionIndex < questions.length) {
//     handleNextButton();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();
const questions = [
  {
    question: "Which type of wood is commonly used for making furniture?",
    answers: [
      { text: "Pine", correct: true },
      { text: "Bamboo", correct: false },
      { text: "Cork", correct: false },
      { text: "Straw", correct: false },
    ],
  },
  {
    question: "What is a common material used to stuff sofas?",
    answers: [
      { text: "Foam", correct: true },
      { text: "Sand", correct: false },
      { text: "Pebbles", correct: false },
      { text: "Paper", correct: false },
    ],
  },
  {
    question: "Which tool is commonly used to assemble wooden furniture?",
    answers: [
      { text: "Hammer", correct: true },
      { text: "Saw", correct: false },
      { text: "Screwdriver", correct: true }, // actually can be multiple correct
      { text: "Chisel", correct: false },
    ],
  },
  {
    question: "What is the purpose of a drawer in furniture?",
    answers: [
      { text: "Storage", correct: true },
      { text: "Decoration", correct: false },
      { text: "Seating", correct: false },
      { text: "Support", correct: false },
    ],
  },
  {
    question: "Which wood is considered hard and durable for furniture?",
    answers: [
      { text: "Oak", correct: true },
      { text: "Pine", correct: false },
      { text: "Cedar", correct: false },
      { text: "Balsa", correct: false },
    ],
  },
  {
    question: "Which type of sofa layout is common in living rooms?",
    answers: [
      { text: "L-shaped", correct: true },
      { text: "Upright", correct: false },
      { text: "Circular", correct: false },
      { text: "Triangular", correct: false },
    ],
  },
  {
    question: "What is the primary material used to make cupboards?",
    answers: [
      { text: "Wood", correct: true },
      { text: "Plastic", correct: false },
      { text: "Glass", correct: false },
      { text: "Metal", correct: false },
    ],
  },
  {
    question: "What part of a dining table holds the table legs together?",
    answers: [
      { text: "Apron", correct: true },
      { text: "Top", correct: false },
      { text: "Drawer", correct: false },
      { text: "Shelf", correct: false },
    ],
  },
  {
    question: "Which finish is often applied to wood furniture to protect it?",
    answers: [
      { text: "Varnish", correct: true },
      { text: "Paint", correct: false },
      { text: "Glue", correct: false },
      { text: "Wax paper", correct: false },
    ],
  },
  {
    question: "Which part of a sofa is designed to support your back?",
    answers: [
      { text: "Backrest", correct: true },
      { text: "Armrest", correct: false },
      { text: "Seat", correct: false },
      { text: "Leg", correct: false },
    ],
  },
  {
    question: "What is MDF in furniture making?",
    answers: [
      { text: "Medium Density Fiberboard", correct: true },
      { text: "Metal Dry Fabric", correct: false },
      { text: "Multi-Dimensional Furniture", correct: false },
      { text: "Medium Durability Frame", correct: false },
    ],
  },
  {
    question: "Which is a common type of wood used for outdoor furniture?",
    answers: [
      { text: "Teak", correct: true },
      { text: "Cherry", correct: false },
      { text: "Maple", correct: false },
      { text: "Birch", correct: false },
    ],
  },
  {
    question: "Which is NOT a type of sofa?",
    answers: [
      { text: "Sleeper", correct: false },
      { text: "Sectional", correct: false },
      { text: "Bench", correct: true },
      { text: "Loveseat", correct: false },
    ],
  },
  {
    question: "Which drawer mechanism allows smooth sliding?",
    answers: [
      { text: "Ball-bearing slides", correct: true },
      { text: "Nails", correct: false },
      { text: "Glue joints", correct: false },
      { text: "Staples", correct: false },
    ],
  },
  {
    question: "Which wood is lightweight and often used in crafting?",
    answers: [
      { text: "Balsa", correct: true },
      { text: "Oak", correct: false },
      { text: "Teak", correct: false },
      { text: "Maple", correct: false },
    ],
  },
  {
    question: "Which type of dining table is popular for small spaces?",
    answers: [
      { text: "Drop-leaf", correct: true },
      { text: "Banquet", correct: false },
      { text: "Pedestal", correct: false },
      { text: "Conference", correct: false },
    ],
  },
  {
    question: "Which furniture part is horizontal and holds items inside?",
    answers: [
      { text: "Shelf", correct: true },
      { text: "Leg", correct: false },
      { text: "Backrest", correct: false },
      { text: "Drawer handle", correct: false },
    ],
  },
  {
    question: "What is the main function of a cupboard?",
    answers: [
      { text: "Storage", correct: true },
      { text: "Seating", correct: false },
      { text: "Decoration", correct: false },
      { text: "Lighting", correct: false },
    ],
  },
  {
    question: "Which material is used to upholster sofas?",
    answers: [
      { text: "Fabric", correct: true },
      { text: "Glass", correct: false },
      { text: "Metal", correct: false },
      { text: "Ceramic", correct: false },
    ],
  },
  {
    question: "What is the part of a table that connects the legs underneath?",
    answers: [
      { text: "Apron", correct: true },
      { text: "Tabletop", correct: false },
      { text: "Drawer", correct: false },
      { text: "Footrest", correct: false },
    ],
  },
  {
    question: "Which furniture is designed specifically for relaxation?",
    answers: [
      { text: "Recliner", correct: true },
      { text: "Dining chair", correct: false },
      { text: "Stool", correct: false },
      { text: "Desk", correct: false },
    ],
  },
  {
    question: "Which wood type is considered softwood?",
    answers: [
      { text: "Pine", correct: true },
      { text: "Mahogany", correct: false },
      { text: "Teak", correct: false },
      { text: "Oak", correct: false },
    ],
  },
  {
    question: "What do you call a sofa designed for two people?",
    answers: [
      { text: "Loveseat", correct: true },
      { text: "Sectional", correct: false },
      { text: "Armchair", correct: false },
      { text: "Recliner", correct: false },
    ],
  },
  {
    question: "Which part of a drawer helps you pull it out?",
    answers: [
      { text: "Handle", correct: true },
      { text: "Leg", correct: false },
      { text: "Shelf", correct: false },
      { text: "Hinge", correct: false },
    ],
  },
  {
    question: "Which is NOT a type of wood finish?",
    answers: [
      { text: "Varnish", correct: false },
      { text: "Paint", correct: false },
      { text: "Foam", correct: true },
      { text: "Lacquer", correct: false },
    ],
  },
  {
    question: "Which furniture item usually has drawers on the side?",
    answers: [
      { text: "Dresser", correct: true },
      { text: "Sofa", correct: false },
      { text: "Dining table", correct: false },
      { text: "Bed", correct: false },
    ],
  },
  {
    question: "Which material is most durable for outdoor furniture?",
    answers: [
      { text: "Teak", correct: true },
      { text: "Pine", correct: false },
      { text: "Balsa", correct: false },
      { text: "Cedar", correct: false },
    ],
  },
  {
    question: "What is the flat surface of a table called?",
    answers: [
      { text: "Tabletop", correct: true },
      { text: "Apron", correct: false },
      { text: "Leg", correct: false },
      { text: "Shelf", correct: false },
    ],
  },
  {
    question: "Which type of sofa has a corner shape?",
    answers: [
      { text: "L-shaped", correct: true },
      { text: "Recliner", correct: false },
      { text: "Loveseat", correct: false },
      { text: "Sectional", correct: false },
    ],
  },
  {
    question: "Which wood is known for its reddish-brown color?",
    answers: [
      { text: "Mahogany", correct: true },
      { text: "Pine", correct: false },
      { text: "Oak", correct: false },
      { text: "Maple", correct: false },
    ],
  },
  {
    question: "Which furniture component provides back support on a chair?",
    answers: [
      { text: "Backrest", correct: true },
      { text: "Leg", correct: false },
      { text: "Armrest", correct: false },
      { text: "Seat", correct: false },
    ],
  },
  {
    question: "Which type of dining table allows extra leaves to extend it?",
    answers: [
      { text: "Extendable table", correct: true },
      { text: "Pedestal table", correct: false },
      { text: "Coffee table", correct: false },
      { text: "Console table", correct: false },
    ],
  },
  {
    question: "Which part of a cupboard supports the shelves?",
    answers: [
      { text: "Shelf pins", correct: true },
      { text: "Legs", correct: false },
      { text: "Back panel", correct: false },
      { text: "Handle", correct: false },
    ],
  },
  {
    question: "Which type of sofa allows reclining for comfort?",
    answers: [
      { text: "Recliner", correct: true },
      { text: "Bench", correct: false },
      { text: "Loveseat", correct: false },
      { text: "Sectional", correct: false },
    ],
  },
  {
    question: "Which wood is lightweight and soft?",
    answers: [
      { text: "Balsa", correct: true },
      { text: "Teak", correct: false },
      { text: "Oak", correct: false },
      { text: "Mahogany", correct: false },
    ],
  },
  {
    question: "Which furniture is designed primarily for eating?",
    answers: [
      { text: "Dining table", correct: true },
      { text: "Sofa", correct: false },
      { text: "Bed", correct: false },
      { text: "Cabinet", correct: false },
    ],
  },
  {
    question: "Which drawer type is fully extendable?",
    answers: [
      { text: "Ball-bearing drawer", correct: true },
      { text: "Sliding wooden drawer", correct: false },
      { text: "Half-open drawer", correct: false },
      { text: "Fixed drawer", correct: false },
    ],
  },
  {
    question: "Which wood is commonly used for high-end furniture?",
    answers: [
      { text: "Mahogany", correct: true },
      { text: "Pine", correct: false },
      { text: "Balsa", correct: false },
      { text: "Cedar", correct: false },
    ],
  },
  {
    question: "Which sofa style has no arms?",
    answers: [
      { text: "Armless sofa", correct: true },
      { text: "Loveseat", correct: false },
      { text: "Recliner", correct: false },
      { text: "Sectional", correct: false },
    ],
  },
  {
    question: "Which table is usually placed in front of a sofa?",
    answers: [
      { text: "Coffee table", correct: true },
      { text: "Dining table", correct: false },
      { text: "Console table", correct: false },
      { text: "Side table", correct: false },
    ],
  },
  {
    question: "Which type of cupboard has glass doors to display items?",
    answers: [
      { text: "Display cabinet", correct: true },
      { text: "Wardrobe", correct: false },
      { text: "Kitchen cupboard", correct: false },
      { text: "Drawer cabinet", correct: false },
    ],
  },
  {
    question: "Which furniture joint is very strong for drawers?",
    answers: [
      { text: "Dovetail joint", correct: true },
      { text: "Butt joint", correct: false },
      { text: "Nail joint", correct: false },
      { text: "Glue joint", correct: false },
    ],
  },
  {
    question: "Which type of wood is resistant to termites?",
    answers: [
      { text: "Teak", correct: true },
      { text: "Pine", correct: false },
      { text: "Balsa", correct: false },
      { text: "Oak", correct: false },
    ],
  },
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let currentLevel = 1;
let score = 0;
let userAnswers = [];

function startQuiz() {
  currentQuestionIndex = 0;
  currentLevel = 1;
  score = 0;
  userAnswers = [];
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = `Level ${currentLevel} - Q${
    (currentQuestionIndex % 10) + 1
  }: ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";
  const currentQuestion = questions[currentQuestionIndex];

  userAnswers.push({
    question: currentQuestion.question,
    selected: selectedBtn.innerText,
    correctAnswer: currentQuestion.answers.find((a) => a.correct).text,
    isCorrect: correct,
  });

  if (correct) {
    score++;
    selectedBtn.style.background = "#4CAF50";
  } else {
    selectedBtn.style.background = "#E63946";
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.background = "#4CAF50";
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;

  // Check if level completed
  if (
    currentQuestionIndex % 10 === 0 &&
    currentQuestionIndex < questions.length
  ) {
    showLevelComplete();
  } else if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScoreAndCorrections();
  }
}

function showLevelComplete() {
  resetState();
  questionElement.innerHTML = `🎉 Level ${currentLevel} Completed!`;
  currentLevel++;
  nextButton.innerText = "Next Level";
  nextButton.style.display = "block";
}

function showScoreAndCorrections() {
  resetState();
  questionElement.innerHTML = `🎉 Quiz Completed! You scored ${score} out of ${questions.length}.`;

  const correctionsDiv = document.createElement("div");
  correctionsDiv.style.textAlign = "left";
  correctionsDiv.style.marginTop = "20px";

  userAnswers.forEach((answerObj, index) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>Q${index + 1}:</strong> ${answerObj.question}<br>
                   <strong>Your answer:</strong> ${answerObj.selected} ${
      answerObj.isCorrect ? "✅" : "❌"
    }<br>
                   <strong>Correct answer:</strong> ${
                     answerObj.correctAnswer
                   }<br>`;
    correctionsDiv.appendChild(p);
  });

  answerButtons.appendChild(correctionsDiv);

  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

