const questions = [
    {
        question: "Which number comes next in the series: 2, 4, 8, 16...?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "64", correct: false }
        ]
    },
    {
        question: "What is the missing number in the sequence: 3, 6, 11, 18, ?",
        answers: [
            { text: "27", correct: true },
            { text: "21", correct: false },
            { text: "24", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ]
    },
    {
        question: "Which word does not belong in the following list? Apple, Banana, Carrot, Grape.",
        answers: [
            { text: "Apple", correct: false },
            { text: "Banana", correct: false },
            { text: "Carrot", correct: true },
            { text: "Grape", correct: false }
        ]
    },
    {
        question: "What is the next letter in the series: A, C, E, G...?",
        answers: [
            { text: "H", correct: false },
            { text: "I", correct: false },
            { text: "J", correct: false },
            { text: "I", correct: true }
        ]
    },
    {
        question: "What is the odd one out? Circle, Triangle, Square, Sphere.",
        answers: [
            { text: "Circle", correct: false },
            { text: "Triangle", correct: false },
            { text: "Square", correct: false },
            { text: "Sphere", correct: true }
        ]
    },
    {
        question: "Which number is least like the others? 2, 3, 5, 9, 11.",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "9", correct: true }
        ]
    },
    {
        question: "If you rearrange the letters 'CIFAIPC,' you would have the name of a(n):",
        answers: [
            { text: "City", correct: false },
            { text: "Animal", correct: false },
            { text: "Ocean", correct: false },
            { text: "Country", correct: true }
        ]
    },
    {
        question: "Which shape can be formed by folding this figure?",
        answers: [
            { text: "Square", correct: false },
            { text: "Triangle", correct: false },
            { text: "Cube", correct: true },
            { text: "Rectangle", correct: false }
        ]
    },
    {
        question: "What comes next in this pattern: 1, 4, 9, 16, 25...?",
        answers: [
            { text: "30", correct: false },
            { text: "35", correct: false },
            { text: "36", correct: true },
            { text: "40", correct: false }
        ]
    },
    {
        question: "If you have two apples and you take away one, how many do you have?",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "0", correct: false },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Which number is not a prime number?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which figure is the odd one out?",
        answers: [
            { text: "Square", correct: false },
            { text: "Triangle", correct: false },
            { text: "Rectangle", correct: false },
            { text: "Circle", correct: true }
        ]
    },
    {
        question: "What is the next number in the series: 5, 10, 20, 40...?",
        answers: [
            { text: "50", correct: false },
            { text: "60", correct: false },
            { text: "80", correct: true },
            { text: "100", correct: false }
        ]
    },
    {
        question: "In a certain code, if CAT is coded as 3120, how is DOG coded?",
        answers: [
            { text: "4157", correct: true },
            { text: "4137", correct: false },
            { text: "714", correct: false },
            { text: "794", correct: false }
        ]
    },
    {
        question: "If you have three books and you buy two more, how many do you have?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true }
        ]
    },
    {
        question: "Which letter comes after J in the English alphabet?",
        answers: [
            { text: "H", correct: false },
            { text: "I", correct: false },
            { text: "K", correct: true },
            { text: "L", correct: false }
        ]
    },
    {
        question: "What is the value of (5 + 3) × 2?",
        answers: [
            { text: "10", correct: false },
            { text: "16", correct: true },
            { text: "12", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which is the largest number?",
        answers: [
            { text: "1/2", correct: true },
            { text: "1/3", correct: false },
            { text: "1/4", correct: false },
            { text: "1/5", correct: false }
        ]
    },
    {
        question: "Which day comes after Monday?",
        answers: [
            { text: "Sunday", correct: false },
            { text: "Tuesday", correct: true },
            { text: "Wednesday", correct: false },
            { text: "Thursday", correct: false }
        ]
    },
    {
        question: "What is the next term in the sequence: 1, 1, 2, 3, 5...?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "If it is raining, what can we conclude?",
        answers: [
            { text: "The ground is wet", correct: true },
            { text: "It is sunny", correct: false },
            { text: "There is no rain", correct: false },
            { text: "People are outside", correct: false }
        ]
    },
    {
        question: "What number is represented by the Roman numeral 'X'?",
        answers: [
            { text: "5", correct: false },
            { text: "10", correct: true },
            { text: "15", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "Which number is the odd one out?",
        answers: [
            { text: "11", correct: false },
            { text: "13", correct: false },
            { text: "15", correct: true },
            { text: "17", correct: false }
        ]
    },
    {
        question: "What is the next number in the series: 2, 5, 10, 17...?",
        answers: [
            { text: "26", correct: true },
            { text: "30", correct: false },
            { text: "35", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        question: "What is 15% of 200?",
        answers: [
            { text: "25", correct: false },
            { text: "30", correct: true },
            { text: "35", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        question: "If a car travels 60 miles in one hour, how far will it travel in 2 hours?",
        answers: [
            { text: "120 miles", correct: true },
            { text: "60 miles", correct: false },
            { text: "180 miles", correct: false },
            { text: "150 miles", correct: false }
        ]
    },
    {
        question: "If the first day of the month is a Friday, what day of the week will the 15th be?",
        answers: [
            { text: "Saturday", correct: true },
            { text: "Sunday", correct: false },
            { text: "Monday", correct: false },
            { text: "Tuesday", correct: false }
        ]
    },
    {
        question: "Which of the following is not a color in the rainbow?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: false },
            { text: "Pink", correct: true },
            { text: "Yellow", correct: false }
        ]
    },
    {
        question: "What is the next letter in the series: Z, Y, X, W...?",
        answers: [
            { text: "V", correct: true },
            { text: "U", correct: false },
            { text: "T", correct: false },
            { text: "S", correct: false }
        ]
    },
    {
        question: "What comes after the letter 'D' in the English alphabet?",
        answers: [
            { text: "C", correct: false },
            { text: "E", correct: true },
            { text: "F", correct: false },
            { text: "G", correct: false }
        ]
    },
    {
        question: "What is the sum of angles in a triangle?",
        answers: [
            { text: "90 degrees", correct: false },
            { text: "180 degrees", correct: true },
            { text: "360 degrees", correct: false },
            { text: "270 degrees", correct: false }
        ]
    },
    {
        question: "Which number is the smallest?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "-1", correct: false },
            { text: "-2", correct: true }
        ]
    },
    {
        question: "Which of the following shapes has no corners?",
        answers: [
            { text: "Square", correct: false },
            { text: "Triangle", correct: false },
            { text: "Circle", correct: true },
            { text: "Rectangle", correct: false }
        ]
    },
    {
        question: "What is the value of 12 × 12?",
        answers: [
            { text: "120", correct: false },
            { text: "144", correct: true },
            { text: "112", correct: false },
            { text: "100", correct: false }
        ]
    },
    {
        question: "What is the next number in the series: 2, 5, 10, 17...?",
        answers: [
            { text: "26", correct: true },
            { text: "30", correct: false },
            { text: "35", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        question: "If today is Wednesday, what day will it be in three days?",
        answers: [
            { text: "Friday", correct: false },
            { text: "Saturday", correct: true },
            { text: "Sunday", correct: false },
            { text: "Monday", correct: false }
        ]
    },
    {
        question: "What is the value of 9 + (6 ÷ 2)?",
        answers: [
            { text: "12", correct: true },
            { text: "15", correct: false },
            { text: "18", correct: false },
            { text: "21", correct: false }
        ]
    },
    {
        question: "What is 8 × 7?",
        answers: [
            { text: "54", correct: false },
            { text: "56", correct: true },
            { text: "58", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        question: "Which of the following is a mammal?",
        answers: [
            { text: "Crocodile", correct: false },
            { text: "Lizard", correct: false },
            { text: "Dolphin", correct: true },
            { text: "Sparrow", correct: false }
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
