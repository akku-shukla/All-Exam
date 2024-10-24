const questions = [
    {
        question: "What is the fundamental unit of charge?",
        answers: [
            { text: "1.6 × 10⁻¹⁹ C", correct: true },
            { text: "9.1 × 10⁻³¹ C", correct: false },
            { text: "1.6 × 10⁻¹⁹ A", correct: false },
            { text: "9.1 × 10⁻³¹ kg", correct: false }
        ]
    },
    {
        question: "What is the value of Planck's constant (h)?",
        answers: [
            { text: "6.626 × 10⁻³⁴ J.s", correct: true },
            { text: "3.0 × 10⁸ J.s", correct: false },
            { text: "9.1 × 10⁻³¹ J.s", correct: false },
            { text: "1.6 × 10⁻¹⁹ J.s", correct: false }
        ]
    },
    {
        question: "In which type of reaction is a neutron converted into a proton and electron?",
        answers: [
            { text: "Alpha decay", correct: false },
            { text: "Beta decay", correct: true },
            { text: "Gamma decay", correct: false },
            { text: "Electron capture", correct: false }
        ]
    },
    {
        question: "Which of the following statements is true about the Carnot engine?",
        answers: [
            { text: "It is the most efficient heat engine possible.", correct: true },
            { text: "It can convert 100% of heat into work.", correct: false },
            { text: "Its efficiency depends on the working substance.", correct: false },
            { text: "Its efficiency does not depend on temperature.", correct: false }
        ]
    },
    {
        question: "Which compound is used as a standard in NMR spectroscopy?",
        answers: [
            { text: "Tetramethylsilane (TMS)", correct: true },
            { text: "Benzene", correct: false },
            { text: "Ethanol", correct: false },
            { text: "Acetone", correct: false }
        ]
    },
    {
        question: "What is the correct order of bond dissociation energies for the halogens?",
        answers: [
            { text: "F₂ > Cl₂ > Br₂ > I₂", correct: false },
            { text: "Cl₂ > F₂ > Br₂ > I₂", correct: true },
            { text: "I₂ > Br₂ > Cl₂ > F₂", correct: false },
            { text: "Br₂ > I₂ > Cl₂ > F₂", correct: false }
        ]
    },
    {
        question: "The number of unpaired electrons in [Fe(CN)₆]³⁻ is:",
        answers: [
            { text: "1", correct: true },
            { text: "0", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Which of the following species has a square planar structure?",
        answers: [
            { text: "[Ni(CN)₄]²⁻", correct: false },
            { text: "[PtCl₄]²⁻", correct: true },
            { text: "[FeCl₄]⁻", correct: false },
            { text: "[Cu(NH₃)₄]²⁺", correct: false }
        ]
    },
    {
        question: "The area under the Maxwell-Boltzmann distribution curve represents:",
        answers: [
            { text: "Total energy of gas molecules", correct: false },
            { text: "Number of molecules", correct: true },
            { text: "Average velocity", correct: false },
            { text: "Mean free path", correct: false }
        ]
    },
    {
        question: "What is the angle between two vectors A = i + j and B = i - j?",
        answers: [
            { text: "90°", correct: true },
            { text: "45°", correct: false },
            { text: "0°", correct: false },
            { text: "180°", correct: false }
        ]
    },
    {
        question: "The eigenvalues of a 2x2 matrix A = [3, 1; 0, 4] are:",
        answers: [
            { text: "3, 4", correct: true },
            { text: "3, 3", correct: false },
            { text: "4, 4", correct: false },
            { text: "0, 7", correct: false }
        ]
    },
    {
        question: "The solution to the differential equation dy/dx = y is:",
        answers: [
            { text: "y = x²", correct: false },
            { text: "y = e^x", correct: true },
            { text: "y = ln(x)", correct: false },
            { text: "y = x", correct: false }
        ]
    },
    {
        question: "The determinant of the matrix A = [1, 2; 3, 4] is:",
        answers: [
            { text: "0", correct: false },
            { text: "-2", correct: true },
            { text: "2", correct: false },
            { text: "-4", correct: false }
        ]
    },
    {
        question: "The Laplace transform of f(t) = e^(-2t) is:",
        answers: [
            { text: "1/(s + 2)", correct: true },
            { text: "1/(s - 2)", correct: false },
            { text: "s + 2", correct: false },
            { text: "s - 2", correct: false }
        ]
    },
    {
        question: "What is the number of orbitals in a d-subshell?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "Which law governs the force between two point charges?",
        answers: [
            { text: "Coulomb’s law", correct: true },
            { text: "Newton’s law", correct: false },
            { text: "Faraday’s law", correct: false },
            { text: "Ampere’s law", correct: false }
        ]
    },
    {
        question: "Which among the following has the smallest atomic radius?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon", correct: false },
            { text: "Fluorine", correct: true }
        ]
    },
    {
        question: "What is the bond angle in methane (CH₄)?",
        answers: [
            { text: "120°", correct: false },
            { text: "180°", correct: false },
            { text: "109.5°", correct: true },
            { text: "90°", correct: false }
        ]
    },
    {
        question: "In which organelle does photosynthesis occur?",
        answers: [
            { text: "Mitochondria", correct: false },
            { text: "Chloroplast", correct: true },
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: false }
        ]
    },
    {
        question: "Which enzyme is responsible for DNA replication?",
        answers: [
            { text: "DNA polymerase", correct: true },
            { text: "RNA polymerase", correct: false },
            { text: "Ligase", correct: false },
            { text: "Helicase", correct: false }
        ]
    },
    {
        question: "What is the SI unit of pressure?",
        answers: [
            { text: "Pascal", correct: true },
            { text: "Joule", correct: false },
            { text: "Watt", correct: false },
            { text: "Volt", correct: false }
        ]
    },
    {
        question: "A solution has a pH of 4. What is the concentration of hydrogen ions (H⁺)?",
        answers: [
            { text: "10⁻⁴ M", correct: true },
            { text: "10⁻¹⁰ M", correct: false },
            { text: "10⁻⁷ M", correct: false },
            { text: "4 M", correct: false }
        ]
    },
    {
        question: "What is the shape of the s-orbital?",
        answers: [
            { text: "Spherical", correct: true },
            { text: "Dumbbell", correct: false },
            { text: "Triangular", correct: false },
            { text: "Planar", correct: false }
        ]
    },
    {
        question: "The first ionization energy generally increases across a period due to:",
        answers: [
            { text: "Decreasing atomic radius", correct: false },
            { text: "Increasing atomic radius", correct: false },
            { text: "Increasing nuclear charge", correct: true },
            { text: "Decreasing nuclear charge", correct: false }
        ]
    },
    {
        question: "What is the equivalent resistance of two 4Ω resistors connected in parallel?",
        answers: [
            { text: "2Ω", correct: true },
            { text: "4Ω", correct: false },
            { text: "8Ω", correct: false },
            { text: "1Ω", correct: false }
        ]
    },
    {
        question: "Which gas is evolved when zinc reacts with hydrochloric acid?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Carbon dioxide", correct: false }
        ]
    },
    {
        question: "The magnetic field inside a long solenoid is:",
        answers: [
            { text: "Zero", correct: false },
            { text: "Uniform", correct: true },
            { text: "Non-uniform", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which type of bond is formed by the sharing of electrons?",
        answers: [
            { text: "Ionic bond", correct: false },
            { text: "Covalent bond", correct: true },
            { text: "Hydrogen bond", correct: false },
            { text: "Van der Waals bond", correct: false }
        ]
    },
    {
        question: "What is the oxidation state of sulfur in H₂SO₄?",
        answers: [
            { text: "+2", correct: false },
            { text: "+4", correct: false },
            { text: "+6", correct: true },
            { text: "0", correct: false }
        ]
    },
    {
        question: "The Bohr model of the atom is applicable to:",
        answers: [
            { text: "Helium atom", correct: false },
            { text: "Hydrogen atom", correct: true },
            { text: "Sodium atom", correct: false },
            { text: "Oxygen atom", correct: false }
        ]
    },
    {
        question: "The Heisenberg uncertainty principle is mathematically expressed as:",
        answers: [
            { text: "Δx · Δp ≥ h/4π", correct: true },
            { text: "Δx · Δp ≤ h/4π", correct: false },
            { text: "ΔE · Δt ≥ h/4π", correct: false },
            { text: "ΔE · Δt ≤ h/4π", correct: false }
        ]
    },
    {
        question: "The force on a current-carrying conductor in a magnetic field is given by:",
        answers: [
            { text: "F = qvB sinθ", correct: false },
            { text: "F = ILB sinθ", correct: true },
            { text: "F = mv²/r", correct: false },
            { text: "F = ma", correct: false }
        ]
    },
    {
        question: "What is the value of acceleration due to gravity (g) on the surface of the Earth?",
        answers: [
            { text: "8.9 m/s²", correct: false },
            { text: "10 m/s²", correct: false },
            { text: "9.8 m/s²", correct: true },
            { text: "11 m/s²", correct: false }
        ]
    },
    {
        question: "The unit of magnetic flux is:",
        answers: [
            { text: "Tesla", correct: false },
            { text: "Weber", correct: true },
            { text: "Henry", correct: false },
            { text: "Farad", correct: false }
        ]
    },
    {
        question: "The Van der Waals equation modifies the ideal gas law by including corrections for:",
        answers: [
            { text: "Intermolecular forces and molecular size", correct: true },
            { text: "Pressure and volume", correct: false },
            { text: "Temperature and density", correct: false },
            { text: "Energy and work", correct: false }
        ]
    },
    {
        question: "What is the molecular geometry of SF₆?",
        answers: [
            { text: "Tetrahedral", correct: false },
            { text: "Trigonal planar", correct: false },
            { text: "Octahedral", correct: true },
            { text: "Square pyramidal", correct: false }
        ]
    },
    {
        question: "Which of the following is a non-conservative force?",
        answers: [
            { text: "Gravitational force", correct: false },
            { text: "Electrostatic force", correct: false },
            { text: "Frictional force", correct: true },
            { text: "Magnetic force", correct: false }
        ]
    },
    {
        question: "The principal quantum number (n) defines:",
        answers: [
            { text: "Shape of the orbital", correct: false },
            { text: "Size of the orbital", correct: true },
            { text: "Orientation of the orbital", correct: false },
            { text: "Spin of the electron", correct: false }
        ]
    },
    {
        question: "A photon’s energy is directly proportional to its:",
        answers: [
            { text: "Wavelength", correct: false },
            { text: "Frequency", correct: true },
            { text: "Amplitude", correct: false },
            { text: "Speed", correct: false }
        ]
    },
    {
        question: "Which of the following is a buffer solution?",
        answers: [
            { text: "NaOH + HCl", correct: false },
            { text: "NH₄OH + NH₄Cl", correct: true },
            { text: "Na₂SO₄ + H₂SO₄", correct: false },
            { text: "HCl + NaCl", correct: false }
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
