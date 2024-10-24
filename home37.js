const questions = [
    {
        question: "What is the primary objective of the All India Bar Examination (AIBE)?",
        answers: [
            { text: "To assess the knowledge of law graduates", correct: false },
            { text: "To enroll advocates in the Bar Council", correct: true },
            { text: "To provide legal education", correct: false },
            { text: "To conduct law school admissions", correct: false }
        ]
    },
    {
        question: "Which authority conducts the AIBE?",
        answers: [
            { text: "Bar Council of India", correct: true },
            { text: "Supreme Court of India", correct: false },
            { text: "State Bar Councils", correct: false },
            { text: "National Law School", correct: false }
        ]
    },
    {
        question: "What is the minimum qualifying percentage for the AIBE?",
        answers: [
            { text: "40%", correct: true },
            { text: "45%", correct: false },
            { text: "50%", correct: false },
            { text: "60%", correct: false }
        ]
    },
    {
        question: "How many subjects are typically covered in the AIBE?",
        answers: [
            { text: "10", correct: false },
            { text: "15", correct: true },
            { text: "20", correct: false },
            { text: "25", correct: false }
        ]
    },
    {
        question: "What type of questions are included in the AIBE?",
        answers: [
            { text: "True/False", correct: false },
            { text: "Subjective", correct: false },
            { text: "Multiple Choice", correct: true },
            { text: "Short Answer", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a subject in the AIBE syllabus?",
        answers: [
            { text: "Criminal Law", correct: false },
            { text: "Family Law", correct: false },
            { text: "Environmental Law", correct: false },
            { text: "Corporate Finance", correct: true }
        ]
    },
    {
        question: "What is the duration of the AIBE examination?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: true },
            { text: "4 hours", correct: false }
        ]
    },
    {
        question: "How often is the AIBE conducted?",
        answers: [
            { text: "Once a year", correct: false },
            { text: "Twice a year", correct: true },
            { text: "Every six months", correct: false },
            { text: "Quarterly", correct: false }
        ]
    },
    {
        question: "What is the age limit for appearing in the AIBE?",
        answers: [
            { text: "21 years", correct: false },
            { text: "No age limit", correct: true },
            { text: "25 years", correct: false },
            { text: "30 years", correct: false }
        ]
    },
    {
        question: "What is the official website for AIBE information?",
        answers: [
            { text: "www.barcouncilofindia.org", correct: false },
            { text: "www.aibe.in", correct: true },
            { text: "www.lawschool.in", correct: false },
            { text: "www.supremecourt.gov.in", correct: false }
        ]
    },
    {
        question: "What is the mode of the AIBE examination?",
        answers: [
            { text: "Online", correct: false },
            { text: "Offline", correct: true },
            { text: "Hybrid", correct: false },
            { text: "Open Book", correct: false }
        ]
    },
    {
        question: "Which of the following statements is true about the AIBE?",
        answers: [
            { text: "It is only for LLM graduates", correct: false },
            { text: "It is mandatory for all law graduates to practice law in India", correct: true },
            { text: "It is an optional examination", correct: false },
            { text: "It is conducted in multiple languages", correct: false }
        ]
    },
    {
        question: "What is the validity period of the AIBE certificate?",
        answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: false },
            { text: "5 years", correct: false },
            { text: "Lifetime", correct: true }
        ]
    },
    {
        question: "Which subject covers the Indian Penal Code in the AIBE?",
        answers: [
            { text: "Criminal Law", correct: true },
            { text: "Civil Law", correct: false },
            { text: "Constitutional Law", correct: false },
            { text: "Family Law", correct: false }
        ]
    },
    {
        question: "What is the main focus of the Family Law section in AIBE?",
        answers: [
            { text: "Property disputes", correct: false },
            { text: "Marriage and divorce", correct: true },
            { text: "Criminal offenses", correct: false },
            { text: "Corporate matters", correct: false }
        ]
    },
    {
        question: "In AIBE, which of the following is a part of the Constitutional Law syllabus?",
        answers: [
            { text: "Fundamental Rights", correct: true },
            { text: "Contract Law", correct: false },
            { text: "Tort Law", correct: false },
            { text: "Administrative Law", correct: false }
        ]
    },
    {
        question: "Which act is studied under Administrative Law?",
        answers: [
            { text: "Indian Evidence Act", correct: false },
            { text: "Right to Information Act", correct: true },
            { text: "Indian Contract Act", correct: false },
            { text: "Transfer of Property Act", correct: false }
        ]
    },
    {
        question: "Which of the following is a key feature of the AIBE?",
        answers: [
            { text: "Only theoretical knowledge is tested", correct: false },
            { text: "It tests practical legal knowledge", correct: true },
            { text: "It has no negative marking", correct: true },
            { text: "Both B and C", correct: true }
        ]
    },
    {
        question: "Who can apply for the AIBE?",
        answers: [
            { text: "Only students in law school", correct: false },
            { text: "Only enrolled advocates", correct: false },
            { text: "Law graduates", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "The AIBE certificate is necessary for practicing law in which jurisdiction?",
        answers: [
            { text: "India", correct: true },
            { text: "Only in Delhi", correct: false },
            { text: "Only in State Courts", correct: false },
            { text: "Only in High Courts", correct: false }
        ]
    },
    {
        question: "How many questions are typically asked in the AIBE?",
        answers: [
            { text: "50", correct: false },
            { text: "100", correct: true },
            { text: "150", correct: false },
            { text: "200", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a part of the examination process for AIBE?",
        answers: [
            { text: "Registration", correct: false },
            { text: "Admit Card", correct: false },
            { text: "Interview", correct: true },
            { text: "Answer Sheet", correct: false }
        ]
    },
    {
        question: "What language is the AIBE conducted in?",
        answers: [
            { text: "Only English", correct: false },
            { text: "Only Hindi", correct: false },
            { text: "Multiple languages", correct: true },
            { text: "Regional languages only", correct: false }
        ]
    },
    {
        question: "What is the fee structure for the AIBE exam?",
        answers: [
            { text: "Fixed for all applicants", correct: true },
            { text: "Varies based on the applicant's state", correct: false },
            { text: "Based on the applicant's age", correct: false },
            { text: "No fee", correct: false }
        ]
    },
    {
        question: "What document must be submitted along with the AIBE application?",
        answers: [
            { text: "Birth certificate", correct: false },
            { text: "Mark sheets of law degree", correct: true },
            { text: "Experience certificate", correct: false },
            { text: "Identity proof", correct: false }
        ]
    },
    {
        question: "Which of the following is studied under the AIBE syllabus?",
        answers: [
            { text: "International Business Law", correct: false },
            { text: "Indian Contract Act", correct: true },
            { text: "Law of Tort", correct: true },
            { text: "Both B and C", correct: true }
        ]
    },
    {
        question: "Which of the following acts relates to consumer rights in India?",
        answers: [
            { text: "Consumer Protection Act", correct: true },
            { text: "Contract Act", correct: false },
            { text: "Sale of Goods Act", correct: false },
            { text: "Transfer of Property Act", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the Criminal Law section in AIBE?",
        answers: [
            { text: "Civil disputes", correct: false },
            { text: "Criminal offenses and their penalties", correct: true },
            { text: "Contractual agreements", correct: false },
            { text: "Property transactions", correct: false }
        ]
    },
    {
        question: "In AIBE, which of the following is a key feature of the syllabus?",
        answers: [
            { text: "Only theory is tested", correct: false },
            { text: "It covers practical applications of law", correct: true },
            { text: "It is limited to theoretical knowledge", correct: false },
            { text: "It excludes case law", correct: false }
        ]
    },
    {
        question: "What happens after passing the AIBE?",
        answers: [
            { text: "You can practice law", correct: true },
            { text: "You must retake the exam", correct: false },
            { text: "You receive a diploma", correct: false },
            { text: "You are disqualified from law practice", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is NOT included in the AIBE syllabus?",
        answers: [
            { text: "Arbitration Law", correct: false },
            { text: "Personal Law", correct: false },
            { text: "Banking Law", correct: true },
            { text: "Negotiable Instruments Act", correct: false }
        ]
    },
    {
        question: "The AIBE primarily tests knowledge of law relevant to which of the following?",
        answers: [
            { text: "Legal Theory", correct: false },
            { text: "Practical Application of Law", correct: true },
            { text: "Historical Legal Systems", correct: false },
            { text: "International Treaties", correct: false }
        ]
    },
    {
        question: "What is the minimum educational qualification required to sit for the AIBE?",
        answers: [
            { text: "10+2", correct: false },
            { text: "Graduation in any field", correct: false },
            { text: "LLB degree", correct: true },
            { text: "LLM degree", correct: false }
        ]
    },
    {
        question: "What format does the AIBE examination follow?",
        answers: [
            { text: "Open book", correct: false },
            { text: "Objective type", correct: true },
            { text: "Descriptive", correct: false },
            { text: "Practical assessment", correct: false }
        ]
    },
    {
        question: "In which year was the AIBE first conducted?",
        answers: [
            { text: "2010", correct: true },
            { text: "2012", correct: false },
            { text: "2008", correct: false },
            { text: "2015", correct: false }
        ]
    },
    {
        question: "What is the main legal document that governs the AIBE?",
        answers: [
            { text: "Indian Evidence Act", correct: false },
            { text: "Bar Council of India Rules", correct: true },
            { text: "Constitution of India", correct: false },
            { text: "Civil Procedure Code", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a reason for taking the AIBE?",
        answers: [
            { text: "To gain legal knowledge", correct: false },
            { text: "To practice law in India", correct: false },
            { text: "To become a judge", correct: true },
            { text: "To qualify for Bar Council enrollment", correct: false }
        ]
    },
    {
        question: "How is the AIBE scored?",
        answers: [
            { text: "Out of 100", correct: false },
            { text: "Out of 150", correct: true },
            { text: "Out of 200", correct: false },
            { text: "Out of 250", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the Professional Ethics section in AIBE?",
        answers: [
            { text: "Legal history", correct: false },
            { text: "Lawyer-client relationships", correct: true },
            { text: "Legal research", correct: false },
            { text: "Criminal procedures", correct: false }
        ]
    },
    {
        question: "Which of the following is considered a fundamental right under the Indian Constitution?",
        answers: [
            { text: "Right to property", correct: false },
            { text: "Right to education", correct: true },
            { text: "Right to trade", correct: false },
            { text: "Right to information", correct: false }
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
