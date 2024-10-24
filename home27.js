const questions = [
    {
        question: "What is the primary purpose of the IAS?",
        answers: [
            { text: "Military service", correct: false },
            { text: "Administrative governance", correct: true },
            { text: "Judicial service", correct: false },
            { text: "Educational development", correct: false }
        ]
    },
    {
        question: "When was the Indian Administrative Service established?",
        answers: [
            { text: "1947", correct: false },
            { text: "1950", correct: true },
            { text: "1951", correct: false },
            { text: "1955", correct: false }
        ]
    },
    {
        question: "Which article of the Indian Constitution provides for the establishment of the IAS?",
        answers: [
            { text: "Article 312", correct: true },
            { text: "Article 315", correct: false },
            { text: "Article 320", correct: false },
            { text: "Article 246", correct: false }
        ]
    },
    {
        question: "The IAS is a part of which service?",
        answers: [
            { text: "Central Civil Services", correct: false },
            { text: "State Civil Services", correct: false },
            { text: "All India Services", correct: true },
            { text: "Judicial Services", correct: false }
        ]
    },
    {
        question: "Which exam is conducted for recruitment into the IAS?",
        answers: [
            { text: "GATE", correct: false },
            { text: "CAT", correct: false },
            { text: "UPSC Civil Services Exam", correct: true },
            { text: "SSC CGL", correct: false }
        ]
    },
    {
        question: "The IAS is primarily responsible for:",
        answers: [
            { text: "Legislation", correct: false },
            { text: "Policy formulation", correct: false },
            { text: "Administrative functions", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Which of the following is a mandatory qualification for IAS candidates?",
        answers: [
            { text: "Graduation from a recognized university", correct: true },
            { text: "Experience in administrative services", correct: false },
            { text: "Knowledge of Hindi", correct: false },
            { text: "Physical fitness", correct: false }
        ]
    },
    {
        question: "The IAS is headquartered in which city?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which committee recommended the establishment of the IAS?",
        answers: [
            { text: "Montague-Chelmsford Reforms", correct: false },
            { text: "Simon Commission", correct: false },
            { text: "Lee Commission", correct: true },
            { text: "Dyarchy Committee", correct: false }
        ]
    },
    {
        question: "The recruitment process for IAS includes which of the following stages?",
        answers: [
            { text: "Preliminary Exam", correct: true },
            { text: "Main Exam", correct: true },
            { text: "Interview", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which body conducts the IAS preliminary examination?",
        answers: [
            { text: "State Public Service Commission", correct: false },
            { text: "UPSC", correct: true },
            { text: "NTA", correct: false },
            { text: "Ministry of Home Affairs", correct: false }
        ]
    },
    {
        question: "In which month is the IAS preliminary exam usually held?",
        answers: [
            { text: "January", correct: false },
            { text: "April", correct: false },
            { text: "June", correct: true },
            { text: "October", correct: false }
        ]
    },
    {
        question: "How many papers are there in the IAS preliminary exam?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "What is the nature of questions in the IAS preliminary exam?",
        answers: [
            { text: "Descriptive", correct: false },
            { text: "Objective type", correct: true },
            { text: "Analytical", correct: false },
            { text: "Essay type", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is not a part of the IAS preliminary exam syllabus?",
        answers: [
            { text: "History of India", correct: false },
            { text: "Geography of India", correct: false },
            { text: "Animal Husbandry", correct: true },
            { text: "Current Affairs", correct: false }
        ]
    },
    {
        question: "What is the age limit for general category candidates to appear for the IAS exam?",
        answers: [
            { text: "21-30 years", correct: true },
            { text: "21-32 years", correct: false },
            { text: "21-35 years", correct: false },
            { text: "No limit", correct: false }
        ]
    },
    {
        question: "Which category of candidates has the highest age relaxation for the IAS exam?",
        answers: [
            { text: "General", correct: false },
            { text: "OBC", correct: false },
            { text: "SC/ST", correct: true },
            { text: "Women", correct: false }
        ]
    },
    {
        question: "The main examination consists of how many papers?",
        answers: [
            { text: "5", correct: false },
            { text: "7", correct: true },
            { text: "9", correct: false },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Which paper is considered the qualifying paper in the IAS main exam?",
        answers: [
            { text: "General Studies Paper I", correct: false },
            { text: "Language Paper", correct: true },
            { text: "Essay Paper", correct: false },
            { text: "Optional Subject Paper", correct: false }
        ]
    },
    {
        question: "What is the maximum number of attempts allowed for the IAS exam for general category candidates?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "9", correct: false },
            { text: "Unlimited", correct: false }
        ]
    },
    {
        question: "Which commission conducts the interview for IAS candidates?",
        answers: [
            { text: "State Public Service Commission", correct: false },
            { text: "UPSC", correct: true },
            { text: "National Recruitment Agency", correct: false },
            { text: "Ministry of Personnel", correct: false }
        ]
    },
    {
        question: "The interview stage in the IAS recruitment process is also known as:",
        answers: [
            { text: "Personality Test", correct: true },
            { text: "Medical Test", correct: false },
            { text: "Group Discussion", correct: false },
            { text: "Psychometric Test", correct: false }
        ]
    },
    {
        question: "What is the total marks for the IAS main examination?",
        answers: [
            { text: "1200", correct: false },
            { text: "1500", correct: true },
            { text: "2000", correct: false },
            { text: "3000", correct: false }
        ]
    },
    {
        question: "Which of the following is not a part of the General Studies papers in the main examination?",
        answers: [
            { text: "Indian Heritage and Culture", correct: false },
            { text: "Ethics, Integrity, and Aptitude", correct: false },
            { text: "Optional Subject", correct: true },
            { text: "Political Science", correct: false }
        ]
    },
    {
        question: "Which of the following is the duration of the IAS preliminary exam?",
        answers: [
            { text: "2 hours", correct: true },
            { text: "3 hours", correct: false },
            { text: "4 hours", correct: false },
            { text: "5 hours", correct: false }
        ]
    },
    {
        question: "The syllabus for the IAS exam is defined by:",
        answers: [
            { text: "UPSC", correct: true },
            { text: "Ministry of Education", correct: false },
            { text: "State Governments", correct: false },
            { text: "National Council for Teacher Education", correct: false }
        ]
    },
    {
        question: "Which of the following subjects can be chosen as an optional subject for the IAS main examination?",
        answers: [
            { text: "Sociology", correct: true },
            { text: "Engineering", correct: true },
            { text: "Medical Science", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which state is known for producing a large number of IAS officers?",
        answers: [
            { text: "Uttar Pradesh", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Bihar", correct: true },
            { text: "Kerala", correct: false }
        ]
    },
    {
        question: "Which organization is responsible for training IAS officers?",
        answers: [
            { text: "Indian Institute of Management", correct: false },
            { text: "National Academy of Administration", correct: true },
            { text: "Indian Institute of Public Administration", correct: false },
            { text: "Indian Administrative College", correct: false }
        ]
    },
    {
        question: "What is the name of the training program for IAS officers?",
        answers: [
            { text: "Foundation Course", correct: true },
            { text: "Executive Course", correct: false },
            { text: "Administrative Course", correct: false },
            { text: "Leadership Course", correct: false }
        ]
    },
    {
        question: "How long is the training period for IAS officers?",
        answers: [
            { text: "6 months", correct: false },
            { text: "1 year", correct: true },
            { text: "2 years", correct: false },
            { text: "3 years", correct: false }
        ]
    },
    {
        question: "What is the role of the District Collector in the Indian administrative system?",
        answers: [
            { text: "Judicial duties", correct: false },
            { text: "Legislative duties", correct: false },
            { text: "Administrative head of the district", correct: true },
            { text: "Executive head of the state", correct: false }
        ]
    },
    {
        question: "The IAS officer's first posting is usually as:",
        answers: [
            { text: "Sub-Divisional Officer", correct: true },
            { text: "Block Development Officer", correct: false },
            { text: "District Collector", correct: false },
            { text: "Chief Secretary", correct: false }
        ]
    },
    {
        question: "Which article empowers the President to appoint the IAS officers?",
        answers: [
            { text: "Article 53", correct: true },
            { text: "Article 73", correct: false },
            { text: "Article 75", correct: false },
            { text: "Article 88", correct: false }
        ]
    },
    {
        question: "Which of the following is an important responsibility of an IAS officer?",
        answers: [
            { text: "Making laws", correct: false },
            { text: "Implementing government policies", correct: true },
            { text: "Conducting elections", correct: false },
            { text: "Judging criminal cases", correct: false }
        ]
    },
    {
        question: "The IAS is primarily responsible for the administration of:",
        answers: [
            { text: "Central government", correct: false },
            { text: "State government", correct: false },
            { text: "Local government", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "What is the maximum age limit for OBC candidates in the IAS exam?",
        answers: [
            { text: "30 years", correct: false },
            { text: "32 years", correct: true },
            { text: "33 years", correct: false },
            { text: "35 years", correct: false }
        ]
    },
    {
        question: "Which paper in the IAS main exam focuses on ethics and integrity?",
        answers: [
            { text: "General Studies Paper I", correct: false },
            { text: "General Studies Paper II", correct: false },
            { text: "General Studies Paper III", correct: false },
            { text: "Ethics, Integrity, and Aptitude Paper", correct: true }
        ]
    },
    {
        question: "The final selection of IAS candidates is based on:",
        answers: [
            { text: "Preliminary exam only", correct: false },
            { text: "Main exam only", correct: false },
            { text: "Preliminary, main exam, and interview", correct: true },
            { text: "Interview only", correct: false }
        ]
    },
    {
        question: "What is the first step for candidates preparing for the IAS exam?",
        answers: [
            { text: "Choosing an optional subject", correct: false },
            { text: "Reading newspapers", correct: false },
            { text: "Understanding the syllabus", correct: true },
            { text: "Joining coaching classes", correct: false }
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
