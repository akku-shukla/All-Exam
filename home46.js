const questions = [
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Skin", correct: true },
            { text: "Liver", correct: false },
            { text: "Lung", correct: false }
        ]
    },
    {
        question: "How many bones are in the adult human body?",
        answers: [
            { text: "206", correct: true },
            { text: "250", correct: false },
            { text: "198", correct: false },
            { text: "312", correct: false }
        ]
    },
    {
        question: "What is the primary function of red blood cells?",
        answers: [
            { text: "Fight infection", correct: false },
            { text: "Carry oxygen", correct: true },
            { text: "Clot blood", correct: false },
            { text: "Regulate temperature", correct: false }
        ]
    },
    {
        question: "Which part of the brain is responsible for coordination and balance?",
        answers: [
            { text: "Cerebrum", correct: false },
            { text: "Cerebellum", correct: true },
            { text: "Brainstem", correct: false },
            { text: "Hippocampus", correct: false }
        ]
    },
    {
        question: "What is the normal human body temperature in degrees Celsius?",
        answers: [
            { text: "36.1 - 37.2", correct: true },
            { text: "37.0 - 37.5", correct: false },
            { text: "37.5 - 38.0", correct: false },
            { text: "38.0 - 39.0", correct: false }
        ]
    },
    {
        question: "Which muscle is responsible for the pumping of blood throughout the body?",
        answers: [
            { text: "Diaphragm", correct: false },
            { text: "Heart", correct: true },
            { text: "Bicep", correct: false },
            { text: "Tricep", correct: false }
        ]
    },
    {
        question: "What is the largest artery in the human body?",
        answers: [
            { text: "Femoral artery", correct: false },
            { text: "Pulmonary artery", correct: false },
            { text: "Aorta", correct: true },
            { text: "Coronary artery", correct: false }
        ]
    },
    {
        question: "Which organ is primarily responsible for detoxifying chemicals and metabolizing drugs?",
        answers: [
            { text: "Kidney", correct: false },
            { text: "Liver", correct: true },
            { text: "Spleen", correct: false },
            { text: "Pancreas", correct: false }
        ]
    },
    {
        question: "What is the function of the diaphragm?",
        answers: [
            { text: "Support the spine", correct: false },
            { text: "Control breathing", correct: true },
            { text: "Pump blood", correct: false },
            { text: "Produce hormones", correct: false }
        ]
    },
    {
        question: "How many chambers does the human heart have?",
        answers: [
            { text: "Two", correct: false },
            { text: "Three", correct: false },
            { text: "Four", correct: true },
            { text: "Five", correct: false }
        ]
    },
    {
        question: "What type of joint is the knee?",
        answers: [
            { text: "Hinge joint", correct: true },
            { text: "Ball-and-socket joint", correct: false },
            { text: "Pivot joint", correct: false },
            { text: "Fixed joint", correct: false }
        ]
    },
    {
        question: "Which part of the eye controls the amount of light that enters?",
        answers: [
            { text: "Lens", correct: false },
            { text: "Retina", correct: false },
            { text: "Cornea", correct: false },
            { text: "Iris", correct: true }
        ]
    },
    {
        question: "What is the basic structural unit of the human body?",
        answers: [
            { text: "Organ", correct: false },
            { text: "Cell", correct: true },
            { text: "Tissue", correct: false },
            { text: "System", correct: false }
        ]
    },
    {
        question: "What is the function of the kidneys?",
        answers: [
            { text: "Produce insulin", correct: false },
            { text: "Filter blood", correct: true },
            { text: "Store bile", correct: false },
            { text: "Absorb nutrients", correct: false }
        ]
    },
    {
        question: "Which system in the body is responsible for hormone production?",
        answers: [
            { text: "Digestive system", correct: false },
            { text: "Endocrine system", correct: true },
            { text: "Circulatory system", correct: false },
            { text: "Nervous system", correct: false }
        ]
    },
    {
        question: "What is the primary role of the small intestine?",
        answers: [
            { text: "Absorb nutrients", correct: true },
            { text: "Digest proteins", correct: false },
            { text: "Store waste", correct: false },
            { text: "Produce hormones", correct: false }
        ]
    },
    {
        question: "Which bone protects the brain?",
        answers: [
            { text: "Rib", correct: false },
            { text: "Skull", correct: true },
            { text: "Spine", correct: false },
            { text: "Pelvis", correct: false }
        ]
    },
    {
        question: "What is the primary function of the lungs?",
        answers: [
            { text: "Circulate blood", correct: false },
            { text: "Exchange gases", correct: true },
            { text: "Produce hormones", correct: false },
            { text: "Filter waste", correct: false }
        ]
    },
    {
        question: "What is the main purpose of the large intestine?",
        answers: [
            { text: "Absorb nutrients", correct: false },
            { text: "Produce enzymes", correct: false },
            { text: "Absorb water", correct: true },
            { text: "Digest food", correct: false }
        ]
    },
    {
        question: "Which organ is responsible for producing insulin?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Pancreas", correct: true },
            { text: "Kidney", correct: false },
            { text: "Stomach", correct: false }
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
            { text: "Stapes", correct: true },
            { text: "Femur", correct: false },
            { text: "Tibia", correct: false },
            { text: "Humerus", correct: false }
        ]
    },
    {
        question: "What is the primary function of the spleen?",
        answers: [
            { text: "Produce bile", correct: false },
            { text: "Filter blood", correct: true },
            { text: "Store glucose", correct: false },
            { text: "Regulate temperature", correct: false }
        ]
    },
    {
        question: "Which part of the nervous system controls voluntary actions?",
        answers: [
            { text: "Autonomic", correct: false },
            { text: "Peripheral", correct: false },
            { text: "Somatic", correct: true },
            { text: "Central", correct: false }
        ]
    },
    {
        question: "How many pairs of ribs does an adult human have?",
        answers: [
            { text: "12", correct: false },
            { text: "24", correct: true },
            { text: "16", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Which substance in the body helps to carry oxygen?",
        answers: [
            { text: "Hemoglobin", correct: true },
            { text: "Plasma", correct: false },
            { text: "Platelets", correct: false },
            { text: "Antibodies", correct: false }
        ]
    },
    {
        question: "What is the primary function of the skin?",
        answers: [
            { text: "Store fat", correct: false },
            { text: "Protect internal organs", correct: true },
            { text: "Regulate temperature", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the largest muscle in the human body?",
        answers: [
            { text: "Gluteus maximus", correct: true },
            { text: "Quadriceps", correct: false },
            { text: "Hamstring", correct: false },
            { text: "Bicep", correct: false }
        ]
    },
    {
        question: "Which organ is involved in the production of sound?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Larynx", correct: true },
            { text: "Pharynx", correct: false },
            { text: "Esophagus", correct: false }
        ]
    },
    {
        question: "What part of the eye is responsible for sharp vision?",
        answers: [
            { text: "Cornea", correct: false },
            { text: "Lens", correct: false },
            { text: "Retina", correct: true },
            { text: "Pupil", correct: false }
        ]
    },
    {
        question: "How many layers are there in the skin?",
        answers: [
            { text: "Two", correct: false },
            { text: "Three", correct: true },
            { text: "Four", correct: false },
            { text: "Five", correct: false }
        ]
    },
    {
        question: "What is the primary function of platelets?",
        answers: [
            { text: "Fight infection", correct: false },
            { text: "Carry oxygen", correct: false },
            { text: "Clot blood", correct: true },
            { text: "Transport nutrients", correct: false }
        ]
    },
    {
        question: "Which gland is known as the 'master gland'?",
        answers: [
            { text: "Thyroid", correct: false },
            { text: "Pituitary", correct: true },
            { text: "Adrenal", correct: false },
            { text: "Pineal", correct: false }
        ]
    },
    {
        question: "What is the primary function of the human skin?",
        answers: [
            { text: "Regulate body temperature", correct: true },
            { text: "Produce hormones", correct: false },
            { text: "Absorb nutrients", correct: false },
            { text: "Store fat", correct: false }
        ]
    },
    {
        question: "How many lobes does the human brain have?",
        answers: [
            { text: "Four", correct: true },
            { text: "Five", correct: false },
            { text: "Three", correct: false },
            { text: "Six", correct: false }
        ]
    },
    {
        question: "What type of blood vessel carries oxygenated blood away from the heart?",
        answers: [
            { text: "Veins", correct: false },
            { text: "Capillaries", correct: false },
            { text: "Arteries", correct: true },
            { text: "Aorta", correct: false }
        ]
    },
    {
        question: "What is the primary function of the adrenal glands?",
        answers: [
            { text: "Produce adrenaline", correct: true },
            { text: "Regulate metabolism", correct: false },
            { text: "Store glucose", correct: false },
            { text: "Filter blood", correct: false }
        ]
    },
    {
        question: "Which vitamin is primarily produced when the skin is exposed to sunlight?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin B12", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true }
        ]
    },
    {
        question: "What is the term for the body’s response to injury or infection?",
        answers: [
            { text: "Inflammation", correct: true },
            { text: "Digestion", correct: false },
            { text: "Metabolism", correct: false },
            { text: "Reproduction", correct: false }
        ]
    },
    {
        question: "What is the main purpose of the human skeleton?",
        answers: [
            { text: "Protect internal organs", correct: true },
            { text: "Store fat", correct: false },
            { text: "Produce hormones", correct: false },
            { text: "Absorb nutrients", correct: false }
        ]
    },
    {
        question: "What part of the ear is responsible for balance?",
        answers: [
            { text: "Cochlea", correct: false },
            { text: "Semicircular canals", correct: true },
            { text: "Eardrum", correct: false },
            { text: "Auditory canal", correct: false }
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
