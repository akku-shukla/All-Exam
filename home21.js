const questions = [
    {
        question: "What is the primary objective of the Indian Engineering Services?",
        answers: [
            { text: "Industrial Growth", correct: false },
            { text: "Infrastructure Development", correct: false },
            { text: "Government Services", correct: true },
            { text: "Environmental Conservation", correct: false }
        ]
    },
    {
        question: "Which of the following engineering branches is not part of the Indian Engineering Services?",
        answers: [
            { text: "Civil Engineering", correct: false },
            { text: "Mechanical Engineering", correct: false },
            { text: "Mining Engineering", correct: false },
            { text: "Fashion Engineering", correct: true }
        ]
    },
    {
        question: "Which organization conducts the examination for the Indian Engineering Services?",
        answers: [
            { text: "UPSC", correct: true },
            { text: "SSC", correct: false },
            { text: "IBPS", correct: false },
            { text: "RRB", correct: false }
        ]
    },
    {
        question: "What is the eligibility criterion for appearing in the IES exam?",
        answers: [
            { text: "10th Pass", correct: false },
            { text: "Diploma in Engineering", correct: false },
            { text: "Bachelor's Degree in Engineering", correct: true },
            { text: "Master's Degree in Engineering", correct: false }
        ]
    },
    {
        question: "How many attempts are allowed for General category candidates in the IES exam?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "9", correct: false },
            { text: "Unlimited", correct: false }
        ]
    },
    {
        question: "The IES exam consists of how many stages?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Which of the following is a part of the IES selection process?",
        answers: [
            { text: "Written Examination", correct: true },
            { text: "Personality Test", correct: true },
            { text: "Medical Examination", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the duration of the IES preliminary examination?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: false },
            { text: "3 hours", correct: true },
            { text: "4 hours", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is part of the IES examination syllabus for Civil Engineering?",
        answers: [
            { text: "Soil Mechanics", correct: true },
            { text: "Data Structures", correct: false },
            { text: "Digital Electronics", correct: false },
            { text: "Thermodynamics", correct: false }
        ]
    },
    {
        question: "What is the minimum age limit for candidates appearing for the IES exam?",
        answers: [
            { text: "18 years", correct: false },
            { text: "20 years", correct: false },
            { text: "21 years", correct: true },
            { text: "23 years", correct: false }
        ]
    },
    {
        question: "In which year was the first IES examination conducted?",
        answers: [
            { text: "1950", correct: true },
            { text: "1965", correct: false },
            { text: "1975", correct: false },
            { text: "1985", correct: false }
        ]
    },
    {
        question: "Which of the following ranks is not a part of the IES?",
        answers: [
            { text: "Junior Engineer", correct: true },
            { text: "Assistant Executive Engineer", correct: false },
            { text: "Director General", correct: false },
            { text: "Chief Engineer", correct: false }
        ]
    },
    {
        question: "What is the total number of papers in the IES mains examination?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "The final selection in IES is based on the performance in which of the following?",
        answers: [
            { text: "Preliminary Exam", correct: true },
            { text: "Mains Exam", correct: true },
            { text: "Interview", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the main focus area of IES officers?",
        answers: [
            { text: "Private Sector Development", correct: false },
            { text: "Public Sector Undertakings", correct: true },
            { text: "Non-Governmental Organizations", correct: false },
            { text: "International Corporations", correct: false }
        ]
    },
    {
        question: "Which of the following is an important act related to engineering in India?",
        answers: [
            { text: "The Indian Contract Act", correct: true },
            { text: "The Companies Act", correct: false },
            { text: "The Engineering Act", correct: false },
            { text: "The Labour Act", correct: false }
        ]
    },
    {
        question: "Which engineering branch has the highest number of vacancies in the IES?",
        answers: [
            { text: "Civil Engineering", correct: true },
            { text: "Mechanical Engineering", correct: false },
            { text: "Electrical Engineering", correct: false },
            { text: "Electronics Engineering", correct: false }
        ]
    },
    {
        question: "What is the maximum age limit for OBC candidates appearing for the IES exam?",
        answers: [
            { text: "28 years", correct: false },
            { text: "30 years", correct: false },
            { text: "33 years", correct: true },
            { text: "35 years", correct: false }
        ]
    },
    {
        question: "Which of the following is a common subject for both Electrical and Electronics Engineering in the IES exam?",
        answers: [
            { text: "Control Systems", correct: true },
            { text: "Strength of Materials", correct: false },
            { text: "Surveying", correct: false },
            { text: "Engineering Mathematics", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the Mains examination in IES?",
        answers: [
            { text: "Technical Knowledge", correct: true },
            { text: "General Knowledge", correct: false },
            { text: "Personality Assessment", correct: false },
            { text: "Communication Skills", correct: false }
        ]
    },
    {
        question: "Which of the following organizations employs IES officers?",
        answers: [
            { text: "Ministry of Railways", correct: true },
            { text: "Ministry of Defence", correct: true },
            { text: "Central Public Works Department", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the medium of instruction for the IES examination?",
        answers: [
            { text: "Hindi", correct: false },
            { text: "English", correct: false },
            { text: "Both Hindi and English", correct: true },
            { text: "Regional Languages", correct: false }
        ]
    },
    {
        question: "Which of the following disciplines is not included in the IES exam syllabus?",
        answers: [
            { text: "Structural Engineering", correct: false },
            { text: "Engineering Mechanics", correct: false },
            { text: "Thermal Engineering", correct: false },
            { text: "Chemical Engineering", correct: true }
        ]
    },
    {
        question: "The preliminary examination of IES is conducted in how many papers?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "What is the weightage of the personality test in the IES selection process?",
        answers: [
            { text: "50 Marks", correct: false },
            { text: "100 Marks", correct: true },
            { text: "150 Marks", correct: false },
            { text: "200 Marks", correct: false }
        ]
    },
    {
        question: "Which of the following sectors do IES officers predominantly work?",
        answers: [
            { text: "Railways", correct: true },
            { text: "Defence", correct: true },
            { text: "Telecommunications", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The Indian Engineering Services exam is also known by which of the following names?",
        answers: [
            { text: "UPSC Engineering Services Exam", correct: true },
            { text: "IES Civil Services Exam", correct: false },
            { text: "National Engineering Services Exam", correct: false },
            { text: "Indian Technical Services Exam", correct: false }
        ]
    },
    {
        question: "Which of the following is a popular study material for IES preparation?",
        answers: [
            { text: "NCERT Books", correct: true },
            { text: "Standard Reference Books", correct: true },
            { text: "Previous Years’ Question Papers", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the maximum age limit for SC/ST candidates appearing for the IES exam?",
        answers: [
            { text: "30 years", correct: false },
            { text: "32 years", correct: false },
            { text: "35 years", correct: true },
            { text: "40 years", correct: false }
        ]
    },
    {
        question: "What is the nature of the IES exam?",
        answers: [
            { text: "Open Book Exam", correct: false },
            { text: "Competitive Exam", correct: true },
            { text: "Qualification Exam", correct: false },
            { text: "Placement Exam", correct: false }
        ]
    },
    {
        question: "What is the primary responsibility of IES officers?",
        answers: [
            { text: "Policy Making", correct: false },
            { text: "Project Implementation", correct: true },
            { text: "Research and Development", correct: false },
            { text: "Teaching", correct: false }
        ]
    },
    {
        question: "Which of the following roles do IES officers typically fulfill?",
        answers: [
            { text: "Planning and designing projects", correct: true },
            { text: "Supervising construction work", correct: true },
            { text: "Policy formulation and implementation", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following subjects is essential for a candidate with a background in Electrical Engineering?",
        answers: [
            { text: "Basic Electronics", correct: true },
            { text: "Data Structures", correct: false },
            { text: "Thermodynamics", correct: false },
            { text: "Environmental Science", correct: false }
        ]
    },
    {
        question: "The IES examination is held annually in which month?",
        answers: [
            { text: "March", correct: false },
            { text: "June", correct: true },
            { text: "September", correct: false },
            { text: "December", correct: false }
        ]
    },
    {
        question: "What is the minimum percentage required in the qualifying degree for IES eligibility?",
        answers: [
            { text: "50%", correct: false },
            { text: "55%", correct: false },
            { text: "60%", correct: true },
            { text: "65%", correct: false }
        ]
    },
    {
        question: "Which engineering discipline is most likely to work in environmental management within IES?",
        answers: [
            { text: "Civil Engineering", correct: true },
            { text: "Mechanical Engineering", correct: false },
            { text: "Electrical Engineering", correct: false },
            { text: "Computer Engineering", correct: false }
        ]
    },
    {
        question: "What is the total duration of the IES mains examination?",
        answers: [
            { text: "6 hours", correct: false },
            { text: "9 hours", correct: false },
            { text: "12 hours", correct: false },
            { text: "10 hours", correct: true }
        ]
    },
    {
        question: "Which of the following is a key benefit of clearing the IES exam?",
        answers: [
            { text: "Job Security", correct: true },
            { text: "High Salary", correct: false },
            { text: "Flexible Working Hours", correct: false },
            { text: "Work from Home", correct: false }
        ]
    },
    {
        question: "Which Indian organization primarily recruits IES officers?",
        answers: [
            { text: "Railway Recruitment Board", correct: false },
            { text: "Staff Selection Commission", correct: false },
            { text: "Union Public Service Commission", correct: true },
            { text: "Institute of Banking Personnel Selection", correct: false }
        ]
    },
    {
        question: "The IES exam is based on which of the following?",
        answers: [
            { text: "General Awareness", correct: false },
            { text: "Technical Knowledge", correct: true },
            { text: "Soft Skills", correct: false },
            { text: "Foreign Languages", correct: false }
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
