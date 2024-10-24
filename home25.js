const questions = [
    
    {
        question: "The eligibility criteria for NEET PG includes:",
        answers: [
            { text: "Completion of a Bachelor's degree in any field", correct: false },
            { text: "Completion of MBBS or BDS degree", correct: true },
            { text: "Passing an aptitude test", correct: false },
            { text: "Work experience in healthcare", correct: false }
        ]
    },
    {
        question: "How is the NEET PG score calculated?",
        answers: [
            { text: "Total correct answers only", correct: false },
            { text: "Total correct answers minus incorrect answers", correct: true },
            { text: "Total correct answers plus incorrect answers", correct: false },
            { text: "Weighted average of subjects", correct: false }
        ]
    },
    {
        question: "What is the negative marking scheme in NEET PG?",
        answers: [
            { text: "No negative marking", correct: false },
            { text: "-1 for each incorrect answer", correct: true },
            { text: "-0.5 for each incorrect answer", correct: false },
            { text: "-2 for each incorrect answer", correct: false }
        ]
    },
    {
        question: "Which of the following is a key feature of NEET PG?",
        answers: [
            { text: "All questions are case-based", correct: false },
            { text: "All questions are in English", correct: false },
            { text: "Questions are only from clinical subjects", correct: false },
            { text: "There are no practical questions", correct: true }
        ]
    },
    {
        question: "What is the maximum number of attempts allowed for NEET PG?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "No limit", correct: true }
        ]
    },
    {
        question: "NEET PG scores are valid for admission to courses for how many years?",
        answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: true },
            { text: "3 years", correct: false },
            { text: "5 years", correct: false }
        ]
    },
    {
        question: "Which of the following is a mandatory document required for NEET PG registration?",
        answers: [
            { text: "Passport", correct: false },
            { text: "Birth certificate", correct: false },
            { text: "MBBS/BDS degree certificate", correct: true },
            { text: "Community certificate", correct: false }
        ]
    },
    {
        question: "What is the registration fee for NEET PG?",
        answers: [
            { text: "₹1000", correct: false },
            { text: "₹2000", correct: false },
            { text: "₹3000", correct: true },
            { text: "₹4000", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the NEET PG syllabus?",
        answers: [
            { text: "Limited to practical skills", correct: false },
            { text: "Based on undergraduate curriculum", correct: true },
            { text: "Focused solely on clinical practice", correct: false },
            { text: "Excludes non-medical subjects", correct: false }
        ]
    },
    {
        question: "NEET PG is an all-India examination conducted for:",
        answers: [
            { text: "State quotas only", correct: false },
            { text: "All Indian students only", correct: false },
            { text: "Both Indian and foreign students", correct: true },
            { text: "Foreign students only", correct: false }
        ]
    },
    {
        question: "What is the primary language of the NEET PG examination?",
        answers: [
            { text: "Hindi", correct: false },
            { text: "English", correct: true },
            { text: "Both Hindi and English", correct: true },
            { text: "Regional languages", correct: false }
        ]
    },
    {
        question: "The NEET PG result is declared in the form of:",
        answers: [
            { text: "A grade", correct: false },
            { text: "A percentage", correct: false },
            { text: "A scorecard", correct: true },
            { text: "A rank", correct: false }
        ]
    },
    {
        question: "Which of the following is a common topic covered in NEET PG?",
        answers: [
            { text: "General Knowledge", correct: false },
            { text: "Medical Ethics", correct: false },
            { text: "Clinical Pharmacology", correct: true },
            { text: "Anatomy of plants", correct: false }
        ]
    },
    {
        question: "In the NEET PG, what is the weightage of clinical subjects?",
        answers: [
            { text: "20%", correct: false },
            { text: "30%", correct: false },
            { text: "40%", correct: true },
            { text: "50%", correct: false }
        ]
    },
    {
        question: "Which of the following factors does NOT influence the NEET PG cutoff?",
        answers: [
            { text: "Difficulty level of the exam", correct: false },
            { text: "Number of candidates appeared", correct: false },
            { text: "Total number of seats available", correct: false },
            { text: "Age of the candidates", correct: true }
        ]
    },
    {
        question: "The NEET PG examination is conducted in how many shifts?",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "How many total marks are there in NEET PG?",
        answers: [
            { text: "800", correct: true },
            { text: "1000", correct: false },
            { text: "1200", correct: false },
            { text: "1500", correct: false }
        ]
    },
    {
        question: "Which of the following is considered a key component of the NEET PG preparation strategy?",
        answers: [
            { text: "Memorization of textbooks", correct: false },
            { text: "Understanding concepts and applications", correct: true },
            { text: "Ignoring past question papers", correct: false },
            { text: "Focusing only on theory", correct: false }
        ]
    },
    {
        question: "What is the minimum qualifying score for general category candidates in NEET PG?",
        answers: [
            { text: "40th percentile", correct: false },
            { text: "50th percentile", correct: true },
            { text: "60th percentile", correct: false },
            { text: "70th percentile", correct: false }
        ]
    },
    {
        question: "The NEET PG counseling process is managed by which authority?",
        answers: [
            { text: "State governments", correct: false },
            { text: "National Medical Commission", correct: false },
            { text: "Directorate General of Health Services", correct: true },
            { text: "National Board of Examinations", correct: false }
        ]
    },
    {
        question: "What is the minimum age requirement to appear for NEET PG?",
        answers: [
            { text: "20 years", correct: true },
            { text: "21 years", correct: false },
            { text: "22 years", correct: false },
            { text: "No age limit", correct: false }
        ]
    },
    {
        question: "What is the validity of the NEET PG scorecard for admission purposes?",
        answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: true },
            { text: "3 years", correct: false },
            { text: "Indefinite", correct: false }
        ]
    },
    {
        question: "Which type of study material is beneficial for NEET PG preparation?",
        answers: [
            { text: "Clinical case studies", correct: false },
            { text: "Old question papers", correct: false },
            { text: "Textbooks and online courses", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "When is the NEET PG application form usually released?",
        answers: [
            { text: "October", correct: false },
            { text: "January", correct: true },
            { text: "March", correct: false },
            { text: "April", correct: false }
        ]
    },
    {
        question: "What is the purpose of the NEET PG mock tests?",
        answers: [
            { text: "To improve theoretical knowledge", correct: false },
            { text: "To assess time management and exam strategy", correct: true },
            { text: "To gain practical skills", correct: false },
            { text: "To increase anxiety", correct: false }
        ]
    },
    {
        question: "Which of the following does NOT help in NEET PG preparation?",
        answers: [
            { text: "Group studies", correct: false },
            { text: "Previous years' papers", correct: false },
            { text: "Last-minute cramming", correct: true },
            { text: "Regular revisions", correct: false }
        ]
    },
    {
        question: "What is the common recommendation for NEET PG candidates before the exam?",
        answers: [
            { text: "Avoid studying the day before", correct: false },
            { text: "Revise all subjects thoroughly", correct: true },
            { text: "Focus only on weak subjects", correct: false },
            { text: "Sleep less before the exam", correct: false }
        ]
    },
  
        {
            question: "What is the format of questions in the NEET PG exam?",
            answers: [
                { text: "True/False", correct: false },
                { text: "Multiple Choice Questions", correct: true },
                { text: "Fill in the blanks", correct: false },
                { text: "Short answer questions", correct: false }
            ]
        },
        {
            question: "Which subject carries the highest weightage in NEET PG?",
            answers: [
                { text: "Anatomy", correct: false },
                { text: "Physiology", correct: false },
                { text: "Pharmacology", correct: true },
                { text: "Microbiology", correct: false }
            ]
        },
        {
            question: "What is the scoring system for each correct answer in NEET PG?",
            answers: [
                { text: "2 marks", correct: false },
                { text: "3 marks", correct: false },
                { text: "4 marks", correct: true },
                { text: "5 marks", correct: false }
            ]
        },
        {
            question: "The NEET PG exam is conducted in which mode?",
            answers: [
                { text: "Online only", correct: false },
                { text: "Offline only", correct: false },
                { text: "Online and offline", correct: true },
                { text: "Correspondence mode", correct: false }
            ]
        },
        {
            question: "How many total questions are there in NEET PG?",
            answers: [
                { text: "180", correct: false },
                { text: "200", correct: true },
                { text: "250", correct: false },
                { text: "300", correct: false }
            ]
        },
        {
            question: "What is the common cutoff for general category candidates in NEET PG?",
            answers: [
                { text: "40th percentile", correct: false },
                { text: "50th percentile", correct: true },
                { text: "60th percentile", correct: false },
                { text: "70th percentile", correct: false }
            ]
        },
        {
            question: "Which of the following is a recommended resource for NEET PG preparation?",
            answers: [
                { text: "NCERT textbooks", correct: false },
                { text: "Online coaching platforms", correct: true },
                { text: "Local library books", correct: false },
                { text: "None of the above", correct: false }
            ]
        },
        {
            question: "What is the main advantage of taking mock tests for NEET PG?",
            answers: [
                { text: "Helps in understanding the syllabus", correct: false },
                { text: "Improves time management skills", correct: true },
                { text: "Guarantees success", correct: false },
                { text: "Focuses on theoretical knowledge only", correct: false }
            ]
        },
        {
            question: "Which of the following topics is essential for NEET PG preparation?",
            answers: [
                { text: "Health care policies", correct: false },
                { text: "Clinical skills", correct: true },
                { text: "Medical ethics", correct: true },
                { text: "Management skills", correct: false }
            ]
        },
        {
            question: "How often should candidates revise during their NEET PG preparation?",
            answers: [
                { text: "Once a week", correct: false },
                { text: "Once a month", correct: false },
                { text: "Regularly, as per study schedule", correct: true },
                { text: "Only before exams", correct: false }
            ]
        },
        {
            question: "Which of the following is a significant challenge for NEET PG candidates?",
            answers: [
                { text: "Too few questions", correct: false },
                { text: "Time management during the exam", correct: true },
                { text: "Low competition", correct: false },
                { text: "Easy syllabus", correct: false }
            ]
        },
        {
            question: "Which strategy is NOT effective for NEET PG preparation?",
            answers: [
                { text: "Daily study schedule", correct: false },
                { text: "Last-minute cramming", correct: true },
                { text: "Regular practice tests", correct: false },
                { text: "Study groups", correct: false }
            ]
        },
        {
            question: "What should candidates do after completing their NEET PG exam?",
            answers: [
                { text: "Forget about it", correct: false },
                { text: "Start preparing for the next exam", correct: true },
                { text: "Analyze their performance", correct: true },
                { text: "Celebrate", correct: false }
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
