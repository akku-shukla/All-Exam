const questions = [
    {
        question: "Who is considered the father of modern education in India?",
        answers: [
            { text: "Rabindranath Tagore", correct: false },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Raja Ram Mohan Roy", correct: false },
            { text: "Lord Macaulay", correct: true }
        ]
    },
    {
        question: "What is the full form of NCF in the context of education?",
        answers: [
            { text: "National Curriculum Framework", correct: true },
            { text: "National Child Framework", correct: false },
            { text: "New Class Formation", correct: false },
            { text: "National Culture Foundation", correct: false }
        ]
    },
    {
        question: "Who introduced the concept of 'Child-Centered Education'?",
        answers: [
            { text: "John Dewey", correct: false },
            { text: "Maria Montessori", correct: true },
            { text: "Mahatma Gandhi", correct: false },
            { text: "Plato", correct: false }
        ]
    },
    {
        question: "At what stage do children typically develop the ability for abstract thinking?",
        answers: [
            { text: "Early childhood", correct: false },
            { text: "Late childhood", correct: false },
            { text: "Adolescence", correct: true },
            { text: "Adulthood", correct: false }
        ]
    },
    {
        question: "The Right to Education (RTE) Act guarantees free and compulsory education for children aged:",
        answers: [
            { text: "6 to 14 years", correct: true },
            { text: "5 to 15 years", correct: false },
            { text: "4 to 12 years", correct: false },
            { text: "6 to 12 years", correct: false }
        ]
    },
    {
        question: "Which of the following is a student-centered teaching method?",
        answers: [
            { text: "Lecture method", correct: false },
            { text: "Direct instruction", correct: false },
            { text: "Problem-solving method", correct: true },
            { text: "Dictation", correct: false }
        ]
    },
    {
        question: "The capital of Rajasthan is:",
        answers: [
            { text: "Udaipur", correct: false },
            { text: "Jodhpur", correct: false },
            { text: "Jaipur", correct: true },
            { text: "Bikaner", correct: false }
        ]
    },
    {
        question: "The ‘Padharo Mhare Desh’ slogan is associated with which state?",
        answers: [
            { text: "Gujarat", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "Madhya Pradesh", correct: false },
            { text: "Haryana", correct: false }
        ]
    },
    {
        question: "In which year was the Rajasthan state formed?",
        answers: [
            { text: "1950", correct: false },
            { text: "1949", correct: true },
            { text: "1960", correct: false },
            { text: "1956", correct: false }
        ]
    },
    {
        question: "Which river is known as the 'lifeline of Rajasthan'?",
        answers: [
            { text: "Yamuna", correct: false },
            { text: "Ganga", correct: false },
            { text: "Luni", correct: false },
            { text: "Chambal", correct: true }
        ]
    },
    {
        question: "Which is the largest desert in India, located in Rajasthan?",
        answers: [
            { text: "Deccan", correct: false },
            { text: "Thar", correct: true },
            { text: "Ladakh", correct: false },
            { text: "Sundarbans", correct: false }
        ]
    },
    {
        question: "The ‘Kalbelia’ dance form is associated with which region of Rajasthan?",
        answers: [
            { text: "Udaipur", correct: false },
            { text: "Jaisalmer", correct: true },
            { text: "Jaipur", correct: false },
            { text: "Bikaner", correct: false }
        ]
    },
    {
        question: "Who was the first Chief Minister of Rajasthan?",
        answers: [
            { text: "Heera Lal Shastri", correct: true },
            { text: "Mohan Lal Sukhadia", correct: false },
            { text: "Barkatullah Khan", correct: false },
            { text: "Bhairon Singh Shekhawat", correct: false }
        ]
    },
    {
        question: "In which district of Rajasthan is the 'Ranthambore National Park' located?",
        answers: [
            { text: "Udaipur", correct: false },
            { text: "Sawai Madhopur", correct: true },
            { text: "Alwar", correct: false },
            { text: "Jaisalmer", correct: false }
        ]
    },
    {
        question: "The 'Bhil' tribe is primarily found in which region of Rajasthan?",
        answers: [
            { text: "Eastern Rajasthan", correct: false },
            { text: "Western Rajasthan", correct: false },
            { text: "Southern Rajasthan", correct: true },
            { text: "Northern Rajasthan", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of formative assessment in education?",
        answers: [
            { text: "Rank students", correct: false },
            { text: "Improve learning and teaching", correct: true },
            { text: "Assign grades", correct: false },
            { text: "Punish underperforming students", correct: false }
        ]
    },
    {
        question: "Which theory of learning emphasizes observation, imitation, and modeling?",
        answers: [
            { text: "Constructivist theory", correct: false },
            { text: "Cognitive theory", correct: false },
            { text: "Social learning theory", correct: true },
            { text: "Behaviorist theory", correct: false }
        ]
    },
    {
        question: "The term 'Inclusive Education' refers to:",
        answers: [
            { text: "Special education for talented students", correct: false },
            { text: "Education for students with disabilities only", correct: false },
            { text: "Education that includes all students, regardless of ability", correct: true },
            { text: "Homeschooling", correct: false }
        ]
    },
    {
        question: "Which organization is responsible for conducting REET exams?",
        answers: [
            { text: "CBSE", correct: false },
            { text: "NCERT", correct: false },
            { text: "BSER", correct: true },
            { text: "ICSE", correct: false }
        ]
    },
    {
        question: "Who is the founder of the Arya Samaj, which played a role in educational reforms in Rajasthan?",
        answers: [
            { text: "Dayanand Saraswati", correct: true },
            { text: "Swami Vivekananda", correct: false },
            { text: "Raja Ram Mohan Roy", correct: false },
            { text: "Rabindranath Tagore", correct: false }
        ]
    },
    {
        question: "In educational psychology, the concept of 'schema' is associated with which psychologist?",
        answers: [
            { text: "Lev Vygotsky", correct: false },
            { text: "Jean Piaget", correct: true },
            { text: "Sigmund Freud", correct: false },
            { text: "Erik Erikson", correct: false }
        ]
    },
    {
        question: "The Desert National Park is located in which district of Rajasthan?",
        answers: [
            { text: "Jodhpur", correct: false },
            { text: "Jaisalmer", correct: true },
            { text: "Barmer", correct: false },
            { text: "Bikaner", correct: false }
        ]
    },
    {
        question: "Which king built the famous Amber Fort near Jaipur?",
        answers: [
            { text: "Rana Sanga", correct: false },
            { text: "Maharaja Sawai Jai Singh II", correct: false },
            { text: "Raja Man Singh", correct: true },
            { text: "Maharana Pratap", correct: false }
        ]
    },
    {
        question: "In which year was the Right to Education (RTE) Act enacted in India?",
        answers: [
            { text: "2010", correct: false },
            { text: "2009", correct: true },
            { text: "2008", correct: false },
            { text: "2005", correct: false }
        ]
    },
    {
        question: "The famous folk dance 'Ghoomar' originated in which part of Rajasthan?",
        answers: [
            { text: "Udaipur", correct: false },
            { text: "Marwar", correct: false },
            { text: "Mewar", correct: true },
            { text: "Shekhawati", correct: false }
        ]
    },
    {
        question: "The 'Luni River' flows through which state?",
        answers: [
            { text: "Punjab", correct: false },
            { text: "Gujarat", correct: false },
            { text: "Rajasthan", correct: true },
            { text: "Madhya Pradesh", correct: false }
        ]
    },
    {
        question: "In which year was the Rajasthan Public Service Commission (RPSC) established?",
        answers: [
            { text: "1947", correct: false },
            { text: "1949", correct: true },
            { text: "1951", correct: false },
            { text: "1953", correct: false }
        ]
    },
    {
        question: "The teaching method that emphasizes learning by doing is called:",
        answers: [
            { text: "Lecture method", correct: false },
            { text: "Discovery method", correct: false },
            { text: "Problem-solving method", correct: false },
            { text: "Experiential learning", correct: true }
        ]
    },
    {
        question: "Which city in Rajasthan is known as the 'Blue City'?",
        answers: [
            { text: "Jaipur", correct: false },
            { text: "Jodhpur", correct: true },
            { text: "Udaipur", correct: false },
            { text: "Bikaner", correct: false }
        ]
    },
    {
        question: "What is the minimum qualification required to appear for the REET Level-1 exam?",
        answers: [
            { text: "Graduate degree", correct: false },
            { text: "Diploma in Elementary Education", correct: true },
            { text: "B.Ed. degree", correct: false },
            { text: "Post-graduate degree", correct: false }
        ]
    },
    {
        question: "Which of the following is a cognitive milestone in children aged 7 to 12?",
        answers: [
            { text: "Sensorimotor skills", correct: false },
            { text: "Concrete operational thinking", correct: true },
            { text: "Pre-operational thinking", correct: false },
            { text: "Formal operational thinking", correct: false }
        ]
    },
    {
        question: "The 'Battle of Haldighati' was fought between Maharana Pratap and which Mughal ruler?",
        answers: [
            { text: "Akbar", correct: true },
            { text: "Humayun", correct: false },
            { text: "Aurangzeb", correct: false },
            { text: "Shah Jahan", correct: false }
        ]
    },
    {
        question: "The desert city of Rajasthan, which is also known as the 'Golden City,' is:",
        answers: [
            { text: "Jaisalmer", correct: true },
            { text: "Bikaner", correct: false },
            { text: "Jaipur", correct: false },
            { text: "Udaipur", correct: false }
        ]
    },
    {
        question: "Which of the following is a key component of a good lesson plan?",
        answers: [
            { text: "Class seating arrangement", correct: false },
            { text: "Teacher's favorite topic", correct: false },
            { text: "Clear learning objectives", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "The famous 'Pushkar Fair' is celebrated in which district of Rajasthan?",
        answers: [
            { text: "Ajmer", correct: true },
            { text: "Alwar", correct: false },
            { text: "Jaipur", correct: false },
            { text: "Jodhpur", correct: false }
        ]
    },
    {
        question: "The 'Gurukul' system of education was primarily based on:",
        answers: [
            { text: "Teacher-centered education", correct: true },
            { text: "Student-centered education", correct: false },
            { text: "Learning in groups", correct: false },
            { text: "Learning from books", correct: false }
        ]
    },
    {
        question: "Who among the following was the first female ruler of Jaipur?",
        answers: [
            { text: "Rani Lakshmi Bai", correct: false },
            { text: "Rani Jindan Kaur", correct: false },
            { text: "Maharani Gayatri Devi", correct: true },
            { text: "Rani Padmini", correct: false }
        ]
    },
    {
        question: "In which year was the UNESCO World Heritage status given to Jaipur City?",
        answers: [
            { text: "2017", correct: false },
            { text: "2018", correct: false },
            { text: "2019", correct: true },
            { text: "2020", correct: false }
        ]
    },
    {
        question: "According to Jean Piaget, children in the preoperational stage struggle with:",
        answers: [
            { text: "Object permanence", correct: false },
            { text: "Egocentrism", correct: true },
            { text: "Abstract thinking", correct: false },
            { text: "Fine motor skills", correct: false }
        ]
    },
    {
        question: "Who is the current Chief Minister of Rajasthan as of 2024?",
        answers: [
            { text: "Ashok Gehlot", correct: true },
            { text: "Vasundhara Raje", correct: false },
            { text: "Sachin Pilot", correct: false },
            { text: "Gajendra Singh Shekhawat", correct: false }
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
