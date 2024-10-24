const questions = [
    {
        question: "Which of the following is the longest river in India?",
        answers: [
            { text: "Ganga", correct: true },
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Narmada", correct: false }
        ]
    },
    {
        question: "Which of the following is the capital of Maharashtra?",
        answers: [
            { text: "Mumbai", correct: true },
            { text: "Pune", correct: false },
            { text: "Nagpur", correct: false },
            { text: "Nashik", correct: false }
        ]
    },
    {
        question: "Who wrote the book 'Discovery of India'?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Sardar Patel", correct: false },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "India", correct: false },
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Thailand", correct: false }
        ]
    },
    {
        question: "What is the full form of HTTP in computer terminology?",
        answers: [
            { text: "HyperText Transfer Protocol", correct: true },
            { text: "HighText Transfer Protocol", correct: false },
            { text: "HyperType Transfer Process", correct: false },
            { text: "HighText Type Protocol", correct: false }
        ]
    },
    {
        question: "Who was the first President of India?",
        answers: [
            { text: "Rajendra Prasad", correct: true },
            { text: "S. Radhakrishnan", correct: false },
            { text: "Zakir Hussain", correct: false },
            { text: "V.V. Giri", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false },
            { text: "Oxonium", correct: false }
        ]
    },
    {
        question: "Which of the following is the smallest state in India by area?",
        answers: [
            { text: "Goa", correct: true },
            { text: "Sikkim", correct: false },
            { text: "Tripura", correct: false },
            { text: "Manipur", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Dollar", correct: false },
            { text: "Peso", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "In which year did India gain independence from British rule?",
        answers: [
            { text: "1945", correct: false },
            { text: "1947", correct: true },
            { text: "1950", correct: false },
            { text: "1952", correct: false }
        ]
    },
    {
        question: "Which is the national bird of India?",
        answers: [
            { text: "Peacock", correct: true },
            { text: "Sparrow", correct: false },
            { text: "Eagle", correct: false },
            { text: "Crow", correct: false }
        ]
    },
    {
        question: "Which of the following is the largest planet in the solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which Mughal emperor built the Taj Mahal?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Aurangzeb", correct: false },
            { text: "Shah Jahan", correct: true },
            { text: "Humayun", correct: false }
        ]
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        answers: [
            { text: "Haryana", correct: false },
            { text: "Punjab", correct: true },
            { text: "Himachal Pradesh", correct: false },
            { text: "Uttar Pradesh", correct: false }
        ]
    },
    {
        question: "Which element is used in pencils?",
        answers: [
            { text: "Lead", correct: false },
            { text: "Graphite", correct: true },
            { text: "Carbon", correct: false },
            { text: "Zinc", correct: false }
        ]
    },
    {
        question: "What is the SI unit of Force?",
        answers: [
            { text: "Joule", correct: false },
            { text: "Newton", correct: true },
            { text: "Watt", correct: false },
            { text: "Pascal", correct: false }
        ]
    },
    {
        question: "Which river is known as the 'Sorrow of Bihar'?",
        answers: [
            { text: "Ganga", correct: false },
            { text: "Yamuna", correct: false },
            { text: "Kosi", correct: true },
            { text: "Mahanadi", correct: false }
        ]
    },
    {
        question: "Which of the following is a leap year?",
        answers: [
            { text: "1900", correct: false },
            { text: "2000", correct: true },
            { text: "2100", correct: false },
            { text: "1800", correct: false }
        ]
    },
    {
        question: "Which vitamin is produced when our body is exposed to sunlight?",
        answers: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin B", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true }
        ]
    },
    {
        question: "Who is known as the father of the Indian Constitution?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "B.R. Ambedkar", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Galileo", correct: false }
        ]
    },
    {
        question: "Which of the following is a non-renewable source of energy?",
        answers: [
            { text: "Solar Energy", correct: false },
            { text: "Wind Energy", correct: false },
            { text: "Coal", correct: true },
            { text: "Geothermal Energy", correct: false }
        ]
    },
    {
        question: "Which state in India is famous for tea production?",
        answers: [
            { text: "Assam", correct: true },
            { text: "Rajasthan", correct: false },
            { text: "Gujarat", correct: false },
            { text: "Punjab", correct: false }
        ]
    },
    {
        question: "Which Indian leader gave the slogan 'Jai Jawan, Jai Kisan'?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Lal Bahadur Shastri", correct: true },
            { text: "Indira Gandhi", correct: false },
            { text: "Rajiv Gandhi", correct: false }
        ]
    },
    {
        question: "Who was the first woman Prime Minister of India?",
        answers: [
            { text: "Indira Gandhi", correct: true },
            { text: "Sarojini Naidu", correct: false },
            { text: "Sonia Gandhi", correct: false },
            { text: "Pratibha Patil", correct: false }
        ]
    },
    {
        question: "Which of the following is a vector quantity?",
        answers: [
            { text: "Speed", correct: false },
            { text: "Distance", correct: false },
            { text: "Force", correct: true },
            { text: "Time", correct: false }
        ]
    },
    {
        question: "Which of the following rivers flows into the Bay of Bengal?",
        answers: [
            { text: "Narmada", correct: false },
            { text: "Tapti", correct: false },
            { text: "Ganga", correct: true },
            { text: "Mahi", correct: false }
        ]
    },
    {
        question: "In which year was the Reserve Bank of India (RBI) established?",
        answers: [
            { text: "1935", correct: true },
            { text: "1947", correct: false },
            { text: "1950", correct: false },
            { text: "1964", correct: false }
        ]
    },
    {
        question: "Which metal is used to make aircraft parts due to its light weight?",
        answers: [
            { text: "Iron", correct: false },
            { text: "Copper", correct: false },
            { text: "Aluminium", correct: true },
            { text: "Gold", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "H2O2", correct: false },
            { text: "H2O", correct: true },
            { text: "H2", correct: false },
            { text: "O2", correct: false }
        ]
    },
    {
        question: "Who discovered Penicillin?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Charles Darwin", correct: false }
        ]
    },
    {
        question: "What is the capital of the USA?",
        answers: [
            { text: "New York", correct: false },
            { text: "Washington D.C.", correct: true },
            { text: "Los Angeles", correct: false },
            { text: "Chicago", correct: false }
        ]
    },
    {
        question: "Which of the following is the hardest natural substance?",
        answers: [
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false }
        ]
    },
    {
        question: "Which river forms the boundary between India and Pakistan?",
        answers: [
            { text: "Sutlej", correct: false },
            { text: "Indus", correct: true },
            { text: "Ganga", correct: false },
            { text: "Brahmaputra", correct: false }
        ]
    },
    {
        question: "Which state is known as the 'Fruit Bowl' of India?",
        answers: [
            { text: "Himachal Pradesh", correct: true },
            { text: "Maharashtra", correct: false },
            { text: "Tamil Nadu", correct: false },
            { text: "Kerala", correct: false }
        ]
    },
    {
        question: "Who is the author of the book 'Wings of Fire'?",
        answers: [
            { text: "A.P.J. Abdul Kalam", correct: true },
            { text: "Vikram Seth", correct: false },
            { text: "Salman Rushdie", correct: false },
            { text: "Chetan Bhagat", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Thar", correct: false },
            { text: "Kalahari", correct: false },
            { text: "Sahara", correct: true },
            { text: "Gobi", correct: false }
        ]
    },
    {
        question: "Which state in India is the leading producer of rubber?",
        answers: [
            { text: "Kerala", correct: true },
            { text: "Karnataka", correct: false },
            { text: "Tamil Nadu", correct: false },
            { text: "Maharashtra", correct: false }
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
