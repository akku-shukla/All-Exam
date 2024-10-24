const questions = [
    {
        question: "What is the primary objective of the UGC NET exam?",
        answers: [
            { text: "To recruit teachers", correct: false },
            { text: "To evaluate research scholars", correct: false },
            { text: "To assess eligibility for lectureship and research fellowship", correct: true },
            { text: "To provide scholarships", correct: false }
        ]
    },
    {
        question: "How often is the UGC NET exam conducted?",
        answers: [
            { text: "Twice a year", correct: true },
            { text: "Once a year", correct: false },
            { text: "Quarterly", correct: false },
            { text: "Monthly", correct: false }
        ]
    },
    {
        question: "Which of the following is a subject in the UGC NET exam?",
        answers: [
            { text: "Agricultural Science", correct: true },
            { text: "Fashion Designing", correct: false },
            { text: "Psychology", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The UGC NET exam consists of how many papers?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a paper in the UGC NET exam?",
        answers: [
            { text: "Paper I", correct: false },
            { text: "Paper II", correct: false },
            { text: "Paper III", correct: true },
            { text: "Paper IV", correct: false }
        ]
    },
    {
        question: "What is the duration of Paper I in the UGC NET exam?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: true },
            { text: "3 hours", correct: false },
            { text: "2.5 hours", correct: false }
        ]
    },
    {
        question: "How many questions are there in Paper I of the UGC NET exam?",
        answers: [
            { text: "50", correct: false },
            { text: "100", correct: false },
            { text: "75", correct: true },
            { text: "150", correct: false }
        ]
    },
    {
        question: "What type of questions are primarily found in Paper I?",
        answers: [
            { text: "Subjective questions", correct: false },
            { text: "Objective questions", correct: true },
            { text: "Case study questions", correct: false },
            { text: "Essay questions", correct: false }
        ]
    },
    {
        question: "The marking scheme for UGC NET Paper II is based on how many questions?",
        answers: [
            { text: "50", correct: false },
            { text: "75", correct: false },
            { text: "100", correct: true },
            { text: "150", correct: false }
        ]
    },
    {
        question: "The UGC NET exam is conducted by which organization?",
        answers: [
            { text: "AICTE", correct: false },
            { text: "NTA", correct: true },
            { text: "UGC", correct: false },
            { text: "CBSE", correct: false }
        ]
    },
    {
        question: "What is the eligibility criteria for appearing in the UGC NET exam?",
        answers: [
            { text: "Graduation degree", correct: false },
            { text: "Master’s degree", correct: true },
            { text: "Ph.D.", correct: false },
            { text: "Post-graduate diploma", correct: false }
        ]
    },
    {
        question: "What is the minimum percentage required in the master’s degree for general category candidates to be eligible for UGC NET?",
        answers: [
            { text: "45%", correct: false },
            { text: "50%", correct: false },
            { text: "55%", correct: true },
            { text: "60%", correct: false }
        ]
    },
    {
        question: "In which of the following fields is UGC NET NOT conducted?",
        answers: [
            { text: "Humanities", correct: false },
            { text: "Engineering", correct: true },
            { text: "Management", correct: false },
            { text: "Social Sciences", correct: false }
        ]
    },
    {
        question: "The UGC NET exam is conducted in how many languages?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "What is the benefit of qualifying the UGC NET exam?",
        answers: [
            { text: "Direct admission to Ph.D. programs", correct: false },
            { text: "Government job guarantee", correct: false },
            { text: "Eligibility for Assistant Professor posts", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the penalty for wrong answers in the UGC NET exam?",
        answers: [
            { text: "No penalty", correct: false },
            { text: "Negative marking", correct: true },
            { text: "Half marks deducted", correct: false },
            { text: "Full marks deducted", correct: false }
        ]
    },
    {
        question: "The UGC NET exam is primarily designed to assess:",
        answers: [
            { text: "Research skills", correct: false },
            { text: "Teaching aptitude", correct: false },
            { text: "Subject knowledge", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the mode of the UGC NET exam?",
        answers: [
            { text: "Offline", correct: false },
            { text: "Online", correct: true },
            { text: "Both A and B", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The validity period of UGC NET qualification is:",
        answers: [
            { text: "2 years", correct: false },
            { text: "3 years", correct: false },
            { text: "5 years", correct: false },
            { text: "No validity period", correct: true }
        ]
    },
    {
        question: "Who is the target audience for the UGC NET exam?",
        answers: [
            { text: "Graduates", correct: false },
            { text: "Postgraduates", correct: true },
            { text: "Professionals", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is part of the UGC NET exam syllabus?",
        answers: [
            { text: "Environmental Science", correct: true },
            { text: "Sociology", correct: true },
            { text: "Political Science", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The UGC NET exam is important for:",
        answers: [
            { text: "Enhancing research opportunities", correct: false },
            { text: "Promoting higher education", correct: false },
            { text: "Establishing academic credentials", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The UGC NET exam can be taken in:",
        answers: [
            { text: "English only", correct: false },
            { text: "Hindi only", correct: false },
            { text: "Both English and Hindi", correct: true },
            { text: "Regional languages only", correct: false }
        ]
    },
    {
        question: "What is the upper age limit for JRF (Junior Research Fellowship) in UGC NET?",
        answers: [
            { text: "28 years", correct: true },
            { text: "30 years", correct: false },
            { text: "32 years", correct: false },
            { text: "No upper age limit", correct: false }
        ]
    },
    {
        question: "Which of the following statements is true about UGC NET?",
        answers: [
            { text: "It is a national level exam", correct: true },
            { text: "It is mandatory for all postgraduates", correct: false },
            { text: "It is only for teachers in government colleges", correct: false },
            { text: "It has no impact on career growth", correct: false }
        ]
    },
    {
        question: "The total number of questions in UGC NET Paper I and Paper II combined is:",
        answers: [
            { text: "100", correct: false },
            { text: "150", correct: true },
            { text: "175", correct: false },
            { text: "200", correct: false }
        ]
    },
    {
        question: "The minimum qualifying marks for UGC NET Paper I for general category is:",
        answers: [
            { text: "40%", correct: false },
            { text: "50%", correct: false },
            { text: "55%", correct: true },
            { text: "60%", correct: false }
        ]
    },
    {
        question: "The UGC NET score is used for:",
        answers: [
            { text: "Recruitment in private institutions", correct: false },
            { text: "Recruitment in government universities", correct: true },
            { text: "Scholarships", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "The UGC NET exam was first introduced in:",
        answers: [
            { text: "1994", correct: true },
            { text: "2000", correct: false },
            { text: "2010", correct: false },
            { text: "2015", correct: false }
        ]
    },
    {
        question: "The UGC NET exam assesses the candidate's knowledge in:",
        answers: [
            { text: "Teaching methods", correct: false },
            { text: "Subject-specific knowledge", correct: false },
            { text: "Research methodologies", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is true regarding the UGC NET exam syllabus?",
        answers: [
            { text: "It changes every year", correct: false },
            { text: "It is static and does not change", correct: false },
            { text: "It is decided by the UGC", correct: true },
            { text: "It is updated every five years", correct: false }
        ]
    },
    {
        question: "In UGC NET, Paper II primarily focuses on:",
        answers: [
            { text: "General knowledge", correct: false },
            { text: "Subject-specific content", correct: true },
            { text: "Research skills", correct: false },
            { text: "Teaching methodologies", correct: false }
        ]
    },
    {
        question: "The cut-off marks for the UGC NET exam are determined by:",
        answers: [
            { text: "The Ministry of Education", correct: false },
            { text: "The UGC", correct: false },
            { text: "The NTA", correct: true },
            { text: "The respective universities", correct: false }
        ]
    },
    {
        question: "Which of the following is an important aspect of UGC NET Paper I?",
        answers: [
            { text: "Teaching aptitude", correct: true },
            { text: "Research aptitude", correct: true },
            { text: "Comprehension", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "How are the results of the UGC NET exam communicated to the candidates?",
        answers: [
            { text: "Through postal mail", correct: false },
            { text: "Through email", correct: false },
            { text: "Through online portals", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the primary function of UGC in relation to higher education?",
        answers: [
            { text: "Conducting exams", correct: false },
            { text: "Funding universities", correct: false },
            { text: "Setting standards and guidelines", correct: true },
            { text: "Recruiting teachers", correct: false }
        ]
    },
    {
        question: "Which category has the highest percentage of relaxation in qualifying marks for UGC NET?",
        answers: [
            { text: "OBC", correct: false },
            { text: "SC/ST", correct: true },
            { text: "General", correct: false },
            { text: "PWD", correct: false }
        ]
    },
    {
        question: "The validity of the UGC NET score is crucial for:",
        answers: [
            { text: "Career progression", correct: true },
            { text: "Research funding", correct: false },
            { text: "University admission", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Candidates who qualify for JRF are eligible for:",
        answers: [
            { text: "Teaching in colleges", correct: false },
            { text: "Research assistant positions", correct: false },
            { text: "Both A and B", correct: true },
            { text: "Only research positions", correct: false }
        ]
    },
    {
        question: "What is the role of UGC in maintaining academic standards?",
        answers: [
            { text: "Conducting regular audits", correct: false },
            { text: "Providing funding", correct: false },
            { text: "Establishing accreditation norms", correct: true },
            { text: "All of the above", correct: true }
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
