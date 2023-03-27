const startButton = document.getElementById('startbtn')
const nextButton = document.getElementById('nextbtn')
const questionContainerElement = document.getElementById('questioncontainer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerbuttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Proovi uuesti'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


//Küsimused, 20

const questions = [
  {
    question: 'Mg + HCl → ?',
    answers: [
      { text: 'MgCl₂ + H₂', correct: true },
      { text: 'MgHCl', correct: false }
    ]
  },
  {
    question: 'Fe + CuSO₄ → ?',
    answers: [
      { text: 'FeSi₂ + Cu', correct: false },
      { text: 'FeSO₄ + Cu', correct: true },
      { text: 'FeSO₄ + Al', correct: false },
      { text: 'FeSO₂ + Cu₂', correct: false }
    ]
  },
  {
    question: '2 Cu + O₂ → ?',
    answers: [
      { text: 'O₂', correct: false },
      { text: '2 CuO', correct: true },
      { text: 'CuO₂', correct: false },
      { text: 'CuO', correct: false }
    ]
  },
  {
    question: 'Fe + S → ?',
    answers: [
      { text: 'S₂', correct: false },
      { text: 'FeS', correct: true }
    ]
  },
  {
    question: '6 K + Al₂(SO₄)₃ → ?',
    answers: [
      { text: '3 K₂SO₄ + 2 Al', correct: true },
      { text: 'K₂ + 2 Al', correct: false }
    ]
  },
  {
    question: '2Al + 6HBr → ?',
    answers: [
      { text: '2 AlBr + 3 H₂', correct: true },
      { text: 'AlBr₂ + 4 H₂', correct: false }
    ]
  },
  {
    question: '3 Mg + 2 FeCl₃ → ?',
    answers: [
      { text: '5 MgCl₂ + Fe', correct: false },
      { text: '3 MgCl₂ + 2 Fe', correct: true }
    ]
  },
  {
    question: 'Mg + Cl₂ → ?',
    answers: [
      { text: 'MgCl₂', correct: false },
      { text: 'MgCl', correct: true }
    ]
  },
  {
    question: '2 Na + 2 H₂O → ?',
    answers: [
      { text: 'NaOH + H₂O', correct: false },
      { text: 'NaOH + H₂', correct: false },
      { text: '2 NaOH + H₂', correct: true },
      { text: 'NaOH + 2 H₂', correct: false }
    ]
  },
  {
    question: 'Ca + 2 H₂O → ?',
    answers: [
      { text: 'Ca(OH)₂ + H₂', correct: true },
      { text: 'Ca₂ + H₂', correct: false },
      { text: 'H₂O', correct: false },
      { text: 'Ca(OH)₂ + H₂O', correct: false }
    ]
  },
  {
    question: '3 Ca + 2 H₃PO₄ → ?',
    answers: [
      { text: 'Ca₃(PO₄)₃ + H₂O', correct: false },
      { text: 'Ca₃(PO₄)₃ + 3 H₂', correct: true },
      { text: 'Ca₆ + 3 H₂', correct: false },
      { text: 'Ca + H₂', correct: false }
    ]
  },
  {
    question: 'Al + NiSO₄ → ?',
    answers: [
      { text: 'AlNiSO₄', correct: false },
      { text: 'Al + Ni₂', correct: false },
      { text: 'AlSO₂ + Ni', correct: false },
      { text: 'AlSO₄ + Ni', correct: true }
    ]
  },
  {
    question: 'Zn + H₂O → ?',
    answers: [
      { text: 'ZnO + H₂', correct: true },
      { text: 'ZnO + H₂O', correct: false }
    ]
  },
  {
    question: 'CH₄ + 2 O₂ → ?',
    answers: [
      { text: 'CO₂ + 2 H₂O', correct: true },
      { text: 'CH₄ + H₂O', correct: false }
    ]
  },
  {
    question: 'Fe + 2 HCl → ?',
    answers: [
      { text: 'FeCl₄ + 2 H₂', correct: false },
      { text: 'H₂ + Fe', correct: false },
      { text: 'FeCl₂', correct: false },
      { text: 'FeCl₂ + H₂', correct: true }
    ]
  },
  {
    question: 'Ni + H₂O → ?',
    answers: [
      { text: 'NiO + H₂', correct: true },
      { text: 'NiO + H₂O', correct: false }
    ]
  },
  {
    question: '2 Fe + 3 Br₂ → ?',
    answers: [
      { text: 'FeBr₂', correct: false },
      { text: '2 FeBr₂', correct: true }
    ]
  },
  {
    question: '2 Al + 3 H₂SO₄ → ?',
    answers: [
      { text: 'Al₂(SO₄)₃ + 3 H₂', correct: true },
      { text: 'Al₂(SO₄)₂ + 2 H₂', correct: false }
    ]
  },
  {
    question: '2 Li + 2 H₂O → ?',
    answers: [
      { text: 'Li + 2 H₂', correct: false },
      { text: 'LiOH + H₂', correct: false },
      { text: '2 LiOH + H₂', correct: true },
      { text: 'LiOH + 2 H₂', correct: false }
    ]
  },
  {
    question: 'Fe + H₂O → ?',
    answers: [
      { text: 'FeO + H₂', correct: true },
      { text: 'FeO + H₂O', correct: false }
    ]
  }
]
