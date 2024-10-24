const questions = [
    {
        question: "What is the value of sin(30°)?",
        answers: [
            { text: "0", correct: false },
            { text: "1/2", correct: true },
            { text: "√3/2", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "If the roots of the equation x² - 5x + k = 0 are real and equal, what is the value of k?",
        answers: [
            { text: "0", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "25", correct: false }
        ]
    },
    {
        question: "The area of a triangle with vertices at (0, 0), (4, 0), and (0, 3) is:",
        answers: [
            { text: "6", correct: true },
            { text: "12", correct: false },
            { text: "8", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "What is the derivative of f(x) = x³ - 3x² + 4?",
        answers: [
            { text: "3x² - 6x", correct: true },
            { text: "3x² - 3", correct: false },
            { text: "2x² - 6", correct: false },
            { text: "3x² + 6x", correct: false }
        ]
    },
    {
        question: "If log_a b = 2, what is b?",
        answers: [
            { text: "a²", correct: true },
            { text: "a", correct: false },
            { text: "2a", correct: false },
            { text: "1/2a", correct: false }
        ]
    },
    {
        question: "What is the SI unit of force?",
        answers: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Pascal", correct: false },
            { text: "Watt", correct: false }
        ]
    },
    {
        question: "Which of the following is a scalar quantity?",
        answers: [
            { text: "Velocity", correct: false },
            { text: "Force", correct: false },
            { text: "Acceleration", correct: false },
            { text: "Mass", correct: true }
        ]
    },
    {
        question: "The acceleration due to gravity on the surface of the Earth is approximately:",
        answers: [
            { text: "9.8 m/s²", correct: true },
            { text: "8.5 m/s²", correct: false },
            { text: "10 m/s²", correct: false },
            { text: "12 m/s²", correct: false }
        ]
    },
    {
        question: "The principle of conservation of energy states that:",
        answers: [
            { text: "Energy can be created but not destroyed.", correct: false },
            { text: "Energy can be destroyed but not created.", correct: false },
            { text: "Energy cannot be created or destroyed, only transformed.", correct: true },
            { text: "Energy can only be stored.", correct: false }
        ]
    },
    {
        question: "The unit of work is:",
        answers: [
            { text: "Joule", correct: true },
            { text: "Watt", correct: false },
            { text: "Newton", correct: false },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "What is the pH of a neutral solution at 25°C?",
        answers: [
            { text: "0", correct: false },
            { text: "7", correct: true },
            { text: "14", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Which gas is known as laughing gas?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Nitrous oxide", correct: true },
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false }
        ]
    },
    {
        question: "The chemical formula for water is:",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "H2O2", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Which of the following elements is a noble gas?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What is the molar mass of carbon (C)?",
        answers: [
            { text: "6 g/mol", correct: false },
            { text: "12 g/mol", correct: true },
            { text: "14 g/mol", correct: false },
            { text: "16 g/mol", correct: false }
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
        question: "Which organ is responsible for pumping blood throughout the body?",
        answers: [
            { text: "Lung", correct: false },
            { text: "Kidney", correct: false },
            { text: "Heart", correct: true },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "Photosynthesis primarily occurs in which part of the plant?",
        answers: [
            { text: "Roots", correct: false },
            { text: "Stem", correct: false },
            { text: "Leaves", correct: true },
            { text: "Flowers", correct: false }
        ]
    },
    {
        question: "DNA stands for:",
        answers: [
            { text: "Deoxyribonucleic Acid", correct: true },
            { text: "Deoxyribose Nucleic Acid", correct: false },
            { text: "Dioxyribonucleic Acid", correct: false },
            { text: "Deoxynucleotide Acid", correct: false }
        ]
    },
    {
        question: "Which of the following is a function of the liver?",
        answers: [
            { text: "Producing insulin", correct: false },
            { text: "Filtering blood", correct: true },
            { text: "Absorbing nutrients", correct: false },
            { text: "Storing oxygen", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "If all roses are flowers and some flowers fade quickly, which of the following is true?",
        answers: [
            { text: "All roses fade quickly.", correct: false },
            { text: "Some roses fade quickly.", correct: true },
            { text: "No flowers fade quickly.", correct: false },
            { text: "Some flowers are not roses.", correct: false }
        ]
    },
    {
        question: "If it takes 5 workers 10 days to build a wall, how long will it take 10 workers to build the same wall?",
        answers: [
            { text: "5 days", correct: true },
            { text: "10 days", correct: false },
            { text: "15 days", correct: false },
            { text: "20 days", correct: false }
        ]
    },
    {
        question: "In a certain code, if 'CAT' is written as '3120', how is 'DOG' written?",
        answers: [
            { text: "7157", correct: true },
            { text: "7147", correct: false },
            { text: "7180", correct: false },
            { text: "6170", correct: false }
        ]
    },
    {
        question: "What comes next in the series: 2, 4, 8, 16, __?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "40", correct: false }
        ]
    },
    {
        question: "If you rearrange the letters 'CIFAIPC' you would have the name of a:",
        answers: [
            { text: "City", correct: false },
            { text: "Animal", correct: false },
            { text: "Ocean", correct: false },
            { text: "Country", correct: true }
        ]
    },
    {
        question: "Choose the synonym for 'happy':",
        answers: [
            { text: "Sad", correct: false },
            { text: "Joyful", correct: true },
            { text: "Angry", correct: false },
            { text: "Bored", correct: false }
        ]
    },
    {
        question: "What is the antonym of 'difficult'?",
        answers: [
            { text: "Easy", correct: true },
            { text: "Hard", correct: false },
            { text: "Complicated", correct: false },
            { text: "Complex", correct: false }
        ]
    },
    {
        question: "Choose the correct spelling:",
        answers: [
            { text: "Definately", correct: false },
            { text: "Definitely", correct: true },
            { text: "Definatelye", correct: false },
            { text: "Definatelye", correct: false }
        ]
    },
    {
        question: "Which sentence is grammatically correct?",
        answers: [
            { text: "She go to the market.", correct: false },
            { text: "She goes to the market.", correct: true },
            { text: "She going to the market.", correct: false },
            { text: "She gone to the market.", correct: false }
        ]
    },
    {
        question: "Choose the word that best completes the sentence: 'The cat is very __.'",
        answers: [
            { text: "Play", correct: false },
            { text: "Playing", correct: false },
            { text: "Playful", correct: true },
            { text: "Played", correct: false }
        ]
    },
    {
        question: "Who is the current President of the United States? (As of 2024)",
        answers: [
            { text: "Joe Biden", correct: true },
            { text: "Donald Trump", correct: false },
            { text: "Barack Obama", correct: false },
            { text: "Kamala Harris", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2021 Summer Olympics?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "Which technology company is known for its search engine?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Apple", correct: false },
            { text: "Google", correct: true },
            { text: "Amazon", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Won", correct: false },
            { text: "Euro", correct: false }
        ]
    },
    {
        question: "Which social media platform is known for its short videos?",
        answers: [
            { text: "Facebook", correct: false },
            { text: "Instagram", correct: false },
            { text: "TikTok", correct: true },
            { text: "Twitter", correct: false }
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
