const questions = [
    {
        question: "A particle moves in a circle of radius r with a constant speed. What is the magnitude of its acceleration?",
        answers: [
            { text: "v²/r", correct: true },
            { text: "v²r", correct: false },
            { text: "r/v²", correct: false },
            { text: "r/v", correct: false }
        ]
    },
    {
        question: "The potential energy of a system increases if work is done:",
        answers: [
            { text: "By the system against a conservative force", correct: true },
            { text: "By the system against a non-conservative force", correct: false },
            { text: "On the system by a conservative force", correct: false },
            { text: "On the system by a non-conservative force", correct: false }
        ]
    },
    {
        question: "The escape velocity from the Earth's surface is approximately:",
        answers: [
            { text: "7.9 km/s", correct: false },
            { text: "11.2 km/s", correct: true },
            { text: "9.8 km/s", correct: false },
            { text: "13.6 km/s", correct: false }
        ]
    },
    {
        question: "Which of the following has the highest value of refractive index?",
        answers: [
            { text: "Water", correct: false },
            { text: "Diamond", correct: true },
            { text: "Glass", correct: false },
            { text: "Air", correct: false }
        ]
    },
    {
        question: "In Young's double-slit experiment, the fringe width is proportional to:",
        answers: [
            { text: "The wavelength of light used", correct: true },
            { text: "The slit separation", correct: false },
            { text: "The intensity of light", correct: false },
            { text: "The screen distance", correct: false }
        ]
    },
    {
        question: "The dimensional formula of Planck’s constant is:",
        answers: [
            { text: "[ML²T⁻¹]", correct: true },
            { text: "[ML²T⁻²]", correct: false },
            { text: "[MLT⁻¹]", correct: false },
            { text: "[ML⁻¹T²]", correct: false }
        ]
    },
    {
        question: "A transformer works on the principle of:",
        answers: [
            { text: "Ohm's Law", correct: false },
            { text: "Mutual induction", correct: true },
            { text: "Coulomb’s Law", correct: false },
            { text: "Electromagnetic force", correct: false }
        ]
    },
    {
        question: "When a magnet is pushed into a coil connected to a galvanometer, the needle of the galvanometer deflects. This phenomenon is due to:",
        answers: [
            { text: "Electrolysis", correct: false },
            { text: "Electromagnetic induction", correct: true },
            { text: "Magnetic effect of current", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The force acting on a charged particle moving with velocity v in a magnetic field B is:",
        answers: [
            { text: "q(v · B)", correct: false },
            { text: "q(v + B)", correct: false },
            { text: "q(v × B)", correct: true },
            { text: "q(B × v)", correct: false }
        ]
    },
    {
        question: "Which of the following quantities has the same unit as impulse?",
        answers: [
            { text: "Power", correct: false },
            { text: "Force", correct: false },
            { text: "Momentum", correct: true },
            { text: "Energy", correct: false }
        ]
    },
    {
        question: "The hybridization of carbon atoms in ethyne (C₂H₂) is:",
        answers: [
            { text: "sp", correct: true },
            { text: "sp²", correct: false },
            { text: "sp³", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "The pH of a neutral solution at 25°C is:",
        answers: [
            { text: "7", correct: true },
            { text: "5", correct: false },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Which of the following is the electron configuration of nitrogen?",
        answers: [
            { text: "1s² 2s² 2p³", correct: true },
            { text: "1s² 2s² 2p⁴", correct: false },
            { text: "1s² 2p⁶", correct: false },
            { text: "1s² 2s²", correct: false }
        ]
    },
    {
        question: "The element with the highest electronegativity is:",
        answers: [
            { text: "Fluorine", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Chlorine", correct: false },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "Which of the following reactions is an example of a redox reaction?",
        answers: [
            { text: "Zn + CuSO₄ → ZnSO₄ + Cu", correct: true },
            { text: "NaOH + HCl → NaCl + H₂O", correct: false },
            { text: "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl", correct: false },
            { text: "AgNO₃ + NaCl → AgCl + NaNO₃", correct: false }
        ]
    },
    {
        question: "Which gas is the major component of biogas?",
        answers: [
            { text: "Ethane", correct: false },
            { text: "Methane", correct: true },
            { text: "Butane", correct: false },
            { text: "Propane", correct: false }
        ]
    },
    {
        question: "Which of the following does not exhibit hydrogen bonding?",
        answers: [
            { text: "Water", correct: false },
            { text: "Hydrogen fluoride", correct: false },
            { text: "Ammonia", correct: false },
            { text: "Methane", correct: true }
        ]
    },
    {
        question: "Which of the following acids is known as the 'king of chemicals'?",
        answers: [
            { text: "Hydrochloric acid", correct: false },
            { text: "Sulfuric acid", correct: true },
            { text: "Nitric acid", correct: false },
            { text: "Acetic acid", correct: false }
        ]
    },
    {
        question: "What is the geometry of SF₆ molecule?",
        answers: [
            { text: "Tetrahedral", correct: false },
            { text: "Trigonal planar", correct: false },
            { text: "Octahedral", correct: true },
            { text: "Square planar", correct: false }
        ]
    },
    {
        question: "Which of the following is an amphoteric oxide?",
        answers: [
            { text: "CO₂", correct: false },
            { text: "SO₂", correct: false },
            { text: "Al₂O₃", correct: true },
            { text: "NO₂", correct: false }
        ]
    },
    {
        question: "If f(x) = x² + 2x + 1, then f'(x) is:",
        answers: [
            { text: "2x", correct: false },
            { text: "2x + 2", correct: true },
            { text: "x²", correct: false },
            { text: "2x + 1", correct: false }
        ]
    },
    {
        question: "The sum of the first 20 terms of the arithmetic progression 2, 5, 8, 11, … is:",
        answers: [
            { text: "580", correct: true },
            { text: "540", correct: false },
            { text: "620", correct: false },
            { text: "660", correct: false }
        ]
    },
    {
        question: "The value of ∫₀¹ x² dx is:",
        answers: [
            { text: "1/2", correct: false },
            { text: "1/3", correct: true },
            { text: "1/4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "The derivative of sin(x) is:",
        answers: [
            { text: "cos(x)", correct: true },
            { text: "-cos(x)", correct: false },
            { text: "sin(x)", correct: false },
            { text: "-sin(x)", correct: false }
        ]
    },
    {
        question: "The value of lim(x → 0) (sin(x)/x) is:",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "∞", correct: false },
            { text: "-1", correct: false }
        ]
    },
    {
        question: "The quadratic equation has real and equal roots if:",
        answers: [
            { text: "b² > 4ac", correct: false },
            { text: "b² = 4ac", correct: true },
            { text: "b² < 4ac", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "The area of a circle with radius 5 is:",
        answers: [
            { text: "25π", correct: true },
            { text: "10π", correct: false },
            { text: "50π", correct: false },
            { text: "5π", correct: false }
        ]
    },
    {
        question: "The probability of getting a head when flipping a fair coin is:",
        answers: [
            { text: "1", correct: false },
            { text: "0.5", correct: true },
            { text: "0.25", correct: false },
            { text: "0", correct: false }
        ]
    },
    {
        question: "The general solution of the differential equation dy/dx = y is:",
        answers: [
            { text: "y = Ce^x", correct: true },
            { text: "y = Cx", correct: false },
            { text: "y = e^x + C", correct: false },
            { text: "y = log(x) + C", correct: false }
        ]
    },
    {
        question: "If sin(A) = 3/5, then cos(A) is:",
        answers: [
            { text: "4/5", correct: true },
            { text: "3/4", correct: false },
            { text: "5/3", correct: false },
            { text: "5/4", correct: false }
        ]
    },
    {
        question: "The determinant of matrix [[1, 2], [3, 4]] is:",
        answers: [
            { text: "-2", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "-4", correct: false }
        ]
    },
    {
        question: "The line passing through points (2, 3) and (4, 7) has slope:",
        answers: [
            { text: "2", correct: true },
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "The equation of a circle with center (0, 0) and radius 5 is:",
        answers: [
            { text: "x² + y² = 25", correct: true },
            { text: "x² + y² = 5", correct: false },
            { text: "x² + y² = 50", correct: false },
            { text: "x² + y² = 10", correct: false }
        ]
    },
    {
        question: "The integral of cos(x) is:",
        answers: [
            { text: "sin(x)", correct: true },
            { text: "-sin(x)", correct: false },
            { text: "tan(x)", correct: false },
            { text: "-cos(x)", correct: false }
        ]
    },
    {
        question: "If A ∪ B = A ∩ B, then:",
        answers: [
            { text: "A = B", correct: true },
            { text: "A ⊂ B", correct: false },
            { text: "B ⊂ A", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "Which of the following is a prime number?",
        answers: [
            { text: "15", correct: false },
            { text: "29", correct: true },
            { text: "42", correct: false },
            { text: "57", correct: false }
        ]
    },
    {
        question: "If two sides of a triangle are 3 and 4, and the included angle is 90°, the length of the hypotenuse is:",
        answers: [
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "The number of solutions of the equation sin(x) = 1 in the interval [0, 2π] is:",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "The value of e^(iπ) + 1 is:",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "e", correct: false }
        ]
    }
];

    

    // More questions...
    

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener('click', () => selectAnswer(answer, button));
        answersButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    Array.from(answersButton.children).forEach(button => {
        if (button.innerText === questions[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
