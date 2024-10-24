const questions = [
    {
        question: "What is the next number in the series: 2, 4, 8, 16, ?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "36", correct: false }
        ]
    },
    {
        question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies. This is an example of:",
        answers: [
            { text: "Inductive reasoning", correct: false },
            { text: "Deductive reasoning", correct: true },
            { text: "Abductive reasoning", correct: false },
            { text: "Contradictory reasoning", correct: false }
        ]
    },
    {
        question: "Which number is the odd one out: 3, 6, 9, 12, 15, 18, 20?",
        answers: [
            { text: "3", correct: false },
            { text: "6", correct: false },
            { text: "20", correct: true },
            { text: "12", correct: false }
        ]
    },
    {
        question: "If a clock shows the time as 3:15, what is the angle between the hour and the minute hand?",
        answers: [
            { text: "30 degrees", correct: false },
            { text: "45 degrees", correct: false },
            { text: "97.5 degrees", correct: true },
            { text: "90 degrees", correct: false }
        ]
    },
    {
        question: "Which shape does not belong in this group? Circle, Square, Triangle, Sphere.",
        answers: [
            { text: "Circle", correct: false },
            { text: "Square", correct: false },
            { text: "Triangle", correct: false },
            { text: "Sphere", correct: true }
        ]
    },
    {
        question: "If you rearrange the letters 'CIFAIPC' you would have the name of a:",
        answers: [
            { text: "City", correct: false },
            { text: "Animal", correct: false },
            { text: "Ocean", correct: false },
            { text: "Pacific", correct: true }
        ]
    },
    {
        question: "What is the missing number in the sequence: 5, 10, 20, ?, 80?",
        answers: [
            { text: "30", correct: false },
            { text: "40", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        question: "Which of the following words is the opposite of 'expand'?",
        answers: [
            { text: "Contract", correct: true },
            { text: "Increase", correct: false },
            { text: "Enlarge", correct: false },
            { text: "Widen", correct: false }
        ]
    },
    {
        question: "If a train leaves the station at 10:00 AM traveling at 60 km/h, what time will it arrive at a station 180 km away?",
        answers: [
            { text: "12:00 PM", correct: false },
            { text: "1:00 PM", correct: true },
            { text: "2:00 PM", correct: false },
            { text: "3:00 PM", correct: false }
        ]
    },
    {
        question: "Which of the following does not fit with the others? Rose, Daisy, Tulip, Onion.",
        answers: [
            { text: "Rose", correct: false },
            { text: "Daisy", correct: false },
            { text: "Tulip", correct: false },
            { text: "Onion", correct: true }
        ]
    },
    {
        question: "If two pencils cost 80 cents, how much do 8 pencils cost?",
        answers: [
            { text: "$1.20", correct: false },
            { text: "$2.00", correct: true },
            { text: "$2.40", correct: false },
            { text: "$3.20", correct: false }
        ]
    },
    {
        question: "In a certain code, if 'BIRD' is coded as 'CJSF,' how is 'FISH' coded?",
        answers: [
            { text: "GJTK", correct: true },
            { text: "GJSL", correct: false },
            { text: "HJSL", correct: false },
            { text: "HJTK", correct: false }
        ]
    },
    {
        question: "Which number should come next in the series: 1, 4, 9, 16, ?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false }
        ]
    },
    {
        question: "If the day before yesterday was Wednesday, what day will it be the day after tomorrow?",
        answers: [
            { text: "Friday", correct: false },
            { text: "Saturday", correct: true },
            { text: "Sunday", correct: false },
            { text: "Thursday", correct: false }
        ]
    },
    {
        question: "Which of the following figures is different from the others? Triangle, Square, Circle, Rectangle.",
        answers: [
            { text: "Triangle", correct: false },
            { text: "Square", correct: false },
            { text: "Circle", correct: true },
            { text: "Rectangle", correct: false }
        ]
    },
    {
        question: "If 'CAT' is to 'DOG,' then 'PEN' is to:",
        answers: [
            { text: "PAPER", correct: true },
            { text: "PENCIL", correct: false },
            { text: "MARKER", correct: false },
            { text: "BOOK", correct: false }
        ]
    },
    {
        question: "What is the sum of the angles in a triangle?",
        answers: [
            { text: "90 degrees", correct: false },
            { text: "180 degrees", correct: true },
            { text: "360 degrees", correct: false },
            { text: "270 degrees", correct: false }
        ]
    },
    {
        question: "What is the next letter in the sequence: A, C, E, G, ?",
        answers: [
            { text: "H", correct: true },
            { text: "I", correct: false },
            { text: "J", correct: false },
            { text: "K", correct: false }
        ]
    },
    {
        question: "Which of the following is not a prime number?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "If a=b and b=c, then a=c. This statement is an example of:",
        answers: [
            { text: "Transitive property", correct: true },
            { text: "Associative property", correct: false },
            { text: "Commutative property", correct: false },
            { text: "Distributive property", correct: false }
        ]
    },
    {
        question: "What is the missing number in the sequence: 7, 14, 28, ?, 112?",
        answers: [
            { text: "40", correct: false },
            { text: "56", correct: true },
            { text: "70", correct: false },
            { text: "84", correct: false }
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
        question: "If a rectangle has a length of 8 and a width of 4, what is its area?",
        answers: [
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "36", correct: false },
            { text: "40", correct: false }
        ]
    },
    {
        question: "If a farmer has 10 sheep, and 4 of them die, how many sheep does he have left?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "10", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "What is the next number in the series: 1, 2, 4, 8, 16, ?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "30", correct: false },
            { text: "32", correct: true }
        ]
    },
    {
        question: "Which of the following is an anagram of 'LISTEN'?",
        answers: [
            { text: "SILENT", correct: true },
            { text: "TINSLE", correct: false },
            { text: "LISTER", correct: false },
            { text: "STENIL", correct: false }
        ]
    },
    {
        question: "In a family of six members P, Q, R, S, T, and U, T is the father of R. R is the brother of P. Q is the wife of T. How is U related to T?",
        answers: [
            { text: "Son", correct: false },
            { text: "Daughter", correct: true },
            { text: "Sister", correct: false },
            { text: "Mother", correct: false }
        ]
    },
    {
        question: "Which of the following is a synonym for 'quick'?",
        answers: [
            { text: "Slow", correct: false },
            { text: "Fast", correct: true },
            { text: "Steady", correct: false },
            { text: "Tardy", correct: false }
        ]
    },
    {
        question: "If the code for 'PINE' is 'QJOE,' what is the code for 'BARK'?",
        answers: [
            { text: "CBSL", correct: true },
            { text: "CBQM", correct: false },
            { text: "CBRL", correct: false },
            { text: "CBRO", correct: false }
        ]
    },
    {
        question: "If a car travels 60 km in 1 hour, how long will it take to travel 180 km?",
        answers: [
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: true },
            { text: "4 hours", correct: false },
            { text: "5 hours", correct: false }
        ]
    },
    {
        question: "Which number comes next in the series: 5, 11, 17, 23, ?",
        answers: [
            { text: "29", correct: true },
            { text: "31", correct: false },
            { text: "35", correct: false },
            { text: "37", correct: false }
        ]
    },
    {
        question: "What is the opposite of 'increase'?",
        answers: [
            { text: "Diminish", correct: true },
            { text: "Augment", correct: false },
            { text: "Expand", correct: false },
            { text: "Extend", correct: false }
        ]
    },
    {
        question: "What is the value of 12 × 12?",
        answers: [
            { text: "120", correct: false },
            { text: "144", correct: true },
            { text: "156", correct: false },
            { text: "162", correct: false }
        ]
    },
    {
        question: "Which of the following animals is known as the 'King of the Jungle'?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Lion", correct: true },
            { text: "Elephant", correct: false },
            { text: "Gorilla", correct: false }
        ]
    },
    {
        question: "If a piece of string is 36 inches long, how many feet long is it?",
        answers: [
            { text: "2 feet", correct: false },
            { text: "3 feet", correct: true },
            { text: "4 feet", correct: false },
            { text: "5 feet", correct: false }
        ]
    },
    {
        question: "What is the next letter in the sequence: X, Y, Z, A, B, ?",
        answers: [
            { text: "C", correct: true },
            { text: "D", correct: false },
            { text: "E", correct: false },
            { text: "F", correct: false }
        ]
    },
    {
        question: "Which of the following is not a continent?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: false },
            { text: "Atlantis", correct: true },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "How many days are there in a leap year?",
        answers: [
            { text: "364", correct: false },
            { text: "365", correct: false },
            { text: "366", correct: true },
            { text: "367", correct: false }
        ]
    },
    {
        question: "If you multiply any number by zero, what is the result?",
        answers: [
            { text: "One", correct: false },
            { text: "Zero", correct: true },
            { text: "The number itself", correct: false },
            { text: "Undefined", correct: false }
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
