const questions = [
    {
        question: "What is the full form of SSC?",
        answers: [
            { text: "Staff Selection Commission", correct: true },
            { text: "Staff Service Commission", correct: false },
            { text: "Staff Selection Committee", correct: false },
            { text: "Staff Services Commission", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a function of the SSC?",
        answers: [
            { text: "Conducting examinations", correct: false },
            { text: "Recommending candidates for appointment", correct: false },
            { text: "Training candidates", correct: true },
            { text: "Formulating policies", correct: false }
        ]
    },
    {
        question: "What is the main objective of the SSC Junior Engineer exam?",
        answers: [
            { text: "To recruit doctors", correct: false },
            { text: "To recruit engineers for various ministries", correct: true },
            { text: "To recruit teachers", correct: false },
            { text: "To recruit police officers", correct: false }
        ]
    },
    {
        question: "Which subject is primarily focused on in the General Engineering section of the SSC JE exam?",
        answers: [
            { text: "Mathematics", correct: false },
            { text: "Physics", correct: false },
            { text: "Civil Engineering", correct: true },
            { text: "Mechanical Engineering", correct: false }
        ]
    },
    {
        question: "In which year was the SSC established?",
        answers: [
            { text: "1965", correct: true },
            { text: "1975", correct: false },
            { text: "1985", correct: false },
            { text: "1995", correct: false }
        ]
    },
    {
        question: "Which of the following is a commonly used material in civil engineering?",
        answers: [
            { text: "Wood", correct: false },
            { text: "Glass", correct: false },
            { text: "Concrete", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The ratio of cement, sand, and aggregate in M20 concrete is:",
        answers: [
            { text: "1:2:4", correct: false },
            { text: "1:1.5:3", correct: true },
            { text: "1:1:2", correct: false },
            { text: "1:3:6", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of steel used in construction?",
        answers: [
            { text: "Cast iron", correct: false },
            { text: "Stainless steel", correct: false },
            { text: "Mild steel", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the standard size of a brick?",
        answers: [
            { text: "190 mm × 90 mm × 90 mm", correct: false },
            { text: "200 mm × 100 mm × 75 mm", correct: false },
            { text: "240 mm × 115 mm × 75 mm", correct: true },
            { text: "300 mm × 200 mm × 100 mm", correct: false }
        ]
    },
    {
        question: "What is the purpose of a foundation?",
        answers: [
            { text: "To support the structure", correct: true },
            { text: "To provide aesthetic value", correct: false },
            { text: "To increase the height of a building", correct: false },
            { text: "To prevent earthquakes", correct: false }
        ]
    },
    {
        question: "Which of the following tools is used for measuring the angle in engineering?",
        answers: [
            { text: "Ruler", correct: false },
            { text: "Protractor", correct: true },
            { text: "Caliper", correct: false },
            { text: "Hammer", correct: false }
        ]
    },
    {
        question: "In which of the following states is the headquarters of the SSC located?",
        answers: [
            { text: "Maharashtra", correct: false },
            { text: "Delhi", correct: true },
            { text: "Karnataka", correct: false },
            { text: "Uttar Pradesh", correct: false }
        ]
    },
    {
        question: "What does the term 'tensile strength' refer to in engineering?",
        answers: [
            { text: "Resistance to compression", correct: false },
            { text: "Resistance to pulling forces", correct: true },
            { text: "Resistance to bending", correct: false },
            { text: "Resistance to shear forces", correct: false }
        ]
    },
    {
        question: "The primary purpose of a survey is to:",
        answers: [
            { text: "Measure angles", correct: false },
            { text: "Determine land boundaries", correct: true },
            { text: "Assess land value", correct: false },
            { text: "Plan urban development", correct: false }
        ]
    },
    {
        question: "Which material is used for making reinforced concrete?",
        answers: [
            { text: "Cement", correct: true },
            { text: "Steel", correct: true },
            { text: "Sand", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which type of soil has the highest load-bearing capacity?",
        answers: [
            { text: "Clay", correct: false },
            { text: "Sand", correct: false },
            { text: "Silt", correct: false },
            { text: "Gravel", correct: true }
        ]
    },
    {
        question: "What is the formula for calculating the area of a rectangle?",
        answers: [
            { text: "Length × Width", correct: true },
            { text: "Length + Width", correct: false },
            { text: "Length ÷ Width", correct: false },
            { text: "Length - Width", correct: false }
        ]
    },
    {
        question: "Which of the following is a non-renewable resource?",
        answers: [
            { text: "Solar energy", correct: false },
            { text: "Wind energy", correct: false },
            { text: "Natural gas", correct: true },
            { text: "Biomass", correct: false }
        ]
    },
    {
        question: "The primary goal of the SSC Junior Engineer exam is to assess:",
        answers: [
            { text: "Physical endurance", correct: false },
            { text: "Subject knowledge and reasoning ability", correct: true },
            { text: "Communication skills", correct: false },
            { text: "Leadership qualities", correct: false }
        ]
    },
    {
        question: "What is the main use of a plumb bob?",
        answers: [
            { text: "Measuring angles", correct: false },
            { text: "Checking vertical alignment", correct: true },
            { text: "Measuring distances", correct: false },
            { text: "Cutting materials", correct: false }
        ]
    },
    {
        question: "Which of the following tests is performed to check the workability of concrete?",
        answers: [
            { text: "Compression test", correct: false },
            { text: "Slump test", correct: true },
            { text: "Tensile test", correct: false },
            { text: "Shear test", correct: false }
        ]
    },
    {
        question: "In surveying, what does the term 'benchmark' refer to?",
        answers: [
            { text: "A standard reference point for elevation", correct: true },
            { text: "A measuring tool", correct: false },
            { text: "A type of soil", correct: false },
            { text: "A construction material", correct: false }
        ]
    },
    {
        question: "Which type of bridge uses a triangular truss structure?",
        answers: [
            { text: "Arch bridge", correct: false },
            { text: "Beam bridge", correct: false },
            { text: "Truss bridge", correct: true },
            { text: "Suspension bridge", correct: false }
        ]
    },
    {
        question: "What is the main advantage of using steel in construction?",
        answers: [
            { text: "Low cost", correct: false },
            { text: "High strength-to-weight ratio", correct: true },
            { text: "Aesthetic appeal", correct: false },
            { text: "Fire resistance", correct: false }
        ]
    },
    {
        question: "The term 'dead load' refers to:",
        answers: [
            { text: "The live load on a structure", correct: false },
            { text: "The permanent static load on a structure", correct: true },
            { text: "The weight of movable objects", correct: false },
            { text: "The weight of wind pressure", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of a retaining wall?",
        answers: [
            { text: "To support a roof", correct: false },
            { text: "To prevent soil erosion", correct: false },
            { text: "To hold back soil", correct: true },
            { text: "To improve aesthetics", correct: false }
        ]
    },
    {
        question: "Which type of load acts perpendicular to the surface of a structure?",
        answers: [
            { text: "Shear load", correct: true },
            { text: "Axial load", correct: false },
            { text: "Lateral load", correct: false },
            { text: "Bending load", correct: false }
        ]
    },
    {
        question: "The water-cement ratio is important for determining:",
        answers: [
            { text: "The density of concrete", correct: false },
            { text: "The strength of concrete", correct: true },
            { text: "The color of concrete", correct: false },
            { text: "The cost of concrete", correct: false }
        ]
    },
    {
        question: "In a reinforced concrete beam, the tension reinforcement is usually made of:",
        answers: [
            { text: "Wood", correct: false },
            { text: "Steel", correct: true },
            { text: "Plastic", correct: false },
            { text: "Concrete", correct: false }
        ]
    },
    {
        question: "What does the term 'cantilever' refer to in engineering?",
        answers: [
            { text: "A type of arch", correct: false },
            { text: "A beam supported at one end", correct: true },
            { text: "A vertical structure", correct: false },
            { text: "A type of foundation", correct: false }
        ]
    },
    {
        question: "The tensile strength of a material is tested using which method?",
        answers: [
            { text: "Compression test", correct: false },
            { text: "Shear test", correct: false },
            { text: "Tension test", correct: true },
            { text: "Bending test", correct: false }
        ]
    },
    {
        question: "Which of the following is a primary source of noise pollution?",
        answers: [
            { text: "Wind", correct: false },
            { text: "Construction activities", correct: true },
            { text: "Rain", correct: false },
            { text: "Soil erosion", correct: false }
        ]
    },
    {
        question: "What is the purpose of a cross-section in engineering drawings?",
        answers: [
            { text: "To show the elevation of a structure", correct: false },
            { text: "To depict a slice through the structure", correct: true },
            { text: "To provide dimensions", correct: false },
            { text: "To show the layout", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a type of civil engineering project?",
        answers: [
            { text: "Bridges", correct: false },
            { text: "Highways", correct: false },
            { text: "Software development", correct: true },
            { text: "Dams", correct: false }
        ]
    },
    {
        question: "What does the term 'hydraulic' refer to in civil engineering?",
        answers: [
            { text: "Related to electricity", correct: false },
            { text: "Related to fluid mechanics", correct: true },
            { text: "Related to solid mechanics", correct: false },
            { text: "Related to thermal energy", correct: false }
        ]
    },
    {
        question: "What is the purpose of a surveyor's level?",
        answers: [
            { text: "Measuring horizontal distances", correct: false },
            { text: "Measuring vertical angles", correct: false },
            { text: "Measuring elevations", correct: true },
            { text: "Measuring surface area", correct: false }
        ]
    },
    {
        question: "Which type of concrete is known for its quick setting time?",
        answers: [
            { text: "High-strength concrete", correct: false },
            { text: "Lightweight concrete", correct: false },
            { text: "Rapid-set concrete", correct: true },
            { text: "Reinforced concrete", correct: false }
        ]
    },
    {
        question: "Which instrument is used for measuring distances in surveying?",
        answers: [
            { text: "Theodolite", correct: false },
            { text: "Total station", correct: true },
            { text: "Caliper", correct: false },
            { text: "Ruler", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct unit of stress?",
        answers: [
            { text: "Newton", correct: false },
            { text: "Pascal", correct: true },
            { text: "Joule", correct: false },
            { text: "Watt", correct: false }
        ]
    },
    {
        question: "What is the main environmental concern associated with concrete production?",
        answers: [
            { text: "Water usage", correct: false },
            { text: "Carbon emissions", correct: true },
            { text: "Noise pollution", correct: false },
            { text: "Land degradation", correct: false }
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
