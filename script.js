const quiz = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language"],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python"],
    answer: 1
  }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");

function loadQuiz() {
  const q = quiz[index];
  questionEl.innerHTML = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (i === q.answer) score++;
      nextBtn.style.display = "block";
    };
    optionsEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  index++;
  nextBtn.style.display = "none";
  if (index < quiz.length) {
    loadQuiz();
  } else {
    questionEl.innerHTML = "";
    optionsEl.innerHTML = "";
    resultEl.innerHTML = `Your score: ${score}/${quiz.length}`;
  }
};

loadQuiz();
