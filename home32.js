const questions = [
    {
        question: "Which of the following is NOT a part of the UPSC CMS syllabus?",
        answers: [
            { text: "General Medicine", correct: false },
            { text: "Paediatrics", correct: false },
            { text: "Obstetrics and Gynaecology", correct: false },
            { text: "Nuclear Physics", correct: true }
        ]
    },
    {
        question: "What is the maximum age limit to appear for UPSC CMS for general category candidates?",
        answers: [
            { text: "30 years", correct: false },
            { text: "32 years", correct: false },
            { text: "35 years", correct: false },
            { text: "35 years, but relaxable for reserved categories", correct: true }
        ]
    },
    {
        question: "How many papers are there in the UPSC CMS written exam?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "What is the duration of each paper in the UPSC CMS written examination?",
        answers: [
            { text: "1 hour", correct: false },
            { text: "2 hours", correct: true },
            { text: "2 hours each", correct: true },
            { text: "3 hours", correct: false }
        ]
    },
    {
        question: "What is the total number of questions in each paper of UPSC CMS?",
        answers: [
            { text: "80", correct: false },
            { text: "100", correct: false },
            { text: "120", correct: false },
            { text: "250", correct: true }
        ]
    },
    {
        question: "Which of the following is NOT a method of treatment for hypertensive emergency?",
        answers: [
            { text: "Oral antihypertensive medications", correct: true },
            { text: "Intravenous nitroprusside", correct: false },
            { text: "Labetalol IV", correct: false },
            { text: "Nicardipine IV", correct: false }
        ]
    },
    {
        question: "Which of the following is a common complication of diabetes?",
        answers: [
            { text: "Hypothyroidism", correct: false },
            { text: "Diabetic nephropathy", correct: true },
            { text: "Osteoporosis", correct: false },
            { text: "Hypocalcemia", correct: false }
        ]
    },
    {
        question: "In a child with severe dehydration, what is the best initial treatment?",
        answers: [
            { text: "Oral rehydration solution", correct: false },
            { text: "Intramuscular fluids", correct: false },
            { text: "Intravenous fluids", correct: true },
            { text: "Glucose water", correct: false }
        ]
    },
    {
        question: "Which of the following vaccines is contraindicated in pregnancy?",
        answers: [
            { text: "Tetanus toxoid", correct: false },
            { text: "MMR (Measles, Mumps, Rubella)", correct: true },
            { text: "Hepatitis B", correct: false },
            { text: "Diphtheria", correct: false }
        ]
    },
    {
        question: "A 70-year-old patient presents with acute chest pain and ECG shows ST-segment elevation. What is the most appropriate treatment?",
        answers: [
            { text: "Nitroglycerin", correct: false },
            { text: "Thrombolysis", correct: true },
            { text: "ACE inhibitors", correct: false },
            { text: "Beta blockers", correct: false }
        ]
    },
    {
        question: "Which drug is most commonly associated with Stevens-Johnson syndrome?",
        answers: [
            { text: "Carbamazepine", correct: true },
            { text: "Metformin", correct: false },
            { text: "Simvastatin", correct: false },
            { text: "Ibuprofen", correct: false }
        ]
    },
    {
        question: "What is the antidote for paracetamol poisoning?",
        answers: [
            { text: "Atropine", correct: false },
            { text: "Naloxone", correct: false },
            { text: "N-acetylcysteine", correct: true },
            { text: "Activated charcoal", correct: false }
        ]
    },
    {
        question: "Which of the following is a common cause of megaloblastic anemia?",
        answers: [
            { text: "Iron deficiency", correct: false },
            { text: "Vitamin B12 deficiency", correct: true },
            { text: "Chronic blood loss", correct: false },
            { text: "Bone marrow suppression", correct: false }
        ]
    },
    {
        question: "What is the most common cause of pneumonia in children under five years?",
        answers: [
            { text: "Streptococcus pyogenes", correct: false },
            { text: "Streptococcus pneumoniae", correct: true },
            { text: "Mycoplasma pneumoniae", correct: false },
            { text: "Haemophilus influenzae", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a criterion for diagnosing metabolic syndrome?",
        answers: [
            { text: "Central obesity", correct: false },
            { text: "Hypertriglyceridemia", correct: false },
            { text: "Hypoglycemia", correct: true },
            { text: "Hypertension", correct: false }
        ]
    },
    {
        question: "Which hormone is primarily responsible for ovulation in the menstrual cycle?",
        answers: [
            { text: "Estrogen", correct: false },
            { text: "Luteinizing hormone (LH)", correct: true },
            { text: "Follicle-stimulating hormone (FSH)", correct: false },
            { text: "Progesterone", correct: false }
        ]
    },
    {
        question: "What is the drug of choice for the treatment of eclampsia?",
        answers: [
            { text: "Labetalol", correct: false },
            { text: "Nifedipine", correct: false },
            { text: "Magnesium sulfate", correct: true },
            { text: "Methyldopa", correct: false }
        ]
    },
    {
        question: "Which of the following is the most common complication of a thyroidectomy?",
        answers: [
            { text: "Hypocalcemia", correct: true },
            { text: "Infection", correct: false },
            { text: "Laryngeal nerve injury", correct: false },
            { text: "Hemorrhage", correct: false }
        ]
    },
    {
        question: "Which of the following is the first-line therapy for acute gout?",
        answers: [
            { text: "Colchicine", correct: false },
            { text: "NSAIDs", correct: true },
            { text: "Corticosteroids", correct: false },
            { text: "Allopurinol", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct sequence of events in normal labor?",
        answers: [
            { text: "Engagement → Delivery of baby → Delivery of placenta", correct: false },
            { text: "Engagement → Descent → Delivery of baby → Delivery of placenta", correct: true },
            { text: "Descent → Engagement → Delivery of placenta → Delivery of baby", correct: false },
            { text: "Descent → Engagement → Delivery of baby → Episiotomy", correct: false }
        ]
    },
    {
        question: "In a patient with peptic ulcer disease, Helicobacter pylori infection is commonly treated with which combination?",
        answers: [
            { text: "Proton pump inhibitor + Clarithromycin + Amoxicillin", correct: true },
            { text: "Antacids + Omeprazole", correct: false },
            { text: "Ranitidine + Antacids", correct: false },
            { text: "Sucralfate + Omeprazole", correct: false }
        ]
    },
    {
        question: "What is the recommended first-line treatment for severe asthma exacerbations?",
        answers: [
            { text: "Montelukast", correct: false },
            { text: "Inhaled short-acting beta agonists (SABA)", correct: true },
            { text: "Theophylline", correct: false },
            { text: "Antihistamines", correct: false }
        ]
    },
    {
        question: "Atrial fibrillation increases the risk of which complication?",
        answers: [
            { text: "Stroke", correct: true },
            { text: "Myocardial infarction", correct: false },
            { text: "Arrhythmia", correct: false },
            { text: "Peripheral neuropathy", correct: false }
        ]
    },
    {
        question: "Which of the following is the most common cause of postmenopausal bleeding?",
        answers: [
            { text: "Cervical cancer", correct: false },
            { text: "Endometrial cancer", correct: true },
            { text: "Vaginal atrophy", correct: false },
            { text: "Ovarian cyst", correct: false }
        ]
    },
    {
        question: "What is the recommended prophylaxis for individuals exposed to tuberculosis (TB)?",
        answers: [
            { text: "Ciprofloxacin", correct: false },
            { text: "Isoniazid", correct: true },
            { text: "Rifampicin", correct: false },
            { text: "Doxycycline", correct: false }
        ]
    },
    {
        question: "Which of the following is the recommended antibiotic for uncomplicated urinary tract infections in non-pregnant women?",
        answers: [
            { text: "Amoxicillin", correct: false },
            { text: "Nitrofurantoin", correct: true },
            { text: "Ceftriaxone", correct: false },
            { text: "Levofloxacin", correct: false }
        ]
    },
    {
        question: "Which drug is used in the treatment of Alzheimer's disease?",
        answers: [
            { text: "Levodopa", correct: false },
            { text: "Donepezil", correct: true },
            { text: "Rivastigmine", correct: true },
            { text: "Atropine", correct: false }
        ]
    },
    {
        question: "Which of the following is a feature of Kawasaki disease?",
        answers: [
            { text: "Oliguria", correct: false },
            { text: "Strawberry tongue", correct: true },
            { text: "Night sweats", correct: false },
            { text: "Weight gain", correct: false }
        ]
    },
    {
        question: "Which electrolyte imbalance is most commonly associated with primary hyperaldosteronism?",
        answers: [
            { text: "Hyperkalemia", correct: false },
            { text: "Hypokalemia", correct: true },
            { text: "Hypernatremia", correct: false },
            { text: "Hypocalcemia", correct: false }
        ]
    },
    {
        question: "What is the gold standard investigation for diagnosing pulmonary embolism?",
        answers: [
            { text: "D-dimer test", correct: false },
            { text: "V/Q scan", correct: false },
            { text: "Chest X-ray", correct: false },
            { text: "CT pulmonary angiography", correct: true }
        ]
    },
    {
        question: "Which of the following is a characteristic of iron deficiency anemia?",
        answers: [
            { text: "Increased MCV", correct: false },
            { text: "Decreased serum ferritin", correct: true },
            { text: "Increased serum iron", correct: false },
            { text: "Decreased TIBC", correct: false }
        ]
    },
    {
        question: "Which of the following is the treatment of choice for organophosphate poisoning?",
        answers: [
            { text: "Naloxone", correct: false },
            { text: "Atropine", correct: true },
            { text: "Flumazenil", correct: false },
            { text: "N-acetylcysteine", correct: false }
        ]
    },
    {
        question: "What is the most common cause of acute appendicitis?",
        answers: [
            { text: "Trauma", correct: false },
            { text: "Fecalith", correct: true },
            { text: "Viral infection", correct: false },
            { text: "Diverticulitis", correct: false }
        ]
    },
    {
        question: "Which of the following vaccines is recommended for all pregnant women?",
        answers: [
            { text: "Influenza vaccine", correct: true },
            { text: "MMR vaccine", correct: false },
            { text: "Yellow fever vaccine", correct: false },
            { text: "Varicella vaccine", correct: false }
        ]
    },
    {
        question: "Which is the most common cause of chronic liver disease?",
        answers: [
            { text: "Alcohol", correct: true },
            { text: "Hepatitis A", correct: false },
            { text: "Hepatitis C", correct: false },
            { text: "Hemochromatosis", correct: false }
        ]
    },
    {
        question: "What is the recommended duration of antibiotic treatment for community-acquired pneumonia?",
        answers: [
            { text: "3-5 days", correct: false },
            { text: "7-10 days", correct: true },
            { text: "14-21 days", correct: false },
            { text: "28 days", correct: false }
        ]
    },
    {
        question: "Which of the following subjects is NOT part of the UPSC CMS written examination?",
        answers: [
            { text: "General Medicine", correct: false },
            { text: "Pediatrics", correct: false },
            { text: "Surgery", correct: true },
            { text: "Preventive and Social Medicine", correct: false }
        ]
    },
    
    {
        question: "Which of the following is the most common cause of upper gastrointestinal bleeding?",
        answers: [
            { text: "Gastric carcinoma", correct: false },
            { text: "Peptic ulcer disease", correct: true },
            { text: "Esophageal varices", correct: false },
            { text: "Mallory-Weiss tear", correct: false }
        ]
    },
    {
        question: "Which of the following conditions is associated with polyhydramnios?",
        answers: [
            { text: "Fetal growth restriction", correct: false },
            { text: "Esophageal atresia", correct: true },
            { text: "Premature rupture of membranes", correct: false },
            { text: "Oligohydramnios", correct: false }
        ]
    },
    {
        question: "Which of the following is the first-line treatment for hyperkalemia with ECG changes?",
        answers: [
            { text: "Calcium gluconate", correct: true },
            { text: "Insulin and glucose", correct: false },
            { text: "Sodium bicarbonate", correct: false },
            { text: "Loop diuretics", correct: false }
        ]
    },
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
