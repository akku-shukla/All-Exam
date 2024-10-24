const questions = [
    {
        question: "Who was the first Emperor of the Maurya Dynasty?",
        answers: [
            { text: "Chandragupta Maurya", correct: true },
            { text: "Ashoka", correct: false },
            { text: "Bindusara", correct: false },
            { text: "Bimbisara", correct: false }
        ]
    },
    {
        question: "The Indus Valley Civilization flourished around which river?",
        answers: [
            { text: "Ganges", correct: false },
            { text: "Yamuna", correct: false },
            { text: "Indus", correct: true },
            { text: "Brahmaputra", correct: false }
        ]
    },
    {
        question: "Which battle marked the beginning of British control in India?",
        answers: [
            { text: "Battle of Plassey", correct: true },
            { text: "Battle of Buxar", correct: false },
            { text: "Battle of Panipat", correct: false },
            { text: "Battle of Haldighati", correct: false }
        ]
    },
    {
        question: "Who was the founder of the Mughal Empire in India?",
        answers: [
            { text: "Akbar", correct: false },
            { text: "Babur", correct: true },
            { text: "Aurangzeb", correct: false },
            { text: "Shah Jahan", correct: false }
        ]
    },
    {
        question: "The 'Dandi March' was led by which Indian leader?",
        answers: [
            { text: "Bal Gangadhar Tilak", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "Which Indian leader is known as the 'Nightingale of India'?",
        answers: [
            { text: "Sarojini Naidu", correct: true },
            { text: "Indira Gandhi", correct: false },
            { text: "Annie Besant", correct: false },
            { text: "Rani Lakshmibai", correct: false }
        ]
    },
    {
        question: "The partition of Bengal took place in which year?",
        answers: [
            { text: "1905", correct: true },
            { text: "1911", correct: false },
            { text: "1947", correct: false },
            { text: "1935", correct: false }
        ]
    },
    {
        question: "Who was the last Governor-General of India?",
        answers: [
            { text: "Lord Mountbatten", correct: true },
            { text: "Lord Wavell", correct: false },
            { text: "Lord Curzon", correct: false },
            { text: "Lord Hastings", correct: false }
        ]
    },
    {
        question: "Which movement was launched by Mahatma Gandhi in 1920?",
        answers: [
            { text: "Quit India Movement", correct: false },
            { text: "Non-Cooperation Movement", correct: true },
            { text: "Civil Disobedience Movement", correct: false },
            { text: "Swadeshi Movement", correct: false }
        ]
    },
    {
        question: "What was the main objective of the Cripps Mission (1942)?",
        answers: [
            { text: "To grant full independence to India", correct: false },
            { text: "To negotiate with Indian leaders for support in WWII", correct: true },
            { text: "To partition India", correct: false },
            { text: "To establish a separate Muslim state", correct: false }
        ]
    },
    {
        question: "The famous 'Jallianwala Bagh Massacre' occurred in which year?",
        answers: [
            { text: "1919", correct: true },
            { text: "1920", correct: false },
            { text: "1942", correct: false },
            { text: "1935", correct: false }
        ]
    },
    {
        question: "Who was known as the 'Iron Man of India'?",
        answers: [
            { text: "Bhagat Singh", correct: false },
            { text: "Sardar Vallabhbhai Patel", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "Which empire is known for its unique architectural style, including the Taj Mahal?",
        answers: [
            { text: "Gupta Empire", correct: false },
            { text: "Maurya Empire", correct: false },
            { text: "Mughal Empire", correct: true },
            { text: "Chola Empire", correct: false }
        ]
    },
    {
        question: "The Vedic period is characterized by which of the following?",
        answers: [
            { text: "Urbanization", correct: false },
            { text: "Development of philosophy and religion", correct: true },
            { text: "Imperial conquests", correct: false },
            { text: "Industrialization", correct: false }
        ]
    },
    {
        question: "Who wrote the famous book 'Anand Math'?",
        answers: [
            { text: "Bankim Chandra Chatterjee", correct: true },
            { text: "Rabindranath Tagore", correct: false },
            { text: "Ramesh Chandra Dutta", correct: false },
            { text: "Mahatma Gandhi", correct: false }
        ]
    },
    {
        question: "Which Indian king was known for his policy of Dhamma?",
        answers: [
            { text: "Chandragupta Maurya", correct: false },
            { text: "Ashoka", correct: true },
            { text: "Harshavardhana", correct: false },
            { text: "Vikramaditya", correct: false }
        ]
    },
    {
        question: "The Rowlatt Act was enacted in which year?",
        answers: [
            { text: "1919", correct: true },
            { text: "1920", correct: false },
            { text: "1942", correct: false },
            { text: "1935", correct: false }
        ]
    },
    {
        question: "Which of the following was NOT a part of the Indian National Congress?",
        answers: [
            { text: "Lok Sabha", correct: true },
            { text: "All India Muslim League", correct: false },
            { text: "Home Rule League", correct: false },
            { text: "Forward Bloc", correct: false }
        ]
    },
    {
        question: "Who was the first President of India?",
        answers: [
            { text: "S. Radhakrishnan", correct: false },
            { text: "Rajendra Prasad", correct: true },
            { text: "Zakir Husain", correct: false },
            { text: "V. V. Giri", correct: false }
        ]
    },
    {
        question: "What was the main reason for the revolt of 1857?",
        answers: [
            { text: "Economic exploitation", correct: false },
            { text: "Political discontent", correct: false },
            { text: "Cultural and religious imposition", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which Indian freedom fighter is known for his famous quote, 'Give me blood, and I shall give you freedom!'?",
        answers: [
            { text: "Bhagat Singh", correct: false },
            { text: "Subhas Chandra Bose", correct: true },
            { text: "Bal Gangadhar Tilak", correct: false },
            { text: "Lala Lajpat Rai", correct: false }
        ]
    },
    {
        question: "The concept of 'Swaraj' was popularized by which leader?",
        answers: [
            { text: "Mahatma Gandhi", correct: true },
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Bipin Chandra Pal", correct: false },
            { text: "Gopal Krishna Gokhale", correct: false }
        ]
    },
    {
        question: "Which ancient Indian text is known as the oldest scripture of Hinduism?",
        answers: [
            { text: "Bhagavad Gita", correct: false },
            { text: "Vedas", correct: true },
            { text: "Upanishads", correct: false },
            { text: "Ramayana", correct: false }
        ]
    },
    {
        question: "Who led the Salt March to protest against British salt laws in 1930?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "B. R. Ambedkar", correct: false },
            { text: "Sarojini Naidu", correct: false }
        ]
    },
    {
        question: "Which movement was launched by the Indian National Congress in 1942 demanding an end to British rule?",
        answers: [
            { text: "Civil Disobedience Movement", correct: false },
            { text: "Quit India Movement", correct: true },
            { text: "Non-Cooperation Movement", correct: false },
            { text: "Home Rule Movement", correct: false }
        ]
    },
    {
        question: "The Gupta Empire is often referred to as the Golden Age of India because of advancements in:",
        answers: [
            { text: "Science and technology", correct: false },
            { text: "Art and literature", correct: false },
            { text: "Mathematics", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Who was the first Indian woman to become the President of the Indian National Congress?",
        answers: [
            { text: "Sarojini Naidu", correct: false },
            { text: "Annie Besant", correct: true },
            { text: "Indira Gandhi", correct: false },
            { text: "Kamala Nehru", correct: false }
        ]
    },
    {
        question: "The 'Simla Agreement' was signed between India and which country?",
        answers: [
            { text: "Pakistan", correct: true },
            { text: "Bangladesh", correct: false },
            { text: "China", correct: false },
            { text: "Sri Lanka", correct: false }
        ]
    },
    {
        question: "Which was the first university established in India?",
        answers: [
            { text: "Aligarh Muslim University", correct: false },
            { text: "University of Calcutta", correct: false },
            { text: "University of Madras", correct: false },
            { text: "Nalanda University", correct: true }
        ]
    },
    {
        question: "The term 'Renaissance' in India is associated with which period?",
        answers: [
            { text: "Gupta Period", correct: false },
            { text: "Mauryan Period", correct: false },
            { text: "Medieval Period", correct: false },
            { text: "Modern Period", correct: true }
        ]
    },
    {
        question: "Which of the following leaders was a prominent figure in the Khilafat Movement?",
        answers: [
            { text: "Mahatma Gandhi", correct: false },
            { text: "Mohammad Ali Jinnah", correct: false },
            { text: "Ali Brothers (Shaukat Ali and Mohammad Ali)", correct: true },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "The first Indian to receive the Nobel Prize in Literature was:",
        answers: [
            { text: "Rabindranath Tagore", correct: true },
            { text: "R. K. Narayan", correct: false },
            { text: "Sarojini Naidu", correct: false },
            { text: "Vikram Sarabhai", correct: false }
        ]
    },
    {
        question: "Which city is known as the 'City of Joy' in India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: true },
            { text: "Chennai", correct: false },
            { text: "Delhi", correct: false }
        ]
    },
    {
        question: "Who was the founder of the Arya Samaj?",
        answers: [
            { text: "Swami Vivekananda", correct: false },
            { text: "Dayananda Saraswati", correct: true },
            { text: "Raja Ram Mohan Roy", correct: false },
            { text: "Ramakrishna Paramahamsa", correct: false }
        ]
    },
    {
        question: "Which Indian leader was awarded the title 'Mahatma' by Rabindranath Tagore?",
        answers: [
            { text: "Jawaharlal Nehru", correct: false },
            { text: "Bal Gangadhar Tilak", correct: false },
            { text: "Mahatma Gandhi", correct: true },
            { text: "Subhas Chandra Bose", correct: false }
        ]
    },
    {
        question: "The Treaty of Lahore was signed between the British and which ruler?",
        answers: [
            { text: "Ranjit Singh", correct: true },
            { text: "Akbar II", correct: false },
            { text: "Bahadur Shah II", correct: false },
            { text: "Tippu Sultan", correct: false }
        ]
    },
    {
        question: "The famous 'Buddhist Stupa' at Sanchi was built during the reign of which emperor?",
        answers: [
            { text: "Ashoka", correct: true },
            { text: "Harsha", correct: false },
            { text: "Kanishka", correct: false },
            { text: "Chandragupta", correct: false }
        ]
    },
    {
        question: "Which ruler is associated with the construction of the 'Grand Trunk Road'?",
        answers: [
            { text: "Sher Shah Suri", correct: true },
            { text: "Akbar", correct: false },
            { text: "Aurangzeb", correct: false },
            { text: "Babar", correct: false }
        ]
    },
    {
        question: "The Maratha Empire was founded by which leader?",
        answers: [
            { text: "Shivaji Maharaj", correct: true },
            { text: "Bajirao I", correct: false },
            { text: "Tanaji Malusare", correct: false },
            { text: "Chatrapati Shahu", correct: false }
        ]
    },
    {
        question: "Who was the first Governor-General of independent India?",
        answers: [
            { text: "Lord Mountbatten", correct: false },
            { text: "C. Rajagopalachari", correct: true },
            { text: "Rajendra Prasad", correct: false },
            { text: "Jawaharlal Nehru", correct: false }
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
