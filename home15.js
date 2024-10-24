const questions = [
    {
        question: "What is the full form of NDA?",
        answers: [
            { text: "National Defense Association", correct: false },
            { text: "National Defence Academy", correct: true },
            { text: "National Defense Academy", correct: false },
            { text: "National Defense Associates", correct: false }
        ]
    },
    {
        question: "In which year was the National Defence Academy established?",
        answers: [
            { text: "1947", correct: false },
            { text: "1954", correct: true },
            { text: "1962", correct: false },
            { text: "1971", correct: false }
        ]
    },
    {
        question: "Where is the National Defence Academy located?",
        answers: [
            { text: "New Delhi", correct: false },
            { text: "Pune", correct: true },
            { text: "Mumbai", correct: false },
            { text: "Chennai", correct: false }
        ]
    },
    {
        question: "Which branches of the Indian Armed Forces are trained at NDA?",
        answers: [
            { text: "Army, Navy, and Air Force", correct: true },
            { text: "Army and Navy", correct: false },
            { text: "Navy and Air Force", correct: false },
            { text: "Army and Air Force", correct: false }
        ]
    },
    {
        question: "What is the motto of the National Defence Academy?",
        answers: [
            { text: "Service Before Self", correct: true },
            { text: "Unity and Discipline", correct: false },
            { text: "A Commitment to Excellence", correct: false },
            { text: "Duty, Honor, Country", correct: false }
        ]
    },
    {
        question: "The NDA conducts an entrance exam twice a year for which purpose?",
        answers: [
            { text: "Recruitment in civil services", correct: false },
            { text: "Admission to the academy", correct: true },
            { text: "Promotion in armed forces", correct: false },
            { text: "Entrance to paramilitary forces", correct: false }
        ]
    },
    {
        question: "Which of the following is a key component of the NDA curriculum?",
        answers: [
            { text: "Physical Training", correct: true },
            { text: "Only Academics", correct: false },
            { text: "Business Management", correct: false },
            { text: "Fashion Design", correct: false }
        ]
    },
    {
        question: "How long is the training period at NDA?",
        answers: [
            { text: "1 year", correct: false },
            { text: "3 years", correct: true },
            { text: "4 years", correct: false },
            { text: "2 years", correct: false }
        ]
    },
    {
        question: "Which examination is conducted by UPSC for admission to the NDA?",
        answers: [
            { text: "Civil Services Exam", correct: false },
            { text: "Combined Defence Services Exam", correct: false },
            { text: "NDA Exam", correct: true },
            { text: "Central Armed Police Forces Exam", correct: false }
        ]
    },
    {
        question: "What is the minimum educational qualification required to apply for NDA?",
        answers: [
            { text: "10th grade", correct: false },
            { text: "12th grade", correct: true },
            { text: "Graduation", correct: false },
            { text: "Post Graduation", correct: false }
        ]
    },
    {
        question: "Which academy do NDA graduates go to for further training?",
        answers: [
            { text: "Indian Military Academy", correct: true },
            { text: "Air Force Academy", correct: false },
            { text: "Naval Academy", correct: false },
            { text: "All of the above", correct: false }
        ]
    },
    {
        question: "Who is the current Chief of the Army Staff?",
        answers: [
            { text: "General Manoj Mukund Naravane", correct: false },
            { text: "General Anil Chauhan", correct: true },
            { text: "General Bipin Rawat", correct: false },
            { text: "General Dalbir Singh Suhag", correct: false }
        ]
    },
    {
        question: "What is the selection process for NDA?",
        answers: [
            { text: "Written Exam, SSB Interview", correct: true },
            { text: "Only SSB Interview", correct: false },
            { text: "Written Exam, Medical Exam", correct: false },
            { text: "Direct Recruitment", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a part of the NDA campus?",
        answers: [
            { text: "Hostels", correct: false },
            { text: "Library", correct: false },
            { text: "Golf Course", correct: true },
            { text: "Classrooms", correct: false }
        ]
    },
    {
        question: "What type of training do NDA cadets undergo?",
        answers: [
            { text: "Military and Academic training", correct: true },
            { text: "Only Physical Training", correct: false },
            { text: "Only Academic Training", correct: false },
            { text: "Only Tactical Training", correct: false }
        ]
    },
    {
        question: "Which of the following is the highest rank a cadet can achieve at NDA?",
        answers: [
            { text: "Cadet Major", correct: false },
            { text: "Cadet Captain", correct: true },
            { text: "Cadet Lieutenant", correct: false },
            { text: "Cadet Sergeant", correct: false }
        ]
    },
    {
        question: "What is the main objective of NDA training?",
        answers: [
            { text: "To develop leadership qualities", correct: true },
            { text: "To ensure academic excellence", correct: false },
            { text: "To focus on sports", correct: false },
            { text: "To promote only physical fitness", correct: false }
        ]
    },
    {
        question: "Which of the following is a sports event held at NDA?",
        answers: [
            { text: "NDA Marathon", correct: false },
            { text: "Annual Inter-Services Sports Competition", correct: true },
            { text: "National Sports Day", correct: false },
            { text: "Commonwealth Games", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is included in the NDA syllabus?",
        answers: [
            { text: "Physics", correct: true },
            { text: "Cooking", correct: false },
            { text: "Fashion Designing", correct: false },
            { text: "Graphic Designing", correct: false }
        ]
    },
    {
        question: "Which weapon is commonly used for training at NDA?",
        answers: [
            { text: "AK-47", correct: false },
            { text: "INSAS Rifle", correct: true },
            { text: "M16 Rifle", correct: false },
            { text: "Shooting Bow", correct: false }
        ]
    },
    {
        question: "What is the age limit for applying to NDA?",
        answers: [
            { text: "16.5 - 19.5 years", correct: true },
            { text: "17 - 20 years", correct: false },
            { text: "18 - 21 years", correct: false },
            { text: "15 - 18 years", correct: false }
        ]
    },
    {
        question: "What is the format of the NDA entrance exam?",
        answers: [
            { text: "Objective Type", correct: true },
            { text: "Descriptive Type", correct: false },
            { text: "Practical Type", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which of the following is a key feature of NDA's training philosophy?",
        answers: [
            { text: "Rote Learning", correct: false },
            { text: "Holistic Development", correct: true },
            { text: "Individualism", correct: false },
            { text: "Theoretical Knowledge", correct: false }
        ]
    },
    {
        question: "NDA is affiliated with which university?",
        answers: [
            { text: "Jawaharlal Nehru University", correct: false },
            { text: "Delhi University", correct: false },
            { text: "Jawaharlal Nehru University of Military Studies", correct: true },
            { text: "Pune University", correct: false }
        ]
    },
    {
        question: "Who was the first commandant of NDA?",
        answers: [
            { text: "Lt Gen S.K. Sinha", correct: true },
            { text: "Lt Gen R.K. Karwal", correct: false },
            { text: "Lt Gen A.K. Bhattacharjee", correct: false },
            { text: "Lt Gen J.S. Dhillon", correct: false }
        ]
    },
    {
        question: "What is the primary language of instruction at NDA?",
        answers: [
            { text: "Hindi", correct: false },
            { text: "English", correct: true },
            { text: "Marathi", correct: false },
            { text: "Urdu", correct: false }
        ]
    },
    {
        question: "What is the training duration for the Army cadets at NDA?",
        answers: [
            { text: "1 year", correct: false },
            { text: "3 years", correct: true },
            { text: "4 years", correct: false },
            { text: "2 years", correct: false }
        ]
    },
    {
        question: "What is the primary focus of the National Defence Academy's training?",
        answers: [
            { text: "Academic Excellence", correct: false },
            { text: "Leadership and Military Training", correct: true },
            { text: "Physical Fitness Only", correct: false },
            { text: "Technological Skills", correct: false }
        ]
    },

{
    question: "Which examination must be cleared before joining the NDA?",
    answers: [
        { text: "JEE", correct: false },
        { text: "UPSC NDA Exam", correct: true },
        { text: "CAT", correct: false },
        { text: "NEET", correct: false }
    ]
},
{
    question: "Which of the following is an outdoor training activity at NDA?",
    answers: [
        { text: "Paragliding", correct: false },
        { text: "Horse Riding", correct: true },
        { text: "Painting", correct: false },
        { text: "Gardening", correct: false }
    ]
},
{
    question: "Which sports event is organized annually at the NDA?",
    answers: [
        { text: "Inter-Services Football Championship", correct: true },
        { text: "Inter-College Chess Tournament", correct: false },
        { text: "All-India Badminton Championship", correct: false },
        { text: "National Athletic Meet", correct: false }
    ]
},
{
    question: "What type of scholarship is offered to NDA cadets?",
    answers: [
        { text: "Merit-based", correct: true },
        { text: "Need-based", correct: false },
        { text: "Athletic-based", correct: false },
        { text: "None", correct: false }
    ]
},
{
    question: "What is the duration of the SSB interview process for NDA candidates?",
    answers: [
        { text: "1 day", correct: false },
        { text: "5 days", correct: true },
        { text: "3 days", correct: false },
        { text: "7 days", correct: false }
    ]
},
{
    question: "What kind of leadership qualities does NDA aim to develop?",
    answers: [
        { text: "Authoritarian", correct: false },
        { text: "Transformational", correct: true },
        { text: "Transactional", correct: false },
        { text: "Laissez-faire", correct: false }
    ]
},
{
    question: "Which subject is NOT part of the NDA entrance exam syllabus?",
    answers: [
        { text: "Mathematics", correct: false },
        { text: "History", correct: true },
        { text: "English", correct: false },
        { text: "General Science", correct: false }
    ]
},
{
    question: "Which physical fitness test is included in the NDA training program?",
    answers: [
        { text: "Long Jump", correct: false },
        { text: "Obstacle Race", correct: true },
        { text: "Swimming", correct: false },
        { text: "High Jump", correct: false }
    ]
},
{
    question: "Which of the following is a primary weapon taught at NDA?",
    answers: [
        { text: "Pistol", correct: false },
        { text: "INSAS Rifle", correct: true },
        { text: "SMG", correct: false },
        { text: "Shotgun", correct: false }
    ]
},
{
    question: "What is the age limit for female candidates applying to NDA?",
    answers: [
        { text: "16.5 - 19.5 years", correct: true },
        { text: "17 - 20 years", correct: false },
        { text: "18 - 21 years", correct: false },
        { text: "15 - 18 years", correct: false }
    ]
},
{
    question: "What is the selection ratio of candidates for NDA?",
    answers: [
        { text: "1:10", correct: false },
        { text: "1:100", correct: true },
        { text: "1:50", correct: false },
        { text: "1:25", correct: false }
    ]
},
{
    question: "What is the role of the Commandant at NDA?",
    answers: [
        { text: "Administrative Head", correct: true },
        { text: "Academic Director", correct: false },
        { text: "Sports Officer", correct: false },
        { text: "Chief Instructor", correct: false }
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
