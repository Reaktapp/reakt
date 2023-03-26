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


//Küsimused

const questions = [
  {
    question: 'Mg + HCl = ?',
    answers: [
      { text: 'MgCl2 + H2', correct: true },
      { text: 'MgHCll', correct: false }
    ]
  },
  {
    question: 'Fe + CuSO4 = ?',
    answers: [
      { text: 'FeSi2 + Cu', correct: false },
      { text: 'FeSO4 + Cu', correct: true },
      { text: 'FeSO4 + Al', correct: false },
      { text: 'FeSO2 + Cu2', correct: false }
    ]
  },
  {
    question: '2 Cu + O2 = ?',
    answers: [
      { text: 'O2', correct: false },
      { text: '2 CuO', correct: true },
      { text: 'CuO2', correct: false },
      { text: 'CuO', correct: false }
    ]
  },
  {
    question: 'Fe + S = ?',
    answers: [
      { text: 'S2', correct: false },
      { text: 'FeS', correct: true }
    ]
  },
  {
    question: '6 K + Al2(SO4)3 = ?',
    answers: [
      { text: '3 K2SO4 + 2 Al', correct: true },
      { text: 'K2 + 2 Al', correct: false }
    ]
  },
  {
    question: '2Al + 6HBr = ?',
    answers: [
      { text: '2 AlBr + 3 H2', correct: true },
      { text: 'AlBr2 + 4 H2', correct: false }
    ]
  },
  {
    question: '3 Mg + 2 FeCl3 = ?',
    answers: [
      { text: '5 MgCl2 + Fe', correct: false },
      { text: '3 MgCl2 + 2 Fe', correct: true }
    ]
  },
  {
    question: 'Mg + Cl2 = ?',
    answers: [
      { text: 'MgCl2', correct: false },
      { text: 'MgCl', correct: true }
    ]
  },
  {
    question: '2 Na + 2 H2O = ?',
    answers: [
      { text: 'NaOH + H2O', correct: false },
      { text: 'NaOH + H2', correct: false },
      { text: '2 NaOH + H2', correct: true },
      { text: 'NaOH + 2 H2', correct: false }
    ]
  },
  {
    question: 'Ca + 2 H2O = ?',
    answers: [
      { text: 'Ca(OH)2 + H2', correct: true },
      { text: 'Ca2 + H2', correct: false },
      { text: 'H2O', correct: false },
      { text: 'Ca(OH)2 + H2O', correct: false }
    ]
  },
  {
    question: '3 Ca + 2 H3PO4 = ?',
    answers: [
      { text: 'Ca3(PO4)3 + H2O', correct: false },
      { text: 'Ca3(PO4)3 + 3 H2', correct: true },
      { text: 'Ca6 + 3 H2', correct: false },
      { text: 'Ca + H2', correct: false }
    ]
  },
  {
    question: 'Al + NiSO4 = ?',
    answers: [
      { text: 'AlNiSO4', correct: false },
      { text: 'Al + Ni2', correct: false },
      { text: 'AlSO2 + Ni', correct: false },
      { text: 'AlSO4 + Ni', correct: true }
    ]
  },
  {
    question: 'Zn + H2O = ?',
    answers: [
      { text: 'ZnO + H2', correct: true },
      { text: 'ZnO + H2O', correct: false }
    ]
  },
  {
    question: 'CH4 + 2 O2 = ?',
    answers: [
      { text: 'CO2 + 2 H2O', correct: true },
      { text: 'CH4 + H2O', correct: false }
    ]
  },
  {
    question: 'Fe + 2 HCl = ?',
    answers: [
      { text: 'FeCl4 + 2 H2', correct: false },
      { text: 'H2 + Fe', correct: false },
      { text: 'FeCl2', correct: false },
      { text: 'FeCl2 + H2', correct: true }
    ]
  },
  {
    question: 'Ni + H2O = ?',
    answers: [
      { text: 'NiO + H2', correct: true },
      { text: 'NiO + H2O', correct: false }
    ]
  },
  {
    question: '2 Fe + 3 Br2 = ?',
    answers: [
      { text: 'FeBr2', correct: false },
      { text: '2 FeBr2', correct: true }
    ]
  },
  {
    question: '2 Al + 3 H2SO4 = ?',
    answers: [
      { text: 'Al2(SO4)3 + 3 H2', correct: true },
      { text: 'Al2(SO4)2 + 2 H2', correct: false }
    ]
  },
  {
    question: '2 Li + 2 H2O = ?',
    answers: [
      { text: 'Li + 2 H2', correct: false },
      { text: 'LiOH + H2', correct: false },
      { text: '2 LiOH + H2', correct: true },
      { text: 'LiOH + 2 H2', correct: false }
    ]
  },
  {
    question: 'Fe + H2O = ?',
    answers: [
      { text: 'FeO + H2', correct: true },
      { text: 'FeO + H2O', correct: false }
    ]
  }
]