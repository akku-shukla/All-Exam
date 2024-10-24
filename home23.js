const questions = [
    {
        question: "What does UGC stand for?",
        answers: [
            { text: "University Grants Committee", correct: false },
            { text: "University Grants Commission", correct: true },
            { text: "Universal Grants Commission", correct: false },
            { text: "United Grants Commission", correct: false }
        ]
    },
    {
        question: "What is the main objective of the UGC NET exam?",
        answers: [
            { text: "To assess research capability", correct: false },
            { text: "To qualify candidates for teaching and research", correct: true },
            { text: "To evaluate administrative skills", correct: false },
            { text: "To provide financial aid", correct: false }
        ]
    },
    {
        question: "In which year was the UGC NET exam first conducted?",
        answers: [
            { text: "1990", correct: false },
            { text: "1996", correct: true },
            { text: "2000", correct: false },
            { text: "2002", correct: false }
        ]
    },
    {
        question: "What is the maximum age limit for the Junior Research Fellowship in UGC NET?",
        answers: [
            { text: "25 years", correct: false },
            { text: "28 years", correct: true },
            { text: "30 years", correct: false },
            { text: "35 years", correct: false }
        ]
    },
    {
        question: "How many papers are there in the UGC NET exam?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a subject offered in the UGC NET exam?",
        answers: [
            { text: "Sociology", correct: false },
            { text: "Computer Science", correct: false },
            { text: "Astronomy", correct: true },
            { text: "Education", correct: false }
        ]
    },
    {
        question: "What is the total duration of the UGC NET exam?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: true },
            { text: "4 hours", correct: false }
        ]
    },
    {
        question: "Which of the following is a type of scholarship awarded through UGC NET?",
        answers: [
            { text: "National Merit Scholarship", correct: false },
            { text: "Junior Research Fellowship", correct: true },
            { text: "Post-Doctoral Fellowship", correct: false },
            { text: "Senior Research Fellowship", correct: false }
        ]
    },
    {
        question: "How is the UGC NET exam conducted?",
        answers: [
            { text: "Pen and paper", correct: false },
            { text: "Computer-based test", correct: true },
            { text: "Oral examination", correct: false },
            { text: "Group discussion", correct: false }
        ]
    },
    {
        question: "What is the pattern of marking in UGC NET?",
        answers: [
            { text: "+2 for correct answer, -1 for wrong answer", correct: false },
            { text: "+1 for correct answer, 0 for wrong answer", correct: false },
            { text: "+1 for correct answer, -0.25 for wrong answer", correct: true },
            { text: "No negative marking", correct: false }
        ]
    },
    {
        question: "What is the eligibility criterion for appearing in UGC NET?",
        answers: [
            { text: "Minimum 50% in Bachelor's degree", correct: false },
            { text: "Minimum 55% in Master's degree", correct: true },
            { text: "PhD degree", correct: false },
            { text: "Any diploma", correct: false }
        ]
    },
    {
        question: "What does JRF stand for?",
        answers: [
            { text: "Junior Research Fellow", correct: true },
            { text: "Junior Research Fund", correct: false },
            { text: "Junior Research Foundation", correct: false },
            { text: "Junior Fellowship Research", correct: false }
        ]
    },
    {
        question: "Which of the following is a benefit of qualifying for JRF?",
        answers: [
            { text: "Employment guarantee", correct: false },
            { text: "Research funding", correct: true },
            { text: "Guaranteed admission to PhD", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Who conducts the UGC NET exam?",
        answers: [
            { text: "National Testing Agency (NTA)", correct: true },
            { text: "Central Board of Secondary Education (CBSE)", correct: false },
            { text: "UGC itself", correct: false },
            { text: "Indian Council of Agricultural Research (ICAR)", correct: false }
        ]
    },
    {
        question: "What is the fee for UGC NET exam for General category candidates?",
        answers: [
            { text: "₹500", correct: false },
            { text: "₹1000", correct: true },
            { text: "₹1500", correct: false },
            { text: "₹2000", correct: false }
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
        question: "What is the purpose of the UGC NET exam?",
        answers: [
            { text: "To evaluate student performance", correct: false },
            { text: "To assess teaching skills", correct: false },
            { text: "To ensure quality in higher education", correct: true },
            { text: "To provide job opportunities", correct: false }
        ]
    },
    {
        question: "Which of the following components are included in Paper I of the UGC NET?",
        answers: [
            { text: "Teaching aptitude", correct: true },
            { text: "Research methodology", correct: false },
            { text: "Communication", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "What is the weightage of Paper II in the UGC NET exam?",
        answers: [
            { text: "50%", correct: false },
            { text: "75%", correct: true },
            { text: "100%", correct: false },
            { text: "25%", correct: false }
        ]
    },
    {
        question: "What is the main focus of Paper II in UGC NET?",
        answers: [
            { text: "General studies", correct: false },
            { text: "Subject-specific knowledge", correct: true },
            { text: "Current affairs", correct: false },
            { text: "Pedagogy", correct: false }
        ]
    },
    {
        question: "Which of the following statements about UGC NET is true?",
        answers: [
            { text: "It is mandatory for all postgraduates.", correct: false },
            { text: "It qualifies candidates for teaching positions in colleges.", correct: true },
            { text: "It is an entrance exam for all postgraduate courses.", correct: false },
            { text: "It has no age limit for candidates.", correct: false }
        ]
    },
    {
        question: "What is the qualification needed for a candidate to apply for JRF under UGC NET?",
        answers: [
            { text: "Bachelor's degree", correct: false },
            { text: "Master's degree with minimum 55%", correct: true },
            { text: "PhD degree", correct: false },
            { text: "Diploma", correct: false }
        ]
    },
    {
        question: "Which of the following is true regarding the syllabus for UGC NET?",
        answers: [
            { text: "It is uniform across all subjects.", correct: false },
            { text: "It varies based on the chosen subject.", correct: true },
            { text: "It is not published.", correct: false },
            { text: "It is the same as the syllabus for school exams.", correct: false }
        ]
    },
    {
        question: "Which of the following is a key feature of the UGC NET exam?",
        answers: [
            { text: "No interview process", correct: true },
            { text: "Candidates must qualify in both papers", correct: true },
            { text: "Only one paper is considered for qualification", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What are the two main components of Paper I in UGC NET?",
        answers: [
            { text: "Teaching aptitude and subject knowledge", correct: false },
            { text: "General awareness and subject knowledge", correct: false },
            { text: "Research aptitude and general awareness", correct: true },
            { text: "Subject knowledge and communication skills", correct: false }
        ]
    },
    {
        question: "Which category of candidates is eligible for relaxation in age limit for JRF?",
        answers: [
            { text: "General category", correct: false },
            { text: "OBC category", correct: true },
            { text: "SC/ST category", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
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
        question: "What is the significance of the UGC NET certificate?",
        answers: [
            { text: "It is a mandatory requirement for government jobs.", correct: false },
            { text: "It certifies the candidate's eligibility for teaching and research.", correct: true },
            { text: "It allows automatic enrollment in PhD programs.", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following statements is false regarding JRF?",
        answers: [
            { text: "JRF is a fellowship awarded for research.", correct: false },
            { text: "JRF provides a monthly stipend.", correct: false },
            { text: "JRF is only available for PhD candidates.", correct: true },
            { text: "JRF is renewable based on performance.", correct: false }
        ]
    },
    {
        question: "What is the primary focus of Paper II in UGC NET?",
        answers: [
            { text: "General studies", correct: false },
            { text: "Teaching skills", correct: false },
            { text: "Subject knowledge", correct: true },
            { text: "Research methodology", correct: false }
        ]
    },
    {
        question: "Which of the following is an essential criterion for a candidate to apply for UGC NET?",
        answers: [
            { text: "Completion of a Bachelor's degree", correct: false },
            { text: "Must be a citizen of India", correct: true },
            { text: "Minimum 60% in Master's degree", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What happens if a candidate fails to qualify for UGC NET?",
        answers: [
            { text: "They can never apply again.", correct: false },
            { text: "They are disqualified for all teaching positions.", correct: false },
            { text: "They can reapply in the next cycle.", correct: true },
            { text: "They are barred from further studies.", correct: false }
        ]
    },
    {
        question: "Which category of candidates is eligible for a relaxation in the age limit for JRF?",
        answers: [
            { text: "General category", correct: false },
            { text: "OBC category", correct: true },
            { text: "SC/ST category", correct: true },
            { text: "Both B and C", correct: true }
        ]
    },
    {
        question: "What is the main feature of the UGC NET exam pattern?",
        answers: [
            { text: "All questions are compulsory.", correct: true },
            { text: "Candidates can skip questions.", correct: false },
            { text: "Negative marking is not applicable.", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "How many questions are there in Paper I of UGC NET?",
        answers: [
            { text: "50", correct: false },
            { text: "60", correct: true },
            { text: "100", correct: false },
            { text: "150", correct: false }
        ]
    },
    {
        question: "What is the minimum percentage required in the Master's degree for UGC NET eligibility?",
        answers: [
            { text: "50%", correct: false },
            { text: "55%", correct: true },
            { text: "60%", correct: false },
            { text: "65%", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the marking scheme of the UGC NET exam?",
        answers: [
            { text: "Correct answers earn +2 points, wrong answers -1 point", correct: false },
            { text: "Correct answers earn +1 point, no penalty for wrong answers", correct: false },
            { text: "Correct answers earn +1 point, wrong answers incur -0.25 points", correct: true },
            { text: "No points for correct answers, -1 for wrong answers", correct: false }
        ]
    },
    {
        question: "Which of the following is a benefit of qualifying for UGC NET?",
        answers: [
            { text: "Eligibility for assistant professor positions", correct: true },
            { text: "Automatic selection for JRF", correct: false },
            { text: "Guaranteed admission to PhD programs", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is included in the UGC NET syllabus?",
        answers: [
            { text: "Political Science", correct: true },
            { text: "Astrophysics", correct: false },
            { text: "Biotechnology", correct: false },
            { text: "Engineering", correct: false }
        ]
    },
    {
        question: "What is the format of the UGC NET exam?",
        answers: [
            { text: "Multiple Choice Questions (MCQs)", correct: true },
            { text: "Essay type", correct: false },
            { text: "True/False", correct: false },
            { text: "Fill in the blanks", correct: false }
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
