const questions = [
    [
        {
            question: "What is the value of log₂ 16?",
            answers: [
                { text: "2", correct: false },
                { text: "3", correct: false },
                { text: "4", correct: true },
                { text: "5", correct: false }
            ]
        },
        
        {
            question: "Simplify the expression: 3x/4 + 2x/5.",
            answers: [
                { text: "23x/20", correct: true },
                { text: "15x/20", correct: false },
                { text: "10x/20", correct: false },
                { text: "5x/20", correct: false }
            ]
        },
        {
            question: "If the ages of A and B are in the ratio 4:5 and their total age is 45, what is A's age?",
            answers: [
                { text: "18", correct: false },
                { text: "20", correct: true },
                { text: "25", correct: false },
                { text: "22", correct: false }
            ]
        },
        {
            question: "Solve for x in the equation: 2x + 5 = 17.",
            answers: [
                { text: "5", correct: true },
                { text: "6", correct: false },
                { text: "7", correct: false },
                { text: "8", correct: false }
            ]
        },
        {
            question: "A man travels a distance at 60 km/h and returns at 40 km/h. What is the average speed of the entire journey?",
            answers: [
                { text: "48 km/h", correct: false },
                { text: "50 km/h", correct: true },
                { text: "52 km/h", correct: false },
                { text: "54 km/h", correct: false }
            ]
        },
        {
            question: "If a man borrows Rs 5,000 at an interest rate of 10% per annum for 2 years, what will be the total amount payable after 2 years?",
            answers: [
                { text: "Rs 5,500", correct: false },
                { text: "Rs 6,000", correct: false },
                { text: "Rs 6,500", correct: true },
                { text: "Rs 7,000", correct: false }
            ]
        },
        {
            question: "Determine the HCF of 72 and 120.",
            answers: [
                { text: "12", correct: false },
                { text: "24", correct: true },
                { text: "36", correct: false },
                { text: "48", correct: false }
            ]
        },
        {
            question: "If the perimeter of a square is 24 cm, what is the area of the square?",
            answers: [
                { text: "36 cm²", correct: true },
                { text: "49 cm²", correct: false },
                { text: "25 cm²", correct: false },
                { text: "64 cm²", correct: false }
            ]
        },
        {
            question: "Calculate the result of: 12 ÷ 3 × (4 + 2).",
            answers: [
                { text: "8", correct: false },
                { text: "16", correct: false },
                { text: "24", correct: true },
                { text: "12", correct: false }
            ]
        },
        {
            question: "When two dice are thrown, what is the probability of obtaining a sum of 9?",
            answers: [
                { text: "1/12", correct: false },
                { text: "1/6", correct: false },
                { text: "1/9", correct: false },
                { text: "5/36", correct: true }
            ]
        },
        {
            question: "How many diagonals are in a hexagon?",
            answers: [
                { text: "9", correct: true },
                { text: "6", correct: false },
                { text: "12", correct: false },
                { text: "15", correct: false }
            ]
        },
        {
            question: "In a group where 40% like coffee and 60% like tea, if 15% like neither, what percentage like both?",
            answers: [
                { text: "5%", correct: false },
                { text: "10%", correct: true },
                { text: "15%", correct: false },
                { text: "25%", correct: false }
            ]
        },
        {
            question: "A train traveling at 72 km/h crosses a platform in 20 seconds. Given that the train is 180 meters long, what is the length of the platform?",
            answers: [
                { text: "140 meters", correct: false },
                { text: "160 meters", correct: true },
                { text: "120 meters", correct: false },
                { text: "100 meters", correct: false }
            ]
        },
        {
            question: "If a class has 50 students with an average score of 75, what is the total score of all students?",
            answers: [
                { text: "3,750", correct: true },
                { text: "3,800", correct: false },
                { text: "3,900", correct: false },
                { text: "4,000", correct: false }
            ]
        },
        {
            question: "Three workers can complete a task in 4 hours. If two workers leave, how long will it take the remaining worker to finish the task?",
            answers: [
                { text: "12 hours", correct: true },
                { text: "8 hours", correct: false },
                { text: "6 hours", correct: false },
                { text: "10 hours", correct: false }
            ]
        },
        {
            question: "In a group of 90 students, 40 like cricket, 50 like football, and 10 like both. How many students like only cricket?",
            answers: [
                { text: "20", correct: false },
                { text: "30", correct: true },
                { text: "40", correct: false },
                { text: "50", correct: false }
            ]
        },
        {
            question: "If A can complete a job in 10 days and B can do it in 15 days, how long will it take for both to finish the job together?",
            answers: [
                { text: "5 days", correct: false },
                { text: "6 days", correct: true },
                { text: "7 days", correct: false },
                { text: "8 days", correct: false }
            ]
        },
        {
            question: "In a certain code, the word ‘ROAD’ is written as ‘URDG’. How would ‘MIND’ be coded?",
            answers: [
                { text: "PMEG", correct: true },
                { text: "PLME", correct: false },
                { text: "PLEF", correct: false },
                { text: "POGE", correct: false }
            ]
        },
        {
            question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
            answers: [
                { text: "20", correct: false },
                { text: "24", correct: false },
                { text: "32", correct: true },
                { text: "64", correct: false }
            ]
        }
    ],
    [
        {
            question: "What is the antonym of the word ‘Accurate’?",
            answers: [
                { text: "Precise", correct: false },
                { text: "Correct", correct: false },
                { text: "Exact", correct: false },
                { text: "Incorrect", correct: true }
            ]
        },
        {
            question: "Choose the correctly spelled word.",
            answers: [
                { text: "Recieve", correct: false },
                { text: "Receive", correct: true },
                { text: "Recieve", correct: false },
                { text: "Receave", correct: false }
            ]
        },
        {
            question: "What is the synonym of ‘Benevolent’?",
            answers: [
                { text: "Kind", correct: true },
                { text: "Cruel", correct: false },
                { text: "Angry", correct: false },
                { text: "Distant", correct: false }
            ]
        },
        {
            question: "Select the word that means the opposite of ‘Hostile’?",
            answers: [
                { text: "Friendly", correct: true },
                { text: "Aggressive", correct: false },
                { text: "Bitter", correct: false },
                { text: "Violent", correct: false }
            ]
        },
        {
            question: "Complete the sentence: \"She is very ___ about her success.\"",
            answers: [
                { text: "Proud", correct: true },
                { text: "Shameful", correct: false },
                { text: "Sad", correct: false },
                { text: "Angry", correct: false }
            ]
        },
        {
            question: "Identify the correct sentence:",
            answers: [
                { text: "He go to the market.", correct: false },
                { text: "He goes to the market.", correct: true },
                { text: "He gone to the market.", correct: false },
                { text: "He going to the market.", correct: false }
            ]
        },
        {
            question: "What is the meaning of the idiom ‘Break the ice’?",
            answers: [
                { text: "To make someone laugh", correct: false },
                { text: "To initiate conversation", correct: true },
                { text: "To create tension", correct: false },
                { text: "To end a relationship", correct: false }
            ]
        },
        {
            question: "Choose the correct form of the verb: “I wish he ___ here.”",
            answers: [
                { text: "was", correct: true },
                { text: "is", correct: false },
                { text: "were", correct: false },
                { text: "be", correct: false }
            ]
        },
        {
            question: "What is the synonym of ‘Diligent’?",
            answers: [
                { text: "Lazy", correct: false },
                { text: "Hardworking", correct: true },
                { text: "Indifferent", correct: false },
                { text: "Casual", correct: false }
            ]
        },
        {
            question: "What is the meaning of the phrase ‘Under the weather’?",
            answers: [
                { text: "Feeling sick", correct: true },
                { text: "Feeling happy", correct: false },
                { text: "Feeling energetic", correct: false },
                { text: "Feeling sad", correct: false }
            ]
        },
        {
            question: "Select the word that best completes the sentence: “The book was so ___ that I finished it in one sitting.”",
            answers: [
                { text: "Boring", correct: false },
                { text: "Engaging", correct: true },
                { text: "Dull", correct: false },
                { text: "Long", correct: false }
            ]
        },
        {
            question: "Which word means the same as ‘Adept’?",
            answers: [
                { text: "Skillful", correct: true },
                { text: "Unskilled", correct: false },
                { text: "Clumsy", correct: false },
                { text: "Inept", correct: false }
            ]
        },
        {
            question: "What is the correct plural of ‘Cactus’?",
            answers: [
                { text: "Cactuses", correct: true },
                { text: "Cacti", correct: false },
                { text: "Cactuses", correct: false },
                { text: "Cactu", correct: false }
            ]
        },
        {
            question: "What is the meaning of the word ‘Ephemeral’?",
            answers: [
                { text: "Permanent", correct: false },
                { text: "Short-lived", correct: true },
                { text: "Enduring", correct: false },
                { text: "Timeless", correct: false }
            ]
        },
        {
            question: "Choose the correctly punctuated sentence:",
            answers: [
                { text: "Its a sunny day", correct: false },
                { text: "It’s a sunny day", correct: true },
                { text: "Its’ a sunny day", correct: false },
                { text: "It is a sunny day", correct: false }
            ]
        },
        {
            question: "Select the synonym for ‘Diminish’:",
            answers: [
                { text: "Increase", correct: false },
                { text: "Reduce", correct: true },
                { text: "Expand", correct: false },
                { text: "Augment", correct: false }
            ]
        },
        {
            question: "What is the meaning of ‘To throw in the towel’?",
            answers: [
                { text: "To give up", correct: true },
                { text: "To fight harder", correct: false },
                { text: "To win", correct: false },
                { text: "To try again", correct: false }
            ]
        },
        {
            question: "Which of the following words is a noun?",
            answers: [
                { text: "Quickly", correct: false },
                { text: "Happy", correct: false },
                { text: "Joy", correct: true },
                { text: "Run", correct: false }
            ]
        },
        {
            question: "What is the opposite of ‘Sincere’?",
            answers: [
                { text: "Genuine", correct: false },
                { text: "Honest", correct: false },
                { text: "Insincere", correct: true },
                { text: "True", correct: false }
            ]
        },
        {
            question: "Identify the correct form of the verb: “He ___ to the gym every day.”",
            answers: [
                { text: "Goes", correct: true },
                { text: "Go", correct: false },
                { text: "Going", correct: false },
                { text: "Gone", correct: false }
            ]
        },
        {
            question: "What is the synonym of ‘Vivid’?",
            answers: [
                { text: "Dull", correct: false },
                { text: "Bright", correct: true },
                { text: "Faded", correct: false },
                { text: "Bland", correct: false }
            ]
        }
    ]
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
    let currentQuestion = questions.flat()[currentQuestionIndex]; // Flatten the array to access the questions correctly
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
        if (button.innerText === questions.flat()[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.flat().length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.flat().length) { // Check against the flattened array length
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.flat().length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();