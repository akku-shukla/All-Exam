const questions = [
    {
        question: "Which of the following enzymes is involved in DNA replication?",
        answers: [
            { text: "Amylase", correct: false },
            { text: "Helicase", correct: true },
            { text: "Lipase", correct: false },
            { text: "Peptidase", correct: false }
        ]
    },
    {
        question: "Which part of the human brain is responsible for regulating respiration and heart rate?",
        answers: [
            { text: "Cerebellum", correct: false },
            { text: "Medulla oblongata", correct: true },
            { text: "Cerebrum", correct: false },
            { text: "Pons", correct: false }
        ]
    },
    {
        question: "Which hormone stimulates ovulation in females?",
        answers: [
            { text: "Estrogen", correct: false },
            { text: "Progesterone", correct: false },
            { text: "Luteinizing hormone (LH)", correct: true },
            { text: "Follicle-stimulating hormone (FSH)", correct: false }
        ]
    },
    {
        question: "Which structure in the human body connects muscles to bones?",
        answers: [
            { text: "Ligaments", correct: false },
            { text: "Cartilage", correct: false },
            { text: "Tendons", correct: true },
            { text: "Joints", correct: false }
        ]
    },
    {
        question: "Which of the following is not a type of epithelial tissue?",
        answers: [
            { text: "Squamous epithelium", correct: false },
            { text: "Cuboidal epithelium", correct: false },
            { text: "Adipose tissue", correct: true },
            { text: "Columnar epithelium", correct: false }
        ]
    },
    {
        question: "Which vitamin is produced in the human body when exposed to sunlight?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin B12", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true }
        ]
    },
    {
        question: "Which of the following is the most abundant gas in Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "Which organ in the human body is responsible for producing insulin?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Pancreas", correct: true },
            { text: "Thyroid", correct: false },
            { text: "Adrenal glands", correct: false }
        ]
    },
    {
        question: "What is the name of the process by which plants release water vapor through their leaves?",
        answers: [
            { text: "Photosynthesis", correct: false },
            { text: "Transpiration", correct: true },
            { text: "Respiration", correct: false },
            { text: "Evaporation", correct: false }
        ]
    },
    {
        question: "Which of the following is the basic unit of heredity?",
        answers: [
            { text: "Chromosome", correct: false },
            { text: "Gene", correct: true },
            { text: "Ribosome", correct: false },
            { text: "DNA", correct: false }
        ]
    },
    {
        question: "Which is the largest artery in the human body?",
        answers: [
            { text: "Pulmonary artery", correct: false },
            { text: "Coronary artery", correct: false },
            { text: "Aorta", correct: true },
            { text: "Femoral artery", correct: false }
        ]
    },
    {
        question: "Which part of the human eye is responsible for focusing light onto the retina?",
        answers: [
            { text: "Iris", correct: false },
            { text: "Lens", correct: true },
            { text: "Cornea", correct: false },
            { text: "Sclera", correct: false }
        ]
    },
    {
        question: "Which of the following is a water-soluble vitamin?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin B12", correct: true },
            { text: "Vitamin D", correct: false },
            { text: "Vitamin E", correct: false }
        ]
    },
    {
        question: "Which gas is primarily responsible for the greenhouse effect?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Methane", correct: false }
        ]
    },
    {
        question: "Which organ system is primarily responsible for transporting nutrients, oxygen, and hormones throughout the body?",
        answers: [
            { text: "Digestive system", correct: false },
            { text: "Respiratory system", correct: false },
            { text: "Circulatory system", correct: true },
            { text: "Excretory system", correct: false }
        ]
    },
    {
        question: "Which part of the neuron receives incoming signals?",
        answers: [
            { text: "Axon", correct: false },
            { text: "Dendrite", correct: true },
            { text: "Myelin sheath", correct: false },
            { text: "Synapse", correct: false }
        ]
    },
    {
        question: "Which of the following is the universal recipient blood type?",
        answers: [
            { text: "O-", correct: false },
            { text: "A+", correct: false },
            { text: "B+", correct: false },
            { text: "AB+", correct: true }
        ]
    },
    {
        question: "Which enzyme breaks down starch into simpler sugars?",
        answers: [
            { text: "Pepsin", correct: false },
            { text: "Amylase", correct: true },
            { text: "Lipase", correct: false },
            { text: "Protease", correct: false }
        ]
    },
    {
        question: "What is the name of the process by which white blood cells engulf and digest pathogens?",
        answers: [
            { text: "Pinocytosis", correct: false },
            { text: "Endocytosis", correct: false },
            { text: "Phagocytosis", correct: true },
            { text: "Exocytosis", correct: false }
        ]
    },
    {
        question: "Which disease is caused by the deficiency of Vitamin B1?",
        answers: [
            { text: "Rickets", correct: false },
            { text: "Beriberi", correct: true },
            { text: "Scurvy", correct: false },
            { text: "Pellagra", correct: false }
        ]
    },
    {
        question: "Which organ is primarily involved in maintaining the water balance in the body?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Liver", correct: false },
            { text: "Kidney", correct: true },
            { text: "Stomach", correct: false }
        ]
    },
    {
        question: "Which of the following is not a part of the respiratory system?",
        answers: [
            { text: "Trachea", correct: false },
            { text: "Larynx", correct: false },
            { text: "Diaphragm", correct: false },
            { text: "Esophagus", correct: true }
        ]
    },
    {
        question: "Which of the following processes is an example of active transport?",
        answers: [
            { text: "Osmosis", correct: false },
            { text: "Diffusion", correct: false },
            { text: "Endocytosis", correct: true },
            { text: "Facilitated diffusion", correct: false }
        ]
    },
    {
        question: "Which of the following ions plays a key role in muscle contraction?",
        answers: [
            { text: "Potassium", correct: false },
            { text: "Calcium", correct: true },
            { text: "Sodium", correct: false },
            { text: "Chloride", correct: false }
        ]
    },
    {
        question: "Which of the following is a purine base in DNA?",
        answers: [
            { text: "Thymine", correct: false },
            { text: "Cytosine", correct: false },
            { text: "Adenine", correct: true },
            { text: "Uracil", correct: false }
        ]
    },
    {
        question: "Which of the following is a characteristic feature of a prokaryotic cell?",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Mitochondria", correct: false },
            { text: "Cell wall", correct: true },
            { text: "Endoplasmic reticulum", correct: false }
        ]
    },
    {
        question: "What is the main function of hemoglobin in the blood?",
        answers: [
            { text: "Fight infections", correct: false },
            { text: "Transport oxygen", correct: true },
            { text: "Regulate body temperature", correct: false },
            { text: "Clot blood", correct: false }
        ]
    },
    {
        question: "Which of the following processes produces the most ATP during cellular respiration?",
        answers: [
            { text: "Glycolysis", correct: false },
            { text: "Citric acid cycle", correct: false },
            { text: "Electron transport chain", correct: true },
            { text: "Fermentation", correct: false }
        ]
    },
    {
        question: "Which organelle is responsible for packaging and transporting proteins in a cell?",
        answers: [
            { text: "Lysosome", correct: false },
            { text: "Ribosome", correct: false },
            { text: "Golgi apparatus", correct: true },
            { text: "Mitochondria", correct: false }
        ]
    },
    {
        question: "Which of the following is the causative agent of malaria?",
        answers: [
            { text: "Bacteria", correct: false },
            { text: "Virus", correct: false },
            { text: "Plasmodium", correct: true },
            { text: "Fungus", correct: false }
        ]
    },
    {
        question: "What is the term for the maintenance of a stable internal environment in an organism?",
        answers: [
            { text: "Homeostasis", correct: true },
            { text: "Osmoregulation", correct: false },
            { text: "Thermoregulation", correct: false },
            { text: "Metabolism", correct: false }
        ]
    },
    {
        question: "Which of the following is the functional unit of the kidney?",
        answers: [
            { text: "Nephron", correct: true },
            { text: "Alveolus", correct: false },
            { text: "Neuron", correct: false },
            { text: "Osteon", correct: false }
        ]
    },
    {
        question: "Which vitamin deficiency causes night blindness?",
        answers: [
            { text: "Vitamin A", correct: true },
            { text: "Vitamin B", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: false }
        ]
    },
    {
        question: "Which of the following is responsible for clotting blood?",
        answers: [
            { text: "Red blood cells", correct: false },
            { text: "White blood cells", correct: false },
            { text: "Platelets", correct: true },
            { text: "Plasma", correct: false }
        ]
    },
    {
        question: "Which organ is primarily responsible for detoxifying chemicals and metabolizing drugs in the body?",
        answers: [
            { text: "Kidney", correct: false },
            { text: "Liver", correct: true },
            { text: "Spleen", correct: false },
            { text: "Pancreas", correct: false }
        ]
    },
    {
        question: "Which hormone regulates the body's metabolic rate?",
        answers: [
            { text: "Insulin", correct: false },
            { text: "Cortisol", correct: false },
            { text: "Thyroxine", correct: true },
            { text: "Adrenaline", correct: false }
        ]
    },
    {
        question: "What type of cells are responsible for producing antibodies?",
        answers: [
            { text: "Red blood cells", correct: false },
            { text: "Platelets", correct: false },
            { text: "B-lymphocytes", correct: true },
            { text: "T-lymphocytes", correct: false }
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
