const questions = [
    {
        question: "Who is the first citizen of India?",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "President", correct: true },
            { text: "Vice President", correct: false },
            { text: "Chief Justice of India", correct: false }
        ]
    },
    {
        question: "The capital of India is?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Chennai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Kolkata", correct: false }
        ]
    },
    {
        question: "Who is the supreme commander of the Indian armed forces?",
        answers: [
            { text: "Defence Minister", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Chief of Army Staff", correct: false },
            { text: "President", correct: true }
        ]
    },
    {
        question: "The current Governor of the Reserve Bank of India (as of 2024) is?",
        answers: [
            { text: "Raghuram Rajan", correct: false },
            { text: "Urjit Patel", correct: false },
            { text: "Shaktikanta Das", correct: true },
            { text: "Bimal Jalan", correct: false }
        ]
    },
    {
        question: "What is the main function of the Railway Recruitment Board?",
        answers: [
            { text: "Recruitment for the armed forces", correct: false },
            { text: "Recruitment of railway employees", correct: true },
            { text: "Construction of railways", correct: false },
            { text: "Managing railway finances", correct: false }
        ]
    },
    {
        question: "The term 'GDP' stands for?",
        answers: [
            { text: "Gross Domestic Product", correct: true },
            { text: "Global Domestic Product", correct: false },
            { text: "General Domestic Product", correct: false },
            { text: "Gross District Product", correct: false }
        ]
    },
    {
        question: "What is the full form of IRCTC?",
        answers: [
            { text: "Indian Railway Catering and Tourism Corporation", correct: true },
            { text: "Indian Railway Catering and Ticket Corporation", correct: false },
            { text: "Indian Railways Cargo Transport Corporation", correct: false },
            { text: "Indian Railway Cargo Tourism Corporation", correct: false }
        ]
    },
    {
        question: "The currency of India is?",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false },
            { text: "Pound", correct: false },
            { text: "Rupee", correct: true }
        ]
    },
    {
        question: "Which article of the Indian Constitution guarantees equality before the law?",
        answers: [
            { text: "Article 12", correct: false },
            { text: "Article 14", correct: true },
            { text: "Article 15", correct: false },
            { text: "Article 17", correct: false }
        ]
    },
    {
        question: "What is the tenure of the President of India?",
        answers: [
            { text: "5 years", correct: true },
            { text: "6 years", correct: false },
            { text: "7 years", correct: false },
            { text: "4 years", correct: false }
        ]
    },
    {
        question: "Which is the largest railway station in India?",
        answers: [
            { text: "Howrah Junction", correct: false },
            { text: "New Delhi Railway Station", correct: false },
            { text: "Chennai Central", correct: false },
            { text: "Gorakhpur Junction", correct: true }
        ]
    },
    {
        question: "Who among the following is known as the 'Iron Man of India'?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: true },
            { text: "Subhash Chandra Bose", correct: false }
        ]
    },
    {
        question: "Which country shares the longest border with India?",
        answers: [
            { text: "Pakistan", correct: false },
            { text: "Bangladesh", correct: true },
            { text: "China", correct: false },
            { text: "Nepal", correct: false }
        ]
    },
    {
        question: "The first train in India ran between which two stations?",
        answers: [
            { text: "Mumbai and Pune", correct: false },
            { text: "Mumbai and Thane", correct: true },
            { text: "Delhi and Agra", correct: false },
            { text: "Kolkata and Howrah", correct: false }
        ]
    },
    {
        question: "The Planning Commission of India was replaced by which institution?",
        answers: [
            { text: "Finance Commission", correct: false },
            { text: "NITI Aayog", correct: true },
            { text: "Reserve Bank of India", correct: false },
            { text: "Comptroller and Auditor General", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Lal Bahadur Shastri", correct: false },
            { text: "Indira Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Rajendra Prasad", correct: false }
        ]
    },
    {
        question: "What is the name of India's national space agency?",
        answers: [
            { text: "DRDO", correct: false },
            { text: "NASA", correct: false },
            { text: "ISRO", correct: true },
            { text: "HAL", correct: false }
        ]
    },
    {
        question: "In which year was the Indian Railways nationalized?",
        answers: [
            { text: "1947", correct: false },
            { text: "1951", correct: true },
            { text: "1955", correct: false },
            { text: "1960", correct: false }
        ]
    },
    {
        question: "Which of the following is not a mountain pass in India?",
        answers: [
            { text: "Rohtang Pass", correct: false },
            { text: "Nathu La", correct: false },
            { text: "Karakoram Pass", correct: false },
            { text: "Panama Canal", correct: true }
        ]
    },
    {
        question: "The Fundamental Rights in the Indian Constitution are taken from the Constitution of which country?",
        answers: [
            { text: "USA", correct: true },
            { text: "UK", correct: false },
            { text: "Germany", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Justice of India (as of 2024)?",
        answers: [
            { text: "Sharad Arvind Bobde", correct: false },
            { text: "N. V. Ramana", correct: false },
            { text: "Dhananjaya Y. Chandrachud", correct: true },
            { text: "U. U. Lalit", correct: false }
        ]
    },
    {
        question: "The National Rail Museum is located in which city?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in India?",
        answers: [
            { text: "Thar Desert", correct: true },
            { text: "Rann of Kutch", correct: false },
            { text: "Ladakh Desert", correct: false },
            { text: "Sahara Desert", correct: false }
        ]
    },
    {
        question: "Which of the following is a fundamental duty of an Indian citizen?",
        answers: [
            { text: "To vote in elections", correct: false },
            { text: "To respect the national anthem", correct: true },
            { text: "To obey the traffic rules", correct: false },
            { text: "To pay taxes", correct: false }
        ]
    },
    {
        question: "Which is the first computerised reservation centre of Indian Railways?",
        answers: [
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: false },
            { text: "Chennai", correct: true },
            { text: "Mumbai", correct: false }
        ]
    },
    {
        question: "What is the maximum number of members allowed in the Rajya Sabha?",
        answers: [
            { text: "200", correct: false },
            { text: "245", correct: true },
            { text: "250", correct: false },
            { text: "275", correct: false }
        ]
    },
    {
        question: "Who was the first Indian to win a Nobel Prize?",
        answers: [
            { text: "C. V. Raman", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Amartya Sen", correct: false },
            { text: "Mother Teresa", correct: false }
        ]
    },
    {
        question: "In which year did India win its first Olympic gold medal in hockey?",
        answers: [
            { text: "1928", correct: true },
            { text: "1932", correct: false },
            { text: "1948", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        question: "The Indian Parliament is composed of which three elements?",
        answers: [
            { text: "President, Lok Sabha, Rajya Sabha", correct: true },
            { text: "President, Lok Sabha, Supreme Court", correct: false },
            { text: "President, Lok Sabha, Prime Minister", correct: false },
            { text: "Prime Minister, Lok Sabha, Rajya Sabha", correct: false }
        ]
    },
    {
        question: "What is the official language of India as per the Constitution?",
        answers: [
            { text: "Hindi", correct: true },
            { text: "English", correct: false },
            { text: "Sanskrit", correct: false },
            { text: "Bengali", correct: false }
        ]
    },
    {
        question: "Which is the largest railway zone in India?",
        answers: [
            { text: "Central Railway", correct: false },
            { text: "Northern Railway", correct: true },
            { text: "Eastern Railway", correct: false },
            { text: "Western Railway", correct: false }
        ]
    },
    {
        question: "Who was the founder of the Indian National Congress (INC)?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Bal Gangadhar Tilak", correct: false },
            { text: "A. O. Hume", correct: true },
            { text: "Jawaharlal Nehru", correct: false }
        ]
    },
    {
        question: "In which year did India become a republic?",
        answers: [
            { text: "1947", correct: false },
            { text: "1950", correct: true },
            { text: "1962", correct: false },
            { text: "1971", correct: false }
        ]
    },
    {
        question: "Which of the following rivers does not originate in India?",
        answers: [
            { text: "Ganga", correct: false },
            { text: "Brahmaputra", correct: true },
            { text: "Yamuna", correct: false },
            { text: "Godavari", correct: false }
        ]
    },
    {
        question: "Which organization conducts the RRB NTPC exam?",
        answers: [
            { text: "SSC", correct: false },
            { text: "UPSC", correct: false },
            { text: "IBPS", correct: false },
            { text: "Railway Recruitment Board", correct: true }
        ]
    },
    {
        question: "Who was the first female Prime Minister of India?",
        answers: [
            { text: "Indira Gandhi", correct: true },
            { text: "Sarojini Naidu", correct: false },
            { text: "Pratibha Patil", correct: false },
            { text: "Sushma Swaraj", correct: false }
        ]
    },
    {
        question: "Which gas is commonly known as laughing gas?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Nitrous Oxide", correct: true },
            { text: "Carbon Dioxide", correct: false }
        ]
    },
    {
        question: "The headquarters of Indian Railways is located in which city?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "What is the minimum age requirement to become the President of India?",
        answers: [
            { text: "25 years", correct: false },
            { text: "30 years", correct: false },
            { text: "35 years", correct: true },
            { text: "40 years", correct: false }
        ]
    },
    {
        question: "Who has the authority to appoint the Chief Election Commissioner of India?",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "President", correct: true },
            { text: "Supreme Court", correct: false },
            { text: "Vice President", correct: false }
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
