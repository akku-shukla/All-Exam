const questions = [
    {
        question: "What is the primary function of the Reserve Bank of India?",
        answers: [
            { text: "Issuing currency", correct: true },
            { text: "Regulating the stock market", correct: false },
            { text: "Collecting taxes", correct: false },
            { text: "Conducting elections", correct: false }
        ]
    },
    {
        question: "When was the Reserve Bank of India established?",
        answers: [
            { text: "1935", correct: true },
            { text: "1947", correct: false },
            { text: "1950", correct: false },
            { text: "1961", correct: false }
        ]
    },
    {
        question: "The headquarters of the Reserve Bank of India is located in:",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Delhi", correct: false },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Who is the current Governor of the Reserve Bank of India? (as of 2024)",
        answers: [
            { text: "Raghuram Rajan", correct: false },
            { text: "Urjit Patel", correct: false },
            { text: "Shaktikanta Das", correct: true },
            { text: "D. Subbarao", correct: false }
        ]
    },
    {
        question: "Which of the following is not a function of the RBI?",
        answers: [
            { text: "Monetary authority", correct: false },
            { text: "Bankers' bank", correct: false },
            { text: "Regulator of foreign exchange", correct: false },
            { text: "Conducting postal services", correct: true }
        ]
    },
    {
        question: "The RBI manages the country’s currency and credit system under which of the following Acts?",
        answers: [
            { text: "Banking Regulation Act", correct: false },
            { text: "Reserve Bank of India Act", correct: true },
            { text: "Negotiable Instruments Act", correct: false },
            { text: "Securities Contracts Regulation Act", correct: false }
        ]
    },
    {
        question: "Which of the following committees recommended the establishment of the RBI?",
        answers: [
            { text: "Hilton Young Committee", correct: true },
            { text: "Narasimham Committee", correct: false },
            { text: "Chakravarti Committee", correct: false },
            { text: "Kelkar Committee", correct: false }
        ]
    },
    {
        question: "What is the current repo rate set by the RBI as of October 2024?",
        answers: [
            { text: "4.00%", correct: false },
            { text: "4.50%", correct: true },
            { text: "5.00%", correct: false },
            { text: "5.50%", correct: false }
        ]
    },
    {
        question: "The Monetary Policy Committee (MPC) of the RBI consists of how many members?",
        answers: [
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "Which of the following is a measure used by the RBI to control inflation?",
        answers: [
            { text: "Fiscal deficit", correct: false },
            { text: "Repo rate", correct: true },
            { text: "Subsidies", correct: false },
            { text: "Public expenditure", correct: false }
        ]
    },
    {
        question: "Which of the following is not considered a component of the money supply in India?",
        answers: [
            { text: "Currency in circulation", correct: false },
            { text: "Demand deposits", correct: false },
            { text: "Time deposits", correct: false },
            { text: "National Savings Certificates", correct: true }
        ]
    },
    {
        question: "What is the function of the Cash Reserve Ratio (CRR)?",
        answers: [
            { text: "To control inflation", correct: false },
            { text: "To ensure liquidity in the market", correct: false },
            { text: "To regulate the money supply", correct: true },
            { text: "To provide loans to banks", correct: false }
        ]
    },
    {
        question: "The Payment and Settlement Systems Act was enacted in:",
        answers: [
            { text: "2005", correct: true },
            { text: "2007", correct: false },
            { text: "2010", correct: false },
            { text: "2015", correct: false }
        ]
    },
    {
        question: "The RBI has the sole authority to issue banknotes of which denominations?",
        answers: [
            { text: "All denominations", correct: true },
            { text: "Above ₹20", correct: false },
            { text: "Below ₹100", correct: false },
            { text: "₹500 and above", correct: false }
        ]
    },
    {
        question: "The 'Lender of Last Resort' function of the RBI is primarily aimed at:",
        answers: [
            { text: "Providing loans to the government", correct: false },
            { text: "Ensuring liquidity to banks", correct: true },
            { text: "Regulating interest rates", correct: false },
            { text: "Controlling inflation", correct: false }
        ]
    },
    {
        question: "Which of the following is the minimum cash reserve ratio that banks must maintain with the RBI?",
        answers: [
            { text: "3%", correct: true },
            { text: "4%", correct: false },
            { text: "5%", correct: false },
            { text: "6%", correct: false }
        ]
    },
    {
        question: "The RBI conducts the Open Market Operations (OMO) primarily to:",
        answers: [
            { text: "Manage government securities", correct: false },
            { text: "Control inflation", correct: false },
            { text: "Manage liquidity in the economy", correct: true },
            { text: "Regulate the foreign exchange market", correct: false }
        ]
    },
    {
        question: "Which of the following is the official publication of the RBI that provides information about the Indian economy?",
        answers: [
            { text: "Economic Survey", correct: false },
            { text: "RBI Bulletin", correct: true },
            { text: "Monthly Review", correct: false },
            { text: "Statistical Abstract", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of monetary policy?",
        answers: [
            { text: "Expansionary", correct: true },
            { text: "Contractionary", correct: true },
            { text: "Both A and B", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The Foreign Exchange Management Act (FEMA) was enacted in:",
        answers: [
            { text: "1991", correct: false },
            { text: "1999", correct: true },
            { text: "2002", correct: false },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "Which of the following instruments is used by the RBI to absorb excess liquidity?",
        answers: [
            { text: "Reverse repo", correct: true },
            { text: "Bank rate", correct: false },
            { text: "CRR", correct: false },
            { text: "SLR", correct: false }
        ]
    },
    {
        question: "What does SLR stand for in the context of banking regulation?",
        answers: [
            { text: "Statutory Liquidity Ratio", correct: true },
            { text: "Standard Liquidity Ratio", correct: false },
            { text: "Special Liquidity Ratio", correct: false },
            { text: "Savings Liquidity Ratio", correct: false }
        ]
    },
    {
        question: "Which of the following is the primary goal of the RBI’s monetary policy?",
        answers: [
            { text: "Economic growth", correct: false },
            { text: "Price stability", correct: true },
            { text: "Employment generation", correct: false },
            { text: "Balance of payments", correct: false }
        ]
    },
    {
        question: "What is the maximum amount of currency that can be printed by the RBI without government approval?",
        answers: [
            { text: "₹5,000 crore", correct: false },
            { text: "₹10,000 crore", correct: false },
            { text: "₹20,000 crore", correct: false },
            { text: "There is no limit", correct: true }
        ]
    },
    {
        question: "The 'Banking Ombudsman Scheme' is designed to:",
        answers: [
            { text: "Facilitate inter-bank transactions", correct: false },
            { text: "Address customer complaints against banks", correct: true },
            { text: "Regulate bank mergers", correct: false },
            { text: "Promote digital banking", correct: false }
        ]
    },
    {
        question: "The RBI’s 'Financial Literacy Week' is observed annually to promote:",
        answers: [
            { text: "Digital payments", correct: false },
            { text: "Financial literacy", correct: true },
            { text: "Microfinance", correct: false },
            { text: "Wealth management", correct: false }
        ]
    },
    {
        question: "Which of the following is a measure taken by the RBI to control inflation?",
        answers: [
            { text: "Increasing the CRR", correct: true },
            { text: "Lowering interest rates", correct: false },
            { text: "Expanding money supply", correct: false },
            { text: "Reducing taxes", correct: false }
        ]
    },
    {
        question: "Which of the following organizations is not regulated by the RBI?",
        answers: [
            { text: "Commercial banks", correct: false },
            { text: "Cooperative banks", correct: false },
            { text: "Non-banking financial companies (NBFCs)", correct: false },
            { text: "Insurance companies", correct: true }
        ]
    },
    {
        question: "What does the acronym 'FSDC' stand for?",
        answers: [
            { text: "Financial System Development Committee", correct: false },
            { text: "Financial Stability and Development Council", correct: true },
            { text: "Fiscal and Financial Development Committee", correct: false },
            { text: "Financial Sector Development Council", correct: false }
        ]
    },
    {
        question: "Which of the following is not a regulatory authority in the Indian financial system?",
        answers: [
            { text: "RBI", correct: false },
            { text: "SEBI", correct: false },
            { text: "IRDAI", correct: false },
            { text: "CBI", correct: true }
        ]
    },
    {
        question: "The concept of 'Banking on the Unbanked' primarily aims to:",
        answers: [
            { text: "Increase profits for banks", correct: false },
            { text: "Extend banking services to rural areas", correct: true },
            { text: "Close down unprofitable branches", correct: false },
            { text: "Restrict banking services", correct: false }
        ]
    },
    {
        question: "Which of the following is a non-banking financial company (NBFC)?",
        answers: [
            { text: "State Bank of India", correct: false },
            { text: "HDFC Bank", correct: false },
            { text: "LIC Housing Finance", correct: true },
            { text: "Bank of Baroda", correct: false }
        ]
    },
    {
        question: "The 'Priority Sector Lending' aims to:",
        answers: [
            { text: "Finance large corporations", correct: false },
            { text: "Promote infrastructure development", correct: false },
            { text: "Support agriculture and small enterprises", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following acts governs the banking sector in India?",
        answers: [
            { text: "Reserve Bank of India Act, 1934", correct: false },
            { text: "Banking Regulation Act, 1949", correct: true },
            { text: "Companies Act, 2013", correct: false },
            { text: "Securities Regulation Act, 1999", correct: false }
        ]
    },
    {
        question: "Which committee recommended the deregulation of interest rates on savings accounts?",
        answers: [
            { text: "Narasimham Committee", correct: false },
            { text: "Tarapore Committee", correct: false },
            { text: "Dr. K. C. Chakravarty Committee", correct: false },
            { text: "M. Narasimham Committee", correct: true }
        ]
    },
    {
        question: "Which of the following is not part of the RBI’s function related to foreign exchange?",
        answers: [
            { text: "Facilitating external trade", correct: false },
            { text: "Regulating currency exchange rates", correct: false },
            { text: "Providing loans to foreign banks", correct: true },
            { text: "Managing the foreign exchange reserves", correct: false }
        ]
    },
    {
        question: "The concept of 'Digital India' is aimed at:",
        answers: [
            { text: "Promoting digital currency", correct: false },
            { text: "Increasing digital literacy and access to services", correct: true },
            { text: "Regulating cybercrime", correct: false },
            { text: "Enhancing traditional banking services", correct: false }
        ]
    },
    {
        question: "Which of the following is the primary objective of the RBI's Financial Stability Report?",
        answers: [
            { text: "To provide a quarterly profit analysis of banks", correct: false },
            { text: "To assess the stability of the financial system", correct: true },
            { text: "To predict stock market trends", correct: false },
            { text: "To regulate insurance companies", correct: false }
        ]
    },
    {
        question: "The 'Make in India' initiative is primarily aimed at boosting:",
        answers: [
            { text: "Foreign investment in the manufacturing sector", correct: true },
            { text: "Digital currency adoption", correct: false },
            { text: "Agricultural production", correct: false },
            { text: "Banking sector reforms", correct: false }
        ]
    },
    {
        question: "Which of the following is a key indicator used by the RBI to monitor economic growth?",
        answers: [
            { text: "Gross Domestic Product (GDP)", correct: true },
            { text: "Consumer Price Index (CPI)", correct: false },
            { text: "Producer Price Index (PPI)", correct: false },
            { text: "All of the above", correct: true }
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
