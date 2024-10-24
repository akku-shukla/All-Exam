const questions = [
    {
        question: "What is the value of \\(\\sqrt{81}\\)?",
        answers: [
            { text: "8", correct: false },
            { text: "9", correct: true },
            { text: "10", correct: false },
            { text: "11", correct: false }
        ]
    },
    {
        question: "If \\( f(x) = 3x^2 - 5x + 2 \\), what is \\( f(2) \\)?",
        answers: [
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false }
        ]
    },
    {
        question: "The equation \\( x^2 - 4x + 4 = 0 \\) has roots:",
        answers: [
            { text: "2, 2", correct: true },
            { text: "-2, -2", correct: false },
            { text: "4, 0", correct: false },
            { text: "-4, 0", correct: false }
        ]
    },
    {
        question: "What is the derivative of \\( f(x) = x^3 - 3x^2 + 4x - 5 \\)?",
        answers: [
            { text: "\\( 3x^2 - 6x + 4 \\)", correct: true },
            { text: "\\( 2x^2 - 6x + 4 \\)", correct: false },
            { text: "\\( 3x^2 - 9x + 4 \\)", correct: false },
            { text: "\\( 2x^2 - 3x + 4 \\)", correct: false }
        ]
    },
    {
        question: "The sum of the roots of the equation \\( ax^2 + bx + c = 0 \\) is:",
        answers: [
            { text: "-\\frac{b}{a}", correct: true },
            { text: "\\frac{b}{a}", correct: false },
            { text: "\\frac{c}{a}", correct: false },
            { text: "-\\frac{c}{b}", correct: false }
        ]
    },
    {
        question: "What is the unit of force?",
        answers: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "An object is thrown upwards with a velocity of 20 m/s. What will be its maximum height? (g = 10 m/s²)",
        answers: [
            { text: "20 m", correct: true },
            { text: "40 m", correct: false },
            { text: "10 m", correct: false },
            { text: "30 m", correct: false }
        ]
    },
    {
        question: "Which of the following is a scalar quantity?",
        answers: [
            { text: "Velocity", correct: false },
            { text: "Acceleration", correct: false },
            { text: "Force", correct: false },
            { text: "Mass", correct: true }
        ]
    },
    {
        question: "What is the frequency of a wave if its period is 0.01 s?",
        answers: [
            { text: "50 Hz", correct: false },
            { text: "100 Hz", correct: true },
            { text: "200 Hz", correct: false },
            { text: "20 Hz", correct: false }
        ]
    },
    {
        question: "Which law states that the total energy in an isolated system remains constant?",
        answers: [
            { text: "Newton's First Law", correct: false },
            { text: "Law of Conservation of Energy", correct: true },
            { text: "Second Law of Thermodynamics", correct: false },
            { text: "Hooke's Law", correct: false }
        ]
    },
    {
        question: "What is the molecular formula for glucose?",
        answers: [
            { text: "C6H12O6", correct: true },
            { text: "C5H10O5", correct: false },
            { text: "C3H6O3", correct: false },
            { text: "C2H4O2", correct: false }
        ]
    },
    {
        question: "Which of the following is an alkali metal?",
        answers: [
            { text: "Calcium", correct: false },
            { text: "Iron", correct: false },
            { text: "Sodium", correct: true },
            { text: "Magnesium", correct: false }
        ]
    },
    {
        question: "What is the pH of a neutral solution at 25°C?",
        answers: [
            { text: "7", correct: true },
            { text: "0", correct: false },
            { text: "14", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Which of the following is a strong acid?",
        answers: [
            { text: "Acetic acid", correct: false },
            { text: "Hydrochloric acid", correct: true },
            { text: "Carbonic acid", correct: false },
            { text: "Citric acid", correct: false }
        ]
    },
    {
        question: "What is the atomic number of carbon?",
        answers: [
            { text: "6", correct: true },
            { text: "12", correct: false },
            { text: "8", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the basic unit of life?",
        answers: [
            { text: "Tissue", correct: false },
            { text: "Organ", correct: false },
            { text: "Cell", correct: true },
            { text: "Organism", correct: false }
        ]
    },
    {
        question: "Which of the following is a renewable energy source?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Natural Gas", correct: false },
            { text: "Solar Energy", correct: true },
            { text: "Nuclear Energy", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "What is the area of a circle with a radius of 7 cm?",
        answers: [
            { text: "154 cm²", correct: true },
            { text: "144 cm²", correct: false },
            { text: "100 cm²", correct: false },
            { text: "200 cm²", correct: false }
        ]
    },
    {
        question: "In the reaction \\( 2H_2 + O_2 \\rightarrow 2H_2O \\), how many moles of water are produced from 2 moles of hydrogen?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "What is the value of the gravitational constant \\( G \\)?",
        answers: [
            { text: "\\( 6.67 \\times 10^{-11} \\, \\text{N m}^2/\\text{kg}^2 \\)", correct: true },
            { text: "\\( 9.81 \\, \\text{m/s}^2 \\)", correct: false },
            { text: "3.14", correct: false },
            { text: "\\( 1.6 \\times 10^{-19} \\)", correct: false }
        ]
    },
    {
        question: "What type of bond is formed between sodium and chlorine in sodium chloride?",
        answers: [
            { text: "Covalent bond", correct: false },
            { text: "Ionic bond", correct: true },
            { text: "Hydrogen bond", correct: false },
            { text: "Metallic bond", correct: false }
        ]
    },
    {
        question: "Which of the following is a characteristic of a good conductor of electricity?",
        answers: [
            { text: "High resistance", correct: false },
            { text: "Low resistance", correct: true },
            { text: "High melting point", correct: false },
            { text: "Brittleness", correct: false }
        ]
    },
    {
        question: "What is the primary function of the mitochondria in a cell?",
        answers: [
            { text: "Protein synthesis", correct: false },
            { text: "Energy production", correct: true },
            { text: "Photosynthesis", correct: false },
            { text: "Cell division", correct: false }
        ]
    },
    {
        question: "What is the formula for kinetic energy?",
        answers: [
            { text: "KE = \\frac{1}{2} mv^2", correct: true },
            { text: "KE = mv^2", correct: false },
            { text: "KE = mgh", correct: false },
            { text: "KE = \\frac{1}{2} mv", correct: false }
        ]
    },
    {
        question: "The process of separating a mixture by heating and cooling is called:",
        answers: [
            { text: "Distillation", correct: true },
            { text: "Filtration", correct: false },
            { text: "Evaporation", correct: false },
            { text: "Condensation", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a non-renewable resource?",
        answers: [
            { text: "Wind Energy", correct: false },
            { text: "Natural Gas", correct: true },
            { text: "Solar Energy", correct: false },
            { text: "Biomass", correct: false }
        ]
    },
    {
        question: "What is the main gas responsible for the greenhouse effect?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for Gold?",
        answers: [
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Pb", correct: false },
            { text: "Fe", correct: false }
        ]
    },
    {
        question: "Which law states that for every action, there is an equal and opposite reaction?",
        answers: [
            { text: "Newton's First Law", correct: false },
            { text: "Newton's Second Law", correct: false },
            { text: "Newton's Third Law", correct: true },
            { text: "Law of Conservation of Momentum", correct: false }
        ]
    },
    {
        question: "What is the unit of measurement for electric current?",
        answers: [
            { text: "Volt", correct: false },
            { text: "Ampere", correct: true },
            { text: "Ohm", correct: false },
            { text: "Watt", correct: false }
        ]
    },
    {
        question: "Which of the following compounds is a hydrate?",
        answers: [
            { text: "NaCl", correct: false },
            { text: "CuSO₄·5H₂O", correct: true },
            { text: "H₂O", correct: false },
            { text: "CO₂", correct: false }
        ]
    },
    {
        question: "What is the main purpose of a catalyst in a chemical reaction?",
        answers: [
            { text: "To increase temperature", correct: false },
            { text: "To speed up the reaction without being consumed", correct: true },
            { text: "To slow down the reaction", correct: false },
            { text: "To change the products of the reaction", correct: false }
        ]
    },
    {
        question: "In which state of matter do particles have the most energy?",
        answers: [
            { text: "Solid", correct: false },
            { text: "Liquid", correct: false },
            { text: "Gas", correct: false },
            { text: "Plasma", correct: true }
        ]
    },
    {
        question: "Which of the following is a characteristic of acids?",
        answers: [
            { text: "Bitter taste", correct: false },
            { text: "Slippery feel", correct: false },
            { text: "Sour taste", correct: true },
            { text: "High pH", correct: false }
        ]
    },
    {
        question: "What is the primary component of natural gas?",
        answers: [
            { text: "Methane", correct: true },
            { text: "Ethane", correct: false },
            { text: "Propane", correct: false },
            { text: "Butane", correct: false }
        ]
    },
    {
        question: "Which of the following best describes a covalent bond?",
        answers: [
            { text: "A bond formed by the transfer of electrons", correct: false },
            { text: "A bond formed by the sharing of electrons", correct: true },
            { text: "A bond formed by magnetic attraction", correct: false },
            { text: "A bond formed by hydrogen ions", correct: false }
        ]
    },
    {
        question: "What is the main function of red blood cells?",
        answers: [
            { text: "To fight infections", correct: false },
            { text: "To transport oxygen", correct: true },
            { text: "To produce hormones", correct: false },
            { text: "To regulate temperature", correct: false }
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
