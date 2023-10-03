const quizData = [
  {
    question: "How old is Economic Freedom Fighters (EFF)?",
    a: "5 years old",
    b: "9 years old",
    c: "11 years old",
    d: "10 years old",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2023?",
    a: "Java",
    b: "C++",
    c: "JavaScript",
    d: "Python",
    correct: "d",
  },
  {
    question: "Who is the current captain of Mamelodi Sundowns?",
    a: "Themba Zwane",
    b: "Hlompho Kekena",
    c: "Denise Onyango",
    d: "Teboho Mokoena",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1997",
    c: "1998",
    d: "1995",
    correct: "d",
  },
];

const answerElements = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  // currentQuiz++;
}

function getSelected() {
  let answer = undefined;

  answerElements.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerElements.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO: Show results
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> 
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
