const questions = [
    {
        question: "Which of the following is a function of the Reserve Bank of India (RBI)?",
        answers: [
            { text: "Issuing currency notes", correct: true },
            { text: "Regulating the stock market", correct: false },
            { text: "Managing public debt", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the full form of KYC?",
        answers: [
            { text: "Know Your Credit", correct: false },
            { text: "Know Your Customer", correct: true },
            { text: "Know Your Capital", correct: false },
            { text: "Know Your Company", correct: false }
        ]
    },
    {
        question: "The base year for the calculation of the Index of Industrial Production (IIP) is:",
        answers: [
            { text: "1993-94", correct: false },
            { text: "2004-05", correct: false },
            { text: "2011-12", correct: true },
            { text: "2015-16", correct: false }
        ]
    },
    {
        question: "Which of the following is not a type of bank account?",
        answers: [
            { text: "Savings account", correct: false },
            { text: "Current account", correct: false },
            { text: "Fixed deposit account", correct: false },
            { text: "Insurance account", correct: true }
        ]
    },
    {
        question: "The term 'bull market' refers to:",
        answers: [
            { text: "A market in decline", correct: false },
            { text: "A market that is stable", correct: false },
            { text: "A market on the rise", correct: true },
            { text: "A market that is unpredictable", correct: false }
        ]
    },
    {
        question: "The bank charges a penalty for early withdrawal from:",
        answers: [
            { text: "Savings account", correct: false },
            { text: "Current account", correct: false },
            { text: "Fixed deposit account", correct: true },
            { text: "Recurring deposit account", correct: false }
        ]
    },
    {
        question: "The primary objective of the Fiscal Policy is to:",
        answers: [
            { text: "Control inflation", correct: false },
            { text: "Increase economic growth", correct: false },
            { text: "Regulate the supply of money", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The term 'Cheque Bounce' refers to:",
        answers: [
            { text: "A bounced loan", correct: false },
            { text: "A cheque that cannot be processed due to insufficient funds", correct: true },
            { text: "A cheque that has been forged", correct: false },
            { text: "A cheque issued in error", correct: false }
        ]
    },
    {
        question: "What does the acronym 'ATM' stand for?",
        answers: [
            { text: "Automatic Teller Machine", correct: true },
            { text: "Automated Transfer Machine", correct: false },
            { text: "Automated Teller Mechanism", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of risk associated with banking?",
        answers: [
            { text: "Credit risk", correct: false },
            { text: "Operational risk", correct: false },
            { text: "Market risk", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "If the sum of two numbers is 50 and their difference is 10, what are the numbers?",
        answers: [
            { text: "20 and 30", correct: true },
            { text: "25 and 35", correct: false },
            { text: "15 and 35", correct: false },
            { text: "20 and 40", correct: false }
        ]
    },
    {
        question: "A train travels 60 km in 1 hour. How far will it travel in 2.5 hours?",
        answers: [
            { text: "120 km", correct: false },
            { text: "150 km", correct: true },
            { text: "180 km", correct: false },
            { text: "200 km", correct: false }
        ]
    },
    {
        question: "If a person can complete a work in 30 days, how many days will it take for 5 people to complete the same work?",
        answers: [
            { text: "5 days", correct: false },
            { text: "6 days", correct: true },
            { text: "15 days", correct: false },
            { text: "25 days", correct: false }
        ]
    },
    {
        question: "If the cost price of an item is ₹200 and it is sold for ₹250, what is the profit percentage?",
        answers: [
            { text: "20%", correct: false },
            { text: "25%", correct: true },
            { text: "30%", correct: false },
            { text: "35%", correct: false }
        ]
    },
    {
        question: "A man is 4 times as old as his son. In 20 years, he will be twice as old as his son. How old is the son now?",
        answers: [
            { text: "10 years", correct: true },
            { text: "20 years", correct: false },
            { text: "30 years", correct: false },
            { text: "40 years", correct: false }
        ]
    },
    {
        question: "Choose the word that best fits the sentence: 'She has a very _____ way of speaking.'",
        answers: [
            { text: "Eloquent", correct: true },
            { text: "Vague", correct: false },
            { text: "Tedious", correct: false },
            { text: "Dull", correct: false }
        ]
    },
    {
        question: "What is the synonym of 'abundant'?",
        answers: [
            { text: "Scarce", correct: false },
            { text: "Plentiful", correct: true },
            { text: "Rare", correct: false },
            { text: "Inadequate", correct: false }
        ]
    },
    {
        question: "Choose the antonym of 'diligent':",
        answers: [
            { text: "Hardworking", correct: false },
            { text: "Lazy", correct: true },
            { text: "Assiduous", correct: false },
            { text: "Industrious", correct: false }
        ]
    },
    {
        question: "What is the meaning of the idiom 'to beat around the bush'?",
        answers: [
            { text: "To avoid getting to the point", correct: true },
            { text: "To win a competition", correct: false },
            { text: "To celebrate an event", correct: false },
            { text: "To engage in a fight", correct: false }
        ]
    },
    {
        question: "Identify the correctly punctuated sentence:",
        answers: [
            { text: "Its a beautiful day", correct: false },
            { text: "It's a beautiful day", correct: true },
            { text: "Its' a beautiful day", correct: false },
            { text: "It is a beautiful day", correct: false }
        ]
    },
    {
        question: "Which of the following is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Dollar", correct: false },
            { text: "Peso", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "B.R. Ambedkar", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "The headquarters of the World Health Organization (WHO) is located in:",
        answers: [
            { text: "Geneva", correct: true },
            { text: "New York", correct: false },
            { text: "Paris", correct: false },
            { text: "London", correct: false }
        ]
    },
    {
        question: "Which of the following is the largest continent by area?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "North America", correct: false },
            { text: "Antarctica", correct: false }
        ]
    },
    {
        question: "If all A are B and all B are C, which of the following is true?",
        answers: [
            { text: "All A are C.", correct: true },
            { text: "All C are A.", correct: false },
            { text: "No A are C.", correct: false },
            { text: "Some A are not C.", correct: false }
        ]
    },
    {
        question: "In a certain code language, 'SCHOOL' is coded as 'TDPWJM.' How is 'COLLEGE' coded in that language?",
        answers: [
            { text: "DPMMFHF", correct: true },
            { text: "DPMMGHF", correct: false },
            { text: "DQMNKHF", correct: false },
            { text: "DQMNJF", correct: false }
        ]
    },
    {
        question: "Which number will replace the question mark? 2, 4, 8, 16, ?",
        answers: [
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "64", correct: false },
            { text: "128", correct: false }
        ]
    },
    {
        question: "Find the odd one out: 2, 3, 5, 7, 11, 13, 14.",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "14", correct: true }
        ]
    },
    {
        question: "If in a certain language 'CAT' is coded as '3120,' how is 'DOG' coded?",
        answers: [
            { text: "7121", correct: false },
            { text: "3157", correct: false },
            { text: "4017", correct: false },
            { text: "7214", correct: true }
        ]
    },
    {
        question: "The Banking Ombudsman Scheme was introduced in:",
        answers: [
            { text: "1995", correct: true },
            { text: "2000", correct: false },
            { text: "2005", correct: false },
            { text: "2010", correct: false }
        ]
    },
    {
        question: "What does 'NPA' stand for in banking terminology?",
        answers: [
            { text: "Non-Performing Asset", correct: true },
            { text: "Non-Payment Account", correct: false },
            { text: "Non-Profit Asset", correct: false },
            { text: "Non-Payment Asset", correct: false }
        ]
    },
    {
        question: "What is the full form of NEFT?",
        answers: [
            { text: "National Electronic Funds Transfer", correct: true },
            { text: "National Emergency Fund Transfer", correct: false },
            { text: "National Equal Funds Transfer", correct: false },
            { text: "National Enhanced Funds Transfer", correct: false }
        ]
    },
    {
        question: "Which bank is known as the 'Bank of the Banks'?",
        answers: [
            { text: "State Bank of India", correct: false },
            { text: "Reserve Bank of India", correct: true },
            { text: "Punjab National Bank", correct: false },
            { text: "Bank of Baroda", correct: false }
        ]
    },
    {
        question: "The concept of 'Financial Inclusion' aims to:",
        answers: [
            { text: "Include more banks in the economy", correct: false },
            { text: "Provide financial services to underserved populations", correct: true },
            { text: "Increase bank profits", correct: false },
            { text: "Reduce banking fraud", correct: false }
        ]
    },
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of Government Security?",
        answers: [
            { text: "Treasury Bills", correct: true },
            { text: "Equity Shares", correct: false },
            { text: "Bonds", correct: false },
            { text: "Mutual Funds", correct: false }
        ]
    },
    {
        question: "The main function of the commercial banks is to:",
        answers: [
            { text: "Issue currency", correct: false },
            { text: "Act as a banker to the government", correct: false },
            { text: "Accept deposits and provide loans", correct: true },
            { text: "Regulate the banking sector", correct: false }
        ]
    },
    {
        question: "Which of the following is not a type of loan?",
        answers: [
            { text: "Personal loan", correct: false },
            { text: "Gold loan", correct: false },
            { text: "Education loan", correct: false },
            { text: "Business insurance", correct: true }
        ]
    },
    {
        question: "Which scheme was launched by the Government of India for financial literacy?",
        answers: [
            { text: "Pradhan Mantri Jan Dhan Yojana", correct: false },
            { text: "Financial Literacy Week", correct: true },
            { text: "Atal Pension Yojana", correct: false },
            { text: "MUDRA Scheme", correct: false }
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
