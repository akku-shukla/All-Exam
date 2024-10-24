const questions = [
    {
        question: "What is the primary goal of financial analysis?",
        answers: [
            { text: "Minimize risk", correct: false },
            { text: "Maximize shareholder wealth", correct: true },
            { text: "Optimize tax obligations", correct: false },
            { text: "Increase market share", correct: false }
        ]
    },
    {
        question: "Which of the following is not a component of working capital?",
        answers: [
            { text: "Inventory", correct: false },
            { text: "Accounts payable", correct: false },
            { text: "Long-term debt", correct: true },
            { text: "Accounts receivable", correct: false }
        ]
    },
    {
        question: "What does the term 'liquidity' refer to?",
        answers: [
            { text: "The ability to pay long-term debts", correct: false },
            { text: "The ease of converting an asset into cash", correct: true },
            { text: "The amount of cash available on hand", correct: false },
            { text: "The profitability of a company", correct: false }
        ]
    },
    {
        question: "Which of the following financial statements provides a snapshot of a company's financial position at a specific point in time?",
        answers: [
            { text: "Income Statement", correct: false },
            { text: "Statement of Cash Flows", correct: false },
            { text: "Balance Sheet", correct: true },
            { text: "Statement of Retained Earnings", correct: false }
        ]
    },
    {
        question: "The capital asset pricing model (CAPM) is used to determine:",
        answers: [
            { text: "The cost of debt", correct: false },
            { text: "The expected return on an investment", correct: true },
            { text: "The intrinsic value of a stock", correct: false },
            { text: "The liquidity of a company", correct: false }
        ]
    },
    {
        question: "What is the formula for calculating the price-to-earnings (P/E) ratio?",
        answers: [
            { text: "Market Price per Share / Earnings per Share", correct: true },
            { text: "Earnings per Share / Market Price per Share", correct: false },
            { text: "Net Income / Total Assets", correct: false },
            { text: "Total Revenue / Total Equity", correct: false }
        ]
    },
    {
        question: "Which ratio measures a company's ability to meet its short-term obligations?",
        answers: [
            { text: "Current Ratio", correct: true },
            { text: "Quick Ratio", correct: false },
            { text: "Debt to Equity Ratio", correct: false },
            { text: "Return on Equity", correct: false }
        ]
    },
    {
        question: "In financial markets, 'arbitrage' refers to:",
        answers: [
            { text: "The act of buying and selling the same asset simultaneously to profit from price differences", correct: true },
            { text: "The risk associated with investing in foreign markets", correct: false },
            { text: "The process of hedging against currency fluctuations", correct: false },
            { text: "The allocation of capital in a portfolio", correct: false }
        ]
    },
    {
        question: "What does the term 'beta' measure in finance?",
        answers: [
            { text: "The risk of a stock in relation to the market", correct: true },
            { text: "The dividend payout ratio", correct: false },
            { text: "The rate of return on investment", correct: false },
            { text: "The liquidity of an asset", correct: false }
        ]
    },
    {
        question: "Which of the following is a qualitative factor in fundamental analysis?",
        answers: [
            { text: "Revenue growth", correct: false },
            { text: "Market share", correct: false },
            { text: "Management effectiveness", correct: true },
            { text: "Earnings per share", correct: false }
        ]
    },
    {
        question: "The efficient market hypothesis (EMH) suggests that:",
        answers: [
            { text: "All investors have equal access to information", correct: false },
            { text: "Stock prices always reflect all available information", correct: true },
            { text: "Technical analysis can predict future price movements", correct: false },
            { text: "Fundamental analysis is the best way to value a stock", correct: false }
        ]
    },
    {
        question: "What is a 'bull market'?",
        answers: [
            { text: "A market characterized by declining prices", correct: false },
            { text: "A market characterized by rising prices", correct: true },
            { text: "A stagnant market with no price movement", correct: false },
            { text: "A market influenced by government regulations", correct: false }
        ]
    },
    {
        question: "Which of the following is a primary market transaction?",
        answers: [
            { text: "Selling shares on a stock exchange", correct: false },
            { text: "A company issuing new stock to raise capital", correct: true },
            { text: "A merger between two companies", correct: false },
            { text: "Buying government bonds on the secondary market", correct: false }
        ]
    },
    {
        question: "In the context of investment, what does 'diversification' mean?",
        answers: [
            { text: "Investing in a single asset", correct: false },
            { text: "Spreading investments across various assets to reduce risk", correct: true },
            { text: "Investing in high-risk assets only", correct: false },
            { text: "Focusing on a single market sector", correct: false }
        ]
    },
    {
        question: "What is the main purpose of the cash flow statement?",
        answers: [
            { text: "To show profitability over a specific period", correct: false },
            { text: "To detail the changes in equity", correct: false },
            { text: "To track the flow of cash in and out of the business", correct: true },
            { text: "To assess the market value of a company", correct: false }
        ]
    },
    {
        question: "Which of the following methods is used to value a bond?",
        answers: [
            { text: "Dividend Discount Model", correct: false },
            { text: "Residual Income Model", correct: false },
            { text: "Present Value of Future Cash Flows", correct: true },
            { text: "Price to Book Ratio", correct: false }
        ]
    },
    {
        question: "What does 'risk premium' refer to?",
        answers: [
            { text: "The return on risk-free investments", correct: false },
            { text: "The additional return expected for taking on additional risk", correct: true },
            { text: "The cost of insurance", correct: false },
            { text: "The fees associated with investing", correct: false }
        ]
    },
    {
        question: "Which of the following is a characteristic of common stock?",
        answers: [
            { text: "Fixed dividends", correct: false },
            { text: "Priority over debt holders in liquidation", correct: false },
            { text: "Voting rights in corporate decisions", correct: true },
            { text: "Guaranteed returns", correct: false }
        ]
    },
    {
        question: "Which financial ratio is used to assess a company's profitability relative to its total assets?",
        answers: [
            { text: "Return on Equity", correct: false },
            { text: "Return on Assets", correct: true },
            { text: "Price to Earnings Ratio", correct: false },
            { text: "Current Ratio", correct: false }
        ]
    },
    {
        question: "What is the primary focus of macroeconomic analysis?",
        answers: [
            { text: "Individual company performance", correct: false },
            { text: "Overall economic indicators and trends", correct: true },
            { text: "Sector-specific performance", correct: false },
            { text: "Investment strategies for individual stocks", correct: false }
        ]
    },
    {
        question: "In which financial market are stocks and bonds issued?",
        answers: [
            { text: "Primary market", correct: true },
            { text: "Secondary market", correct: false },
            { text: "Capital market", correct: false },
            { text: "Money market", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of a non-cash expense?",
        answers: [
            { text: "Rent expense", correct: false },
            { text: "Depreciation expense", correct: true },
            { text: "Interest expense", correct: false },
            { text: "Cost of goods sold", correct: false }
        ]
    },
    {
        question: "The 'time value of money' concept emphasizes that:",
        answers: [
            { text: "Money's value remains constant over time", correct: false },
            { text: "Money available today is worth more than the same amount in the future", correct: true },
            { text: "Interest rates are irrelevant in financial calculations", correct: false },
            { text: "Future cash flows should be ignored", correct: false }
        ]
    },
    {
        question: "What does 'capital structure' refer to?",
        answers: [
            { text: "The way a company finances its overall operations", correct: true },
            { text: "The breakdown of a company's assets", correct: false },
            { text: "The total value of a company's stock", correct: false },
            { text: "The management of a company's expenses", correct: false }
        ]
    },
    {
        question: "Which of the following is a common method for analyzing financial statements?",
        answers: [
            { text: "Trend analysis", correct: true },
            { text: "Ratio analysis", correct: true },
            { text: "Cash flow analysis", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which investment strategy focuses on undervalued stocks with the potential for growth?",
        answers: [
            { text: "Growth investing", correct: false },
            { text: "Value investing", correct: true },
            { text: "Momentum investing", correct: false },
            { text: "Speculative investing", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of a financial budget?",
        answers: [
            { text: "To increase revenue", correct: false },
            { text: "To manage expenditures and forecast future cash flows", correct: true },
            { text: "To reduce taxes", correct: false },
            { text: "To maximize employee benefits", correct: false }
        ]
    },
    {
        question: "Which of the following is a measure of market risk?",
        answers: [
            { text: "Alpha", correct: false },
            { text: "Beta", correct: true },
            { text: "R-squared", correct: false },
            { text: "Standard deviation", correct: false }
        ]
    },
    {
        question: "What is the primary risk associated with investing in stocks?",
        answers: [
            { text: "Interest rate risk", correct: false },
            { text: "Credit risk", correct: false },
            { text: "Market risk", correct: true },
            { text: "Inflation risk", correct: false }
        ]
    },
    {
        question: "In a diversified portfolio, the benefit of diversification comes from:",
        answers: [
            { text: "Reducing the number of assets", correct: false },
            { text: "Combining assets that are positively correlated", correct: false },
            { text: "Combining assets that are negatively correlated", correct: true },
            { text: "Investing solely in stocks", correct: false }
        ]
    },
    {
        question: "What is a 'mutual fund'?",
        answers: [
            { text: "A type of government bond", correct: false },
            { text: "A pooled investment vehicle managed by professionals", correct: true },
            { text: "A financial derivative", correct: false },
            { text: "A type of insurance product", correct: false }
        ]
    },
    {
        question: "Which financial metric indicates how well a company generates profit from its shareholders' equity?",
        answers: [
            { text: "Gross Profit Margin", correct: false },
            { text: "Operating Margin", correct: false },
            { text: "Return on Equity (ROE)", correct: true },
            { text: "Price to Earnings Ratio (P/E)", correct: false }
        ]
    },
    {
        question: "Which investment strategy involves buying and holding assets for a long period regardless of fluctuations?",
        answers: [
            { text: "Day trading", correct: false },
            { text: "Swing trading", correct: false },
            { text: "Buy and hold strategy", correct: true },
            { text: "Value investing", correct: false }
        ]
    },
    {
        question: "Which of the following is considered a leading economic indicator?",
        answers: [
            { text: "Unemployment rate", correct: false },
            { text: "Gross Domestic Product (GDP)", correct: false },
            { text: "Stock market performance", correct: true },
            { text: "Inflation rate", correct: false }
        ]
    },
    {
        question: "What does 'market capitalization' refer to?",
        answers: [
            { text: "The total value of a company's outstanding shares of stock", correct: true },
            { text: "The total debt of a company", correct: false },
            { text: "The total assets owned by a company", correct: false },
            { text: "The total revenue generated by a company", correct: false }
        ]
    },
    {
        question: "Which type of analysis focuses on historical financial statements to evaluate a company's performance?",
        answers: [
            { text: "Fundamental analysis", correct: true },
            { text: "Technical analysis", correct: false },
            { text: "Quantitative analysis", correct: false },
            { text: "Qualitative analysis", correct: false }
        ]
    },
   
        {
            question: "What is the primary benefit of using financial derivatives?",
            answers: [
                { text: "To increase asset value", correct: false },
                { text: "To hedge against risks", correct: true },
                { text: "To eliminate all financial risks", correct: false },
                { text: "To improve liquidity", correct: false }
            ]
        },
        {
            question: "Which of the following describes the 'discount rate' in finance?",
            answers: [
                { text: "The rate of interest used to determine the present value of future cash flows", correct: true },
                { text: "The rate of return on an investment", correct: false },
                { text: "The fee charged by brokers", correct: false },
                { text: "The rate at which loans are issued", correct: false }
            ]
        },
        {
            question: "What does 'asset allocation' refer to?",
            answers: [
                { text: "The distribution of investments among different asset categories", correct: true },
                { text: "The selection of individual stocks", correct: false },
                { text: "The total value of all assets owned", correct: false },
                { text: "The selling of underperforming assets", correct: false }
            ]
        },
        {
            question: "Which of the following is an example of a defensive stock?",
            answers: [
                { text: "Technology companies", correct: false },
                { text: "Utilities", correct: true },
                { text: "High-growth startups", correct: false },
                { text: "Cyclical stocks", correct: false }
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
