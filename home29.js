const questions = [
    {
        question: "What is the full form of LIC?",
        answers: [
            { text: "Life Insurance Corporation", correct: true },
            { text: "Life Investment Corporation", correct: false },
            { text: "Long-term Insurance Company", correct: false },
            { text: "Life Indemnity Corporation", correct: false }
        ]
    },
    {
        question: "When was the Life Insurance Corporation of India established?",
        answers: [
            { text: "1956", correct: true },
            { text: "1949", correct: false },
            { text: "1961", correct: false },
            { text: "1972", correct: false }
        ]
    },
    {
        question: "What is the primary function of LIC?",
        answers: [
            { text: "Provide banking services", correct: false },
            { text: "Offer insurance products", correct: true },
            { text: "Manage investments", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the main purpose of life insurance?",
        answers: [
            { text: "To save money", correct: false },
            { text: "To provide financial security to dependents", correct: true },
            { text: "To invest in stocks", correct: false },
            { text: "To fund retirement", correct: false }
        ]
    },
    {
        question: "Which type of life insurance provides coverage for a specified term?",
        answers: [
            { text: "Whole Life Insurance", correct: false },
            { text: "Endowment Plan", correct: false },
            { text: "Term Insurance", correct: true },
            { text: "ULIP", correct: false }
        ]
    },
    {
        question: "Which of the following is not a benefit of life insurance?",
        answers: [
            { text: "Death benefit", correct: false },
            { text: "Tax benefits", correct: false },
            { text: "Immediate cash payment", correct: true },
            { text: "Accumulation of savings", correct: false }
        ]
    },
    {
        question: "What does ULIP stand for?",
        answers: [
            { text: "Unit Linked Insurance Plan", correct: true },
            { text: "Universal Life Insurance Plan", correct: false },
            { text: "Unilateral Life Insurance Plan", correct: false },
            { text: "Unique Life Insurance Policy", correct: false }
        ]
    },
    {
        question: "Which LIC product is designed for the education of children?",
        answers: [
            { text: "Jeevan Anand", correct: false },
            { text: "Child Career Plan", correct: true },
            { text: "New Bima Gold", correct: false },
            { text: "Jeevan Saral", correct: false }
        ]
    },
    {
        question: "What is the minimum age for purchasing a life insurance policy?",
        answers: [
            { text: "10 years", correct: false },
            { text: "18 years", correct: true },
            { text: "21 years", correct: false },
            { text: "25 years", correct: false }
        ]
    },
    {
        question: "Which of the following is a traditional life insurance policy?",
        answers: [
            { text: "Term Plan", correct: true },
            { text: "ULIP", correct: false },
            { text: "Endowment Plan", correct: true },
            { text: "Both A and C", correct: true }
        ]
    },
    {
        question: "Which of the following is a non-linked insurance plan?",
        answers: [
            { text: "ULIP", correct: false },
            { text: "Whole Life Plan", correct: true },
            { text: "Money Back Plan", correct: true },
            { text: "Both B and C", correct: true }
        ]
    },
    {
        question: "What does the premium of a life insurance policy represent?",
        answers: [
            { text: "The amount paid for claims", correct: false },
            { text: "The amount paid for coverage", correct: true },
            { text: "The investment in stocks", correct: false },
            { text: "The interest earned on savings", correct: false }
        ]
    },
    {
        question: "Who regulates the life insurance industry in India?",
        answers: [
            { text: "Reserve Bank of India", correct: false },
            { text: "Securities and Exchange Board of India", correct: false },
            { text: "Insurance Regulatory and Development Authority of India", correct: true },
            { text: "Ministry of Finance", correct: false }
        ]
    },
    {
        question: "Which of the following is a feature of a whole life insurance policy?",
        answers: [
            { text: "Coverage for a specific term", correct: false },
            { text: "Cash value accumulation", correct: true },
            { text: "Higher premium", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the main advantage of a term insurance policy?",
        answers: [
            { text: "Lower premiums", correct: true },
            { text: "Cash value", correct: false },
            { text: "Investment component", correct: false },
            { text: "Lifetime coverage", correct: false }
        ]
    },
    {
        question: "What is the term used for the payment made by the insured to the insurer?",
        answers: [
            { text: "Claim", correct: false },
            { text: "Premium", correct: true },
            { text: "Benefit", correct: false },
            { text: "Coverage", correct: false }
        ]
    },
    {
        question: "What does 'sum assured' refer to in a life insurance policy?",
        answers: [
            { text: "The total amount paid in premiums", correct: false },
            { text: "The amount paid on death or maturity", correct: true },
            { text: "The amount of interest earned", correct: false },
            { text: "The policyholder’s total investment", correct: false }
        ]
    },
    {
        question: "Which of the following is a reason for purchasing life insurance?",
        answers: [
            { text: "To cover debts", correct: true },
            { text: "To save for retirement", correct: true },
            { text: "To provide for dependents", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the primary role of an Assistant Administrative Officer (AAO) in LIC?",
        answers: [
            { text: "Sales of insurance products", correct: false },
            { text: "Managing administrative tasks", correct: true },
            { text: "Investment management", correct: false },
            { text: "Customer service", correct: false }
        ]
    },
    {
        question: "Which of the following is not a type of life insurance?",
        answers: [
            { text: "Whole Life", correct: false },
            { text: "Term Life", correct: false },
            { text: "Auto Insurance", correct: true },
            { text: "Endowment", correct: false }
        ]
    },
    {
        question: "Which insurance plan provides regular payouts at intervals?",
        answers: [
            { text: "Whole Life Insurance", correct: false },
            { text: "Endowment Plan", correct: false },
            { text: "Term Insurance", correct: false },
            { text: "Money Back Plan", correct: true }
        ]
    },
    {
        question: "What is the typical duration for a term insurance policy?",
        answers: [
            { text: "1-5 years", correct: false },
            { text: "10-30 years", correct: true },
            { text: "5-15 years", correct: false },
            { text: "Lifetime", correct: false }
        ]
    },
    {
        question: "What is the maturity age in life insurance?",
        answers: [
            { text: "Age at which premium payments stop", correct: false },
            { text: "Age at which the policy pays out", correct: true },
            { text: "Age at which the insured can claim benefits", correct: false },
            { text: "Age at which the insured must renew policy", correct: false }
        ]
    },
    {
        question: "What is 'underwriting' in the context of life insurance?",
        answers: [
            { text: "The process of selling insurance", correct: false },
            { text: "The evaluation of risk", correct: true },
            { text: "The payment of claims", correct: false },
            { text: "The investment of premiums", correct: false }
        ]
    },
    {
        question: "Which of the following is a factor influencing life insurance premiums?",
        answers: [
            { text: "Age", correct: true },
            { text: "Gender", correct: true },
            { text: "Health status", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the purpose of a beneficiary in a life insurance policy?",
        answers: [
            { text: "To receive policy benefits upon the insured's death", correct: true },
            { text: "To pay premiums", correct: false },
            { text: "To manage investments", correct: false },
            { text: "To provide medical history", correct: false }
        ]
    },
    {
        question: "Which LIC policy is best suited for retirement planning?",
        answers: [
            { text: "Term Plan", correct: false },
            { text: "Jeevan Akshay", correct: true },
            { text: "Child Plan", correct: false },
            { text: "Money Back Plan", correct: false }
        ]
    },
    {
        question: "Which is a common exclusion in life insurance policies?",
        answers: [
            { text: "Death by natural causes", correct: false },
            { text: "Suicide within the first two years", correct: true },
            { text: "Accidental death", correct: false },
            { text: "Death after the policy term", correct: false }
        ]
    },
    {
        question: "What does the term 'waiting period' mean in insurance?",
        answers: [
            { text: "Time until premiums are due", correct: false },
            { text: "Time until coverage starts", correct: true },
            { text: "Time until the policy matures", correct: false },
            { text: "Time until claims can be filed", correct: false }
        ]
    },
    {
        question: "Which of the following types of policies has a cash value component?",
        answers: [
            { text: "Term Insurance", correct: false },
            { text: "Whole Life Insurance", correct: true },
            { text: "Accidental Death Policy", correct: false },
            { text: "Group Insurance", correct: false }
        ]
    },
    {
        question: "What is meant by 'renewability' in life insurance?",
        answers: [
            { text: "The ability to update personal information", correct: false },
            { text: "The option to extend the policy term", correct: true },
            { text: "The process of claiming benefits", correct: false },
            { text: "The ability to change the beneficiary", correct: false }
        ]
    },
    {
        question: "What is a 'rider' in a life insurance policy?",
        answers: [
            { text: "An additional policy", correct: false },
            { text: "A clause for additional coverage", correct: true },
            { text: "A type of investment", correct: false },
            { text: "The base policy", correct: false }
        ]
    },
    {
        question: "What does the term 'policy lapse' refer to?",
        answers: [
            { text: "When the policy matures", correct: false },
            { text: "When premiums are not paid", correct: true },
            { text: "When the insured dies", correct: false },
            { text: "When benefits are paid out", correct: false }
        ]
    },
    {
        question: "Which of the following is a key benefit of term insurance?",
        answers: [
            { text: "High premium returns", correct: false },
            { text: "Simplicity and affordability", correct: true },
            { text: "Lifetime coverage", correct: false },
            { text: "Accumulation of wealth", correct: false }
        ]
    },
    {
        question: "What is the amount that an insurance company pays upon the death of the insured?",
        answers: [
            { text: "Sum assured", correct: true },
            { text: "Premium", correct: false },
            { text: "Bonus", correct: false },
            { text: "Coverage amount", correct: false }
        ]
    },
    {
        question: "What does 'free look period' mean in insurance policies?",
        answers: [
            { text: "A trial period for the policy", correct: false },
            { text: "The time allowed to review the policy", correct: true },
            { text: "A period when claims can be filed", correct: false },
            { text: "A discount period for premiums", correct: false }
        ]
    },
    {
        question: "What is a 'group insurance' plan?",
        answers: [
            { text: "Coverage for a specific individual", correct: false },
            { text: "A policy for multiple members", correct: true },
            { text: "Insurance for business assets", correct: false },
            { text: "A policy limited to family members", correct: false }
        ]
    },
    {
        question: "Which is a primary duty of the Assistant Administrative Officer in LIC?",
        answers: [
            { text: "Selling insurance", correct: false },
            { text: "Client communication", correct: false },
            { text: "Administrative management", correct: true },
            { text: "Underwriting policies", correct: false }
        ]
    },
    {
        question: "What is the key difference between term and whole life insurance?",
        answers: [
            { text: "Term insurance has a cash value", correct: false },
            { text: "Whole life insurance is for a specified term", correct: false },
            { text: "Term insurance is cheaper", correct: true },
            { text: "Whole life insurance has lower premiums", correct: false }
        ]
    },
    {
        question: "What is the common age range for life insurance premium payments?",
        answers: [
            { text: "18-40 years", correct: false },
            { text: "25-60 years", correct: false },
            { text: "18-65 years", correct: true },
            { text: "30-50 years", correct: false }
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
