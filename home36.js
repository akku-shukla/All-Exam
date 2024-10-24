const questions = [
    {
        question: "What is the full form of VIT?",
        answers: [
            { text: "Vellore Institute of Technology", correct: true },
            { text: "Vellore Institute of Teaching", correct: false },
            { text: "Vellore Institute of Training", correct: false },
            { text: "Vellore Institute of Technology and Science", correct: false }
        ]
    },
    {
        question: "Which year was VIT founded?",
        answers: [
            { text: "1984", correct: false },
            { text: "1990", correct: false },
            { text: "1996", correct: true },
            { text: "2000", correct: false }
        ]
    },
    {
        question: "What is the main purpose of the VITEEE?",
        answers: [
            { text: "Admission to MBA courses", correct: false },
            { text: "Admission to engineering programs", correct: true },
            { text: "Admission to arts programs", correct: false },
            { text: "Admission to medical courses", correct: false }
        ]
    },
    {
        question: "What subjects are tested in the VITEEE?",
        answers: [
            { text: "Physics, Chemistry, Mathematics, English", correct: true },
            { text: "Physics, Biology, Mathematics, English", correct: false },
            { text: "Physics, Chemistry, Biology, Computer Science", correct: false },
            { text: "Mathematics, English, General Knowledge, Computer Science", correct: false }
        ]
    },
    {
        question: "What is the mode of the VITEEE examination?",
        answers: [
            { text: "Offline", correct: false },
            { text: "Online", correct: true },
            { text: "Both offline and online", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "How many questions are there in the VITEEE?",
        answers: [
            { text: "60", correct: false },
            { text: "100", correct: false },
            { text: "125", correct: true },
            { text: "200", correct: false }
        ]
    },
    {
        question: "What is the duration of the VITEEE exam?",
        answers: [
            { text: "120 minutes", correct: false },
            { text: "150 minutes", correct: true },
            { text: "180 minutes", correct: false },
            { text: "90 minutes", correct: false }
        ]
    },
    {
        question: "How is the VITEEE scored?",
        answers: [
            { text: "1 mark for each correct answer, no negative marking", correct: true },
            { text: "2 marks for each correct answer, 1 mark deduction for wrong answers", correct: false },
            { text: "3 marks for each correct answer, -1 for wrong answers", correct: false },
            { text: "1 mark for each correct answer, -0.25 for wrong answers", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a campus of VIT?",
        answers: [
            { text: "VIT Vellore", correct: false },
            { text: "VIT Chennai", correct: false },
            { text: "VIT Bangalore", correct: false },
            { text: "VIT Delhi", correct: true }
        ]
    },
    {
        question: "What is the eligibility criterion for VITEEE?",
        answers: [
            { text: "Completed 10+2 with Physics, Chemistry, and Mathematics", correct: true },
            { text: "Completed 10+2 with Physics, Chemistry, and Biology", correct: false },
            { text: "Completed 10+2 with any stream", correct: false },
            { text: "Completed 10th grade", correct: false }
        ]
    },
    {
        question: "Which engineering branches are offered by VIT?",
        answers: [
            { text: "Civil Engineering, Mechanical Engineering, Computer Science Engineering", correct: true },
            { text: "Medicine, Arts, Science", correct: false },
            { text: "Business Administration, Hotel Management", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the VITEEE application fee?",
        answers: [
            { text: "₹500", correct: false },
            { text: "₹800", correct: true },
            { text: "₹1,200", correct: false },
            { text: "₹2,000", correct: false }
        ]
    },
    {
        question: "When is the VITEEE usually conducted?",
        answers: [
            { text: "January", correct: false },
            { text: "March", correct: false },
            { text: "April", correct: true },
            { text: "June", correct: false }
        ]
    },
    {
        question: "What is the maximum age limit for VITEEE eligibility?",
        answers: [
            { text: "18 years", correct: false },
            { text: "19 years", correct: false },
            { text: "20 years", correct: true },
            { text: "22 years", correct: false }
        ]
    },
    {
        question: "Which of the following is an important aspect of VIT's curriculum?",
        answers: [
            { text: "Holistic development", correct: true },
            { text: "Only academic excellence", correct: false },
            { text: "Focus on theory", correct: false },
            { text: "Ignoring practical skills", correct: false }
        ]
    },
    {
        question: "What type of questions does the VITEEE consist of?",
        answers: [
            { text: "Essay type", correct: false },
            { text: "True or False", correct: false },
            { text: "Objective type", correct: true },
            { text: "Subjective type", correct: false }
        ]
    },
    {
        question: "What is the first step to apply for VITEEE?",
        answers: [
            { text: "Prepare for the exam", correct: false },
            { text: "Fill out the application form", correct: true },
            { text: "Book the exam slot", correct: false },
            { text: "Submit the fee", correct: false }
        ]
    },
    {
        question: "What is the cut-off for VITEEE generally based on?",
        answers: [
            { text: "Class 12 percentage", correct: false },
            { text: "VITEEE score", correct: true },
            { text: "Interview performance", correct: false },
            { text: "Previous year's admissions", correct: false }
        ]
    },
    {
        question: "Where can students find their VITEEE results?",
        answers: [
            { text: "VIT official website", correct: true },
            { text: "Local newspapers", correct: false },
            { text: "Social media platforms", correct: false },
            { text: "Email notifications", correct: false }
        ]
    },
    {
        question: "What is the counseling process for VITEEE?",
        answers: [
            { text: "Online and offline counseling", correct: true },
            { text: "Only offline counseling", correct: false },
            { text: "Only online counseling", correct: false },
            { text: "No counseling", correct: false }
        ]
    },
    {
        question: "What is the VITEEE syllabus primarily based on?",
        answers: [
            { text: "Class 10 curriculum", correct: false },
            { text: "Class 11 and 12 curriculum", correct: true },
            { text: "Graduate level syllabus", correct: false },
            { text: "Postgraduate syllabus", correct: false }
        ]
    },
    {
        question: "Which engineering course is the most popular at VIT?",
        answers: [
            { text: "Civil Engineering", correct: false },
            { text: "Mechanical Engineering", correct: false },
            { text: "Computer Science Engineering", correct: true },
            { text: "Electrical Engineering", correct: false }
        ]
    },
    {
        question: "What facilities does VIT provide to its students?",
        answers: [
            { text: "Hostel, library, and sports complex", correct: true },
            { text: "Only classroom facilities", correct: false },
            { text: "No additional facilities", correct: false },
            { text: "Only hostel", correct: false }
        ]
    },
    {
        question: "How often is the VITEEE conducted?",
        answers: [
            { text: "Once a year", correct: true },
            { text: "Twice a year", correct: false },
            { text: "Every semester", correct: false },
            { text: "Only when needed", correct: false }
        ]
    },
    {
        question: "Which entrance exam is similar to VITEEE?",
        answers: [
            { text: "JEE Main", correct: true },
            { text: "NEET", correct: false },
            { text: "CAT", correct: false },
            { text: "GATE", correct: false }
        ]
    },
    {
        question: "What is the minimum percentage required in Class 12 for VITEEE eligibility?",
        answers: [
            { text: "50%", correct: false },
            { text: "60%", correct: true },
            { text: "70%", correct: false },
            { text: "75%", correct: false }
        ]
    },
    {
        question: "How are the VITEEE question papers structured?",
        answers: [
            { text: "Only Mathematics questions", correct: false },
            { text: "Mixed questions from all subjects", correct: true },
            { text: "Subject-specific papers", correct: false },
            { text: "Only theoretical questions", correct: false }
        ]
    },
    {
        question: "What is the official website for VITEEE?",
        answers: [
            { text: "www.vit.ac.in", correct: true },
            { text: "www.viteee.in", correct: false },
            { text: "www.vit.edu", correct: false },
            { text: "www.vituniversity.edu", correct: false }
        ]
    },
    {
        question: "How many marks is the VITEEE exam out of?",
        answers: [
            { text: "100", correct: false },
            { text: "125", correct: true },
            { text: "150", correct: false },
            { text: "200", correct: false }
        ]
    },
    {
        question: "Which entrance exam is accepted for postgraduate courses at VIT?",
        answers: [
            { text: "JEE Advanced", correct: false },
            { text: "GATE", correct: true },
            { text: "CAT", correct: false },
            { text: "MAT", correct: false }
        ]
    },
    {
        question: "What is the significance of the VITEEE rank?",
        answers: [
            { text: "Determines eligibility for placements", correct: false },
            { text: "Determines admission to VIT", correct: true },
            { text: "Determines scholarship eligibility", correct: false },
            { text: "Determines course selection", correct: false }
        ]
    },
    {
        question: "How can students improve their chances in VITEEE?",
        answers: [
            { text: "Study randomly", correct: false },
            { text: "Prepare with a structured plan", correct: true },
            { text: "Ignore practice tests", correct: false },
            { text: "Rely only on school education", correct: false }
        ]
    },
    {
        question: "Which of the following courses is NOT offered at VIT?",
        answers: [
            { text: "Information Technology", correct: false },
            { text: "Aeronautical Engineering", correct: false },
            { text: "Hotel Management", correct: true },
            { text: "Computer Science Engineering", correct: false }
        ]
    },
    {
        question: "What is the expected difficulty level of the VITEEE?",
        answers: [
            { text: "Very easy", correct: false },
            { text: "Easy", correct: false },
            { text: "Moderate", correct: true },
            { text: "Very hard", correct: false }
        ]
    },
    {
        question: "Which type of questions are given priority in VITEEE?",
        answers: [
            { text: "Conceptual understanding", correct: true },
            { text: "Rote memorization", correct: false },
            { text: "Ambiguous questions", correct: false },
            { text: "Essay type questions", correct: false }
        ]
    },
    {
        question: "What is the primary focus of VIT's engineering programs?",
        answers: [
            { text: "Theoretical knowledge", correct: false },
            { text: "Practical application", correct: true },
            { text: "Memorization", correct: false },
            { text: "Non-technical skills", correct: false }
        ]
    },
    {
        question: "Which is the best way to study for VITEEE?",
        answers: [
            { text: "Group study only", correct: false },
            { text: "Self-study with guidance", correct: true },
            { text: "Watching videos without notes", correct: false },
            { text: "Attending only coaching classes", correct: false }
        ]
    },
    {
        question: "What role does the VITEEE play in the admission process?",
        answers: [
            { text: "Only a qualifying exam", correct: true },
            { text: "Determines student performance in all subjects", correct: false },
            { text: "Determines scholarship eligibility", correct: false },
            { text: "Only for first-year admissions", correct: false }
        ]
    },
    {
        question: "How are VITEEE results communicated to students?",
        answers: [
            { text: "Through SMS only", correct: false },
            { text: "Through email only", correct: false },
            { text: "Through the official website", correct: true },
            { text: "Via postal mail", correct: false }
        ]
    },
    {
        question: "What additional skills does VIT focus on apart from academics?",
        answers: [
            { text: "Sports and extracurricular activities", correct: true },
            { text: "Only academic skills", correct: false },
            { text: "Social networking", correct: false },
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
