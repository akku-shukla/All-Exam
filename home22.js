const questions = [
    {
        question: "What is the primary objective of the CSIR NET?",
        answers: [
            { text: "To select candidates for university teaching", correct: false },
            { text: "To provide scholarships for research", correct: false },
            { text: "To assess candidates' eligibility for research fellowship", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Which subjects are primarily covered under the CSIR NET?",
        answers: [
            { text: "Life Sciences", correct: false },
            { text: "Physical Sciences", correct: false },
            { text: "Chemical Sciences", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "How often is the CSIR NET conducted?",
        answers: [
            { text: "Once a year", correct: false },
            { text: "Twice a year", correct: true },
            { text: "Every three months", correct: false },
            { text: "Once every two years", correct: false }
        ]
    },
    {
        question: "Which organization conducts the CSIR NET?",
        answers: [
            { text: "University Grants Commission (UGC)", correct: false },
            { text: "Council of Scientific and Industrial Research (CSIR)", correct: true },
            { text: "National Testing Agency (NTA)", correct: false },
            { text: "Indian Council of Medical Research (ICMR)", correct: false }
        ]
    },
    {
        question: "What is the eligibility criterion for the CSIR NET?",
        answers: [
            { text: "Must have a bachelor's degree", correct: false },
            { text: "Must have a master's degree in a relevant field", correct: true },
            { text: "No formal education required", correct: false },
            { text: "Only Ph.D. holders can apply", correct: false }
        ]
    },
    {
        question: "What is the mode of the CSIR NET exam?",
        answers: [
            { text: "Offline", correct: false },
            { text: "Online", correct: true },
            { text: "Hybrid", correct: false },
            { text: "Only written", correct: false }
        ]
    },
    {
        question: "Which of the following is a key component of the CSIR NET syllabus?",
        answers: [
            { text: "Current Affairs", correct: false },
            { text: "Research Methodology", correct: false },
            { text: "Specific Subject Knowledge", correct: true },
            { text: "General Knowledge", correct: false }
        ]
    },
    {
        question: "What type of questions are primarily included in the CSIR NET exam?",
        answers: [
            { text: "True/False", correct: false },
            { text: "Essay type", correct: false },
            { text: "Multiple Choice Questions", correct: true },
            { text: "Short Answer Questions", correct: false }
        ]
    },
    {
        question: "What is the negative marking scheme in CSIR NET?",
        answers: [
            { text: "No negative marking", correct: false },
            { text: "1/4 mark deducted for each wrong answer", correct: true },
            { text: "1/2 mark deducted for each wrong answer", correct: false },
            { text: "1 mark deducted for each wrong answer", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a subject offered in CSIR NET?",
        answers: [
            { text: "Earth Sciences", correct: false },
            { text: "Mathematical Sciences", correct: false },
            { text: "Computer Science", correct: false },
            { text: "Sociology", correct: true }
        ]
    },
    {
        question: "What is the validity period of the CSIR NET JRF (Junior Research Fellowship)?",
        answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: true },
            { text: "3 years", correct: false },
            { text: "5 years", correct: false }
        ]
    },
    {
        question: "What is the minimum percentage required to apply for CSIR NET for the General category?",
        answers: [
            { text: "40%", correct: false },
            { text: "45%", correct: false },
            { text: "50%", correct: true },
            { text: "55%", correct: false }
        ]
    },
    {
        question: "Which is the main aim of the CSIR NET exam?",
        answers: [
            { text: "To provide jobs in the private sector", correct: false },
            { text: "To promote research and development", correct: true },
            { text: "To evaluate teaching skills", correct: false },
            { text: "To conduct interviews for fellowship", correct: false }
        ]
    },
    {
        question: "In which year was the CSIR NET first conducted?",
        answers: [
            { text: "1990", correct: false },
            { text: "1996", correct: true },
            { text: "2000", correct: false },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "Which of the following is a benefit of qualifying for CSIR NET?",
        answers: [
            { text: "Teaching positions in universities", correct: false },
            { text: "Research fellowships", correct: false },
            { text: "Career advancement opportunities", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Who can apply for the CSIR NET exam?",
        answers: [
            { text: "Only Indian citizens", correct: true },
            { text: "International students", correct: false },
            { text: "Both Indian and international students", correct: false },
            { text: "Only students enrolled in CSIR institutes", correct: false }
        ]
    },
    {
        question: "What is the duration of the CSIR NET exam?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: true },
            { text: "4 hours", correct: false }
        ]
    },
    {
        question: "How many questions are there in the CSIR NET exam?",
        answers: [
            { text: "100", correct: false },
            { text: "120", correct: true },
            { text: "150", correct: false },
            { text: "200", correct: false }
        ]
    },
    {
        question: "What is the structure of the CSIR NET exam?",
        answers: [
            { text: "Two papers: Part A and Part B", correct: false },
            { text: "Three papers: Part A, Part B, and Part C", correct: true },
            { text: "Only one paper", correct: false },
            { text: "Four papers", correct: false }
        ]
    },
    {
        question: "Which part of the CSIR NET exam focuses on General Aptitude?",
        answers: [
            { text: "Part A", correct: true },
            { text: "Part B", correct: false },
            { text: "Part C", correct: false },
            { text: "All parts", correct: false }
        ]
    },
    {
        question: "What percentage of questions in Part C of CSIR NET are analytical in nature?",
        answers: [
            { text: "25%", correct: false },
            { text: "50%", correct: false },
            { text: "75%", correct: true },
            { text: "100%", correct: false }
        ]
    },
    {
        question: "Who sets the syllabus for the CSIR NET?",
        answers: [
            { text: "University Grants Commission", correct: false },
            { text: "CSIR", correct: true },
            { text: "National Testing Agency", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "How is the CSIR NET exam result announced?",
        answers: [
            { text: "Online", correct: true },
            { text: "Through postal mail", correct: false },
            { text: "Via email", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "When is the CSIR NET usually conducted?",
        answers: [
            { text: "January and July", correct: true },
            { text: "April and October", correct: false },
            { text: "February and August", correct: false },
            { text: "March and September", correct: false }
        ]
    },
    {
        question: "What is the main focus of Part B in the CSIR NET exam?",
        answers: [
            { text: "General Science", correct: false },
            { text: "Subject-related questions", correct: true },
            { text: "General Awareness", correct: false },
            { text: "Research Methodology", correct: false }
        ]
    },
    {
        question: "Which of the following is an essential skill for CSIR NET aspirants?",
        answers: [
            { text: "Research skills", correct: false },
            { text: "Critical thinking", correct: false },
            { text: "Analytical skills", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the maximum age limit for applying for the CSIR NET JRF?",
        answers: [
            { text: "25 years", correct: false },
            { text: "28 years", correct: true },
            { text: "30 years", correct: false },
            { text: "No age limit", correct: false }
        ]
    },
    {
        question: "For which of the following candidates is there no upper age limit for the CSIR NET exam?",
        answers: [
            { text: "General category", correct: false },
            { text: "OBC category", correct: false },
            { text: "SC/ST category", correct: true },
            { text: "All categories", correct: false }
        ]
    },
    {
        question: "Which part of the CSIR NET exam contains multiple-choice questions with negative marking?",
        answers: [
            { text: "Part A", correct: false },
            { text: "Part B", correct: false },
            { text: "Part C", correct: false },
            { text: "All parts", correct: true }
        ]
    },
    {
        question: "What is the duration for each part of the CSIR NET exam?",
        answers: [
            { text: "30 minutes each", correct: false },
            { text: "1 hour each", correct: true },
            { text: "1.5 hours each", correct: false },
            { text: "2 hours each", correct: false }
        ]
    },
    {
        question: "In CSIR NET, what does Part C primarily test?",
        answers: [
            { text: "Subject knowledge", correct: false },
            { text: "General awareness", correct: false },
            { text: "Research aptitude", correct: false },
            { text: "Analytical skills", correct: true }
        ]
    },
    {
        question: "Which of the following is true regarding the CSIR NET exam format?",
        answers: [
            { text: "All questions are compulsory", correct: true },
            { text: "Candidates can skip any part", correct: false },
            { text: "The exam is only in English", correct: false },
            { text: "There are no time limits for sections", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of CSIR NET?",
        answers: [
            { text: "To promote teaching jobs in schools", correct: false },
            { text: "To conduct interviews for research", correct: false },
            { text: "To assess eligibility for lectureship and fellowship", correct: true },
            { text: "To offer summer internships", correct: false }
        ]
    },
    {
        question: "How is the CSIR NET score calculated?",
        answers: [
            { text: "Total correct answers", correct: false },
            { text: "Correct answers minus wrong answers (with negative marking)", correct: true },
            { text: "Average of all answers", correct: false },
            { text: "Based on performance in specific subjects", correct: false }
        ]
    },
    {
        question: "What is the official website for CSIR NET updates?",
        answers: [
            { text: "www.csir.res.in", correct: false },
            { text: "www.nta.ac.in", correct: true },
            { text: "www.csirnetonline.in", correct: false },
            { text: "www.csirjrf.net", correct: false }
        ]
    },
    {
        question: "Which of the following is a common resource for CSIR NET preparation?",
        answers: [
            { text: "YouTube lectures", correct: true },
            { text: "Local libraries", correct: false },
            { text: "Newspapers", correct: false },
            { text: "Social media platforms", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is included in the CSIR NET exam?",
        answers: [
            { text: "Environmental Science", correct: false },
            { text: "Home Science", correct: false },
            { text: "Geology", correct: true },
            { text: "Fashion Technology", correct: false }
        ]
    },
    {
        question: "What is the total number of questions in Part A of the CSIR NET exam?",
        answers: [
            { text: "20", correct: false },
            { text: "30", correct: true },
            { text: "40", correct: false },
            { text: "50", correct: false }
        ]
    },
    {
        question: "Which section of the CSIR NET exam contains questions based on scientific research?",
        answers: [
            { text: "Part A", correct: false },
            { text: "Part B", correct: true },
            { text: "Part C", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "In CSIR NET, what does the term 'JRF' stand for?",
        answers: [
            { text: "Junior Research Fellowship", correct: true },
            { text: "Joint Research Fellowship", correct: false },
            { text: "Junior Research Fellow", correct: false },
            { text: "Joint Research Fund", correct: false }
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
