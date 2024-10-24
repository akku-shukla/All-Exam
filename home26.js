const questions = [
    {
        question: "Which of the following is a characteristic of JIPMER?",
        answers: [
            { text: "It is a private institution", correct: false },
            { text: "It offers undergraduate courses only", correct: false },
            { text: "It is located in Puducherry", correct: true },
            { text: "It has no research facilities", correct: false }
        ]
    },
    {
        question: "What is the primary objective of the JIPMER PG Entrance Exam?",
        answers: [
            { text: "To test undergraduate knowledge", correct: false },
            { text: "To select candidates for postgraduate courses", correct: true },
            { text: "To evaluate practical skills", correct: false },
            { text: "To assess teaching abilities", correct: false }
        ]
    },
    {
        question: "JIPMER is known for its:",
        answers: [
            { text: "Ayurvedic courses", correct: false },
            { text: "Homoeopathic studies", correct: false },
            { text: "Allopathic medical education", correct: true },
            { text: "Paramedical training", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is NOT part of the JIPMER PG Entrance Exam syllabus?",
        answers: [
            { text: "Anatomy", correct: false },
            { text: "Mathematics", correct: true },
            { text: "Microbiology", correct: false },
            { text: "Pharmacology", correct: false }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam is conducted:",
        answers: [
            { text: "Annually", correct: true },
            { text: "Biannually", correct: false },
            { text: "Monthly", correct: false },
            { text: "Quarterly", correct: false }
        ]
    },
    {
        question: "Which of the following degrees can one pursue after qualifying for the JIPMER PG Entrance Exam?",
        answers: [
            { text: "B.Sc Nursing", correct: false },
            { text: "MD/MS", correct: true },
            { text: "DMLT", correct: false },
            { text: "BAMS", correct: false }
        ]
    },
    {
        question: "The duration of the MD/MS courses at JIPMER is:",
        answers: [
            { text: "1 year", correct: false },
            { text: "2 years", correct: false },
            { text: "3 years", correct: true },
            { text: "5 years", correct: false }
        ]
    },
    {
        question: "Which body regulates JIPMER's postgraduate medical education?",
        answers: [
            { text: "National Board of Examinations", correct: false },
            { text: "Medical Council of India", correct: true },
            { text: "All India Institute of Medical Sciences", correct: false },
            { text: "Union Ministry of Health", correct: false }
        ]
    },
    {
        question: "Which of the following is a key feature of the JIPMER PG curriculum?",
        answers: [
            { text: "Emphasis on traditional methods", correct: false },
            { text: "Limited exposure to clinical practice", correct: false },
            { text: "Integration of theory and practical skills", correct: true },
            { text: "Focus solely on research", correct: false }
        ]
    },
    {
        question: "What is the minimum eligibility criterion for JIPMER PG Entrance Exam?",
        answers: [
            { text: "MBBS degree from a recognized university", correct: true },
            { text: "DNB qualification", correct: false },
            { text: "Nursing degree", correct: false },
            { text: "BDS degree", correct: false }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam consists of:",
        answers: [
            { text: "Objective type questions only", correct: true },
            { text: "Subjective type questions only", correct: false },
            { text: "A mix of objective and subjective questions", correct: false },
            { text: "Practical examinations only", correct: false }
        ]
    },
    {
        question: "How many questions are typically included in the JIPMER PG Entrance Exam?",
        answers: [
            { text: "100", correct: false },
            { text: "150", correct: true },
            { text: "200", correct: false },
            { text: "250", correct: false }
        ]
    },
    {
        question: "Which of the following topics is NOT commonly included in the JIPMER PG Entrance Exam?",
        answers: [
            { text: "Medical Ethics", correct: true },
            { text: "Ayurveda", correct: false },
            { text: "Alternative Medicine", correct: false },
            { text: "Environmental Science", correct: false }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam is primarily conducted in which language?",
        answers: [
            { text: "Hindi", correct: false },
            { text: "Tamil", correct: false },
            { text: "English", correct: true },
            { text: "French", correct: false }
        ]
    },
    {
        question: "Which of the following specialties is NOT offered at JIPMER for postgraduate studies?",
        answers: [
            { text: "Cardiology", correct: false },
            { text: "Neurology", correct: false },
            { text: "Dermatology", correct: false },
            { text: "Veterinary Medicine", correct: true }
        ]
    },
    {
        question: "In JIPMER, the postgraduate curriculum emphasizes:",
        answers: [
            { text: "Independent study only", correct: false },
            { text: "Practical training and research", correct: true },
            { text: "Traditional lecture-based learning", correct: false },
            { text: "Online education exclusively", correct: false }
        ]
    },
    {
        question: "The mode of examination for the JIPMER PG Entrance Exam is:",
        answers: [
            { text: "Offline", correct: false },
            { text: "Online", correct: true },
            { text: "Both offline and online", correct: false },
            { text: "Open book", correct: false }
        ]
    },
    {
        question: "Which of the following topics is critical for the preparation of the JIPMER PG Entrance Exam?",
        answers: [
            { text: "Contemporary literature", correct: false },
            { text: "Basic medical sciences", correct: true },
            { text: "General knowledge", correct: false },
            { text: "Public speaking", correct: false }
        ]
    },
    {
        question: "What is the typical format of the questions in the JIPMER PG Entrance Exam?",
        answers: [
            { text: "True/False", correct: false },
            { text: "Fill in the blanks", correct: false },
            { text: "Multiple choice", correct: true },
            { text: "Short answer", correct: false }
        ]
    },
    {
        question: "Which of the following is an important aspect of the JIPMER PG selection process?",
        answers: [
            { text: "Personal interview", correct: false },
            { text: "Group discussion", correct: false },
            { text: "Written examination score", correct: true },
            { text: "Medical history review", correct: false }
        ]
    },
    {
        question: "JIPMER is affiliated with which of the following?",
        answers: [
            { text: "State Government", correct: false },
            { text: "Central Government", correct: true },
            { text: "Private institutions", correct: false },
            { text: "Foreign universities", correct: false }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam is held for admission to:",
        answers: [
            { text: "Only MD courses", correct: false },
            { text: "Only MS courses", correct: false },
            { text: "Both MD and MS courses", correct: true },
            { text: "Paramedical courses", correct: false }
        ]
    },
    {
        question: "The application process for JIPMER PG typically requires:",
        answers: [
            { text: "A personal statement", correct: false },
            { text: "A CV", correct: false },
            { text: "Academic transcripts", correct: true },
            { text: "A medical examination", correct: false }
        ]
    },
    {
        question: "What is the typical duration of the JIPMER PG Entrance Exam?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: true },
            { text: "4 hours", correct: false }
        ]
    },
    {
        question: "Which of the following subjects has a significant weightage in the JIPMER PG Entrance Exam?",
        answers: [
            { text: "History", correct: false },
            { text: "Biochemistry", correct: true },
            { text: "Philosophy", correct: false },
            { text: "Sociology", correct: false }
        ]
    },
    {
        question: "The syllabus for the JIPMER PG Entrance Exam is based on:",
        answers: [
            { text: "Undergraduate MBBS curriculum", correct: true },
            { text: "Nursing curriculum", correct: false },
            { text: "Engineering curriculum", correct: false },
            { text: "Management studies", correct: false }
        ]
    },
    {
        question: "What type of questions are asked in the JIPMER PG Entrance Exam?",
        answers: [
            { text: "Case studies", correct: false },
            { text: "Clinical vignettes", correct: false },
            { text: "Direct factual questions", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam tests knowledge primarily in:",
        answers: [
            { text: "Theoretical concepts", correct: false },
            { text: "Clinical applications", correct: false },
            { text: "Both theoretical and clinical concepts", correct: true },
            { text: "Research methodology", correct: false }
        ]
    },
    {
        question: "Which of the following is a prerequisite for applying to JIPMER PG?",
        answers: [
            { text: "Completion of an internship", correct: true },
            { text: "A valid passport", correct: false },
            { text: "Work experience in healthcare", correct: false },
            { text: "Recommendation letters", correct: false }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam includes questions from which of the following disciplines?",
        answers: [
            { text: "Medical History", correct: false },
            { text: "Clinical Medicine", correct: true },
            { text: "Music Therapy", correct: false },
            { text: "Graphic Design", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the level of competition for the JIPMER PG Entrance Exam?",
        answers: [
            { text: "Low", correct: false },
            { text: "Moderate", correct: false },
            { text: "High", correct: true },
            { text: "None", correct: false }
        ]
    },
    {
        question: "The results of the JIPMER PG Entrance Exam are typically announced:",
        answers: [
            { text: "Immediately after the exam", correct: false },
            { text: "Within a week", correct: true },
            { text: "After a month", correct: false },
            { text: "After three months", correct: false }
        ]
    },
    {
        question: "The academic year for JIPMER PG courses generally begins in:",
        answers: [
            { text: "January", correct: false },
            { text: "March", correct: false },
            { text: "May", correct: false },
            { text: "July", correct: true }
        ]
    },
    {
        question: "Which of the following courses is typically NOT available in the JIPMER PG curriculum?",
        answers: [
            { text: "Masters in Emergency Medicine", correct: false },
            { text: "MD in Community Medicine", correct: false },
            { text: "MS in General Surgery", correct: false },
            { text: "MD in Animal Husbandry", correct: true }
        ]
    },
    {
        question: "What is the age limit for candidates applying to JIPMER PG?",
        answers: [
            { text: "No age limit", correct: false },
            { text: "25 years", correct: false },
            { text: "30 years", correct: true },
            { text: "35 years", correct: false }
        ]
    },
    {
        question: "Which of the following best describes the JIPMER PG curriculum?",
        answers: [
            { text: "It has no practical component", correct: false },
            { text: "It includes clinical postings", correct: true },
            { text: "It is entirely research-focused", correct: false },
            { text: "It is only theoretical", correct: false }
        ]
    },
    {
        question: "The pattern of the JIPMER PG Entrance Exam is:",
        answers: [
            { text: "Subjective with essays", correct: false },
            { text: "Objective with multiple choice", correct: true },
            { text: "Open-ended questions", correct: false },
            { text: "Oral examination", correct: false }
        ]
    },
    {
        question: "The JIPMER PG Entrance Exam is conducted by:",
        answers: [
            { text: "JIPMER faculty", correct: false },
            { text: "Central Board of Secondary Education", correct: false },
            { text: "National Testing Agency", correct: true },
            { text: "All India Institute of Medical Sciences", correct: false }
        ]
    },
    {
        question: "Which of the following facilities does JIPMER offer to its PG students?",
        answers: [
            { text: "Research labs", correct: true },
            { text: "Hostels", correct: true },
            { text: "Libraries", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the primary mode of communication for JIPMER PG exam notifications?",
        answers: [
            { text: "Radio", correct: false },
            { text: "Social media", correct: false },
            { text: "Official website", correct: true },
            { text: "Newspapers", correct: false }
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
