const questions = [
    {
        question: "What is the primary theme of 'The Dream of the Red Chamber'?",
        answers: [
            { text: "Friendship", correct: false },
            { text: "Love", correct: false },
            { text: "The decline of the feudal system", correct: true },
            { text: "Nature", correct: false }
        ]
    },
    {
        question: "Which of the following is a famous work by Confucius?",
        answers: [
            { text: "Dao De Jing", correct: false },
            { text: "The Analects", correct: true },
            { text: "Zhuangzi", correct: false },
            { text: "The Book of Songs", correct: false }
        ]
    },
    {
        question: "What literary genre is characterized by the expression of personal feelings and thoughts?",
        answers: [
            { text: "Epic", correct: false },
            { text: "Lyric", correct: true },
            { text: "Drama", correct: false },
            { text: "Novel", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Poet Immortal' in Chinese literature?",
        answers: [
            { text: "Li Bai", correct: true },
            { text: "Du Fu", correct: false },
            { text: "Wang Wei", correct: false },
            { text: "Bai Juyi", correct: false }
        ]
    },
    {
        question: "What is the main idea of the poem 'The River Merchant's Wife: A Letter' by Li Po?",
        answers: [
            { text: "Celebration of love", correct: false },
            { text: "Loneliness and longing", correct: true },
            { text: "Joy of nature", correct: false },
            { text: "Critique of society", correct: false }
        ]
    },
    {
        question: "What is the value of x in the equation 2x + 3 = 7?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "If the area of a circle is 50π, what is the radius?",
        answers: [
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "10", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
        question: "What is the solution to the quadratic equation x² - 5x + 6 = 0?",
        answers: [
            { text: "2 and 3", correct: true },
            { text: "1 and 6", correct: false },
            { text: "-2 and -3", correct: false },
            { text: "0 and 5", correct: false }
        ]
    },
    {
        question: "If the ratio of two numbers is 3:4, what is the sum of the numbers if the smaller number is 12?",
        answers: [
            { text: "36", correct: false },
            { text: "48", correct: true },
            { text: "60", correct: false },
            { text: "84", correct: false }
        ]
    },
    {
        question: "What is the value of sin 30°?",
        answers: [
            { text: "1/2", correct: true },
            { text: "√3/2", correct: false },
            { text: "0", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "What is the synonym of 'happy'?",
        answers: [
            { text: "Sad", correct: false },
            { text: "Joyful", correct: true },
            { text: "Angry", correct: false },
            { text: "Fearful", correct: false }
        ]
    },
    {
        question: "Which of the following sentences is grammatically correct?",
        answers: [
            { text: "She don't like apples.", correct: false },
            { text: "She doesn't likes apples.", correct: false },
            { text: "She doesn't like apples.", correct: true },
            { text: "She not like apples.", correct: false }
        ]
    },
    {
        question: "What is the opposite of 'generous'?",
        answers: [
            { text: "Kind", correct: false },
            { text: "Selfish", correct: true },
            { text: "Brave", correct: false },
            { text: "Polite", correct: false }
        ]
    },
    {
        question: "Choose the correct word to complete the sentence: 'He is very __________ about his work.'",
        answers: [
            { text: "care", correct: false },
            { text: "careful", correct: true },
            { text: "caring", correct: false },
            { text: "cared", correct: false }
        ]
    },
    {
        question: "Which of the following is a compound sentence?",
        answers: [
            { text: "I like to read.", correct: false },
            { text: "I like to read, and I enjoy writing.", correct: true },
            { text: "Reading is fun.", correct: false },
            { text: "He is tired.", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "H2SO4", correct: false }
        ]
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        answers: [
            { text: "Lungs", correct: false },
            { text: "Brain", correct: false },
            { text: "Heart", correct: true },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "What is the primary gas found in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "What type of energy is stored in food?",
        answers: [
            { text: "Mechanical Energy", correct: false },
            { text: "Chemical Energy", correct: true },
            { text: "Thermal Energy", correct: false },
            { text: "Kinetic Energy", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who was the first emperor of China?",
        answers: [
            { text: "Qin Shi Huang", correct: true },
            { text: "Han Wudi", correct: false },
            { text: "Liu Bang", correct: false },
            { text: "Sun Yat-sen", correct: false }
        ]
    },
    {
        question: "What is the capital of China?",
        answers: [
            { text: "Shanghai", correct: false },
            { text: "Beijing", correct: true },
            { text: "Guangzhou", correct: false },
            { text: "Chengdu", correct: false }
        ]
    },
    {
        question: "In which year did the Cultural Revolution begin?",
        answers: [
            { text: "1949", correct: false },
            { text: "1966", correct: true },
            { text: "1978", correct: false },
            { text: "1989", correct: false }
        ]
    },
    {
        question: "Which river is known as the 'Mother River' of China?",
        answers: [
            { text: "Yellow River", correct: true },
            { text: "Yangtze River", correct: false },
            { text: "Mekong River", correct: false },
            { text: "Pearl River", correct: false }
        ]
    },
    {
        question: "What was the primary reason for the Opium Wars in China?",
        answers: [
            { text: "Trade disputes", correct: true },
            { text: "Land disputes", correct: false },
            { text: "Religious differences", correct: false },
            { text: "Cultural exchanges", correct: false }
        ]
    },
    {
        question: "If all roses are flowers, and some flowers fade quickly, what can be concluded?",
        answers: [
            { text: "All roses fade quickly.", correct: false },
            { text: "Some roses fade quickly.", correct: true },
            { text: "No roses fade quickly.", correct: false },
            { text: "Some flowers do not fade quickly.", correct: false }
        ]
    },
    {
        question: "If a rectangle has a length of 10 cm and a width of 5 cm, what is its area?",
        answers: [
            { text: "15 cm²", correct: false },
            { text: "50 cm²", correct: true },
            { text: "25 cm²", correct: false },
            { text: "30 cm²", correct: false }
        ]
    },
    {
        question: "What comes next in the sequence: 2, 4, 8, 16, ...?",
        answers: [
            { text: "20", correct: false },
            { text: "24", correct: false },
            { text: "32", correct: true },
            { text: "40", correct: false }
        ]
    },
    {
        question: "A train leaves the station traveling at 60 km/h. How far will it travel in 2 hours?",
        answers: [
            { text: "90 km", correct: false },
            { text: "120 km", correct: true },
            { text: "150 km", correct: false },
            { text: "180 km", correct: false }
        ]
    },
    {
        question: "Which of the following shapes has the most sides?",
        answers: [
            { text: "Triangle", correct: false },
            { text: "Square", correct: false },
            { text: "Pentagon", correct: false },
            { text: "Hexagon", correct: true }
        ]
    },
    {
        question: "Which instrument is used to measure temperature?",
        answers: [
            { text: "Barometer", correct: false },
            { text: "Thermometer", correct: true },
            { text: "Anemometer", correct: false },
            { text: "Hygrometer", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water at sea level in Celsius?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "120°C", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of electromagnetic radiation?",
        answers: [
            { text: "Sound waves", correct: false },
            { text: "Visible light", correct: true },
            { text: "Water waves", correct: false },
            { text: "Seismic waves", correct: false }
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
        question: "What is the main ingredient in traditional sushi?",
        answers: [
            { text: "Beef", correct: false },
            { text: "Chicken", correct: false },
            { text: "Fish", correct: true },
            { text: "Pork", correct: false }
        ]
    },
    {
        question: "Which artist is famous for the painting 'Starry Night'?",
        answers: [
            { text: "Picasso", correct: false },
            { text: "Van Gogh", correct: true },
            { text: "Monet", correct: false },
            { text: "Da Vinci", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the genre of dystopian literature?",
        answers: [
            { text: "Utopian societies", correct: false },
            { text: "Realistic portrayals of life", correct: false },
            { text: "Negative societal outcomes", correct: true },
            { text: "Historical events", correct: false }
        ]
    },
    {
        question: "Which novel features the character 'Hester Prynne'?",
        answers: [
            { text: "The Scarlet Letter", correct: true },
            { text: "Moby Dick", correct: false },
            { text: "The Great Gatsby", correct: false },
            { text: "To Kill a Mockingbird", correct: false }
        ]
    },
    {
        question: "Which of the following is a famous play written by William Shakespeare?",
        answers: [
            { text: "The Crucible", correct: false },
            { text: "A Midsummer Night's Dream", correct: true },
            { text: "Death of a Salesman", correct: false },
            { text: "The Glass Menagerie", correct: false }
        ]
    },
    {
        question: "What is the term for a recurring theme or motif in literature?",
        answers: [
            { text: "Symbol", correct: false },
            { text: "Allegory", correct: false },
            { text: "Archetype", correct: true },
            { text: "Irony", correct: false }
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
