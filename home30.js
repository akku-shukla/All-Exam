const questions = [
    {
        question: "What does UPSC stand for?",
        answers: [
            { text: "Union Public Service Commission", correct: true },
            { text: "Union Professional Services Commission", correct: false },
            { text: "United Public Service Council", correct: false },
            { text: "United Professional Services Commission", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a branch of engineering considered in the IES exam?",
        answers: [
            { text: "Civil Engineering", correct: false },
            { text: "Mechanical Engineering", correct: false },
            { text: "Electrical Engineering", correct: false },
            { text: "Chemical Biology", correct: true }
        ]
    },
    {
        question: "In which year was the UPSC established?",
        answers: [
            { text: "1950", correct: false },
            { text: "1926", correct: true },
            { text: "1947", correct: false },
            { text: "1960", correct: false }
        ]
    },
    {
        question: "The IES exam is conducted annually to recruit engineers for which of the following?",
        answers: [
            { text: "Indian Armed Forces", correct: false },
            { text: "Indian Railways", correct: false },
            { text: "Central Engineering Services", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is a key responsibility of the UPSC?",
        answers: [
            { text: "Conducting entrance exams for universities", correct: false },
            { text: "Recommending candidates for civil service positions", correct: true },
            { text: "Managing public sector companies", correct: false },
            { text: "Regulating engineering colleges", correct: false }
        ]
    },
    {
        question: "How many papers are there in the IES preliminary examination?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is NOT included in the IES General Studies paper?",
        answers: [
            { text: "Current Affairs", correct: false },
            { text: "General Science", correct: false },
            { text: "Literature", correct: true },
            { text: "Indian History", correct: false }
        ]
    },
    {
        question: "The IES main examination consists of how many technical papers?",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: true },
            { text: "Three", correct: false },
            { text: "Four", correct: false }
        ]
    },
    {
        question: "What is the primary mode of examination for the IES?",
        answers: [
            { text: "Online", correct: false },
            { text: "Offline (Pen and Paper)", correct: true },
            { text: "Oral", correct: false },
            { text: "Group Discussion", correct: false }
        ]
    },
    {
        question: "What is the maximum age limit for general category candidates appearing for the IES exam?",
        answers: [
            { text: "26 years", correct: false },
            { text: "30 years", correct: true },
            { text: "32 years", correct: false },
            { text: "35 years", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a stage in the IES selection process?",
        answers: [
            { text: "Preliminary Examination", correct: false },
            { text: "Main Examination", correct: false },
            { text: "Personality Test", correct: false },
            { text: "Group Discussion", correct: true }
        ]
    },
    {
        question: "Which engineering discipline has the largest number of vacancies in the IES exam?",
        answers: [
            { text: "Civil Engineering", correct: true },
            { text: "Mechanical Engineering", correct: false },
            { text: "Electrical Engineering", correct: false },
            { text: "Electronics and Communication Engineering", correct: false }
        ]
    },
    {
        question: "Which article of the Indian Constitution provides for the establishment of the UPSC?",
        answers: [
            { text: "Article 315", correct: true },
            { text: "Article 320", correct: false },
            { text: "Article 300", correct: false },
            { text: "Article 308", correct: false }
        ]
    },
    {
        question: "The interview process in the IES exam assesses candidates on which of the following?",
        answers: [
            { text: "Technical knowledge", correct: false },
            { text: "General awareness", correct: false },
            { text: "Personality traits", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The IES exam is primarily for candidates of which educational qualification?",
        answers: [
            { text: "10th Standard", correct: false },
            { text: "12th Standard", correct: false },
            { text: "Graduate in Engineering", correct: true },
            { text: "Postgraduate in Engineering", correct: false }
        ]
    },
    {
        question: "In which month is the IES preliminary examination usually held?",
        answers: [
            { text: "January", correct: true },
            { text: "June", correct: false },
            { text: "September", correct: false },
            { text: "December", correct: false }
        ]
    },
    {
        question: "Which of the following topics is covered in the General Studies paper of the IES?",
        answers: [
            { text: "Economic Development", correct: true },
            { text: "Psychology", correct: false },
            { text: "Sociology", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "The official website for the UPSC is:",
        answers: [
            { text: "www.upsc.gov.in", correct: true },
            { text: "www.upsc.com", correct: false },
            { text: "www.upsc.org", correct: false },
            { text: "www.indianengineering.gov.in", correct: false }
        ]
    },
    {
        question: "The number of attempts allowed for general category candidates in the IES exam is:",
        answers: [
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "Unlimited", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "The IES main exam includes an optional paper for candidates of which category?",
        answers: [
            { text: "All candidates", correct: true },
            { text: "Only general category", correct: false },
            { text: "Only reserved category", correct: false },
            { text: "Only engineers with a postgraduate degree", correct: false }
        ]
    },
    {
        question: "Which body is responsible for conducting the IES exam?",
        answers: [
            { text: "Indian Institute of Technology (IIT)", correct: false },
            { text: "All India Council for Technical Education (AICTE)", correct: false },
            { text: "Union Public Service Commission (UPSC)", correct: true },
            { text: "National Testing Agency (NTA)", correct: false }
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
        question: "Which of the following topics is covered in the General Studies paper of the IES?",
        answers: [
            { text: "Economic Development", correct: true },
            { text: "Psychology", correct: false },
            { text: "Sociology", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "The final merit list for IES is based on:",
        answers: [
            { text: "Preliminary exam only", correct: false },
            { text: "Main exam only", correct: false },
            { text: "Preliminary and main exams combined", correct: true },
            { text: "Interview only", correct: false }
        ]
    },
    {
        question: "Which of the following is a major role of the engineers recruited through the IES?",
        answers: [
            { text: "Urban planning", correct: false },
            { text: "Policy formulation", correct: false },
            { text: "Technical services", correct: true },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "The UPSC also conducts exams for which other services?",
        answers: [
            { text: "Civil Services", correct: true },
            { text: "Defense Services", correct: true },
            { text: "Indian Forest Service", correct: true },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following best describes the IES exam pattern?",
        answers: [
            { text: "Only theoretical", correct: false },
            { text: "Practical and theoretical", correct: true },
            { text: "Project-based", correct: false },
            { text: "Case study", correct: false }
        ]
    },
    {
        question: "The IES examination primarily aims to select candidates for which of the following sectors?",
        answers: [
            { text: "Government Services", correct: true },
            { text: "Private Sector", correct: false },
            { text: "Non-Governmental Organizations", correct: false },
            { text: "Startups", correct: false }
        ]
    },
    {
        question: "What is the minimum educational qualification required to apply for the IES exam?",
        answers: [
            { text: "10th grade", correct: false },
            { text: "12th grade", correct: false },
            { text: "Bachelor’s degree in engineering", correct: true },
            { text: "Master’s degree in engineering", correct: false }
        ]
    },
    {
        question: "What is the primary objective of the IES exam?",
        answers: [
            { text: "To assess knowledge of engineering", correct: false },
            { text: "To identify candidates for government engineering posts", correct: true },
            { text: "To evaluate problem-solving skills", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Which of the following is a key feature of the IES examination?",
        answers: [
            { text: "No negative marking", correct: false },
            { text: "Rigorous selection process", correct: true },
            { text: "Easy syllabus", correct: false },
            { text: "High passing rate", correct: false }
        ]
    },
    {
        question: "In the IES examination, the selection of candidates is based on their performance in:",
        answers: [
            { text: "Written test only", correct: false },
            { text: "Personality test only", correct: false },
            { text: "Written test and personality test", correct: true },
            { text: "Group discussion", correct: false }
        ]
    },
    {
        question: "Which engineering discipline deals with the design and construction of infrastructure such as roads and bridges?",
        answers: [
            { text: "Electrical Engineering", correct: false },
            { text: "Civil Engineering", correct: true },
            { text: "Mechanical Engineering", correct: false },
            { text: "Chemical Engineering", correct: false }
        ]
    },
    {
        question: "The UPSC IES exam is known for its:",
        answers: [
            { text: "Simplicity", correct: false },
            { text: "Rigorous selection process", correct: true },
            { text: "Easy syllabus", correct: false },
            { text: "High passing rate", correct: false }
        ]
    },
    {
        question: "What type of questions are primarily asked in the IES preliminary examination?",
        answers: [
            { text: "Objective type", correct: true },
            { text: "Descriptive type", correct: false },
            { text: "Analytical type", correct: false },
            { text: "Practical type", correct: false }
        ]
    },
    {
        question: "Which of the following is the primary focus of the IES exam's technical papers?",
        answers: [
            { text: "Engineering concepts and applications", correct: true },
            { text: "Management skills", correct: false },
            { text: "Soft skills", correct: false },
            { text: "General knowledge", correct: false }
        ]
    },
    {
        question: "Which organization provides guidance for candidates preparing for the IES exam?",
        answers: [
            { text: "National Institute of Open Schooling", correct: false },
            { text: "Various coaching institutes", correct: true },
            { text: "Indian Institute of Science", correct: false },
            { text: "National Testing Agency", correct: false }
        ]
    },
    {
        question: "The duration of the IES main examination is:",
        answers: [
            { text: "2 days", correct: false },
            { text: "3 days", correct: true },
            { text: "5 days", correct: false },
            { text: "1 day", correct: false }
        ]
    },
    {
        question: "The interview stage of the IES exam primarily tests candidates on:",
        answers: [
            { text: "Technical knowledge", correct: false },
            { text: "Leadership qualities", correct: false },
            { text: "Communication skills", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "The IES exam is a gateway to careers in:",
        answers: [
            { text: "Public Sector Undertakings", correct: true },
            { text: "Government Services", correct: true },
            { text: "Research and Development", correct: true },
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
