const questions = [
    {
        question: "What is the largest planet in our Solar System?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the closest planet to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Earth", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Which planet is known for its prominent ring system?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the smallest planet in our Solar System?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Pluto", correct: false }
        ]
    },
    {
        question: "Which planet is known for having a day longer than its year?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which gas makes up most of the Sun's composition?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Hydrogen", correct: true },
            { text: "Helium", correct: false },
            { text: "Carbon Dioxide", correct: false }
        ]
    },
    {
        question: "What is the name of Earth's only natural satellite?",
        answers: [
            { text: "Titan", correct: false },
            { text: "Ganymede", correct: false },
            { text: "Moon", correct: true },
            { text: "Europa", correct: false }
        ]
    },
    {
        question: "What is the main component of Saturn's rings?",
        answers: [
            { text: "Dust", correct: false },
            { text: "Ice and rock", correct: true },
            { text: "Gas", correct: false },
            { text: "Liquid water", correct: false }
        ]
    },
    {
        question: "Which planet is known for its extreme greenhouse effect?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "What is the fourth planet from the Sun?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which planet is tilted on its axis so much that it appears to roll along its orbit?",
        answers: [
            { text: "Uranus", correct: true },
            { text: "Neptune", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the Kuiper Belt?",
        answers: [
            { text: "A region of asteroids", correct: false },
            { text: "A region of comets", correct: false },
            { text: "A region beyond Neptune", correct: true },
            { text: "A region within the asteroid belt", correct: false }
        ]
    },
    {
        question: "What is the largest moon of Saturn?",
        answers: [
            { text: "Europa", correct: false },
            { text: "Titan", correct: true },
            { text: "Ganymede", correct: false },
            { text: "Callisto", correct: false }
        ]
    },
    {
        question: "Which planet is known for having a beautiful blue color due to methane in its atmosphere?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Neptune", correct: true },
            { text: "Uranus", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the main component of the atmosphere on Mars?",
        answers: [
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Methane", correct: false }
        ]
    },
    {
        question: "Which planet has a day that lasts about 10 hours?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the largest volcano in the Solar System?",
        answers: [
            { text: "Olympus Mons", correct: true },
            { text: "Mauna Kea", correct: false },
            { text: "Mount Everest", correct: false },
            { text: "Mount Kilimanjaro", correct: false }
        ]
    },
    {
        question: "Which planet has the Great Red Spot, a giant storm?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What are comets primarily composed of?",
        answers: [
            { text: "Metal", correct: false },
            { text: "Ice and dust", correct: true },
            { text: "Rock", correct: false },
            { text: "Gas", correct: false }
        ]
    },
    {
        question: "Which planet is referred to as Earth's twin due to its similar size and composition?",
        answers: [
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "How many planets are in our Solar System?",
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "What is the primary reason for the seasons on Earth?",
        answers: [
            { text: "Distance from the Sun", correct: false },
            { text: "Tilt of Earth's axis", correct: true },
            { text: "Earth's rotation speed", correct: false },
            { text: "The shape of Earth", correct: false }
        ]
    },
    {
        question: "Which planet has the highest average temperature?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Venus", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What are the two main types of planets in our Solar System?",
        answers: [
            { text: "Terrestrial and Gas giants", correct: true },
            { text: "Rocky and Icy", correct: false },
            { text: "Inner and Outer", correct: false },
            { text: "Solid and Liquid", correct: false }
        ]
    },
    {
        question: "What is the name of the fifth planet from the Sun?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "Which planet has a very thin atmosphere composed mainly of hydrogen and helium?",
        answers: [
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Mars", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the term for a celestial body that orbits a planet?",
        answers: [
            { text: "Asteroid", correct: false },
            { text: "Comet", correct: false },
            { text: "Moon", correct: true },
            { text: "Dwarf planet", correct: false }
        ]
    },
    {
        question: "Which planet is known for having horizontal rings?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Uranus", correct: true },
            { text: "Neptune", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "What is the most distant planet from the Sun in our Solar System?",
        answers: [
            { text: "Neptune", correct: true },
            { text: "Uranus", correct: false },
            { text: "Saturn", correct: false },
            { text: "Pluto", correct: false }
        ]
    },
    {
        question: "Which planet has a surface pressure 92 times that of Earth?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    
    {
        question: "What celestial object is often considered the largest dwarf planet in our Solar System?",
        answers: [
            { text: "Eris", correct: true },
            { text: "Ceres", correct: false },
            { text: "Pluto", correct: false },
            { text: "Haumea", correct: false }
        ]
    },
    {
        question: "What is the term for the region beyond Neptune filled with icy bodies?",
        answers: [
            { text: "Asteroid Belt", correct: false },
            { text: "Kuiper Belt", correct: true },
            { text: "Oort Cloud", correct: false },
            { text: "Heliosphere", correct: false }
        ]
    },
    {
        question: "Which planet is known for its wind speeds reaching up to 2,100 km/h?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What phenomenon occurs when the Moon passes directly between the Earth and the Sun?",
        answers: [
            { text: "Lunar Eclipse", correct: false },
            { text: "Solar Eclipse", correct: true },
            { text: "Transit", correct: false },
            { text: "Conjunction", correct: false }
        ]
    },
    {
        question: "Which planet is famous for its Great Dark Spot?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Neptune", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the primary reason for the difference in temperature between the day and night sides of Mercury?",
        answers: [
            { text: "Lack of atmosphere", correct: true },
            { text: "Distance from the Sun", correct: false },
            { text: "Solar radiation", correct: false },
            { text: "Geological activity", correct: false }
        ]
    },
    {
        question: "What is the name of the first artificial satellite sent into space?",
        answers: [
            { text: "Apollo 11", correct: false },
            { text: "Vostok 1", correct: false },
            { text: "Sputnik 1", correct: true },
            { text: "Hubble Space Telescope", correct: false }
        ]
    },
    {
        question: "Which celestial body is known as the 'morning star' or 'evening star'?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: true },
            { text: "Mercury", correct: false }
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
