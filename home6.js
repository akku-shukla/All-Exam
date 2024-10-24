const questions = [
    [
     
        {
            "question": "What is the value of 12% of 250?",
            "answers": [
                { "text": "25", "correct": false },
                { "text": "30", "correct": true },
                { "text": "35", "correct": false },
                { "text": "40", "correct": false }
            ]
        },
        {
            "question": "If all roses are flowers and some flowers fade quickly, can we conclude that some roses fade quickly?",
            "answers": [
                { "text": "Yes", "correct": false },
                { "text": "No", "correct": false },
                { "text": "Cannot be determined", "correct": true },
                { "text": "All roses fade quickly", "correct": false }
            ]
        },
        {
            "question": "Choose the word that is closest in meaning to 'ABATE.'",
            "answers": [
                { "text": "Increase", "correct": false },
                { "text": "Diminish", "correct": true },
                { "text": "Maintain", "correct": false },
                { "text": "Preserve", "correct": false }
            ]
        },
        {
            "question": "A store sells a shirt for $50 after a 20% discount. What was the original price?",
            "answers": [
                { "text": "$60", "correct": true },
                { "text": "$70", "correct": false },
                { "text": "$80", "correct": false },
                { "text": "$90", "correct": false }
            ]
        },
        {
            "question": "If 5x = 20, what is the value of x?",
            "answers": [
                { "text": "2", "correct": false },
                { "text": "4", "correct": true },
                { "text": "5", "correct": false },
                { "text": "10", "correct": false }
            ]
        },
        {
            "question": "In a certain code language, 'FISH' is coded as 'GJTI.' What is the code for 'BIRD'?",
            "answers": [
                { "text": "CJSF", "correct": false },
                { "text": "AJQS", "correct": false },
                { "text": "AJRT", "correct": true },
                { "text": "AJUS", "correct": false }
            ]
        },
        {
            "question": "Select the word that is opposite in meaning to 'ANNOY.'",
            "answers": [
                { "text": "Irritate", "correct": false },
                { "text": "Please", "correct": true },
                { "text": "Disturb", "correct": false },
                { "text": "Agitate", "correct": false }
            ]
        },
        {
            "question": "If a car travels 150 km in 2 hours, what is its speed in km/h?",
            "answers": [
                { "text": "60 km/h", "correct": false },
                { "text": "75 km/h", "correct": true },
                { "text": "90 km/h", "correct": false },
                { "text": "100 km/h", "correct": false }
            ]
        },
        {
            "question": "What is the least common multiple (LCM) of 4 and 6?",
            "answers": [
                { "text": "12", "correct": true },
                { "text": "24", "correct": false },
                { "text": "10", "correct": false },
                { "text": "30", "correct": false }
            ]
        },
        {
            "question": "If A is taller than B and C is shorter than A, who is the shortest?",
            "answers": [
                { "text": "A", "correct": false },
                { "text": "B", "correct": false },
                { "text": "C", "correct": true },
                { "text": "Cannot be determined", "correct": false }
            ]
        },
        {
            "question": "Choose the word that is closest in meaning to 'CONVULSIVE.'",
            "answers": [
                { "text": "Uncontrollable", "correct": true },
                { "text": "Steady", "correct": false },
                { "text": "Calm", "correct": false },
                { "text": "Gentle", "correct": false }
            ]
        },
        {
            "question": "In a survey of 100 people, 60 liked tea, 30 liked coffee, and 10 liked both. How many liked only tea?",
            "answers": [
                { "text": "60", "correct": false },
                { "text": "50", "correct": true },
                { "text": "30", "correct": false },
                { "text": "20", "correct": false }
            ]
        },
        {
            "question": "What is the square root of 144?",
            "answers": [
                { "text": "10", "correct": false },
                { "text": "11", "correct": false },
                { "text": "12", "correct": true },
                { "text": "14", "correct": false }
            ]
        },
        {
            "question": "If every cat is an animal and some animals are pets, can we conclude that some cats are pets?",
            "answers": [
                { "text": "Yes", "correct": false },
                { "text": "No", "correct": false },
                { "text": "Cannot be determined", "correct": true },
                { "text": "All cats are pets", "correct": false }
            ]
        },
        {
            "question": "Select the word that is opposite in meaning to 'PROSPER.'",
            "answers": [
                { "text": "Succeed", "correct": false },
                { "text": "Thrive", "correct": false },
                { "text": "Fail", "correct": true },
                { "text": "Flourish", "correct": false }
            ]
        },
        {
            "question": "A car’s value depreciates by 15% every year. If it is worth $20,000 now, what will its value be after one year?",
            "answers": [
                { "text": "$17,000", "correct": true },
                { "text": "$16,500", "correct": false },
                { "text": "$18,000", "correct": false },
                { "text": "$19,000", "correct": false }
            ]
        },
        {
            "question": "If a triangle has sides of lengths 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
            "answers": [
                { "text": "Acute", "correct": false },
                { "text": "Obtuse", "correct": false },
                { "text": "Right", "correct": true },
                { "text": "Equilateral", "correct": false }
            ]
        },
        {
            "question": "In a family of six members, A is the mother of B. C is the father of D, and D is the sister of B. How is A related to C?",
            "answers": [
                { "text": "Sister", "correct": false },
                { "text": "Brother", "correct": false },
                { "text": "Husband", "correct": false },
                { "text": "Wife", "correct": true }
            ]
        },
        {
            "question": "Choose the word that is closest in meaning to 'BENEFACTOR.'",
            "answers": [
                { "text": "Opponent", "correct": false },
                { "text": "Supporter", "correct": true },
                { "text": "Rival", "correct": false },
                { "text": "Beneficiary", "correct": false }
            ]
        },
        {
            "question": "If a factory produces 500 units in 5 days, how many units does it produce in 1 day?",
            "answers": [
                { "text": "50", "correct": false },
                { "text": "100", "correct": true },
                { "text": "150", "correct": false },
                { "text": "200", "correct": false }
            ]
        },
        {
            "question": "If a bag contains 5 red balls and 7 blue balls, what is the probability of randomly selecting a red ball?",
            "answers": [
                { "text": "5/12", "correct": true },
                { "text": "7/12", "correct": false },
                { "text": "1/3", "correct": false },
                { "text": "1/2", "correct": false }
            ]
        },
        {
            "question": "All dogs bark. Max is a dog. Therefore, Max barks. What type of reasoning is this?",
            "answers": [
                { "text": "Inductive", "correct": false },
                { "text": "Deductive", "correct": true },
                { "text": "Abductive", "correct": false },
                { "text": "Analogical", "correct": false }
            ]
        },
        {
            "question": "Select the word that is opposite in meaning to 'CONCUR.'",
            "answers": [
                { "text": "Agree", "correct": false },
                { "text": "Disagree", "correct": true },
                { "text": "Approve", "correct": false },
                { "text": "Acquiesce", "correct": false }
            ]
        },
        {
            "question": "A class has 30 students, 18 are boys and the rest are girls. What percentage of the class are girls?",
            "answers": [
                { "text": "40%", "correct": true },
                { "text": "50%", "correct": false },
                { "text": "60%", "correct": false },
                { "text": "30%", "correct": false }
            ]
        },
        {
            "question": "What is the next number in the series 2, 4, 8, 16, ___?",
            "answers": [
                { "text": "24", "correct": false },
                { "text": "30", "correct": false },
                { "text": "32", "correct": true },
                { "text": "36", "correct": false }
            ]
        },
        {
            "question": "If P is older than Q and R is younger than P, who is the youngest?",
            "answers": [
                { "text": "P", "correct": false },
                { "text": "Q", "correct": false },
                { "text": "R", "correct": true },
                { "text": "Cannot be determined", "correct": false }
            ]
        },
        {
            "question": "Choose the word that is closest in meaning to 'PREDICT.'",
            "answers": [
                { "text": "Assume", "correct": false },
                { "text": "Forecast", "correct": true },
                { "text": "Guess", "correct": false },
                { "text": "Conclude", "correct": false }
            ]
        },
        {
            "question": "In a survey, 70% of people preferred brand A, 20% preferred brand B, and 10% preferred brand C. If 200 people were surveyed, how many preferred brand B?",
            "answers": [
                { "text": "20", "correct": false },
                { "text": "40", "correct": true },
                { "text": "60", "correct": false },
                { "text": "80", "correct": false }
            ]
        },
        {
            "question": "What is 25% of 80?",
            "answers": [
                { "text": "15", "correct": false },
                { "text": "20", "correct": true },
                { "text": "25", "correct": false },
                { "text": "30", "correct": false }
            ]
        },
        {
            "question": "If every student in a class is studying for an exam and John is a student in that class, what can we conclude about John?",
            "answers": [
                { "text": "John is studying", "correct": true },
                { "text": "John is not studying", "correct": false },
                { "text": "John is not in the class", "correct": false },
                { "text": "None of the above", "correct": false }
            ]
        },
        {
            "question": "Select the word that is opposite in meaning to 'ENHANCE.'",
            "answers": [
                { "text": "Improve", "correct": false },
                { "text": "Diminish", "correct": true },
                { "text": "Augment", "correct": false },
                { "text": "Elevate", "correct": false }
            ]
        },
        {
            "question": "If a group of friends spent $120 in total, and each spent the same amount, how much did each spend if there were 4 friends?",
            "answers": [
                { "text": "$20", "correct": false },
                { "text": "$25", "correct": false },
                { "text": "$30", "correct": true },
                { "text": "$35", "correct": false }
            ]
        },
        {
            "question": "If a car travels 240 km in 3 hours, what is its average speed?",
            "answers": [
                { "text": "60 km/h", "correct": false },
                { "text": "70 km/h", "correct": false },
                { "text": "80 km/h", "correct": true },
                { "text": "90 km/h", "correct": false }
            ]
        },
        {
            "question": "If two trains are moving towards each other at 60 km/h and 90 km/h, how fast are they approaching each other?",
            "answers": [
                { "text": "150 km/h", "correct": true },
                { "text": "120 km/h", "correct": false },
                { "text": "90 km/h", "correct": false },
                { "text": "60 km/h", "correct": false }
            ]
        },
        {
            "question": "Choose the word that is closest in meaning to 'ELOQUENT.'",
            "answers": [
                { "text": "Silent", "correct": false },
                { "text": "Fluent", "correct": true },
                { "text": "Clumsy", "correct": false },
                { "text": "Awkward", "correct": false }
            ]
        },
        {
            "question": "If the sales of a product were $1,000 in January, $1,200 in February, and $1,500 in March, what is the average sales over these three months?",
            "answers": [
                { "text": "$1,200", "correct": false },
                { "text": "$1,300", "correct": false },
                { "text": "$1,400", "correct": false },
                { "text": "$1,500", "correct": false },
                { "text": "$1,233.33", "correct": true }
            ]
        },
        {
            "question": "What is 3/4 of 100?",
            "answers": [
                { "text": "50", "correct": false },
                { "text": "60", "correct": false },
                { "text": "75", "correct": true },
                { "text": "80", "correct": false }
            ]
        },
        {
            "question": "If A is greater than B and B is greater than C, which of the following is true?",
            "answers": [
                { "text": "A > C", "correct": true },
                { "text": "A < C", "correct": false },
                { "text": "A = C", "correct": false },
                { "text": "None of the above", "correct": false }
            ]
        },
        {
            "question": "Select the word that is opposite in meaning to 'DISMANTLE.'",
            "answers": [
                { "text": "Construct", "correct": true },
                { "text": "Destroy", "correct": false },
                { "text": "Break", "correct": false },
                { "text": "Demolish", "correct": false }
            ]
        },
        {
            "question": "A person earns $50,000 annually and spends 70% of his income. How much does he save?",
            "answers": [
                { "text": "$10,000", "correct": false },
                { "text": "$15,000", "correct": true },
                { "text": "$20,000", "correct": false },
                { "text": "$25,000", "correct": false }
            ]
        }
    ]
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
    let currentQuestion = questions.flat()[currentQuestionIndex]; // Flatten the array to access the questions correctly
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
        if (button.innerText === questions.flat()[currentQuestionIndex].answers.find(a => a.correct).text) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.flat().length}!`;
    nextButton.innerText = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.flat().length) { // Check against the flattened array length
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.flat().length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();