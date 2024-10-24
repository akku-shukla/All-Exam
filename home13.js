const questions = [
    {
        question: "Which of the following sorting algorithms has the best worst-case time complexity?",
        answers: [
            { text: "Merge Sort", correct: true },
            { text: "Quick Sort", correct: false },
            { text: "Insertion Sort", correct: false },
            { text: "Bubble Sort", correct: false }
        ]
    },
    {
        question: "Which of the following is not a regular language?",
        answers: [
            { text: "L = { a^n b^n | n ≥ 0 }", correct: true },
            { text: "L = { a* b* }", correct: false },
            { text: "L = { (ab)^n | n ≥ 0 }", correct: false },
            { text: "L = { a^n | n ≥ 0 }", correct: false }
        ]
    },
    {
        question: "The time complexity of finding the shortest path in a graph using Dijkstra's algorithm is:",
        answers: [
            { text: "O(V + E)", correct: false },
            { text: "O(V log V + E)", correct: true },
            { text: "O(V^2)", correct: false },
            { text: "O(E^2)", correct: false }
        ]
    },
    {
        question: "In a binary tree, the number of leaf nodes is 15. The total number of nodes in the tree is:",
        answers: [
            { text: "30", correct: false },
            { text: "31", correct: true },
            { text: "32", correct: false },
            { text: "33", correct: false }
        ]
    },
    {
        question: "Which of the following protocols is used for secure communication over the internet?",
        answers: [
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "SSH", correct: true },
            { text: "SMTP", correct: false }
        ]
    },
    {
        question: "Which of the following is a page replacement algorithm?",
        answers: [
            { text: "FIFO", correct: false },
            { text: "LRU", correct: false },
            { text: "Optimal", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which data structure is used to implement a recursive algorithm efficiently?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Tree", correct: false },
            { text: "Graph", correct: false }
        ]
    },
    {
        question: "What is the minimum number of spanning trees possible for a connected graph with N vertices?",
        answers: [
            { text: "1", correct: true },
            { text: "N-1", correct: false },
            { text: "N", correct: false },
            { text: "N+1", correct: false }
        ]
    },
    {
        question: "In the TCP/IP model, the transport layer is responsible for:",
        answers: [
            { text: "Data encryption", correct: false },
            { text: "Routing", correct: false },
            { text: "Process-to-process communication", correct: true },
            { text: "Frame transmission", correct: false }
        ]
    },
    {
        question: "In relational databases, a superkey is:",
        answers: [
            { text: "A key that uniquely identifies a row", correct: false },
            { text: "A minimal superkey", correct: false },
            { text: "A key that may contain redundant attributes", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Thevenin’s theorem states that any linear electrical network can be replaced by an equivalent:",
        answers: [
            { text: "Voltage source in series with a resistor", correct: true },
            { text: "Current source in parallel with a resistor", correct: false },
            { text: "Voltage source in parallel with a resistor", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The bandwidth of an FM signal is given by:",
        answers: [
            { text: "Carson's rule", correct: true },
            { text: "Nyquist rate", correct: false },
            { text: "Fourier transform", correct: false },
            { text: "Shannon’s theorem", correct: false }
        ]
    },
    {
        question: "The unit of inductance is:",
        answers: [
            { text: "Farad", correct: false },
            { text: "Henry", correct: true },
            { text: "Tesla", correct: false },
            { text: "Coulomb", correct: false }
        ]
    },
    {
        question: "In a synchronous motor, the speed of the rotor is:",
        answers: [
            { text: "Less than the synchronous speed", correct: false },
            { text: "Greater than the synchronous speed", correct: false },
            { text: "Equal to the synchronous speed", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The power factor of a purely resistive circuit is:",
        answers: [
            { text: "0", correct: false },
            { text: "0.5", correct: false },
            { text: "1", correct: true },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Kirchhoff's Voltage Law (KVL) is based on:",
        answers: [
            { text: "Conservation of charge", correct: false },
            { text: "Conservation of energy", correct: true },
            { text: "Conservation of mass", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "A diode primarily operates as:",
        answers: [
            { text: "A capacitor", correct: false },
            { text: "A switch", correct: false },
            { text: "A rectifier", correct: true },
            { text: "A filter", correct: false }
        ]
    },
    {
        question: "In a transmission line, the characteristic impedance depends on:",
        answers: [
            { text: "The load", correct: false },
            { text: "The frequency", correct: false },
            { text: "The geometry and material of the line", correct: true },
            { text: "The length of the line", correct: false }
        ]
    },
    {
        question: "The unit of conductance is:",
        answers: [
            { text: "Ohm", correct: false },
            { text: "Siemens", correct: true },
            { text: "Volt", correct: false },
            { text: "Farad", correct: false }
        ]
    },
    {
        question: "For maximum power transfer, the load impedance must be:",
        answers: [
            { text: "Equal to the source impedance", correct: true },
            { text: "Twice the source impedance", correct: false },
            { text: "Half the source impedance", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which law states that the internal energy of a system is a function of its temperature and volume?",
        answers: [
            { text: "First law of thermodynamics", correct: true },
            { text: "Second law of thermodynamics", correct: false },
            { text: "Zeroth law of thermodynamics", correct: false },
            { text: "Third law of thermodynamics", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of welding?",
        answers: [
            { text: "TIG", correct: true },
            { text: "CNC", correct: false },
            { text: "CAM", correct: false },
            { text: "EDM", correct: false }
        ]
    },
    {
        question: "The unit of viscosity is:",
        answers: [
            { text: "Pascal", correct: false },
            { text: "Poise", correct: true },
            { text: "Joule", correct: false },
            { text: "Watt", correct: false }
        ]
    },
    {
        question: "In fluid dynamics, the Reynolds number is a ratio of:",
        answers: [
            { text: "Inertial forces to gravitational forces", correct: false },
            { text: "Inertial forces to viscous forces", correct: true },
            { text: "Gravitational forces to viscous forces", correct: false },
            { text: "Viscous forces to inertial forces", correct: false }
        ]
    },
    {
        question: "The efficiency of an ideal Carnot engine depends on:",
        answers: [
            { text: "The working substance", correct: false },
            { text: "The temperature of the heat source and sink", correct: true },
            { text: "The pressure of the heat source", correct: false },
            { text: "The speed of the engine", correct: false }
        ]
    },
    {
        question: "Which of the following is a scalar quantity?",
        answers: [
            { text: "Force", correct: false },
            { text: "Velocity", correct: false },
            { text: "Energy", correct: true },
            { text: "Displacement", correct: false }
        ]
    },
    {
        question: "The unit of thermal conductivity is:",
        answers: [
            { text: "W/mK", correct: true },
            { text: "J/kg", correct: false },
            { text: "N/m²", correct: false },
            { text: "W/s", correct: false }
        ]
    },
    {
        question: "Which of the following is a dimensionless number?",
        answers: [
            { text: "Reynolds number", correct: true },
            { text: "Newton", correct: false },
            { text: "Joule", correct: false },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "The strain in a material is the ratio of:",
        answers: [
            { text: "Change in volume to the original volume", correct: false },
            { text: "Change in length to the original length", correct: true },
            { text: "Change in mass to the original mass", correct: false },
            { text: "Change in density to the original density", correct: false }
        ]
    },
    {
        question: "In fluid mechanics, the Bernoulli's equation is derived from:",
        answers: [
            { text: "Conservation of mass", correct: false },
            { text: "Conservation of energy", correct: true },
            { text: "Conservation of momentum", correct: false },
            { text: "Conservation of volume", correct: false }
        ]
    },
    {
        question: "The specific heat capacity of water is:",
        answers: [
            { text: "4186 J/kg°C", correct: true },
            { text: "5000 J/kg°C", correct: false },
            { text: "1000 J/kg°C", correct: false },
            { text: "3000 J/kg°C", correct: false }
        ]
    },
    {
        question: "The drag coefficient depends on:",
        answers: [
            { text: "The shape of the object", correct: true },
            { text: "The weight of the object", correct: false },
            { text: "The density of the object", correct: false },
            { text: "The temperature of the object", correct: false }
        ]
    },
    {
        question: "Which of the following materials is used to make transformer cores?",
        answers: [
            { text: "Copper", correct: false },
            { text: "Aluminum", correct: false },
            { text: "Silicon steel", correct: true },
            { text: "Cast iron", correct: false }
        ]
    },
    {
        question: "The degree of saturation of soil is defined as:",
        answers: [
            { text: "The ratio of volume of water to total volume", correct: false },
            { text: "The ratio of volume of voids to the volume of solids", correct: false },
            { text: "The ratio of volume of water to volume of voids", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The primary function of ballast in railway tracks is to:",
        answers: [
            { text: "Provide drainage", correct: false },
            { text: "Prevent vegetation growth", correct: false },
            { text: "Support the weight of the train", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The load-bearing capacity of a soil is determined by:",
        answers: [
            { text: "Plate load test", correct: true },
            { text: "Vane shear test", correct: false },
            { text: "Proctor compaction test", correct: false },
            { text: "Direct shear test", correct: false }
        ]
    },
    {
        question: "In reinforced concrete, the purpose of stirrups is to:",
        answers: [
            { text: "Provide tensile strength", correct: false },
            { text: "Resist shear forces", correct: true },
            { text: "Resist compressive forces", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The slump test is performed to measure the:",
        answers: [
            { text: "Strength of concrete", correct: false },
            { text: "Consistency of concrete", correct: false },
            { text: "Durability of concrete", correct: false },
            { text: "Workability of concrete", correct: true }
        ]
    },

{
    question: "The modulus of elasticity is the ratio of:",
    answers: [
        { text: "Stress to strain", correct: true },
        { text: "Force to area", correct: false },
        { text: "Strain to stress", correct: false },
        { text: "Pressure to volume", correct: false }
    ]
},
{
    question: "Which of the following is a non-renewable energy source?",
    answers: [
        { text: "Solar energy", correct: false },
        { text: "Wind energy", correct: false },
        { text: "Natural gas", correct: true },
        { text: "Hydroelectric power", correct: false }
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
