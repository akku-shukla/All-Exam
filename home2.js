const questions = [
    {
        question: "Which of the following is the odd one out?",
        answers: [
            { text: "Mango", correct: false },
            { text: "Banana", correct: false },
            { text: "Apple", correct: false },
            { text: "Potato", correct: true }
        ]
    },
    {
        question: "Which of the following posts is NOT recruited through the SSC CGL Examination?",
        answers: [
            { text: "Assistant Audit Officer (AAO)", correct: false },
            { text: "Assistant Section Officer (ASO)", correct: false },
            { text: "Income Tax Inspector", correct: false },
            { text: "Indian Administrative Service (IAS)", correct: true }
        ]
    },
    {
        question: "In which year was the SSC CGL (Combined Graduate Level) Examination first introduced?",
        answers: [
            { text: "1975", correct: false },
            { text: "1990", correct: false },
            { text: "1999", correct: true },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "What is the minimum educational qualification required to apply for SSC CGL?",
        answers: [
            { text: "10th Pass", correct: false },
            { text: "12th Pass", correct: false },
            { text: "Graduation Degree", correct: true },
            { text: "Postgraduate Degree", correct: false }
        ]
    },
    {
        question: "Which tier of the SSC CGL exam includes a descriptive paper in English or Hindi?",
        answers: [
            { text: "Tier 1", correct: false },
            { text: "Tier 2", correct: false },
            { text: "Tier 3", correct: true },
            { text: "Tier 4", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is NOT part of the SSC CGL Tier 1 examination?",
        answers: [
            { text: "General Awareness", correct: false },
            { text: "Quantitative Aptitude", correct: false },
            { text: "Logical Reasoning", correct: false },
            { text: "General Science", correct: true }
        ]
    },
       
    {
        question: "If 'PAPER' is coded as 'OZODQ', how will 'PENCIL' be coded?",
        answers: [
            { text: "ODMBHK", correct: true },
            { text: "OZMBHK", correct: false },
            { text: "ODNAIL", correct: false },
            { text: "OBNAIL", correct: false }
        ]
    },
    {
        question: "In a certain code language, ‘MANGO’ is written as ‘52’. How is ‘GRAPE’ written in that code language?",
        answers: [
            { text: "52", correct: false },
            { text: "56", correct: true },
            { text: "60", correct: false },
            { text: "48", correct: false }
        ]
    },
    {
        question: "A is the brother of B. C is the father of A. D is the mother of C. What is the relation of B to D?",
        answers: [
            { text: "Granddaughter", correct: false },
            { text: "Grandson", correct: false },
            { text: "Son", correct: false },
            { text: "Grandchild", correct: true }
        ]
    },
    {
        question: "Choose the word which is least like the other words:",
        answers: [
            { text: "Flute", correct: false },
            { text: "Guitar", correct: false },
            { text: "Violin", correct: false },
            { text: "Whistle", correct: true }
        ]
    },
    {
        question: "If the ratio of the sides of two squares is 4:9, what is the ratio of their areas?",
        answers: [
            { text: "16:81", correct: true },
            { text: "9:16", correct: false },
            { text: "81:16", correct: false },
            { text: "16:9", correct: false }
        ]
    },
    {
        question: "A train travels 60 km in 45 minutes. What is its speed in km/h?",
        answers: [
            { text: "70 km/h", correct: false },
            { text: "75 km/h", correct: false },
            { text: "80 km/h", correct: false },
            { text: "90 km/h", correct: true }
        ]
    },
    {
        question: "A sum of money doubles itself in 10 years at simple interest. What is the rate of interest?",
        answers: [
            { text: "5%", correct: false },
            { text: "7%", correct: false },
            { text: "10%", correct: true },
            { text: "12%", correct: false }
        ]
    },
    {
        question: "If the cost price of 12 pens is equal to the selling price of 9 pens, what is the percentage profit?",
        answers: [
            { text: "25%", correct: false },
            { text: "33.33%", correct: true },
            { text: "50%", correct: false },
            { text: "20%", correct: false }
        ]
    },
    {
        question: "If 10 men can finish a job in 20 days, how many days will 5 men take to finish the same job?",
        answers: [
            { text: "40 days", correct: true },
            { text: "20 days", correct: false },
            { text: "30 days", correct: false },
            { text: "10 days", correct: false }
        ]
    },
    {
        question: "A triangle has a base of 5 cm and a height of 12 cm. What is its area?",
        answers: [
            { text: "30 cm²", correct: true },
            { text: "60 cm²", correct: false },
            { text: "15 cm²", correct: false },
            { text: "45 cm²", correct: false }
        ]
    },
    {
        question: "What is the least common multiple (LCM) of 12 and 15?",
        answers: [
            { text: "60", correct: true },
            { text: "30", correct: false },
            { text: "120", correct: false },
            { text: "90", correct: false }
        ]
    },
    {
        question: "Choose the correct synonym for 'Abundant':",
        answers: [
            { text: "Scarce", correct: false },
            { text: "Plentiful", correct: true },
            { text: "Little", correct: false },
            { text: "Sparse", correct: false }
        ]
    },
    {
        question: "Fill in the blank: She ____ going to the market when it started raining.",
        answers: [
            { text: "is", correct: false },
            { text: "was", correct: true },
            { text: "had been", correct: false },
            { text: "has been", correct: false }
        ]
    },
    {
        question: "Choose the correct antonym for 'Optimistic':",
        answers: [
            { text: "Pessimistic", correct: true },
            { text: "Positive", correct: false },
            { text: "Hopeful", correct: false },
            { text: "Confident", correct: false }
        ]
    },
    {
        question: "Select the correctly spelt word:",
        answers: [
            { text: "Extacy", correct: false },
            { text: "Exstasy", correct: false },
            { text: "Ecstasy", correct: true },
            { text: "Ecstacy", correct: false }
        ]
    },
    {
        question: "Find the error in this sentence: 'She did not went to the party last night.'",
        answers: [
            { text: "She", correct: false },
            { text: "did not", correct: false },
            { text: "went", correct: true },
            { text: "to the party", correct: false }
        ]
    },
    {
        question: "Choose the correct meaning of the idiom: 'Bite the bullet'",
        answers: [
            { text: "To avoid a situation", correct: false },
            { text: "To endure a difficult situation", correct: true },
            { text: "To blame someone", correct: false },
            { text: "To speak rudely", correct: false }
        ]
    },
    {
        question: "Who is known as the ‘Father of the Indian Constitution’?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "B.R. Ambedkar", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "Which planet is known as the ‘Red Planet’?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "The currency of Japan is:",
        answers: [
            { text: "Yen", correct: true },
            { text: "Dollar", correct: false },
            { text: "Won", correct: false },
            { text: "Peso", correct: false }
        ]
    },
    {
        question: "Which is the largest gland in the human body?",
        answers: [
            { text: "Thyroid", correct: false },
            { text: "Liver", correct: true },
            { text: "Pancreas", correct: false },
            { text: "Kidney", correct: false }
        ]
    },
    {
        question: "Which of the following is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Ganges", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence?",
        answers: [
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1935", correct: false },
            { text: "1965", correct: false }
        ]
    },
    {
        question: "Which of the following is not a Union Territory of India?",
        answers: [
            { text: "Chandigarh", correct: false },
            { text: "Goa", correct: true },
            { text: "Puducherry", correct: false },
            { text: "Daman and Diu", correct: false }
        ]
    },
    {
        question: "The book 'Wings of Fire' was written by:",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "A.P.J. Abdul Kalam", correct: true },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "Which of the following is a chemical element?",
        answers: [
            { text: "Water", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Protein", correct: false },
            { text: "Glucose", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a renewable resource?",
        answers: [
            { text: "Coal", correct: false },
            { text: "Oil", correct: false },
            { text: "Solar energy", correct: true },
            { text: "Natural gas", correct: false }
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Perth", correct: false }
        ]
    },
    {
        question: "Who is the author of the Harry Potter series?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "George R.R. Martin", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2020 Summer Olympics (held in 2021)?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Brazil", correct: false },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "Which of the following is not a programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "HTML", correct: true },
            { text: "Java", correct: false },
            { text: "Excel", correct: true }
        ]
    },
    {
        question: "In which country is the Eiffel Tower located?",
        answers: [
            { text: "Italy", correct: false },
            { text: "France", correct: true },
            { text: "Germany", correct: false },
            { text: "Spain", correct: false }
        ]
    },
    {
        question: "Which Indian cricketer is known as the 'Master Blaster'?",
        answers: [
            { text: "Virat Kohli", correct: false },
            { text: "MS Dhoni", correct: false },
            { text: "Sachin Tendulkar", correct: true },
            { text: "Sunil Gavaskar", correct: false }
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
