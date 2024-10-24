const questions = [
    {
        question: "Which of the following is the functional unit of the kidney?",
        answers: [
            { text: "Neuron", correct: false },
            { text: "Nephron", correct: true },
            { text: "Alveoli", correct: false },
            { text: "Sarcomere", correct: false }
        ]
    },
    {
        question: "Which of the following enzymes is responsible for the digestion of proteins?",
        answers: [
            { text: "Lipase", correct: false },
            { text: "Amylase", correct: false },
            { text: "Trypsin", correct: true },
            { text: "Maltase", correct: false }
        ]
    },
    {
        question: "What is the site of gaseous exchange in the human lungs?",
        answers: [
            { text: "Bronchi", correct: false },
            { text: "Trachea", correct: false },
            { text: "Alveoli", correct: true },
            { text: "Pleura", correct: false }
        ]
    },
    {
        question: "Which organelle is known as the powerhouse of the cell?",
        answers: [
            { text: "Golgi apparatus", correct: false },
            { text: "Lysosome", correct: false },
            { text: "Mitochondria", correct: true },
            { text: "Nucleus", correct: false }
        ]
    },
    {
        question: "Which hormone is responsible for the regulation of blood sugar levels?",
        answers: [
            { text: "Insulin", correct: true },
            { text: "Glucagon", correct: false },
            { text: "Adrenaline", correct: false },
            { text: "Thyroxine", correct: false }
        ]
    },
    {
        question: "Which part of the brain controls voluntary actions?",
        answers: [
            { text: "Medulla oblongata", correct: false },
            { text: "Cerebellum", correct: false },
            { text: "Cerebrum", correct: true },
            { text: "Hypothalamus", correct: false }
        ]
    },
    {
        question: "Which of the following is not a component of DNA?",
        answers: [
            { text: "Adenine", correct: false },
            { text: "Thymine", correct: false },
            { text: "Uracil", correct: true },
            { text: "Cytosine", correct: false }
        ]
    },
    {
        question: "What is the main component of the cell wall in plants?",
        answers: [
            { text: "Cellulose", correct: true },
            { text: "Chitin", correct: false },
            { text: "Peptidoglycan", correct: false },
            { text: "Pectin", correct: false }
        ]
    },
    {
        question: "Which vitamin is essential for blood clotting?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin D", correct: false },
            { text: "Vitamin E", correct: false },
            { text: "Vitamin K", correct: true }
        ]
    },
    {
        question: "Which is the largest gland in the human body?",
        answers: [
            { text: "Pancreas", correct: false },
            { text: "Liver", correct: true },
            { text: "Thyroid", correct: false },
            { text: "Pituitary", correct: false }
        ]
    },
    {
        question: "Which blood group is considered the universal donor?",
        answers: [
            { text: "AB+", correct: false },
            { text: "O-", correct: true },
            { text: "A+", correct: false },
            { text: "B-", correct: false }
        ]
    },
    {
        question: "What is the normal range of the human body temperature?",
        answers: [
            { text: "96°F", correct: false },
            { text: "98.6°F", correct: true },
            { text: "100°F", correct: false },
            { text: "102°F", correct: false }
        ]
    },
    {
        question: "Which of the following diseases is caused by a deficiency of Vitamin C?",
        answers: [
            { text: "Rickets", correct: false },
            { text: "Scurvy", correct: true },
            { text: "Pellagra", correct: false },
            { text: "Night blindness", correct: false }
        ]
    },
    {
        question: "Which process is used by plants to convert sunlight into food?",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Photosynthesis", correct: true },
            { text: "Fermentation", correct: false },
            { text: "Glycolysis", correct: false }
        ]
    },
    {
        question: "Which of the following gases is primarily responsible for global warming?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Which of the following structures in the heart prevents the backflow of blood?",
        answers: [
            { text: "Valves", correct: true },
            { text: "Ventricles", correct: false },
            { text: "Atrium", correct: false },
            { text: "Septum", correct: false }
        ]
    },
    {
        question: "Which part of the human eye is responsible for controlling the amount of light entering it?",
        answers: [
            { text: "Lens", correct: false },
            { text: "Cornea", correct: false },
            { text: "Iris", correct: true },
            { text: "Retina", correct: false }
        ]
    },
    {
        question: "Which of the following is a fat-soluble vitamin?",
        answers: [
            { text: "Vitamin B", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true },
            { text: "Vitamin B12", correct: false }
        ]
    },
    {
        question: "Which organ in the human body produces bile?",
        answers: [
            { text: "Pancreas", correct: false },
            { text: "Liver", correct: true },
            { text: "Gall bladder", correct: false },
            { text: "Kidney", correct: false }
        ]
    },
    {
        question: "Which type of muscle is found in the walls of internal organs?",
        answers: [
            { text: "Skeletal muscle", correct: false },
            { text: "Smooth muscle", correct: true },
            { text: "Cardiac muscle", correct: false },
            { text: "Voluntary muscle", correct: false }
        ]
    },
    {
        question: "Which of the following is the basic functional and structural unit of life?",
        answers: [
            { text: "Tissue", correct: false },
            { text: "Cell", correct: true },
            { text: "Organ", correct: false },
            { text: "Organism", correct: false }
        ]
    },
    {
        question: "What is the role of hemoglobin in the human body?",
        answers: [
            { text: "Digest food", correct: false },
            { text: "Transport oxygen", correct: true },
            { text: "Fight infections", correct: false },
            { text: "Store energy", correct: false }
        ]
    },
    {
        question: "Which blood cells are responsible for immune responses?",
        answers: [
            { text: "Red blood cells", correct: false },
            { text: "Platelets", correct: false },
            { text: "White blood cells", correct: true },
            { text: "Plasma cells", correct: false }
        ]
    },
    {
        question: "Which is the largest bone in the human body?",
        answers: [
            { text: "Femur", correct: true },
            { text: "Tibia", correct: false },
            { text: "Humerus", correct: false },
            { text: "Radius", correct: false }
        ]
    },
    {
        question: "What is the primary function of the large intestine?",
        answers: [
            { text: "Absorption of water", correct: true },
            { text: "Digestion of proteins", correct: false },
            { text: "Absorption of fats", correct: false },
            { text: "Secretion of digestive enzymes", correct: false }
        ]
    },
    {
        question: "What is the role of platelets in the human body?",
        answers: [
            { text: "Transport oxygen", correct: false },
            { text: "Help in blood clotting", correct: true },
            { text: "Fight infections", correct: false },
            { text: "Absorb nutrients", correct: false }
        ]
    },
    {
        question: "Which of the following is an excretory product of protein metabolism?",
        answers: [
            { text: "Urea", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: false },
            { text: "Bile", correct: false }
        ]
    },
    {
        question: "Which part of the human ear is responsible for maintaining balance?",
        answers: [
            { text: "Cochlea", correct: false },
            { text: "Semicircular canals", correct: true },
            { text: "Ear drum", correct: false },
            { text: "Auditory canal", correct: false }
        ]
    },
    {
        question: "Which is the smallest unit of the nervous system?",
        answers: [
            { text: "Neuron", correct: true },
            { text: "Axon", correct: false },
            { text: "Dendrite", correct: false },
            { text: "Synapse", correct: false }
        ]
    },
    {
        question: "Which of the following is a disaccharide?",
        answers: [
            { text: "Glucose", correct: false },
            { text: "Fructose", correct: false },
            { text: "Sucrose", correct: true },
            { text: "Galactose", correct: false }
        ]
    },
    {
        question: "Which part of the brain is responsible for regulating body temperature?",
        answers: [
            { text: "Cerebrum", correct: false },
            { text: "Hypothalamus", correct: true },
            { text: "Cerebellum", correct: false },
            { text: "Medulla oblongata", correct: false }
        ]
    },
    {
        question: "What is the primary function of red blood cells?",
        answers: [
            { text: "Fight infections", correct: false },
            { text: "Transport oxygen", correct: true },
            { text: "Aid in blood clotting", correct: false },
            { text: "Regulate body temperature", correct: false }
        ]
    },
    {
        question: "What type of joint is the knee joint?",
        answers: [
            { text: "Ball and socket joint", correct: false },
            { text: "Hinge joint", correct: true },
            { text: "Pivot joint", correct: false },
            { text: "Gliding joint", correct: false }
        ]
    },
    {
        question: "Which vitamin deficiency causes rickets in children?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin B", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true }
        ]
    },
    {
        question: "Which structure in a flower produces pollen?",
        answers: [
            { text: "Stigma", correct: false },
            { text: "Anther", correct: true },
            { text: "Ovary", correct: false },
            { text: "Sepal", correct: false }
        ]
    },
    {
        question: "Which of the following hormones is secreted by the adrenal glands?",
        answers: [
            { text: "Insulin", correct: false },
            { text: "Thyroxine", correct: false },
            { text: "Adrenaline", correct: true },
            { text: "Estrogen", correct: false }
        ]
    },


    {
        question: "Which organ in the human body is primarily responsible for filtering and excreting waste products from the blood?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Kidney", correct: true },
            { text: "Pancreas", correct: false },
            { text: "Spleen", correct: false }
        ]
    },
    {
        question: "Which is the major site of absorption of nutrients in the human digestive system?",
        answers: [
            { text: "Stomach", correct: false },
            { text: "Small intestine", correct: true },
            { text: "Large intestine", correct: false },
            { text: "Esophagus", correct: false }
        ]
    },
    {
        question: "What is the name of the process by which cells divide to form two identical daughter cells?",
        answers: [
            { text: "Mitosis", correct: true },
            { text: "Meiosis", correct: false },
            { text: "Fertilization", correct: false },
            { text: "Oogenesis", correct: false }
        ]
    },
    {
        question: "Which of the following is the primary structural protein found in the skin and connective tissues?",
        answers: [
            { text: "Keratin", correct: false },
            { text: "Collagen", correct: true },
            { text: "Elastin", correct: false },
            { text: "Fibrin", correct: false }
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
