const questions = [
    {
        question: "What is the value of x if 2x + 3 = 11?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "If y = 5x + 2, what is the value of y when x = 3?",
        answers: [
            { text: "15", correct: false },
            { text: "16", correct: false },
            { text: "17", correct: true },
            { text: "18", correct: false }
        ]
    },
    {
        question: "A triangle with sides of 5 cm, 12 cm, and 13 cm is classified as:",
        answers: [
            { text: "Isosceles", correct: false },
            { text: "Right-angled", correct: true },
            { text: "Equilateral", correct: false },
            { text: "Scalene", correct: false }
        ]
    },
    {
        question: "A rectangle has a length of 8 and a width of 6. What is the area?",
        answers: [
            { text: "14", correct: false },
            { text: "28", correct: false },
            { text: "48", correct: true },
            { text: "96", correct: false }
        ]
    },
    {
        question: "If the cost of 5 notebooks is $25, what is the cost of 8 notebooks?",
        answers: [
            { text: "$35", correct: false },
            { text: "$40", correct: true },
            { text: "$45", correct: false },
            { text: "$50", correct: false }
        ]
    },
    {
        question: "What is 25% of 200?",
        answers: [
            { text: "25", correct: false },
            { text: "50", correct: true },
            { text: "75", correct: false },
            { text: "100", correct: false }
        ]
    },
    {
        question: "Simplify: 2/5 × 10/3.",
        answers: [
            { text: "4/15", correct: false },
            { text: "2/15", correct: false },
            { text: "4/3", correct: true },
            { text: "2/3", correct: false }
        ]
    },
    {
        question: "If the circumference of a circle is 44π, what is the radius?",
        answers: [
            { text: "11", correct: false },
            { text: "22", correct: true },
            { text: "44", correct: false },
            { text: "88", correct: false }
        ]
    },
    {
        question: "Simplify: (3² - 1) × 4.",
        answers: [
            { text: "20", correct: false },
            { text: "32", correct: true },
            { text: "48", correct: false },
            { text: "64", correct: false }
        ]
    },
    {
        question: "Solve for x: 4x - 7 = 9.",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true }
        ]
    },
    {
        question: "If a car travels 240 miles in 4 hours, what is its average speed?",
        answers: [
            { text: "50 mph", correct: false },
            { text: "55 mph", correct: false },
            { text: "60 mph", correct: true },
            { text: "65 mph", correct: false }
        ]
    },
    {
        question: "What is the square root of 144?",
        answers: [
            { text: "10", correct: false },
            { text: "11", correct: false },
            { text: "12", correct: true },
            { text: "13", correct: false }
        ]
    },
    {
        question: "If 2x + 4 = 12, what is x?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is 15% of 80?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ]
    },
    {
        question: "Simplify: 6² - 4².",
        answers: [
            { text: "10", correct: false },
            { text: "20", correct: true },
            { text: "28", correct: false },
            { text: "32", correct: false }
        ]
    },
    {
        question: "A train travels 300 miles in 6 hours. What is the average speed?",
        answers: [
            { text: "40 mph", correct: false },
            { text: "45 mph", correct: false },
            { text: "50 mph", correct: true },
            { text: "55 mph", correct: false }
        ]
    },
    {
        question: "Simplify: 8 × (3 + 2).",
        answers: [
            { text: "30", correct: false },
            { text: "32", correct: false },
            { text: "36", correct: false },
            { text: "40", correct: true }
        ]
    },
    {
        question: "If the ratio of a to b is 4:5, and a = 20, what is b?",
        answers: [
            { text: "15", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        question: "What is the sum of the angles in a triangle?",
        answers: [
            { text: "90°", correct: false },
            { text: "120°", correct: false },
            { text: "180°", correct: true },
            { text: "360°", correct: false }
        ]
    },
    {
        question: "Solve: 3x + 2 = 11.",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "A rectangle has a perimeter of 20. If the length is 6, what is the width?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which of the following sentences is grammatically correct?",
        answers: [
            { text: "She go to the market every day.", correct: false },
            { text: "She goes to the market every day.", correct: true },
            { text: "She will goes to the market every day.", correct: false },
            { text: "She going to the market every day.", correct: false }
        ]
    },
    {
        question: "Choose the word that best completes the sentence: 'He is known for his ___ behavior.'",
        answers: [
            { text: "polite", correct: true },
            { text: "impolite", correct: false },
            { text: "politely", correct: false },
            { text: "politeness", correct: false }
        ]
    },
    {
        question: "Identify the part of speech of the underlined word: 'He quickly ran to the store.'",
        answers: [
            { text: "Verb", correct: false },
            { text: "Noun", correct: false },
            { text: "Adverb", correct: true },
            { text: "Adjective", correct: false }
        ]
    },
    {
        question: "Which sentence uses the correct form of the word 'affect'?",
        answers: [
            { text: "The weather affect my mood.", correct: false },
            { text: "The weather affects my mood.", correct: true },
            { text: "The weather effect my mood.", correct: false },
            { text: "The weather effected my mood.", correct: false }
        ]
    },
    {
        question: "Select the correct word: 'She will ___ the award tomorrow.'",
        answers: [
            { text: "receive", correct: true },
            { text: "recieved", correct: false },
            { text: "recieving", correct: false },
            { text: "receives", correct: false }
        ]
    },
    {
        question: "Which sentence is punctuated correctly?",
        answers: [
            { text: "She said, 'I am going to the store'.", correct: false },
            { text: "She said 'I am going to the store.'", correct: false },
            { text: "She said, 'I am going to the store.'", correct: true },
            { text: "She said 'I am going to the store'.", correct: false }
        ]
    },
    {
        question: "Choose the synonym for the word 'diligent':",
        answers: [
            { text: "Lazy", correct: false },
            { text: "Careless", correct: false },
            { text: "Hardworking", correct: true },
            { text: "Negligent", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a simile?",
        answers: [
            { text: "He was a lion in the fight.", correct: false },
            { text: "The leaves danced in the wind.", correct: false },
            { text: "Her smile was like the sun.", correct: true },
            { text: "The stars were diamonds in the sky.", correct: false }
        ]
    },
    {
        question: "Which sentence is in the passive voice?",
        answers: [
            { text: "The chef cooked the meal.", correct: false },
            { text: "The meal was cooked by the chef.", correct: true },
            { text: "The chef is cooking the meal.", correct: false },
            { text: "The chef will cook the meal.", correct: false }
        ]
    },
    {
        question: "Select the correct comparative form of the adjective: 'This cake is ___ than that one.'",
        answers: [
            { text: "delicious", correct: false },
            { text: "more delicious", correct: true },
            { text: "deliciouser", correct: false },
            { text: "most delicious", correct: false }
        ]
    },
    {
        question: "Choose the correct word: 'He is the ___ person in the room.'",
        answers: [
            { text: "taller", correct: false },
            { text: "tallest", correct: true },
            { text: "more tall", correct: false },
            { text: "tall", correct: false }
        ]
    },
    {
        question: "What is the antonym of 'optimistic'?",
        answers: [
            { text: "Hopeful", correct: false },
            { text: "Pessimistic", correct: true },
            { text: "Joyful", correct: false },
            { text: "Enthusiastic", correct: false }
        ]
    },
    {
        question: "Which sentence is grammatically correct?",
        answers: [
            { text: "She was late to the meeting because of the traffic.", correct: true },
            { text: "She were late to the meeting because of the traffic.", correct: false },
            { text: "She are late to the meeting because of the traffic.", correct: false },
            { text: "She being late to the meeting because of the traffic.", correct: false }
        ]
    },
    {
        question: "Which of the following is a noun?",
        answers: [
            { text: "Running", correct: false },
            { text: "Quickly", correct: false },
            { text: "Happiness", correct: true },
            { text: "Beautiful", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a metaphor?",
        answers: [
            { text: "He is as strong as a bull.", correct: false },
            { text: "Her voice was music to his ears.", correct: true },
            { text: "The leaves danced in the wind.", correct: false },
            { text: "The stars were shining bright.", correct: false }
        ]
    },
    {
        question: "Choose the correct form: 'He ___ his homework before dinner.'",
        answers: [
            { text: "finishes", correct: false },
            { text: "finish", correct: false },
            { text: "finished", correct: true },
            { text: "finishing", correct: false }
        ]
    },
    {
        question: "What is the synonym of 'eager'?",
        answers: [
            { text: "Uninterested", correct: false },
            { text: "Enthusiastic", correct: true },
            { text: "Lazy", correct: false },
            { text: "Doubtful", correct: false }
        ]
    },
    {
        question: "Select the correctly spelled word:",
        answers: [
            { text: "Comitee", correct: false },
            { text: "Committee", correct: true },
            { text: "Commite", correct: false },
            { text: "Comitte", correct: false }
        ]
    },
    {
        question: "Complete the sentence: 'The book was ___ interesting.'",
        answers: [
            { text: "very", correct: true },
            { text: "much", correct: false },
            { text: "many", correct: false },
            { text: "most", correct: false }
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
