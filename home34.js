const questions = [
    {
        question: "Identify the synonym of 'Adversary'",
        answers: [
            { text: "Friend", correct: false },
            { text: "Ally", correct: false },
            { text: "Opponent", correct: true },
            { text: "Helper", correct: false }
        ]
    },
    {
        question: "Identify the antonym of 'Benevolent'",
        answers: [
            { text: "Cruel", correct: true },
            { text: "Generous", correct: false },
            { text: "Kind", correct: false },
            { text: "Charitable", correct: false }
        ]
    },
    {
        question: "Choose the correct sentence",
        answers: [
            { text: "She don’t have enough money.", correct: false },
            { text: "She doesn’t has enough money.", correct: false },
            { text: "She doesn’t have enough money.", correct: true },
            { text: "She don’t has enough money.", correct: false }
        ]
    },
    {
        question: "He is the _____ player in the team.",
        answers: [
            { text: "best", correct: true },
            { text: "good", correct: false },
            { text: "better", correct: false },
            { text: "more good", correct: false }
        ]
    },
    {
        question: "The concert was cancelled _____ the rain.",
        answers: [
            { text: "due to", correct: true },
            { text: "because", correct: false },
            { text: "since", correct: false },
            { text: "for", correct: false }
        ]
    },
    {
        question: "She is good _____ playing piano.",
        answers: [
            { text: "in", correct: false },
            { text: "at", correct: true },
            { text: "for", correct: false },
            { text: "with", correct: false }
        ]
    },
    {
        question: "She goes to the market every day, but she never bought anything.",
        answers: [
            { text: "She goes to", correct: false },
            { text: "every day", correct: false },
            { text: "but she never", correct: false },
            { text: "bought anything", correct: true }
        ]
    },
    {
        question: "I saw him _____ the road.",
        answers: [
            { text: "cross", correct: false },
            { text: "crosses", correct: false },
            { text: "crossed", correct: false },
            { text: "crossing", correct: true }
        ]
    },
    {
        question: "Choose the sentence that is grammatically correct.",
        answers: [
            { text: "They was playing football.", correct: false },
            { text: "They were playing football.", correct: true },
            { text: "They is playing football.", correct: false },
            { text: "They playing football.", correct: false }
        ]
    },
    {
        question: "I have been waiting here _____ two hours.",
        answers: [
            { text: "since", correct: false },
            { text: "for", correct: true },
            { text: "from", correct: false },
            { text: "during", correct: false }
        ]
    },
    {
        question: "If 3x + 2 = 11, find x.",
        answers: [
            { text: "3", correct: true },
            { text: "4", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "A man travels 240 km in 8 hours. What is his speed in km/h?",
        answers: [
            { text: "40", correct: false },
            { text: "30", correct: true },
            { text: "50", correct: false },
            { text: "60", correct: false }
        ]
    },
    {
        question: "If the ratio of apples to oranges is 3:5, and there are 15 apples, how many oranges are there?",
        answers: [
            { text: "10", correct: false },
            { text: "25", correct: true },
            { text: "20", correct: false },
            { text: "30", correct: false }
        ]
    },
    {
        question: "Find the simple interest on $500 at a rate of 10% per annum for 3 years.",
        answers: [
            { text: "$100", correct: false },
            { text: "$150", correct: true },
            { text: "$120", correct: false },
            { text: "$50", correct: false }
        ]
    },
    {
        question: "If the perimeter of a square is 40 cm, find the length of one side.",
        answers: [
            { text: "10 cm", correct: true },
            { text: "15 cm", correct: false },
            { text: "20 cm", correct: false },
            { text: "5 cm", correct: false }
        ]
    },
    {
        question: "The average of 4, 6, 8, and 10 is:",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "A shopkeeper buys an item for $400 and sells it for $500. What is his profit percentage?",
        answers: [
            { text: "20%", correct: false },
            { text: "25%", correct: true },
            { text: "30%", correct: false },
            { text: "40%", correct: false }
        ]
    },
    {
        question: "If x² = 16, what is x?",
        answers: [
            { text: "4", correct: true },
            { text: "-4", correct: true },
            { text: "Both A and B", correct: true },
            { text: "Neither A nor B", correct: false }
        ]
    },
    {
        question: "What is the LCM of 12 and 15?",
        answers: [
            { text: "30", correct: false },
            { text: "60", correct: true },
            { text: "90", correct: false },
            { text: "45", correct: false }
        ]
    },
    {
        question: "Find the missing term: 2, 5, 10, 17, ___.",
        answers: [
            { text: "26", correct: true },
            { text: "24", correct: false },
            { text: "28", correct: false },
            { text: "23", correct: false }
        ]
    },
    {
        question: "Which number is missing in the series: 2, 4, 6, 8, ___?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: true },
            { text: "11", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "If A is the father of B, and B is the father of C, what is A to C?",
        answers: [
            { text: "Father", correct: false },
            { text: "Grandfather", correct: true },
            { text: "Brother", correct: false },
            { text: "Uncle", correct: false }
        ]
    },
    {
        question: "Identify the odd one out.",
        answers: [
            { text: "Apple", correct: false },
            { text: "Banana", correct: false },
            { text: "Mango", correct: false },
            { text: "Carrot", correct: true }
        ]
    },
    {
        question: "A clock shows 2:45. What will be the time after 3 hours and 15 minutes?",
        answers: [
            { text: "5:30", correct: false },
            { text: "6:00", correct: true },
            { text: "6:15", correct: false },
            { text: "6:45", correct: false }
        ]
    },
    {
        question: "If C = 3, E = 5, what is G?",
        answers: [
            { text: "7", correct: true },
            { text: "9", correct: false },
            { text: "6", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Which of the following is a prime number?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "In a code language, if CAT is written as DBU, how is DOG written?",
        answers: [
            { text: "EQH", correct: true },
            { text: "DPH", correct: false },
            { text: "EPH", correct: false },
            { text: "EOH", correct: false }
        ]
    },
    {
        question: "In a family of 6, A is the mother of B, C is the father of D, E is the son of B, and F is the daughter of D. How is E related to F?",
        answers: [
            { text: "Uncle", correct: false },
            { text: "Brother", correct: false },
            { text: "Cousin", correct: true },
            { text: "Nephew", correct: false }
        ]
    },
    {
        question: "Complete the series: A, C, E, G, ___?",
        answers: [
            { text: "H", correct: false },
            { text: "I", correct: true },
            { text: "J", correct: false },
            { text: "K", correct: false }
        ]
    },
    {
        question: "Find the next number in the sequence: 1, 1, 2, 3, 5, ___.",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false }
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Bangalore", correct: false },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "Which of the following is not a programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "HTML", correct: true },
            { text: "SQL", correct: false }
        ]
    },
    {
        question: "Who is the current president of the USA (2024)?",
        answers: [
            { text: "Donald Trump", correct: false },
            { text: "Joe Biden", correct: true },
            { text: "Barack Obama", correct: false },
            { text: "Kamala Harris", correct: false }
        ]
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "1942", correct: false },
            { text: "1945", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "Which company owns the search engine Google?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Alphabet", correct: true },
            { text: "Meta", correct: false },
            { text: "Amazon", correct: false }
        ]
    },
    {
        question: "What is the square root of 81?",
        answers: [
            { text: "7", correct: false },
            { text: "9", correct: true },
            { text: "8", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Which of the following is a renewable source of energy?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Natural Gas", correct: false },
            { text: "Wind", correct: true },
            { text: "Oil", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol ‘O’?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Nitrogen", correct: false }
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
