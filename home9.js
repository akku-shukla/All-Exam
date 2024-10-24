const questions = [
    {
        question: "Who is the first female judge to be appointed to the Supreme Court of India?",
        answers: [
            { text: "Leila Seth", correct: false },
            { text: "Fathima Beevi", correct: true },
            { text: "Indira Banerjee", correct: false },
            { text: "Ruma Pal", correct: false }
        ]
    },
    {
        question: "What is the primary function of the Election Commission of India?",
        answers: [
            { text: "Conducting elections", correct: true },
            { text: "Framing laws", correct: false },
            { text: "Appointing the Prime Minister", correct: false },
            { text: "Implementing economic policies", correct: false }
        ]
    },
    {
        question: "Which Article of the Indian Constitution guarantees the Right to Equality?",
        answers: [
            { text: "Article 12", correct: false },
            { text: "Article 14", correct: true },
            { text: "Article 19", correct: false },
            { text: "Article 21", correct: false }
        ]
    },
    {
        question: "In which year was the Consumer Protection Act enacted in India?",
        answers: [
            { text: "1986", correct: true },
            { text: "1976", correct: false },
            { text: "1996", correct: false },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "Who appoints the Chief Justice of India?",
        answers: [
            { text: "President of India", correct: true },
            { text: "Prime Minister", correct: false },
            { text: "Law Minister", correct: false },
            { text: "Parliament", correct: false }
        ]
    },
    {
        question: "What is the maximum strength of the Lok Sabha as per the Indian Constitution?",
        answers: [
            { text: "500", correct: false },
            { text: "512", correct: false },
            { text: "552", correct: true },
            { text: "545", correct: false }
        ]
    },
    {
        question: "Which one of the following is a Fundamental Right in India?",
        answers: [
            { text: "Right to Property", correct: false },
            { text: "Right to Information", correct: false },
            { text: "Right to Privacy", correct: false },
            { text: "Right to Constitutional Remedies", correct: true }
        ]
    },
    {
        question: "Who was the first Law Minister of independent India?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Sardar Patel", correct: false },
            { text: "Dr. B.R. Ambedkar", correct: true },
            { text: "C. Rajagopalachari", correct: false }
        ]
    },
    {
        question: "Which Article of the Constitution deals with the amendment of the Constitution?",
        answers: [
            { text: "Article 356", correct: false },
            { text: "Article 368", correct: true },
            { text: "Article 226", correct: false },
            { text: "Article 123", correct: false }
        ]
    },
    {
        question: "Who has the authority to dissolve the Lok Sabha?",
        answers: [
            { text: "Prime Minister", correct: false },
            { text: "President", correct: true },
            { text: "Speaker of Lok Sabha", correct: false },
            { text: "Chief Justice of India", correct: false }
        ]
    },
    {
        question: "The principle of 'Judicial Review' in India is borrowed from which country?",
        answers: [
            { text: "USA", correct: true },
            { text: "UK", correct: false },
            { text: "France", correct: false },
            { text: "Canada", correct: false }
        ]
    },
    {
        question: "What does Habeas Corpus mean?",
        answers: [
            { text: "To have the body", correct: true },
            { text: "To show cause", correct: false },
            { text: "To restrain someone", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The term 'Quid Pro Quo' refers to which of the following?",
        answers: [
            { text: "A legal maxim meaning 'something for something'", correct: true },
            { text: "A contract between two individuals", correct: false },
            { text: "A criminal offense", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "In which case did the Supreme Court of India declare the basic structure doctrine?",
        answers: [
            { text: "Golaknath Case", correct: false },
            { text: "Minerva Mills Case", correct: false },
            { text: "Kesavananda Bharati Case", correct: true },
            { text: "S.R. Bommai Case", correct: false }
        ]
    },
    {
        question: "Under which Article can the President of India proclaim a National Emergency?",
        answers: [
            { text: "Article 352", correct: true },
            { text: "Article 356", correct: false },
            { text: "Article 360", correct: false },
            { text: "Article 368", correct: false }
        ]
    },
    {
        question: "Which of the following is not a writ issued under Article 32 of the Constitution of India?",
        answers: [
            { text: "Mandamus", correct: false },
            { text: "Habeas Corpus", correct: false },
            { text: "Quo Warranto", correct: false },
            { text: "Subpoena", correct: true }
        ]
    },
    {
        question: "The National Judicial Appointments Commission (NJAC) was established under which Constitutional Amendment?",
        answers: [
            { text: "98th Amendment", correct: false },
            { text: "99th Amendment", correct: true },
            { text: "101st Amendment", correct: false },
            { text: "102nd Amendment", correct: false }
        ]
    },
    {
        question: "The concept of 'Public Interest Litigation' (PIL) in India is borrowed from which country?",
        answers: [
            { text: "UK", correct: false },
            { text: "USA", correct: true },
            { text: "Canada", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Which amendment to the Indian Constitution made the right to education a fundamental right?",
        answers: [
            { text: "42nd Amendment", correct: false },
            { text: "44th Amendment", correct: false },
            { text: "86th Amendment", correct: true },
            { text: "73rd Amendment", correct: false }
        ]
    },
    {
        question: "The Right to Information Act was passed in which year?",
        answers: [
            { text: "2001", correct: false },
            { text: "2005", correct: true },
            { text: "2006", correct: false },
            { text: "2008", correct: false }
        ]
    },
    {
        question: "Which of the following is the highest law officer of India?",
        answers: [
            { text: "Attorney General", correct: true },
            { text: "Solicitor General", correct: false },
            { text: "Chief Justice of India", correct: false },
            { text: "Law Minister", correct: false }
        ]
    },
    {
        question: "How many types of writs can be issued by the Supreme Court of India?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Who has the power to make laws on the subjects mentioned in the Union List?",
        answers: [
            { text: "State Legislature", correct: false },
            { text: "Union Parliament", correct: true },
            { text: "Both State and Union Legislature", correct: false },
            { text: "Supreme Court", correct: false }
        ]
    },
    {
        question: "Which among the following is not a Directive Principle of State Policy?",
        answers: [
            { text: "Equal pay for equal work", correct: false },
            { text: "Protection of monuments", correct: false },
            { text: "Promotion of international peace", correct: false },
            { text: "Right to form associations", correct: true }
        ]
    },
    {
        question: "What is the minimum age for becoming a judge in the Supreme Court of India?",
        answers: [
            { text: "40 years", correct: false },
            { text: "45 years", correct: false },
            { text: "50 years", correct: false },
            { text: "No specific age", correct: true }
        ]
    },
    {
        question: "What is the term of office for the members of the Rajya Sabha?",
        answers: [
            { text: "4 years", correct: false },
            { text: "5 years", correct: false },
            { text: "6 years", correct: true },
            { text: "7 years", correct: false }
        ]
    },
    {
        question: "In which case did the Supreme Court strike down the NJAC as unconstitutional?",
        answers: [
            { text: "Indra Sawhney Case", correct: false },
            { text: "Maneka Gandhi Case", correct: false },
            { text: "Supreme Court Advocates-on-Record Association Case", correct: true },
            { text: "Vishaka Case", correct: false }
        ]
    },
    {
        question: "Which of the following Articles deals with the election of the President of India?",
        answers: [
            { text: "Article 52", correct: false },
            { text: "Article 56", correct: false },
            { text: "Article 58", correct: false },
            { text: "Article 62", correct: true }
        ]
    },
    {
        question: "The concept of 'Due Process of Law' in India was derived from which country's constitution?",
        answers: [
            { text: "France", correct: false },
            { text: "UK", correct: false },
            { text: "USA", correct: true },
            { text: "Japan", correct: false }
        ]
    },
    {
        question: "What is the maximum number of members that can be nominated to the Rajya Sabha?",
        answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false },
            { text: "20", correct: false }
        ]
    },
    {
        question: "Who was the first Attorney General of India?",
        answers: [
            { text: "M.C. Setalvad", correct: true },
            { text: "C.K. Daphtary", correct: false },
            { text: "Soli Sorabjee", correct: false },
            { text: "Fali Nariman", correct: false }
        ]
    },
    {
        question: "The term 'Ex post facto law' refers to which of the following?",
        answers: [
            { text: "A law applied retroactively", correct: true },
            { text: "A law applied prospectively", correct: false },
            { text: "A law applied to existing cases", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "What is the primary function of the Comptroller and Auditor General (CAG) of India?",
        answers: [
            { text: "Audit government expenditure", correct: true },
            { text: "Make laws", correct: false },
            { text: "Appoint judges", correct: false },
            { text: "Set economic policy", correct: false }
        ]
    },
    {
        question: "In which year was the Legal Services Authorities Act enacted?",
        answers: [
            { text: "1985", correct: false },
            { text: "1987", correct: true },
            { text: "1991", correct: false },
            { text: "1995", correct: false }
        ]
    },
    {
        question: "Which of the following is a Union Territory of India?",
        answers: [
            { text: "Nagaland", correct: false },
            { text: "Sikkim", correct: false },
            { text: "Puducherry", correct: true },
            { text: "Manipur", correct: false }
        ]
    },
    {
        question: "Who among the following was the first Chairman of the Law Commission of India?",
        answers: [
            { text: "M.C. Setalvad", correct: true },
            { text: "H.R. Khanna", correct: false },
            { text: "K.N. Wanchoo", correct: false },
            { text: "Motilal Nehru", correct: false }
        ]
    },
    {
        question: "Who has the final authority to interpret the Constitution of India?",
        answers: [
            { text: "Parliament", correct: false },
            { text: "President", correct: false },
            { text: "Supreme Court", correct: true },
            { text: "Prime Minister", correct: false }
        ]
    },
    {
        question: "The term 'pro bono' means:",
        answers: [
            { text: "For the public good", correct: true },
            { text: "Against a specific law", correct: false },
            { text: "In accordance with the law", correct: false },
            { text: "In private", correct: false }
        ]
    },
    {
        question: "Which Article deals with the establishment of the High Courts in India?",
        answers: [
            { text: "Article 214", correct: true },
            { text: "Article 226", correct: false },
            { text: "Article 241", correct: false },
            { text: "Article 230", correct: false }
        ]
    },
    {
        question: "The Indian Parliament consists of which of the following?",
        answers: [
            { text: "Lok Sabha and Rajya Sabha", correct: false },
            { text: "President and Lok Sabha", correct: false },
            { text: "Lok Sabha, Rajya Sabha, and President", correct: true },
            { text: "Prime Minister, Lok Sabha, and Rajya Sabha", correct: false }
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
