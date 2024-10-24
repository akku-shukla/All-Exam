const questions = [
    
    {
        question: "Which article of the Indian Constitution provides for the creation of the Union Public Service Commission (UPSC)?",
        answers: [
            { text: "Article 320", correct: false },
            { text: "Article 322", correct: false },
            { text: "Article 315", correct: true },
            { text: "Article 324", correct: false }
        ]
    },
    
    
    {
        question: "Which of the following services is NOT recruited through the UPSC Civil Services Examination?",
        answers: [
            { text: "Indian Administrative Service (IAS)", correct: false },
            { text: "Indian Police Service (IPS)", correct: false },
            { text: "Indian Forest Service (IFoS)", correct: true },
            { text: "Indian Revenue Service (IRS)", correct: false }
        ]
    },
    {
        question: "In which year was the first Civil Services Examination conducted by the Union Public Service Commission (UPSC)?",
        answers: [
            { text: "1947", correct: false },
            { text: "1950", correct: false },
            { text: "1952", correct: true },
            { text: "1956", correct: false }
        ]
    },
        
    {
        question: "What is the tenure of the Chairman of UPSC?",
        answers: [
            { text: "4 years", correct: false },
            { text: "5 years or until the age of 60", correct: false },
            { text: "6 years or until the age of 65", correct: true },
            { text: "3 years", correct: false }
        ]
    },
    {
        question: "Who appoints the Chairman and other members of the UPSC?",
        answers: [
            { text: "Prime Minister of India", correct: false },
            { text: "President of India", correct: true },
            { text: "Chief Justice of India", correct: false },
            { text: "Parliament", correct: false }
        ]
    },
    {
        question: "Which of the following is not a part of the UPSC Civil Services Exam?",
        answers: [
            { text: "Indian Administrative Service (IAS)", correct: false },
            { text: "Indian Police Service (IPS)", correct: false },
            { text: "Indian Forest Service (IFS)", correct: false },
            { text: "Indian Judicial Service (IJS)", correct: true }
        ]
    },
    {
        question: "Which of the following subjects is NOT part of the Civil Services Preliminary Exam syllabus?",
        answers: [
            { text: "General Studies", correct: false },
            { text: "Logical Reasoning", correct: false },
            { text: "Quantitative Aptitude", correct: false },
            { text: "Mechanical Engineering", correct: true }
        ]
    },
    {
        question: "Which of the following is a part of the Civil Services Mains Exam?",
        answers: [
            { text: "English Language Test", correct: false },
            { text: "Mathematics", correct: false },
            { text: "Optional Subject", correct: true },
            { text: "Verbal Reasoning", correct: false }
        ]
    },
    {
        question: "The qualifying paper in the UPSC Mains consists of which language paper?",
        answers: [
            { text: "Any regional language", correct: false },
            { text: "Hindi or English", correct: false },
            { text: "Only English", correct: false },
            { text: "English or another Indian language", correct: true }
        ]
    },
    {
        question: "What is the full form of CSAT in the context of UPSC Prelims?",
        answers: [
            { text: "Civil Services Aptitude Test", correct: true },
            { text: "Central Service Application Test", correct: false },
            { text: "Civil Study Application Test", correct: false },
            { text: "Combined Services Aptitude Test", correct: false }
        ]
    },
    {
        question: "Who was the first Prime Minister of Independent India?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Sardar Vallabhbhai Patel", correct: false },
            { text: "B.R. Ambedkar", correct: false }
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
        question: "Who is regarded as the father of the Indian Constitution?",
        answers: [
            { text: "Dr. Rajendra Prasad", correct: false },
            { text: "B.R. Ambedkar", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Sardar Patel", correct: false }
        ]
    },
    {
        question: "Which Constitutional Amendment Act added the Fundamental Duties?",
        answers: [
            { text: "40th Amendment", correct: false },
            { text: "42nd Amendment", correct: true },
            { text: "44th Amendment", correct: false },
            { text: "46th Amendment", correct: false }
        ]
    },
    {
        question: "The right to property was removed from the list of Fundamental Rights by which Constitutional Amendment?",
        answers: [
            { text: "42nd Amendment", correct: false },
            { text: "44th Amendment", correct: true },
            { text: "52nd Amendment", correct: false },
            { text: "61st Amendment", correct: false }
        ]
    },
    {
        question: "In which year was the Indian National Congress founded?",
        answers: [
            { text: "1880", correct: false },
            { text: "1885", correct: true },
            { text: "1890", correct: false },
            { text: "1905", correct: false }
        ]
    },
    {
        question: "The Cabinet Mission came to India in which year?",
        answers: [
            { text: "1942", correct: false },
            { text: "1946", correct: true },
            { text: "1947", correct: false },
            { text: "1949", correct: false }
        ]
    },
    {
        question: "Which act introduced the system of Dyarchy in British India?",
        answers: [
            { text: "Government of India Act 1919", correct: true },
            { text: "Government of India Act 1935", correct: false },
            { text: "Indian Councils Act 1909", correct: false },
            { text: "Charter Act 1833", correct: false }
        ]
    },
    {
        question: "The Constitution of India was adopted by the Constituent Assembly in which year?",
        answers: [
            { text: "1947", correct: false },
            { text: "1948", correct: false },
            { text: "1949", correct: true },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "The concept of 'Judicial Review' in India has been borrowed from the Constitution of which country?",
        answers: [
            { text: "USA", correct: true },
            { text: "UK", correct: false },
            { text: "Canada", correct: false },
            { text: "Australia", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of direct tax?",
        answers: [
            { text: "Goods and Services Tax (GST)", correct: false },
            { text: "Income Tax", correct: true },
            { text: "Value Added Tax (VAT)", correct: false },
            { text: "Service Tax", correct: false }
        ]
    },
    {
        question: "What is the main objective of the Green Revolution?",
        answers: [
            { text: "Increase industrial production", correct: false },
            { text: "Improve irrigation facilities", correct: false },
            { text: "Achieve food security through increased agricultural production", correct: true },
            { text: "Introduce genetically modified crops", correct: false }
        ]
    },
    {
        question: "What is meant by 'fiscal deficit'?",
        answers: [
            { text: "Difference between total revenue and total expenditure", correct: false },
            { text: "Total revenue collected from taxes", correct: false },
            { text: "Government's total revenue minus its total expenditure", correct: true },
            { text: "Total budget expenditure", correct: false }
        ]
    },
    {
        question: "The Tropic of Cancer passes through how many Indian states?",
        answers: [
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: true },
            { text: "10", correct: false }
        ]
    },
    {
        question: "Which of the following rivers is the longest in India?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Narmada", correct: false },
            { text: "Ganga", correct: true },
            { text: "Godavari", correct: false }
        ]
    },
    {
        question: "The currency of Japan is:",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Peso", correct: false },
            { text: "Dollar", correct: false }
        ]
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        answers: [
            { text: "Brazil", correct: true },
            { text: "India", correct: false },
            { text: "Vietnam", correct: false },
            { text: "Colombia", correct: false }
        ]
    },
    {
        question: "In which year was the Goods and Services Tax (GST) introduced in India?",
        answers: [
            { text: "2015", correct: false },
            { text: "2016", correct: false },
            { text: "2017", correct: true },
            { text: "2018", correct: false }
        ]
    },
    {
        question: "The highest peak in India is:",
        answers: [
            { text: "Kanchenjunga", correct: true },
            { text: "Nanda Devi", correct: false },
            { text: "Mount Everest", correct: false },
            { text: "K2", correct: false }
        ]
    },
    {
        question: "Which state is the largest producer of wheat in India?",
        answers: [
            { text: "Punjab", correct: false },
            { text: "Haryana", correct: false },
            { text: "Uttar Pradesh", correct: true },
            { text: "Madhya Pradesh", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Justice of India (as of 2024)?",
        answers: [
            { text: "Justice Sharad Arvind Bobde", correct: false },
            { text: "Justice N.V. Ramana", correct: false },
            { text: "Justice D.Y. Chandrachud", correct: true },
            { text: "Justice Uday Umesh Lalit", correct: false }
        ]
    },
    {
        question: "Which of the following organizations is responsible for calculating the Gross Domestic Product (GDP) in India?",
        answers: [
            { text: "Reserve Bank of India (RBI)", correct: false },
            { text: "NITI Aayog", correct: false },
            { text: "Central Statistical Office (CSO)", correct: true },
            { text: "Ministry of Finance", correct: false }
        ]
    },
    {
        question: "The headquarters of the World Health Organization (WHO) is located in:",
        answers: [
            { text: "Geneva", correct: true },
            { text: "Paris", correct: false },
            { text: "New York", correct: false },
            { text: "Washington, D.C.", correct: false }
        ]
    },
    {
        question: "Who is the Secretary-General of the United Nations (as of 2024)?",
        answers: [
            { text: "Ban Ki-moon", correct: false },
            { text: "Antonio Guterres", correct: true },
            { text: "Kofi Annan", correct: false },
            { text: "Hardeep Singh Puri", correct: false }
        ]
    },
    {
        question: "Which Indian state has the highest literacy rate (as of the latest census)?",
        answers: [
            { text: "Kerala", correct: true },
            { text: "Tamil Nadu", correct: false },
            { text: "Goa", correct: false },
            { text: "Maharashtra", correct: false }
        ]
    },
    {
        question: "Which country hosted the G20 summit in 2023?",
        answers: [
            { text: "India", correct: true },
            { text: "Italy", correct: false },
            { text: "Saudi Arabia", correct: false },
            { text: "Indonesia", correct: false }
        ]
    },
    {
        question: "The World Bank is headquartered in:",
        answers: [
            { text: "New York", correct: false },
            { text: "Washington, D.C.", correct: true },
            { text: "London", correct: false },
            { text: "Paris", correct: false }
        ]
    },
    {
        question: "The largest desert in the world is:",
        answers: [
            { text: "Sahara", correct: true },
            { text: "Gobi", correct: false },
            { text: "Thar", correct: false },
            { text: "Kalahari", correct: false }
        ]
    },
    {
        question: "Which Indian state is the largest in terms of area?",
        answers: [
            { text: "Madhya Pradesh", correct: false },
            { text: "Maharashtra", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "Uttar Pradesh", correct: false }
        ]
    },
    {
        question: "Who is the current President of India (as of 2024)?",
        answers: [
            { text: "Ram Nath Kovind", correct: false },
            { text: "Pratibha Patil", correct: false },
            { text: "Droupadi Murmu", correct: true },
            { text: "M. Venkaiah Naidu", correct: false }
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
