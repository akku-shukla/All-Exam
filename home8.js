const questions = [
    {
        question: "What is the minimum age to qualify for a CLAT exam?",
        answers: [
            { text: "16 years", correct: false },
            { text: "17 years", correct: false },
            { text: "18 years", correct: false },
            { text: "No age limit", correct: true }
        ]
    },
    {
        question: "Which of the following is a fundamental right in India?",
        answers: [
            { text: "Right to Property", correct: false },
            { text: "Right to Education", correct: true },
            { text: "Right to Work", correct: false },
            { text: "Right to Social Security", correct: false }
        ]
    },
    {
        question: "Which section of the CLAT exam tests the candidate’s proficiency in identifying legal principles and applying them to factual situations?",
        answers: [
            { text: "Logical Reasoning", correct: false },
            { text: "English Language", correct: false },
            { text: "Legal Aptitude", correct: true },
            { text: "General Knowledge", correct: false }
        ]
    },
    {
        question: "Which of the following institutions conducts the CLAT for admission to undergraduate and postgraduate law programs?",
        answers: [
            { text: "National Testing Agency (NTA)", correct: false },
            { text: "National Law Universities (NLUs)", correct: true },
            { text: "Union Public Service Commission (UPSC)", correct: false },
            { text: "Indian Institute of Law (IIL)", correct: false }
        ]
    },
    {
        question: "What is the maximum age limit to appear for the CLAT undergraduate exam as per the latest guidelines?",
        answers: [
            { text: "18 years", correct: false },
            { text: "21 years", correct: false },
            { text: "25 years", correct: false },
            { text: "No age limit", correct: true }
        ]
    },
    
    
    
    {
        question: "Who is the current Chief Justice of India (2024)?",
        answers: [
            { text: "Sharad Arvind Bobde", correct: false },
            { text: "N. V. Ramana", correct: false },
            { text: "D. Y. Chandrachud", correct: true },
            { text: "Ranjan Gogoi", correct: false }
        ]
    },
    {
        question: "The preamble of the Indian Constitution begins with which words?",
        answers: [
            { text: "We the Citizens of India", correct: false },
            { text: "We the People of India", correct: true },
            { text: "India, that is Bharat", correct: false },
            { text: "Sovereign, Socialist, Secular, Democratic", correct: false }
        ]
    },
    {
        question: "Which of the following is not a part of the Indian Parliament?",
        answers: [
            { text: "Lok Sabha", correct: false },
            { text: "Rajya Sabha", correct: false },
            { text: "President of India", correct: false },
            { text: "Supreme Court", correct: true }
        ]
    },
    {
        question: "Who among the following can introduce a money bill in Parliament?",
        answers: [
            { text: "President", correct: false },
            { text: "Prime Minister", correct: false },
            { text: "Member of Rajya Sabha", correct: false },
            { text: "Member of Lok Sabha", correct: true }
        ]
    },
    {
        question: "Which Article of the Indian Constitution deals with emergency provisions?",
        answers: [
            { text: "Article 256", correct: false },
            { text: "Article 352", correct: true },
            { text: "Article 360", correct: false },
            { text: "Article 370", correct: false }
        ]
    },
    {
        question: "Who is known as the ‘Father of the Indian Constitution’?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: false },
            { text: "B. R. Ambedkar", correct: true },
            { text: "Rajendra Prasad", correct: false }
        ]
    },
    {
        question: "The Directive Principles of State Policy are borrowed from which country’s Constitution?",
        answers: [
            { text: "USA", correct: false },
            { text: "UK", correct: false },
            { text: "Ireland", correct: true },
            { text: "France", correct: false }
        ]
    },
    {
        question: "Which is the highest law officer in India?",
        answers: [
            { text: "Attorney General", correct: true },
            { text: "Chief Justice", correct: false },
            { text: "Solicitor General", correct: false },
            { text: "Advocate General", correct: false }
        ]
    },
    {
        question: "The term 'Habeas Corpus' means:",
        answers: [
            { text: "You may have the body", correct: true },
            { text: "Double jeopardy", correct: false },
            { text: "To be informed", correct: false },
            { text: "To release", correct: false }
        ]
    },
    {
        question: "What is the maximum number of seats in Lok Sabha?",
        answers: [
            { text: "500", correct: false },
            { text: "545", correct: false },
            { text: "552", correct: true },
            { text: "600", correct: false }
        ]
    },
    {
        question: "In which year was the Right to Information (RTI) Act passed in India?",
        answers: [
            { text: "2000", correct: false },
            { text: "2005", correct: true },
            { text: "2008", correct: false },
            { text: "2010", correct: false }
        ]
    },
    {
        question: "What is the term of office for the President of India?",
        answers: [
            { text: "4 years", correct: false },
            { text: "5 years", correct: true },
            { text: "6 years", correct: false },
            { text: "7 years", correct: false }
        ]
    },
    {
        question: "What does the term 'ex post facto law' mean?",
        answers: [
            { text: "Law applied before it was made", correct: false },
            { text: "Law enforced after judgment", correct: false },
            { text: "Law made for the future", correct: false },
            { text: "Law applied retrospectively", correct: true }
        ]
    },
    {
        question: "Which of the following is a writ issued by a court to stop an ongoing process?",
        answers: [
            { text: "Mandamus", correct: false },
            { text: "Certiorari", correct: false },
            { text: "Quo Warranto", correct: false },
            { text: "Prohibition", correct: true }
        ]
    },
    {
        question: "The concept of judicial review in India is borrowed from:",
        answers: [
            { text: "UK", correct: false },
            { text: "USA", correct: true },
            { text: "Australia", correct: false },
            { text: "Canada", correct: false }
        ]
    },
    {
        question: "The Election Commission of India is a:",
        answers: [
            { text: "Statutory Body", correct: false },
            { text: "Constitutional Body", correct: true },
            { text: "Quasi-Judicial Body", correct: false },
            { text: "Executive Body", correct: false }
        ]
    },
    {
        question: "Under which Article can the President of India declare Financial Emergency?",
        answers: [
            { text: "Article 352", correct: false },
            { text: "Article 356", correct: false },
            { text: "Article 360", correct: true },
            { text: "Article 368", correct: false }
        ]
    },
    {
        question: "Which constitutional amendment added the words 'Socialist' and 'Secular' to the Preamble?",
        answers: [
            { text: "41st Amendment", correct: false },
            { text: "42nd Amendment", correct: true },
            { text: "44th Amendment", correct: false },
            { text: "45th Amendment", correct: false }
        ]
    },
   
        {
            question: "Who has the power to dissolve the Lok Sabha before its term expires?",
            answers: [
                { text: "President", correct: true },
                { text: "Prime Minister", correct: false },
                { text: "Speaker of the Lok Sabha", correct: false },
                { text: "Chief Justice of India", correct: false }
            ]
        },
        {
            question: "The Supreme Court of India was established in which year?",
            answers: [
                { text: "1947", correct: false },
                { text: "1949", correct: false },
                { text: "1950", correct: true },
                { text: "1951", correct: false }
            ]
        },
        {
            question: "Which amendment is related to the Right to Education in India?",
            answers: [
                { text: "86th Amendment", correct: true },
                { text: "42nd Amendment", correct: false },
                { text: "61st Amendment", correct: false },
                { text: "44th Amendment", correct: false }
            ]
        },
        {
            question: "The impeachment of the President of India can be initiated in:",
            answers: [
                { text: "Lok Sabha", correct: false },
                { text: "Rajya Sabha", correct: false },
                { text: "Either House of Parliament", correct: true },
                { text: "Legislative Assemblies", correct: false }
            ]
        },
        {
            question: "Which schedule of the Indian Constitution deals with the allocation of seats in the Rajya Sabha?",
            answers: [
                { text: "First Schedule", correct: false },
                { text: "Second Schedule", correct: false },
                { text: "Fourth Schedule", correct: true },
                { text: "Fifth Schedule", correct: false }
            ]
        },
        {
            question: "The 73rd Constitutional Amendment Act is related to:",
            answers: [
                { text: "Urban local bodies", correct: false },
                { text: "Panchayati Raj Institutions", correct: true },
                { text: "State Legislative Councils", correct: false },
                { text: "Parliament", correct: false }
            ]
        },
        {
            question: "Who among the following can remove the Vice President of India?",
            answers: [
                { text: "President of India", correct: false },
                { text: "Supreme Court", correct: false },
                { text: "Rajya Sabha", correct: true },
                { text: "Lok Sabha", correct: false }
            ]
        },
        {
            question: "Which of the following cases established the concept of 'Basic Structure' of the Constitution?",
            answers: [
                { text: "A. K. Gopalan Case", correct: false },
                { text: "Golaknath Case", correct: false },
                { text: "Keshavananda Bharati Case", correct: true },
                { text: "I. R. Coelho Case", correct: false }
            ]
        },
        {
            question: "Which amendment lowered the voting age from 21 years to 18 years?",
            answers: [
                { text: "52nd Amendment", correct: false },
                { text: "61st Amendment", correct: true },
                { text: "69th Amendment", correct: false },
                { text: "73rd Amendment", correct: false }
            ]
        },
        {
            question: "Which part of the Indian Constitution deals with Fundamental Rights?",
            answers: [
                { text: "Part III", correct: true },
                { text: "Part IV", correct: false },
                { text: "Part V", correct: false },
                { text: "Part VI", correct: false }
            ]
        },
        {
            question: "What is the maximum strength of the Rajya Sabha?",
            answers: [
                { text: "238", correct: false },
                { text: "245", correct: false },
                { text: "250", correct: true },
                { text: "260", correct: false }
            ]
        },
        {
            question: "Which of the following Articles empowers the President to grant pardons?",
            answers: [
                { text: "Article 71", correct: false },
                { text: "Article 72", correct: true },
                { text: "Article 73", correct: false },
                { text: "Article 74", correct: false }
            ]
        },
        {
            question: "Who was the first woman judge of the Supreme Court of India?",
            answers: [
                { text: "Fathima Beevi", correct: true },
                { text: "Indu Malhotra", correct: false },
                { text: "R. Banumathi", correct: false },
                { text: "Ruma Pal", correct: false }
            ]
        },
        {
            question: "Which Article of the Indian Constitution provides for the Election Commission?",
            answers: [
                { text: "Article 324", correct: true },
                { text: "Article 322", correct: false },
                { text: "Article 326", correct: false },
                { text: "Article 330", correct: false }
            ]
        },
        {
            question: "Who was the first Law Minister of Independent India?",
            answers: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Sardar Vallabhbhai Patel", correct: false },
                { text: "B. R. Ambedkar", correct: true },
                { text: "Rajendra Prasad", correct: false }
            ]
        },
        {
            question: "Which of the following amendments in the Constitution of India is related to the Panchayati Raj?",
            answers: [
                { text: "52nd Amendment", correct: false },
                { text: "61st Amendment", correct: false },
                { text: "73rd Amendment", correct: true },
                { text: "83rd Amendment", correct: false }
            ]
        },
        {
            question: "Which of the following is not a Directive Principle of State Policy?",
            answers: [
                { text: "Equal pay for equal work", correct: false },
                { text: "Protection of children from exploitation", correct: false },
                { text: "Freedom of speech and expression", correct: true },
                { text: "Right to education", correct: false }
            ]
        },
        {
            question: "The National Judicial Appointments Commission (NJAC) Act was struck down in which year?",
            answers: [
                { text: "2014", correct: false },
                { text: "2015", correct: true },
                { text: "2016", correct: false },
                { text: "2017", correct: false }
            ]
        },
        {
            question: "Which case was responsible for the introduction of the Basic Structure Doctrine in India?",
            answers: [
                { text: "Minerva Mills Case", correct: false },
                { text: "Keshavananda Bharati Case", correct: true },
                { text: "A. K. Gopalan Case", correct: false },
                { text: "I. R. Coelho Case", correct: false }
            ]
        },
        {
            question: "Which Article of the Indian Constitution provides for the imposition of President’s Rule in a state?",
            answers: [
                { text: "Article 356", correct: true },
                { text: "Article 352", correct: false },
                { text: "Article 360", correct: false },
                { text: "Article 365", correct: false }
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
