const questions = [
    {
        question: "Who was the first Chief of Air Staff of the Indian Air Force?",
        answers: [
            { text: "Subroto Mukerjee", correct: true },
            { text: "Arjan Singh", correct: false },
            { text: "Pratap Chandra Lal", correct: false },
            { text: "Rakesh Kumar Singh Bhadauria", correct: false }
        ]
    },
    {
        question: "The Indian Air Force Day is celebrated on which date?",
        answers: [
            { text: "15th August", correct: false },
            { text: "8th October", correct: true },
            { text: "26th January", correct: false },
            { text: "4th December", correct: false }
        ]
    },
    {
        question: "Which aircraft is known as the backbone of the Indian Air Force?",
        answers: [
            { text: "Sukhoi Su-30MKI", correct: true },
            { text: "Rafale", correct: false },
            { text: "Mirage 2000", correct: false },
            { text: "MiG-29", correct: false }
        ]
    },
    {
        question: "Which of the following is a helicopter used by the Indian Air Force?",
        answers: [
            { text: "Apache AH-64", correct: true },
            { text: "Tejas", correct: false },
            { text: "Jaguar", correct: false },
            { text: "Rafale", correct: false }
        ]
    },
    {
        question: "The motto of the Indian Air Force is?",
        answers: [
            { text: "Touch the Sky with Glory", correct: true },
            { text: "Service Before Self", correct: false },
            { text: "Victory in the Air", correct: false },
            { text: "To Defend and Protect", correct: false }
        ]
    },
    {
        question: "In which year was the Indian Air Force established?",
        answers: [
            { text: "1930", correct: false },
            { text: "1932", correct: true },
            { text: "1945", correct: false },
            { text: "1947", correct: false }
        ]
    },
    {
        question: "Which of the following missiles is air-launched?",
        answers: [
            { text: "BrahMos", correct: false },
            { text: "Astra", correct: true },
            { text: "Agni", correct: false },
            { text: "Prithvi", correct: false }
        ]
    },
    {
        question: "Which country did India procure Rafale jets from?",
        answers: [
            { text: "United States", correct: false },
            { text: "France", correct: true },
            { text: "Russia", correct: false },
            { text: "Israel", correct: false }
        ]
    },
    {
        question: "Which of the following is an indigenously developed fighter aircraft by India?",
        answers: [
            { text: "Tejas", correct: true },
            { text: "Rafale", correct: false },
            { text: "F-16", correct: false },
            { text: "MiG-21", correct: false }
        ]
    },
    {
        question: "Who was the first woman to be inducted into the Indian Air Force as a fighter pilot?",
        answers: [
            { text: "Avani Chaturvedi", correct: true },
            { text: "Gunjan Saxena", correct: false },
            { text: "Bhawana Kanth", correct: false },
            { text: "Mohana Singh", correct: false }
        ]
    },
    {
        question: "What is the speed of sound in the air under standard conditions?",
        answers: [
            { text: "331 m/s", correct: true },
            { text: "300 m/s", correct: false },
            { text: "343 m/s", correct: false },
            { text: "400 m/s", correct: false }
        ]
    },
    {
        question: "What does RADAR stand for?",
        answers: [
            { text: "Radio Detection and Ranging", correct: true },
            { text: "Remote Detection and Range", correct: false },
            { text: "Radiation Detection and Range", correct: false },
            { text: "Radar Altimeter and Direction", correct: false }
        ]
    },
    {
        question: "Which Indian satellite is used for military communication?",
        answers: [
            { text: "GSAT-7", correct: true },
            { text: "INSAT-3C", correct: false },
            { text: "Cartosat-2", correct: false },
            { text: "Aryabhata", correct: false }
        ]
    },
    {
        question: "Which was the first Indian military aircraft?",
        answers: [
            { text: "HAL HF-24 Marut", correct: true },
            { text: "Tejas", correct: false },
            { text: "Jaguar", correct: false },
            { text: "Sukhoi Su-30MKI", correct: false }
        ]
    },
    {
        question: "Which of the following is a transport aircraft in the Indian Air Force?",
        answers: [
            { text: "C-17 Globemaster", correct: true },
            { text: "Jaguar", correct: false },
            { text: "MiG-29", correct: false },
            { text: "Mirage 2000", correct: false }
        ]
    },
    {
        question: "Which of the following operations was carried out by the Indian Air Force in the Kargil War?",
        answers: [
            { text: "Operation Vijay", correct: false },
            { text: "Operation Safed Sagar", correct: true },
            { text: "Operation Cactus", correct: false },
            { text: "Operation Blue Star", correct: false }
        ]
    },
    {
        question: "The highest rank in the Indian Air Force is:",
        answers: [
            { text: "Air Commodore", correct: false },
            { text: "Air Marshal", correct: false },
            { text: "Air Chief Marshal", correct: true },
            { text: "Group Captain", correct: false }
        ]
    },
    {
        question: "Which aircraft was used in the Balakot airstrike in 2019?",
        answers: [
            { text: "MiG-21", correct: false },
            { text: "Mirage 2000", correct: true },
            { text: "Sukhoi Su-30MKI", correct: false },
            { text: "Tejas", correct: false }
        ]
    },
    {
        question: "Which Indian Air Force officer was awarded the Param Vir Chakra posthumously?",
        answers: [
            { text: "Flying Officer Nirmal Jit Singh Sekhon", correct: true },
            { text: "Wing Commander Abhinandan Varthaman", correct: false },
            { text: "Squadron Leader Ajay Ahuja", correct: false },
            { text: "Group Captain Sahil Gandhi", correct: false }
        ]
    },
    {
        question: "Which country gifted India the C-130J Super Hercules aircraft?",
        answers: [
            { text: "United States", correct: true },
            { text: "Russia", correct: false },
            { text: "France", correct: false },
            { text: "Israel", correct: false }
        ]
    },
    {
        question: "Which is the largest operational base of the Indian Air Force?",
        answers: [
            { text: "Hindon Air Force Station", correct: true },
            { text: "Jodhpur Air Force Station", correct: false },
            { text: "Pathankot Air Force Station", correct: false },
            { text: "Tezpur Air Force Station", correct: false }
        ]
    },
    {
        question: "The Indian Air Force's aerobatic team is known as?",
        answers: [
            { text: "Sarang", correct: false },
            { text: "Surya Kiran", correct: true },
            { text: "Garud", correct: false },
            { text: "Trishul", correct: false }
        ]
    },
    {
        question: "Which missile is designed to intercept and destroy enemy aircraft in air-to-air combat?",
        answers: [
            { text: "Astra", correct: true },
            { text: "Agni", correct: false },
            { text: "Prithvi", correct: false },
            { text: "Nirbhay", correct: false }
        ]
    },
    {
        question: "Which of the following air defense systems is used by the Indian Air Force?",
        answers: [
            { text: "S-400", correct: true },
            { text: "Patriot", correct: false },
            { text: "THAAD", correct: false },
            { text: "Iron Dome", correct: false }
        ]
    },
    {
        question: "Which was the first indigenous radar developed in India?",
        answers: [
            { text: "Indra", correct: true },
            { text: "Netra", correct: false },
            { text: "Rohini", correct: false },
            { text: "Dharma", correct: false }
        ]
    },
    {
        question: "Which branch of the Indian Armed Forces is responsible for the aerial defense of India?",
        answers: [
            { text: "Indian Army", correct: false },
            { text: "Indian Air Force", correct: true },
            { text: "Indian Navy", correct: false },
            { text: "National Security Guard", correct: false }
        ]
    },
    {
        question: "Which year did the Indian Air Force receive its first Rafale jets?",
        answers: [
            { text: "2018", correct: false },
            { text: "2020", correct: true },
            { text: "2017", correct: false },
            { text: "2019", correct: false }
        ]
    },
    {
        question: "Which of these aircraft is used for mid-air refueling in the Indian Air Force?",
        answers: [
            { text: "IL-78", correct: true },
            { text: "C-130J", correct: false },
            { text: "MiG-29", correct: false },
            { text: "Tejas", correct: false }
        ]
    },
    {
        question: "Which city houses the Indian Air Force Academy?",
        answers: [
            { text: "Hyderabad", correct: true },
            { text: "New Delhi", correct: false },
            { text: "Bengaluru", correct: false },
            { text: "Chandigarh", correct: false }
        ]
    },
    {
        question: "Which fighter jet was famously referred to as the 'Flying Coffin' due to its high accident rate?",
        answers: [
            { text: "MiG-21", correct: true },
            { text: "Sukhoi Su-30MKI", correct: false },
            { text: "Mirage 2000", correct: false },
            { text: "Jaguar", correct: false }
        ]
    },
    {
        question: "Which of the following ranks is senior in the Indian Air Force?",
        answers: [
            { text: "Group Captain", correct: false },
            { text: "Wing Commander", correct: false },
            { text: "Air Vice Marshal", correct: true },
            { text: "Squadron Leader", correct: false }
        ]
    },
    {
        question: "What is the primary role of AWACS (Airborne Warning and Control System)?",
        answers: [
            { text: "Early warning and surveillance", correct: true },
            { text: "Ground attack", correct: false },
            { text: "Transport", correct: false },
            { text: "Mid-air refueling", correct: false }
        ]
    },
    {
        question: "Which of these missiles is a part of India's nuclear triad?",
        answers: [
            { text: "Agni", correct: true },
            { text: "BrahMos", correct: false },
            { text: "Prithvi", correct: false },
            { text: "Astra", correct: false }
        ]
    },
    {
        question: "What is the role of the Garud Commando Force in the Indian Air Force?",
        answers: [
            { text: "Special forces and counter-terrorism", correct: true },
            { text: "Air traffic control", correct: false },
            { text: "Search and rescue", correct: false },
            { text: "Missile guidance", correct: false }
        ]
    },
    {
        question: "The Indian Air Force's 'Netra' is an example of what kind of system?",
        answers: [
            { text: "AWACS", correct: true },
            { text: "Fighter jet", correct: false },
            { text: "Transport aircraft", correct: false },
            { text: "Helicopter", correct: false }
        ]
    },
   
        {
            question: "What is the retirement age of an Air Marshal in the Indian Air Force?",
            answers: [
                { text: "58 years", correct: false },
                { text: "60 years", correct: true },
                { text: "62 years", correct: false },
                { text: "55 years", correct: false }
            ]
        },
        {
            question: "Which fighter jet replaced the MiG-21 in the Indian Air Force's inventory?",
            answers: [
                { text: "Tejas", correct: true },
                { text: "Jaguar", correct: false },
                { text: "Sukhoi Su-30MKI", correct: false },
                { text: "Mirage 2000", correct: false }
            ]
        },
        {
            question: "Who is the current Chief of Air Staff of the Indian Air Force (as of 2024)?",
            answers: [
                { text: "Rakesh Kumar Singh Bhadauria", correct: false },
                { text: "Vivek Ram Chaudhari", correct: false },
                { text: "V. R. Chaudhari", correct: true },
                { text: "Arjan Singh", correct: false }
            ]
        },
        {
            question: "Which country collaborated with India to develop the BrahMos missile?",
            answers: [
                { text: "United States", correct: false },
                { text: "Russia", correct: true },
                { text: "France", correct: false },
                { text: "Israel", correct: false }
            ]
        },
        {
            question: "What is the name of the Indian Air Force's strategic airlift aircraft?",
            answers: [
                { text: "C-17 Globemaster III", correct: true },
                { text: "IL-76", correct: false },
                { text: "C-130J Super Hercules", correct: false },
                { text: "Antonov AN-32", correct: false }
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
