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


//Tubli töö, leidsid vastused. Nüüd mine õpi edasi.

const questions = [
  {
    question: 'Mg + 2 HCl → ?',
    answers: [
      { text: 'MgCl₂ + H₂', correct: true },
      { text: 'MgHCl', correct: false }
    ]
  },
  {
    question: '3 Zn + 2 FeCl₃ → ?',
    answers: [
      { text: 'FeSi₂ + Cu', correct: false },
      { text: '3 ZnCl₂ + 2 Fe', correct: true },
      { text: 'ZnCl₄ + Fe', correct: false },
      { text: '3 ZnCl₃ + 2 Fe₂', correct: false }
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
    question: '2Al + 6HBr → ?',
    answers: [
      { text: '2 AlBr₃ + 3 H₂', correct: true },
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
      { text: 'MgCl₂', correct: true },
      { text: 'MgCl', correct: false }
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
    question: 'Zn + H₂O → ?',
    answers: [
      { text: 'ZnO + H₂', correct: true },
      { text: 'ZnO + H₂O', correct: false }
    ]
  },
  {
    question: '2 Na + Cl₂ → ?',
    answers: [
      { text: '2 NaCl', correct: true },
      { text: 'NaCl', correct: false }
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
      { text: 'NiO + H₂', correct: false },
      { text: 'NiO + H₂O', correct: true }
    ]
  },
  {
    question: '2 Fe + 3 Cl₂ → ?',
    answers: [
      { text: 'FeCl₂', correct: false },
      { text: '2 FeCl₃', correct: true }
    ]
  },
  {
    question: 'Cl₂ + Cu → ?', 
    answers: [
      { text: 'CuCl₂', correct: true },
      { text: '2 CuCl', correct: false }
    ]
  },
]
