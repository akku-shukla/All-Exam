const questions = [
    {
        question: "What year did the Titanic sink?",
        answers: [
            { text: "1905", correct: false },
            { text: "1912", correct: true },
            { text: "1920", correct: false },
            { text: "1935", correct: false }
        ]
    },
    {
        question: "Which empire was ruled by Genghis Khan?",
        answers: [
            { text: "Ottoman Empire", correct: false },
            { text: "Mongol Empire", correct: true },
            { text: "Roman Empire", correct: false },
            { text: "Byzantine Empire", correct: false }
        ]
    },
    {
        question: "Who was the first president of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "John Adams", correct: false }
        ]
    },
    {
        question: "The Great Wall of China was primarily built to protect against invasions from which group?",
        answers: [
            { text: "Mongols", correct: true },
            { text: "Persians", correct: false },
            { text: "Romans", correct: false },
            { text: "Japanese", correct: false }
        ]
    },
    {
        question: "What was the primary cause of World War I?",
        answers: [
            { text: "Economic depression", correct: false },
            { text: "Assassination of Archduke Franz Ferdinand", correct: true },
            { text: "Colonization of Africa", correct: false },
            { text: "Rise of fascism", correct: false }
        ]
    },
    {
        question: "Which ancient civilization is known for the pyramids?",
        answers: [
            { text: "Roman", correct: false },
            { text: "Greek", correct: false },
            { text: "Egyptian", correct: true },
            { text: "Indus Valley", correct: false }
        ]
    },
    {
        question: "The Renaissance began in which country?",
        answers: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Spain", correct: false },
            { text: "England", correct: false }
        ]
    },
    {
        question: "What was the name of the ship that brought the Pilgrims to America?",
        answers: [
            { text: "The Mayflower", correct: true },
            { text: "The Santa Maria", correct: false },
            { text: "The Nina", correct: false },
            { text: "The Pinta", correct: false }
        ]
    },
    {
        question: "Which document proclaimed the independence of the American colonies from Britain?",
        answers: [
            { text: "The Magna Carta", correct: false },
            { text: "The Constitution", correct: false },
            { text: "The Bill of Rights", correct: false },
            { text: "The Declaration of Independence", correct: true }
        ]
    },
    {
        question: "Who was known as the 'Sun King'?",
        answers: [
            { text: "Louis XIV", correct: true },
            { text: "Louis XVI", correct: false },
            { text: "Napoleon Bonaparte", correct: false },
            { text: "Charles V", correct: false }
        ]
    },
    {
        question: "What ancient civilization is credited with creating the first known writing system?",
        answers: [
            { text: "Egyptians", correct: false },
            { text: "Sumerians", correct: true },
            { text: "Greeks", correct: false },
            { text: "Phoenicians", correct: false }
        ]
    },
    {
        question: "The Berlin Wall fell in what year?",
        answers: [
            { text: "1985", correct: false },
            { text: "1989", correct: true },
            { text: "1991", correct: false },
            { text: "1995", correct: false }
        ]
    },
    {
        question: "Who was the first female pharaoh of Egypt?",
        answers: [
            { text: "Cleopatra", correct: false },
            { text: "Hatshepsut", correct: true },
            { text: "Nefertiti", correct: false },
            { text: "Tutankhamun", correct: false }
        ]
    },
    {
        question: "Which empire was known for its extensive road system and communication network?",
        answers: [
            { text: "Roman Empire", correct: true },
            { text: "Persian Empire", correct: false },
            { text: "Ottoman Empire", correct: false },
            { text: "British Empire", correct: false }
        ]
    },
    {
        question: "Which war was fought between the North and South regions of the United States?",
        answers: [
            { text: "Revolutionary War", correct: false },
            { text: "War of 1812", correct: false },
            { text: "Civil War", correct: true },
            { text: "World War I", correct: false }
        ]
    },
    {
        question: "What was the primary religion of the Byzantine Empire?",
        answers: [
            { text: "Islam", correct: false },
            { text: "Buddhism", correct: false },
            { text: "Hinduism", correct: false },
            { text: "Christianity", correct: true }
        ]
    },
    {
        question: "Who was the first man to circumnavigate the globe?",
        answers: [
            { text: "Christopher Columbus", correct: false },
            { text: "Ferdinand Magellan", correct: true },
            { text: "Vasco da Gama", correct: false },
            { text: "James Cook", correct: false }
        ]
    },
    {
        question: "The Cold War was primarily a conflict between which two superpowers?",
        answers: [
            { text: "USA and USSR", correct: true },
            { text: "USA and China", correct: false },
            { text: "UK and France", correct: false },
            { text: "Japan and Germany", correct: false }
        ]
    },
    {
        question: "Which event marked the beginning of the French Revolution?",
        answers: [
            { text: "The Reign of Terror", correct: false },
            { text: "The Storming of the Bastille", correct: true },
            { text: "The Execution of Louis XVI", correct: false },
            { text: "The Declaration of the Rights of Man", correct: false }
        ]
    },
    {
        question: "What is the name of the famous ancient trade route that connected the East and West?",
        answers: [
            { text: "The Silk Road", correct: true },
            { text: "The Spice Route", correct: false },
            { text: "The Royal Road", correct: false },
            { text: "The Incense Route", correct: false }
        ]
    },
    {
        question: "Which country was known for the development of the first democratic government?",
        answers: [
            { text: "Greece", correct: true },
            { text: "Rome", correct: false },
            { text: "Egypt", correct: false },
            { text: "Persia", correct: false }
        ]
    },
    {
        question: "Who was the leader of the Soviet Union during World War II?",
        answers: [
            { text: "Lenin", correct: false },
            { text: "Stalin", correct: true },
            { text: "Khrushchev", correct: false },
            { text: "Trotsky", correct: false }
        ]
    },
    {
        question: "What year did World War II begin?",
        answers: [
            { text: "1935", correct: false },
            { text: "1939", correct: true },
            { text: "1941", correct: false },
            { text: "1945", correct: false }
        ]
    },
    {
        question: "Which empire was known for its cultural and scientific achievements during the Golden Age?",
        answers: [
            { text: "Roman Empire", correct: false },
            { text: "Ottoman Empire", correct: false },
            { text: "Persian Empire", correct: false },
            { text: "Islamic Empire", correct: true }
        ]
    },
    {
        question: "What was the primary cause of the 30 Years' War?",
        answers: [
            { text: "Territorial disputes", correct: false },
            { text: "Religious conflict", correct: true },
            { text: "Economic competition", correct: false },
            { text: "Colonial expansion", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Louis Pasteur", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Thomas Edison", correct: false }
        ]
    },
    {
        question: "Which treaty ended World War I?",
        answers: [
            { text: "Treaty of Versailles", correct: true },
            { text: "Treaty of Paris", correct: false },
            { text: "Treaty of Trianon", correct: false },
            { text: "Treaty of Saint-Germain", correct: false }
        ]
    },
    {
        question: "What was the primary economic system during the Middle Ages?",
        answers: [
            { text: "Capitalism", correct: false },
            { text: "Feudalism", correct: true },
            { text: "Socialism", correct: false },
            { text: "Mercantilism", correct: false }
        ]
    },
    {
        question: "Who was the first person to fly solo across the Atlantic Ocean?",
        answers: [
            { text: "Charles Lindbergh", correct: true },
            { text: "Amelia Earhart", correct: false },
            { text: "Orville Wright", correct: false },
            { text: "Wilbur Wright", correct: false }
        ]
    },
    {
        question: "The Inca Empire was located in which modern-day country?",
        answers: [
            { text: "Brazil", correct: false },
            { text: "Chile", correct: false },
            { text: "Peru", correct: true },
            { text: "Argentina", correct: false }
        ]
    },
    {
        question: "What year did the U.S. Civil Rights Act pass?",
        answers: [
            { text: "1960", correct: false },
            { text: "1964", correct: true },
            { text: "1968", correct: false },
            { text: "1972", correct: false }
        ]
    },
    {
        question: "Which battle is considered a turning point in the American Revolutionary War?",
        answers: [
            { text: "Battle of Bunker Hill", correct: false },
            { text: "Battle of Saratoga", correct: true },
            { text: "Battle of Yorktown", correct: false },
            { text: "Battle of Gettysburg", correct: false }
        ]
    },
    {
        question: "Who was the famous leader of the Indian independence movement?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Bhagat Singh", correct: false }
        ]
    },
    {
        question: "The fall of Constantinople occurred in what year?",
        answers: [
            { text: "1453", correct: true },
            { text: "1492", correct: false },
            { text: "1517", correct: false },
            { text: "1600", correct: false }
        ]
    },
    {
        question: "Which ancient civilization is known for its code of laws known as the Code of Hammurabi?",
        answers: [
            { text: "Babylonian", correct: true },
            { text: "Assyrian", correct: false },
            { text: "Egyptian", correct: false },
            { text: "Hittite", correct: false }
        ]
    },
    {
        question: "Who was the last monarch of France before the French Revolution?",
        answers: [
            { text: "Louis XIV", correct: false },
            { text: "Louis XV", correct: false },
            { text: "Louis XVI", correct: true },
            { text: "Napoleon Bonaparte", correct: false }
        ]
    },
    {
        question: "The Opium Wars were fought between China and which country?",
        answers: [
            { text: "France", correct: false },
            { text: "United States", correct: false },
            { text: "Japan", correct: false },
            { text: "Britain", correct: true }
        ]
    },
    {
        question: "Which event is often cited as the start of the Great Depression?",
        answers: [
            { text: "Stock Market Crash of 1929", correct: true },
            { text: "The Dust Bowl", correct: false },
            { text: "The New Deal", correct: false },
            { text: "The Bank Holiday", correct: false }
        ]
    },
    {
        question: "What was the main goal of the Crusades?",
        answers: [
            { text: "Spread Christianity", correct: true },
            { text: "Control trade routes", correct: false },
            { text: "Gain land", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which empire was known for its intricate system of aqueducts?",
        answers: [
            { text: "Roman Empire", correct: true },
            { text: "Maya Empire", correct: false },
            { text: "Aztec Empire", correct: false },
            { text: "Inca Empire", correct: false }
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
