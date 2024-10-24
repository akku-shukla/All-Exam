const questions = [
    {
        question: "What is the maximum limit for depreciation as per the Income Tax Act?",
        answers: [
            { text: "10%", correct: false },
            { text: "20%", correct: false },
            { text: "15%", correct: false },
            { text: "40%", correct: true }
        ]
    },
    {
        question: "As per AS 2, which inventory valuation method is not allowed?",
        answers: [
            { text: "FIFO", correct: false },
            { text: "Weighted Average", correct: false },
            { text: "LIFO", correct: true },
            { text: "Specific Identification", correct: false }
        ]
    },
    {
        question: "Which section of the Companies Act, 2013 deals with Corporate Social Responsibility (CSR)?",
        answers: [
            { text: "Section 197", correct: false },
            { text: "Section 135", correct: true },
            { text: "Section 149", correct: false },
            { text: "Section 123", correct: false }
        ]
    },
    {
        question: "In auditing, the term 'vouching' refers to:",
        answers: [
            { text: "Checking cash transactions", correct: false },
            { text: "Verifying transactions with documents", correct: true },
            { text: "Reviewing journal entries", correct: false },
            { text: "Examining financial statements", correct: false }
        ]
    },
    {
        question: "Which accounting standard deals with revenue recognition?",
        answers: [
            { text: "AS 9", correct: true },
            { text: "AS 10", correct: false },
            { text: "AS 2", correct: false },
            { text: "AS 4", correct: false }
        ]
    },
    {
        question: "Which audit procedure helps verify the accuracy of balance confirmations?",
        answers: [
            { text: "Tracing", correct: false },
            { text: "Sampling", correct: false },
            { text: "Reconciliation", correct: true },
            { text: "Observation", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of capital budgeting technique?",
        answers: [
            { text: "Net Present Value (NPV)", correct: true },
            { text: "Return on Equity", correct: false },
            { text: "Working Capital Ratio", correct: false },
            { text: "Debt Service Coverage Ratio", correct: false }
        ]
    },
    {
        question: "Which section of the Income Tax Act, 1961, covers exemptions for long-term capital gains?",
        answers: [
            { text: "Section 54", correct: true },
            { text: "Section 80C", correct: false },
            { text: "Section 44AD", correct: false },
            { text: "Section 115", correct: false }
        ]
    },
    {
        question: "Which of the following is classified as a direct tax?",
        answers: [
            { text: "Income Tax", correct: true },
            { text: "Goods and Services Tax (GST)", correct: false },
            { text: "Customs Duty", correct: false },
            { text: "Excise Duty", correct: false }
        ]
    },
    {
        question: "In financial reporting, the term 'materiality' refers to:",
        answers: [
            { text: "Accurate valuation of assets", correct: false },
            { text: "Omission or misstatement of significant information", correct: true },
            { text: "Review of internal controls", correct: false },
            { text: "Adjustment of prior period errors", correct: false }
        ]
    },
    {
        question: "In accounting, which of the following is an example of an intangible asset?",
        answers: [
            { text: "Inventory", correct: false },
            { text: "Land", correct: false },
            { text: "Goodwill", correct: true },
            { text: "Building", correct: false }
        ]
    },
    {
        question: "Deferred tax liabilities arise when:",
        answers: [
            { text: "Tax expenses are lower than accounting profits", correct: false },
            { text: "Taxable income is higher than accounting income", correct: true },
            { text: "Depreciation as per tax laws is lower", correct: false },
            { text: "Accounting expenses are disallowed", correct: false }
        ]
    },
    {
        question: "Which section of the Companies Act, 2013 deals with appointment of auditors?",
        answers: [
            { text: "Section 139", correct: true },
            { text: "Section 143", correct: false },
            { text: "Section 147", correct: false },
            { text: "Section 152", correct: false }
        ]
    },
    {
        question: "Which of the following documents is required during a statutory audit?",
        answers: [
            { text: "Trial Balance", correct: true },
            { text: "Bank Statement", correct: false },
            { text: "Tax Invoice", correct: false },
            { text: "Purchase Order", correct: false }
        ]
    },
    {
        question: "Which accounting standard deals with property, plant, and equipment?",
        answers: [
            { text: "AS 10", correct: true },
            { text: "AS 16", correct: false },
            { text: "AS 2", correct: false },
            { text: "AS 22", correct: false }
        ]
    },
    {
        question: "What does the term 'Working Capital' represent?",
        answers: [
            { text: "Current assets minus current liabilities", correct: true },
            { text: "Total assets minus total liabilities", correct: false },
            { text: "Shareholders' equity", correct: false },
            { text: "Net profit", correct: false }
        ]
    },
    {
        question: "The balance sheet of a company provides information about:",
        answers: [
            { text: "Financial performance for a period", correct: false },
            { text: "Assets, liabilities, and equity", correct: true },
            { text: "Cash flows", correct: false },
            { text: "Profit or loss", correct: false }
        ]
    },
    {
        question: "In which year did India implement the GST (Goods and Services Tax)?",
        answers: [
            { text: "2015", correct: false },
            { text: "2016", correct: false },
            { text: "2017", correct: true },
            { text: "2018", correct: false }
        ]
    },
    {
        question: "A company's current ratio is calculated as:",
        answers: [
            { text: "Current assets divided by current liabilities", correct: true },
            { text: "Fixed assets divided by total liabilities", correct: false },
            { text: "Current assets minus current liabilities", correct: false },
            { text: "Total assets divided by shareholders' equity", correct: false }
        ]
    },
    {
        question: "The weighted average cost of capital (WACC) takes into account:",
        answers: [
            { text: "Cost of equity and debt", correct: true },
            { text: "Only cost of debt", correct: false },
            { text: "Only cost of equity", correct: false },
            { text: "Operating expenses", correct: false }
        ]
    },
    {
        question: "Under the Income Tax Act, which of the following is allowed as a deduction under Section 80C?",
        answers: [
            { text: "Health insurance premium", correct: false },
            { text: "Principal repayment of housing loan", correct: true },
            { text: "Medical expenses", correct: false },
            { text: "Travel expenses", correct: false }
        ]
    },
    {
        question: "Which of the following taxes is imposed on the sale of goods and services?",
        answers: [
            { text: "Income Tax", correct: false },
            { text: "Corporate Tax", correct: false },
            { text: "Goods and Services Tax (GST)", correct: true },
            { text: "Wealth Tax", correct: false }
        ]
    },
    {
        question: "Under which section of the Income Tax Act, 1961, can taxpayers avail deductions for health insurance premiums?",
        answers: [
            { text: "Section 80D", correct: true },
            { text: "Section 80C", correct: false },
            { text: "Section 80E", correct: false },
            { text: "Section 80G", correct: false }
        ]
    },
    {
        question: "In corporate finance, EBIT stands for:",
        answers: [
            { text: "Earnings Before Interest and Taxes", correct: true },
            { text: "Earnings Before Income Taxes", correct: false },
            { text: "Earnings Before Investment and Taxes", correct: false },
            { text: "Earnings Before Interest and Total Income", correct: false }
        ]
    },
    
        {
            question: "What is the primary purpose of financial statements?",
            answers: [
                { text: "To provide information for taxation", correct: false },
                { text: "To communicate financial performance and position", correct: true },
                { text: "To determine company value", correct: false },
                { text: "To comply with regulations", correct: false }
            ]
        },
        {
            question: "In accounting, which of the following is considered a current liability?",
            answers: [
                { text: "Long-term debt", correct: false },
                { text: "Accounts payable", correct: true },
                { text: "Goodwill", correct: false },
                { text: "Deferred tax assets", correct: false }
            ]
        },
        {
            question: "What is the accounting equation?",
            answers: [
                { text: "Assets = Liabilities + Equity", correct: true },
                { text: "Assets + Liabilities = Equity", correct: false },
                { text: "Assets = Liabilities - Equity", correct: false },
                { text: "Equity = Assets + Liabilities", correct: false }
            ]
        },
        {
            question: "Which accounting principle requires expenses to be matched with revenues?",
            answers: [
                { text: "Revenue recognition principle", correct: false },
                { text: "Expense recognition principle", correct: false },
                { text: "Matching principle", correct: true },
                { text: "Historical cost principle", correct: false }
            ]
        },
        {
            question: "What type of audit opinion is issued when the auditor finds issues that may affect the financial statements?",
            answers: [
                { text: "Unqualified opinion", correct: false },
                { text: "Qualified opinion", correct: true },
                { text: "Adverse opinion", correct: false },
                { text: "Disclaimer of opinion", correct: false }
            ]
        },
        {
            question: "In the context of company law, which document outlines the rules and regulations governing the internal management of a company?",
            answers: [
                { text: "Memorandum of Association", correct: false },
                { text: "Articles of Association", correct: true },
                { text: "Shareholders Agreement", correct: false },
                { text: "Prospectus", correct: false }
            ]
        },
        {
            question: "What is the maximum number of partners allowed in a partnership firm as per the Companies Act, 2013?",
            answers: [
                { text: "10", correct: false },
                { text: "20", correct: true },
                { text: "50", correct: false },
                { text: "Unlimited", correct: false }
            ]
        },
        {
            question: "Which of the following is not a type of financial statement?",
            answers: [
                { text: "Balance Sheet", correct: false },
                { text: "Income Statement", correct: false },
                { text: "Cash Flow Statement", correct: false },
                { text: "Trial Balance", correct: true }
            ]
        },
        {
            question: "Which tax is levied on the profit of a corporation?",
            answers: [
                { text: "Sales tax", correct: false },
                { text: "Income tax", correct: true },
                { text: "Value Added Tax (VAT)", correct: false },
                { text: "Excise tax", correct: false }
            ]
        },
        {
            question: "What is the formula for calculating the quick ratio?",
            answers: [
                { text: "Current Assets / Current Liabilities", correct: false },
                { text: "(Current Assets - Inventory) / Current Liabilities", correct: true },
                { text: "Total Assets / Total Liabilities", correct: false },
                { text: "Cash / Current Liabilities", correct: false }
            ]
        },
        {
            question: "What does the term 'capital structure' refer to?",
            answers: [
                { text: "The mix of debt and equity financing", correct: true },
                { text: "The total assets of a company", correct: false },
                { text: "The profit margins of a company", correct: false },
                { text: "The dividend policy of a company", correct: false }
            ]
        },
        {
            question: "Which of the following is a non-cash expense?",
            answers: [
                { text: "Depreciation", correct: true },
                { text: "Interest expense", correct: false },
                { text: "Cost of goods sold", correct: false },
                { text: "Payroll expenses", correct: false }
            ]
        },
        {
            question: "In financial accounting, which basis of accounting recognizes revenues when earned and expenses when incurred?",
            answers: [
                { text: "Cash basis", correct: false },
                { text: "Accrual basis", correct: true },
                { text: "Modified cash basis", correct: false },
                { text: "Tax basis", correct: false }
            ]
        },
        {
            question: "What is the term for a company's net income divided by its number of outstanding shares?",
            answers: [
                { text: "Earnings Before Interest and Taxes (EBIT)", correct: false },
                { text: "Earnings Per Share (EPS)", correct: true },
                { text: "Return on Equity (ROE)", correct: false },
                { text: "Price-to-Earnings (P/E) Ratio", correct: false }
            ]
        },
        {
            question: "Which of the following is an intangible asset?",
            answers: [
                { text: "Building", correct: false },
                { text: "Inventory", correct: false },
                { text: "Patents", correct: true },
                { text: "Machinery", correct: false }
            ]
        },
        {
            question: "What is the purpose of a cash flow statement?",
            answers: [
                { text: "To show the profitability of a company", correct: false },
                { text: "To report changes in equity", correct: false },
                { text: "To provide information about cash inflows and outflows", correct: true },
                { text: "To detail company assets and liabilities", correct: false }
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
