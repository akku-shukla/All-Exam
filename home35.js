const questions = [
    {
        question: "What does SNAP stand for?",
        answers: [
            { text: "Symbiosis National Aptitude Program", correct: false },
            { text: "Symbiosis National Admission Process", correct: false },
            { text: "Symbiosis National Aptitude Test", correct: true },
            { text: "Symbiosis National Assessment Procedure", correct: false }
        ]
    },
   
    {
        question: "What is the primary purpose of the SNAP exam?",
        answers: [
            { text: "To assess knowledge in Science", correct: false },
            { text: "To evaluate students' aptitude for management programs", correct: true },
            { text: "To test students' technical skills", correct: false },
            { text: "To provide scholarships", correct: false }
        ]
    },
    {
        question: "In which format is the SNAP exam conducted?",
        answers: [
            { text: "Online only", correct: true },
            { text: "Offline only", correct: false },
            { text: "Both online and offline", correct: false },
            { text: "Distance learning", correct: false }
        ]
    },
    {
        question: "What is the duration of the SNAP exam?",
        answers: [
            { text: "60 minutes", correct: false },
            { text: "90 minutes", correct: true },
            { text: "120 minutes", correct: false },
            { text: "150 minutes", correct: false }
        ]
    },
    {
        question: "Which of the following sections is NOT part of the SNAP exam?",
        answers: [
            { text: "General English", correct: false },
            { text: "Quantitative Aptitude", correct: false },
            { text: "Data Interpretation", correct: false },
            { text: "Scientific Knowledge", correct: true }
        ]
    },
    {
        question: "How many questions are typically asked in the SNAP exam?",
        answers: [
            { text: "50", correct: false },
            { text: "60", correct: true },
            { text: "70", correct: false },
            { text: "80", correct: false }
        ]
    },
    {
        question: "What is the scoring pattern for incorrect answers in SNAP?",
        answers: [
            { text: "No negative marking", correct: false },
            { text: "-0.25 for each wrong answer", correct: true },
            { text: "-0.50 for each wrong answer", correct: false },
            { text: "-1.00 for each wrong answer", correct: false }
        ]
    },
    {
        question: "Which of the following is a key skill assessed in the SNAP exam?",
        answers: [
            { text: "Technical skills", correct: false },
            { text: "Leadership skills", correct: false },
            { text: "Analytical skills", correct: true },
            { text: "Interpersonal skills", correct: false }
        ]
    },
    {
        question: "Which section of the SNAP exam focuses on language comprehension?",
        answers: [
            { text: "Quantitative Aptitude", correct: false },
            { text: "General English", correct: true },
            { text: "Logical Reasoning", correct: false },
            { text: "Data Interpretation", correct: false }
        ]
    },
    {
        question: "What is the age limit for candidates appearing for SNAP?",
        answers: [
            { text: "No age limit", correct: true },
            { text: "25 years", correct: false },
            { text: "27 years", correct: false },
            { text: "30 years", correct: false }
        ]
    },
    {
        question: "Which type of reasoning is primarily assessed in the Logical Reasoning section?",
        answers: [
            { text: "Deductive reasoning", correct: true },
            { text: "Inductive reasoning", correct: true },
            { text: "Abductive reasoning", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The SNAP exam is held annually in which month?",
        answers: [
            { text: "January", correct: false },
            { text: "August", correct: false },
            { text: "December", correct: true },
            { text: "April", correct: false }
        ]
    },
    {
        question: "Which of the following programs does SNAP primarily lead to?",
        answers: [
            { text: "Bachelors in Science", correct: false },
            { text: "Masters in Business Administration", correct: true },
            { text: "Masters in Computer Applications", correct: false },
            { text: "Bachelors in Arts", correct: false }
        ]
    },
    {
        question: "Which of the following is true about the SNAP exam's question difficulty level?",
        answers: [
            { text: "All questions are of equal difficulty", correct: false },
            { text: "Questions range from easy to difficult", correct: true },
            { text: "Only difficult questions are asked", correct: false },
            { text: "Only easy questions are asked", correct: false }
        ]
    },
    {
        question: "Which institution accepts SNAP scores for admission?",
        answers: [
            { text: "Indian Institute of Management", correct: false },
            { text: "Symbiosis Institute of Business Management", correct: true },
            { text: "National Institute of Fashion Technology", correct: false },
            { text: "Indian School of Business", correct: false }
        ]
    },
    {
        question: "What is the role of mock tests in SNAP preparation?",
        answers: [
            { text: "They are not useful", correct: false },
            { text: "They help identify weak areas", correct: true },
            { text: "They are mandatory", correct: false },
            { text: "They are only for practice", correct: false }
        ]
    },
    {
        question: "Which section requires data interpretation skills?",
        answers: [
            { text: "General English", correct: false },
            { text: "Quantitative Aptitude", correct: true },
            { text: "Logical Reasoning", correct: true },
            { text: "Both b and c", correct: true }
        ]
    },
    {
        question: "What is the weightage of the General English section in SNAP?",
        answers: [
            { text: "20%", correct: false },
            { text: "25%", correct: false },
            { text: "30%", correct: true },
            { text: "35%", correct: false }
        ]
    },
    {
        question: "In which format are SNAP exam results typically announced?",
        answers: [
            { text: "Hard copy", correct: false },
            { text: "Email", correct: false },
            { text: "Online", correct: true },
            { text: "SMS", correct: false }
        ]
    },
    {
        question: "Which type of questions are usually found in the Logical Reasoning section?",
        answers: [
            { text: "Analogies", correct: true },
            { text: "Series completion", correct: true },
            { text: "Blood relations", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the significance of the SNAP exam for management aspirants?",
        answers: [
            { text: "It's a compulsory exam for all graduates", correct: false },
            { text: "It helps in assessing management aptitude", correct: true },
            { text: "It is a formality with no impact on admission", correct: false },
            { text: "It's only for students from specific universities", correct: false }
        ]
    },
    {
        question: "What should students focus on while preparing for the General English section?",
        answers: [
            { text: "Math problems", correct: false },
            { text: "Current affairs", correct: false },
            { text: "Vocabulary and grammar", correct: true },
            { text: "Technical skills", correct: false }
        ]
    },
    {
        question: "Which of the following strategies can improve time management during the SNAP exam?",
        answers: [
            { text: "Skip difficult questions", correct: false },
            { text: "Attempt all questions in order", correct: false },
            { text: "Allocate time per question", correct: true },
            { text: "Focus on one section at a time", correct: false }
        ]
    },
    {
        question: "What kind of reading materials can help in preparing for the General English section?",
        answers: [
            { text: "Fiction books", correct: false },
            { text: "Newspapers and magazines", correct: true },
            { text: "Technical journals", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the main focus of the Data Interpretation section?",
        answers: [
            { text: "Reading literature", correct: false },
            { text: "Understanding charts and graphs", correct: true },
            { text: "Solving mathematical equations", correct: false },
            { text: "Writing reports", correct: false }
        ]
    },
    {
        question: "Which of the following is a recommended approach to tackle the Quantitative Aptitude section?",
        answers: [
            { text: "Guess answers", correct: false },
            { text: "Practice previous years’ questions", correct: true },
            { text: "Ignore the difficult topics", correct: false },
            { text: "Use a calculator for all calculations", correct: false }
        ]
    },
    {
        question: "What is the common advice for students taking the SNAP exam for the first time?",
        answers: [
            { text: "Prepare for two months", correct: false },
            { text: "Familiarize themselves with the exam pattern", correct: true },
            { text: "Avoid mock tests", correct: false },
            { text: "Focus only on one section", correct: false }
        ]
    },
    {
        question: "What is the format of the questions in the General English section?",
        answers: [
            { text: "Descriptive", correct: false },
            { text: "MCQs", correct: true },
            { text: "True/false", correct: false },
            { text: "Fill in the blanks", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the Data Interpretation section?",
        answers: [
            { text: "Reading literature", correct: false },
            { text: "Understanding charts and graphs", correct: true },
            { text: "Solving mathematical equations", correct: false },
            { text: "Writing reports", correct: false }
        ]
    },
    {
        question: "What is the eligibility criterion for appearing in the SNAP exam?",
        answers: [
            { text: "Completion of 10+2 education", correct: false },
            { text: "Graduation in any discipline", correct: true },
            { text: "Only graduates from specific universities", correct: false },
            { text: "No educational qualification needed", correct: false }
        ]
    },
    {
        question: "What is the recommended study strategy for the SNAP exam?",
        answers: [
            { text: "Cram all subjects in one week", correct: false },
            { text: "Consistent daily practice", correct: true },
            { text: "Study only the night before", correct: false },
            { text: "Focus solely on one section", correct: false }
        ]
    },
    {
        question: "Which section of the SNAP exam includes questions about synonyms and antonyms?",
        answers: [
            { text: "Logical Reasoning", correct: false },
            { text: "Quantitative Aptitude", correct: false },
            { text: "General English", correct: true },
            { text: "Data Interpretation", correct: false }
        ]
    },
    {
        question: "How can students improve their speed for the SNAP exam?",
        answers: [
            { text: "By practicing with a timer", correct: true },
            { text: "By reading novels", correct: false },
            { text: "By skipping difficult questions", correct: false },
            { text: "By memorizing answers", correct: false }
        ]
    },
    {
        question: "What type of data representation is commonly found in the Data Interpretation section?",
        answers: [
            { text: "Pie charts", correct: true },
            { text: "Descriptive essays", correct: false },
            { text: "Short stories", correct: false },
            { text: "Poems", correct: false }
        ]
    },
    {
        question: "Which of the following is an effective method to prepare for the Quantitative Aptitude section?",
        answers: [
            { text: "Solving previous years' papers", correct: true },
            { text: "Relying solely on shortcuts", correct: false },
            { text: "Avoiding practice tests", correct: false },
            { text: "Ignoring formulae", correct: false }
        ]
    },
    {
        question: "What is the total score for the SNAP exam?",
        answers: [
            { text: "200", correct: false },
            { text: "300", correct: true },
            { text: "400", correct: false },
            { text: "500", correct: false }
        ]
    },
    {
        question: "What is a good way to revise for the General English section?",
        answers: [
            { text: "Reading grammar books", correct: true },
            { text: "Memorizing vocabulary lists", correct: true },
            { text: "Watching movies", correct: false },
            { text: "Doing math problems", correct: false }
        ]
    },
    {
        question: "Which of the following skills is crucial for success in the Logical Reasoning section?",
        answers: [
            { text: "Attention to detail", correct: true },
            { text: "Speed reading", correct: false },
            { text: "Creative writing", correct: false },
            { text: "Memory retention", correct: false }
        ]
    },
    {
        question: "What is the significance of time management during the SNAP exam?",
        answers: [
            { text: "It allows more time for difficult questions", correct: false },
            { text: "It helps in answering all questions", correct: true },
            { text: "It is not important", correct: false },
            { text: "It increases stress", correct: false }
        ]
    },
    {
        question: "Which of the following topics is essential for the Quantitative Aptitude section?",
        answers: [
            { text: "Basic arithmetic", correct: true },
            { text: "Physics", correct: false },
            { text: "History", correct: false },
            { text: "Biology", correct: false }
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
