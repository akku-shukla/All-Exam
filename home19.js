const questions = [
    {
        question: "What does CTET stand for?",
        answers: [
            { text: "Central Teacher Eligibility Test", correct: true },
            { text: "Central Teaching Examination Test", correct: false },
            { text: "Comprehensive Teacher Eligibility Test", correct: false },
            { text: "Common Teacher Examination Test", correct: false }
        ]
    },
    {
        question: "Which of the following is the main purpose of the Central Teacher Eligibility Test (CTET)?",
        answers: [
            { text: "To recruit teachers for government schools", correct: false },
            { text: "To set the eligibility criteria for teaching in schools", correct: true },
            { text: "To certify that candidates are eligible to teach at the university level", correct: false },
            { text: "To provide teaching licenses for private tutors", correct: false }
        ]
    },
    {
        question: "What is the validity period of the CTET certificate as per the latest guidelines?",
        answers: [
            { text: "2 years", correct: false },
            { text: "5 years", correct: false },
            { text: "7 years", correct: false },
            { text: "Lifetime", correct: true }
        ]
    },
    
    
    {
        question: "Which body conducts the CTET?",
        answers: [
            { text: "National Council for Teacher Education (NCTE)", correct: false },
            { text: "Central Board of Secondary Education (CBSE)", correct: true },
            { text: "Ministry of Education", correct: false },
            { text: "University Grants Commission (UGC)", correct: false }
        ]
    },
    {
        question: "The CTET is conducted for which level of teachers?",
        answers: [
            { text: "Primary and Upper Primary", correct: true },
            { text: "Secondary and Higher Secondary", correct: false },
            { text: "Only Primary", correct: false },
            { text: "Only Secondary", correct: false }
        ]
    },
    {
        question: "What is the validity period of the CTET certificate?",
        answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: true },
            { text: "5 years", correct: false },
            { text: "10 years", correct: false }
        ]
    },
    {
        question: "How many papers are there in the CTET examination?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is NOT included in Paper I of the CTET?",
        answers: [
            { text: "Child Development and Pedagogy", correct: false },
            { text: "Mathematics", correct: false },
            { text: "Environmental Studies", correct: false },
            { text: "English Literature", correct: true }
        ]
    },
    {
        question: "What is the total number of questions in each paper of the CTET?",
        answers: [
            { text: "50", correct: false },
            { text: "100", correct: true },
            { text: "150", correct: false },
            { text: "200", correct: false }
        ]
    },
    {
        question: "What is the duration of the CTET exam?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: true },
            { text: "3 hours", correct: false },
            { text: "4 hours", correct: false }
        ]
    },
    {
        question: "In CTET, Child Development and Pedagogy primarily focuses on:",
        answers: [
            { text: "Educational Psychology", correct: true },
            { text: "Historical Development of Education", correct: false },
            { text: "Curriculum Development", correct: false },
            { text: "Assessment and Evaluation", correct: false }
        ]
    },
    {
        question: "Which article of the Indian Constitution mandates free and compulsory education for children?",
        answers: [
            { text: "Article 21", correct: false },
            { text: "Article 21A", correct: true },
            { text: "Article 19", correct: false },
            { text: "Article 45", correct: false }
        ]
    },
    {
        question: "What does the term 'inclusive education' imply?",
        answers: [
            { text: "Education only for gifted children", correct: false },
            { text: "Education for all children, regardless of their needs", correct: true },
            { text: "Education in separate schools", correct: false },
            { text: "Education only for economically backward children", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a method of assessment?",
        answers: [
            { text: "Formative Assessment", correct: false },
            { text: "Summative Assessment", correct: false },
            { text: "Diagnostic Assessment", correct: false },
            { text: "Non-assessment", correct: true }
        ]
    },
    {
        question: "What is the purpose of the Right to Education (RTE) Act?",
        answers: [
            { text: "To provide free meals to children", correct: false },
            { text: "To ensure access to quality education for all children", correct: true },
            { text: "To improve infrastructure in schools", correct: false },
            { text: "To provide scholarships to students", correct: false }
        ]
    },
    {
        question: "Which of the following is a key principle of a good teacher?",
        answers: [
            { text: "Authoritarian", correct: false },
            { text: "Empathetic", correct: true },
            { text: "Indifferent", correct: false },
            { text: "Inflexible", correct: false }
        ]
    },
    {
        question: "What does the acronym 'NCERT' stand for?",
        answers: [
            { text: "National Council for Education Research and Training", correct: true },
            { text: "National Curriculum for Educational Resources and Training", correct: false },
            { text: "National Council for Effective Research and Training", correct: false },
            { text: "National Committee for Education Research and Training", correct: false }
        ]
    },
    {
        question: "The main focus of the Environmental Studies subject is to:",
        answers: [
            { text: "Teach about historical events", correct: false },
            { text: "Create awareness about the environment", correct: true },
            { text: "Improve mathematical skills", correct: false },
            { text: "Enhance language proficiency", correct: false }
        ]
    },
    {
        question: "Which of the following is a method of teaching?",
        answers: [
            { text: "Lecture", correct: false },
            { text: "Group Discussion", correct: false },
            { text: "Project-Based Learning", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the age limit for candidates applying for CTET?",
        answers: [
            { text: "No age limit", correct: true },
            { text: "21 years", correct: false },
            { text: "30 years", correct: false },
            { text: "35 years", correct: false }
        ]
    },
    {
        question: "Which of the following can be considered a barrier to learning?",
        answers: [
            { text: "Positive reinforcement", correct: false },
            { text: "Learning disabilities", correct: true },
            { text: "Engaging curriculum", correct: false },
            { text: "Supportive environment", correct: false }
        ]
    },
    {
        question: "The term 'pedagogy' refers to:",
        answers: [
            { text: "The study of school facilities", correct: false },
            { text: "The method and practice of teaching", correct: true },
            { text: "The evaluation of teachers", correct: false },
            { text: "The curriculum development process", correct: false }
        ]
    },
    {
        question: "Which of the following is a learning theory?",
        answers: [
            { text: "Behaviorism", correct: false },
            { text: "Constructivism", correct: false },
            { text: "Cognitivism", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which skill is essential for a teacher to manage a classroom effectively?",
        answers: [
            { text: "Time management", correct: true },
            { text: "Authoritarian approach", correct: false },
            { text: "Rigid discipline", correct: false },
            { text: "Lack of communication", correct: false }
        ]
    },
    {
        question: "Which educational approach emphasizes hands-on experience?",
        answers: [
            { text: "Traditional learning", correct: false },
            { text: "Experiential learning", correct: true },
            { text: "Lecture-based learning", correct: false },
            { text: "Rote learning", correct: false }
        ]
    },
    {
        question: "Which of the following is a component of the continuous and comprehensive evaluation (CCE)?",
        answers: [
            { text: "Periodic tests only", correct: false },
            { text: "Assessment of both scholastic and co-scholastic areas", correct: true },
            { text: "Final examinations only", correct: false },
            { text: "No assessment", correct: false }
        ]
    },
    {
        question: "What is the primary goal of the National Policy on Education?",
        answers: [
            { text: "To regulate teacher salaries", correct: false },
            { text: "To provide quality education to all", correct: true },
            { text: "To establish more universities", correct: false },
            { text: "To increase the number of examinations", correct: false }
        ]
    },
    {
        question: "In CTET, which of the following is a key focus area in the subject of mathematics?",
        answers: [
            { text: "Algebra only", correct: false },
            { text: "Practical applications", correct: true },
            { text: "Theoretical concepts only", correct: false },
            { text: "History of mathematics", correct: false }
        ]
    },
    {
        question: "Which teaching strategy involves students working together in groups?",
        answers: [
            { text: "Individual work", correct: false },
            { text: "Collaborative learning", correct: true },
            { text: "Competitive learning", correct: false },
            { text: "Lecture-based learning", correct: false }
        ]
    },
    {
        question: "What is the maximum score for each paper in the CTET?",
        answers: [
            { text: "50 marks", correct: false },
            { text: "100 marks", correct: true },
            { text: "150 marks", correct: false },
            { text: "200 marks", correct: false }
        ]
    },
    {
        question: "Which of the following is a critical aspect of classroom management?",
        answers: [
            { text: "Strict discipline", correct: false },
            { text: "Building positive relationships", correct: true },
            { text: "Ignoring student needs", correct: false },
            { text: "Isolating students", correct: false }
        ]
    },
    {
        question: "Which of the following assessments is done at the end of a term?",
        answers: [
            { text: "Formative Assessment", correct: false },
            { text: "Summative Assessment", correct: true },
            { text: "Diagnostic Assessment", correct: false },
            { text: "Continuous Assessment", correct: false }
        ]
    },
    {
        question: "In the context of CTET, what does 'RTE' stand for?",
        answers: [
            { text: "Right to Education", correct: true },
            { text: "Right to Employment", correct: false },
            { text: "Right to Equity", correct: false },
            { text: "Right to Environment", correct: false }
        ]
    },
    {
        question: "What type of curriculum is recommended by the NCF 2005?",
        answers: [
            { text: "Subject-centered", correct: false },
            { text: "Child-centered", correct: true },
            { text: "Teacher-centered", correct: false },
            { text: "Exam-centered", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a principle of assessment?",
        answers: [
            { text: "Fairness", correct: false },
            { text: "Validity", correct: false },
            { text: "Reliability", correct: false },
            { text: "Ambiguity", correct: true }
        ]
    },
    {
        question: "The CTET exam is conducted how many times a year?",
        answers: [
            { text: "Once", correct: false },
            { text: "Twice", correct: true },
            { text: "Thrice", correct: false },
            { text: "Four times", correct: false }
        ]
    },
    {
        question: "Which of the following is a benefit of using technology in education?",
        answers: [
            { text: "Increases isolation", correct: false },
            { text: "Enhances engagement", correct: true },
            { text: "Reduces interaction", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "In the context of teaching, 'differentiation' refers to:",
        answers: [
            { text: "Teaching the same way to all students", correct: false },
            { text: "Tailoring instruction to meet individual needs", correct: true },
            { text: "Ignoring diverse learning styles", correct: false },
            { text: "A standardized approach", correct: false }
        ]
    },
    {
        question: "What does the term 'multicultural education' refer to?",
        answers: [
            { text: "Education focused on a single culture", correct: false },
            { text: "Education that acknowledges and respects diverse cultures", correct: true },
            { text: "Education limited to urban areas", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The concept of 'lifelong learning' emphasizes:",
        answers: [
            { text: "Education only in childhood", correct: false },
            { text: "Continuous education throughout life", correct: true },
            { text: "Learning limited to formal settings", correct: false },
            { text: "None of the above", correct: false }
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
