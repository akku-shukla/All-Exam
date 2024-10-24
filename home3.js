const questions = [
    {
        question: "Which of the following is the regulator of the banking sector in India?",
        answers: [
            { text: "SEBI", correct: false },
            { text: "RBI", correct: true },
            { text: "IRDA", correct: false },
            { text: "PFRDA", correct: false }
        ]
    },
    {
        question: "The primary function of a commercial bank is:",
        answers: [
            { text: "Investment banking", correct: false },
            { text: "Accepting deposits", correct: true },
            { text: "Insurance services", correct: false },
            { text: "Foreign exchange trading", correct: false }
        ]
    },
    {
        question: "What is CRR in banking terms?",
        answers: [
            { text: "Cash Return Rate", correct: false },
            { text: "Cash Reserve Ratio", correct: true },
            { text: "Credit Reserve Rate", correct: false },
            { text: "Capital Reserve Ratio", correct: false }
        ]
    },
    {
        question: "Which of the following is a quantitative tool used by the RBI to control money supply?",
        answers: [
            { text: "Moral suasion", correct: false },
            { text: "CRR", correct: false },
            { text: "Bank rate", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Repo rate is:",
        answers: [
            { text: "Rate at which banks borrow from RBI", correct: true },
            { text: "Rate at which RBI borrows from banks", correct: false },
            { text: "Rate at which banks lend to customers", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the full form of NEFT?",
        answers: [
            { text: "National Electronic Fund Transfer", correct: true },
            { text: "National Economic Fund Transfer", correct: false },
            { text: "National Emergency Fund Transfer", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the minimum paid-up capital required to start a new bank in India?",
        answers: [
            { text: "₹200 crore", correct: false },
            { text: "₹500 crore", correct: true },
            { text: "₹1000 crore", correct: false },
            { text: "₹5000 crore", correct: false }
        ]
    },
    {
        question: "NPA stands for:",
        answers: [
            { text: "Net Performing Assets", correct: false },
            { text: "Non-Purchasable Assets", correct: false },
            { text: "Non-Performing Assets", correct: true },
            { text: "National Performing Assets", correct: false }
        ]
    },
    {
        question: "KYC is mandatory for:",
        answers: [
            { text: "Opening a bank account", correct: false },
            { text: "Applying for a loan", correct: false },
            { text: "Credit card approval", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The interest rate at which commercial banks park their surplus funds with the RBI is called:",
        answers: [
            { text: "Repo rate", correct: false },
            { text: "Reverse Repo rate", correct: true },
            { text: "Bank rate", correct: false },
            { text: "Base rate", correct: false }
        ]
    },
    {
        question: "Which of the following is a money market instrument?",
        answers: [
            { text: "Equity shares", correct: false },
            { text: "Bonds", correct: false },
            { text: "Commercial paper", correct: true },
            { text: "Fixed deposits", correct: false }
        ]
    },
    {
        question: "The abbreviation 'IFSC' stands for:",
        answers: [
            { text: "Indian Finance System Code", correct: false },
            { text: "International Financial System Code", correct: false },
            { text: "Indian Financial System Code", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What does the acronym SLR stand for in banking?",
        answers: [
            { text: "Statutory Liquidity Rate", correct: false },
            { text: "Statutory Liquidity Ratio", correct: true },
            { text: "Standard Lending Rate", correct: false },
            { text: "State Liquidity Ratio", correct: false }
        ]
    },
    {
        question: "Which bank is known as the lender of last resort?",
        answers: [
            { text: "State Bank of India", correct: false },
            { text: "Reserve Bank of India", correct: true },
            { text: "World Bank", correct: false },
            { text: "NABARD", correct: false }
        ]
    },
    {
        question: "When was the Reserve Bank of India established?",
        answers: [
            { text: "1947", correct: false },
            { text: "1950", correct: false },
            { text: "1935", correct: true },
            { text: "1969", correct: false }
        ]
    },
    {
        question: "Which of the following is not a function of the RBI?",
        answers: [
            { text: "Issuing currency", correct: false },
            { text: "Supervising credit control", correct: false },
            { text: "Managing foreign exchange", correct: false },
            { text: "Providing loans to individuals", correct: true }
        ]
    },
    {
        question: "Which committee recommended the formation of NABARD?",
        answers: [
            { text: "Narsimham Committee", correct: false },
            { text: "Rangarajan Committee", correct: false },
            { text: "B. Sivaraman Committee", correct: true },
            { text: "Kelkar Committee", correct: false }
        ]
    },
    {
        question: "Who regulates the insurance sector in India?",
        answers: [
            { text: "RBI", correct: false },
            { text: "IRDAI", correct: true },
            { text: "SEBI", correct: false },
            { text: "PFRDA", correct: false }
        ]
    },
    {
        question: "Which of the following does not come under the purview of the money market?",
        answers: [
            { text: "Treasury bills", correct: false },
            { text: "Commercial papers", correct: false },
            { text: "Fixed deposits", correct: false },
            { text: "Shares", correct: true }
        ]
    },
    {
        question: "Financial inclusion aims at:",
        answers: [
            { text: "Increasing credit limits", correct: false },
            { text: "Providing banking services to the unbanked", correct: true },
            { text: "Promoting international trade", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    
        {
            question: "What is the maximum limit for a Public Provident Fund (PPF) account in a financial year?",
            answers: [
                { text: "₹1 lakh", correct: false },
                { text: "₹1.5 lakh", correct: true },
                { text: "₹2 lakh", correct: false },
                { text: "₹2.5 lakh", correct: false }
            ]
        },
        {
            question: "Who is the current Governor of the Reserve Bank of India (RBI)?",
            answers: [
                { text: "Raghuram Rajan", correct: false },
                { text: "Shaktikanta Das", correct: true },
                { text: "Urjit Patel", correct: false },
                { text: "Duvvuri Subbarao", correct: false }
            ]
        },
        {
            question: "In banking terminology, what does the term 'debit' mean?",
            answers: [
                { text: "Deposit", correct: false },
                { text: "Withdrawal", correct: true },
                { text: "Loan", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "RTGS stands for:",
            answers: [
                { text: "Real-Time Growth Settlement", correct: false },
                { text: "Real-Time Gross Settlement", correct: true },
                { text: "Real-Time General Settlement", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "Which of the following is not a type of electronic banking?",
            answers: [
                { text: "Mobile banking", correct: false },
                { text: "ATM banking", correct: false },
                { text: "Branch banking", correct: true },
                { text: "Internet banking", correct: false }
            ]
        },
        {
            question: "What is the minimum amount required to open a Basic Savings Bank Deposit Account (BSBDA)?",
            answers: [
                { text: "₹0", correct: true },
                { text: "₹500", correct: false },
                { text: "₹1000", correct: false },
                { text: "₹5000", correct: false }
            ]
        },
        {
            question: "What is the primary goal of a Payment Bank in India?",
            answers: [
                { text: "Providing credit facilities", correct: false },
                { text: "Promoting financial inclusion", correct: true },
                { text: "Managing foreign exchange reserves", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "Which of the following is not considered a negotiable instrument?",
            answers: [
                { text: "Cheque", correct: false },
                { text: "Promissory note", correct: false },
                { text: "Fixed deposit receipt", correct: true },
                { text: "Bill of exchange", correct: false }
            ]
        },
        {
            question: "CASA in banking stands for:",
            answers: [
                { text: "Current and Savings Account", correct: true },
                { text: "Credit and Savings Account", correct: false },
                { text: "Capital and Savings Account", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "A cheque which is outdated or has expired is called:",
            answers: [
                { text: "Dishonored cheque", correct: false },
                { text: "Post-dated cheque", correct: false },
                { text: "Stale cheque", correct: true },
                { text: "Cancelled cheque", correct: false }
            ]
        },
        {
            question: "What is the validity period of a cheque in India?",
            answers: [
                { text: "2 months", correct: false },
                { text: "3 months", correct: true },
                { text: "6 months", correct: false },
                { text: "12 months", correct: false }
            ]
        },
        {
            question: "Priority sector lending by banks includes lending to:",
            answers: [
                { text: "Agriculture", correct: false },
                { text: "Micro, small, and medium enterprises", correct: false },
                { text: "Education", correct: false },
                { text: "All of the above", correct: true }
            ]
        },
        {
            question: "A Demat account is required for:",
            answers: [
                { text: "Saving money", correct: false },
                { text: "Trading shares", correct: true },
                { text: "Taking loans", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "'Basel III' norms are related to:",
            answers: [
                { text: "Banking regulations", correct: true },
                { text: "International trade", correct: false },
                { text: "Foreign exchange management", correct: false },
                { text: "Corporate governance", correct: false }
            ]
        },
        {
            question: "The term 'Call Money' refers to:",
            answers: [
                { text: "Short-term loans between banks", correct: true },
                { text: "Loans given to customers on demand", correct: false },
                { text: "Overdrafts", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "Which of the following is not a part of India's capital market?",
            answers: [
                { text: "Mutual funds", correct: false },
                { text: "Treasury bills", correct: true },
                { text: "Shares", correct: false },
                { text: "Debentures", correct: false }
            ]
        },
        {
            question: "What is the full form of SWIFT?",
            answers: [
                { text: "Society for Worldwide International Fund Transfer", correct: false },
                { text: "Society for Worldwide Interbank Financial Telecommunication", correct: true },
                { text: "Standard Worldwide Internet Fund Transfer", correct: false },
                { text: "Society for Western International Fund Transfer", correct: false }
            ]
        },
        {
            question: "Which of the following schemes aims to ensure food security for all in India?",
            answers: [
                { text: "Pradhan Mantri Jan Dhan Yojana", correct: false },
                { text: "Pradhan Mantri Garib Kalyan Yojana", correct: false },
                { text: "National Food Security Act", correct: true },
                { text: "Mid-Day Meal Scheme", correct: false }
            ]
        },
        {
            question: "In the context of banking, what does 'Overdraft' mean?",
            answers: [
                { text: "Withdrawal of money exceeding the balance", correct: true },
                { text: "Deposit of excess money", correct: false },
                { text: "Investment in foreign securities", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "The Banking Ombudsman is appointed by:",
            answers: [
                { text: "RBI", correct: true },
                { text: "Government of India", correct: false },
                { text: "NABARD", correct: false },
                { text: "SEBI", correct: false }
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
