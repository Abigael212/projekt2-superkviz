// Data pro kvíz jsou uložena v poli otazky. Každa otázka je objekt, který obsahuje 
// otázku,  obrázek k otázce, pole možných odpovědí a index správné odpovědi.
let questions = [
    {
        question: "hejheHHH1?",
        photo: 'obrazky/moncicak.jpg',
        answers: ["assssssssssssssssssss", "b", "c", "g"],
        correctAnswerIndex: 0
    },
    {
        question: "sdhsghgsafa2?",
        photo: 'obrazky/ovoce.jpg',
        answers: ["d", "e", "f"],
        correctAnswerIndex: 1
    }
];

let yourAnswers = [];

const questionsNumber = questions.length;

let quizHeader, quizOrder, quizQuestion;
let quizFotoElement, quizImage;
let quizOptions, quizAnswersSet, quizAnswer;
let quiz;
let evaluation, evaluationHeader, evaluationBody, evaluationQuestion, evaluationAnswer, evaluationResult;

let i = 0;
setQuizPage(i);



function setQuizPage(i) {
    setQuizHeader(i);
    setQuizImage(i);
    setQuizAnswers(i);
    appendAllToQuiz(i);
};

function setQuizHeader(i) {
    let questionText = questions[i].question;
    quizHeader = document.createElement("h2");
    quizOrder = document.createElement("div");
    quizQuestion = document.createElement("div");
    quizOrder.setAttribute("id", "poradi");
    quizQuestion.setAttribute("id", "otazka");
    quizOrder.innerHTML = `Otázka ${i + 1}/${questionsNumber}`;
    quizQuestion.innerHTML = questionText;
    quizHeader.appendChild(quizOrder);
    quizHeader.appendChild(quizQuestion);
};

function setQuizImage(i) {
    quizFotoElement = document.createElement("foto");
    quizImage = document.createElement("img");
    quizImage.setAttribute("id", "obrazek");
    quizImage.src = questions[i].photo;
    quizFotoElement.appendChild(quizImage);
};

function setQuizAnswers(i) {
    quizOptions = document.createElement("div");
    quizOptions.setAttribute("id", "moznosti");
    quizAnswersSet = document.createElement("ul");
    quizAnswersSet.setAttribute("id", "odpovedi");
    quizOptions.appendChild(quizAnswersSet);
    setAnswer(i, quizAnswersSet);
};

function appendAllToQuiz() {
    quiz = document.querySelector(".kviz");
    quiz.appendChild(quizHeader);
    quiz.appendChild(quizFotoElement);
    quiz.appendChild(quizOptions);
};

function setAnswer(i, quizAnswersSet) {
    let answerText;
    for (let j = 0; j < questions[i].answers.length; j++) {
        answerText = questions[i].answers[j];
        quizAnswer = document.createElement("li");
        quizAnswer.setAttribute("data-odpoved", j.toString());
        quizAnswer.innerHTML = answerText;
        quizAnswersSet.appendChild(quizAnswer);
        quizAnswer.addEventListener("click", goToOtherPage);
    };
};

function clearPage() {
    quiz = document.querySelector(".kviz");
    while (quiz.firstChild) {
        quiz.removeChild(quiz.firstChild);
    };

};

function setEvaluationHeader() {
    evaluation = document.createElement("div");
    evaluation.setAttribute("class", "vysledek");
    evaluationHeader = document.createElement("h2");
    evaluationHeader.innerHTML = "Tvoje hodnocení";
    evaluation.appendChild(evaluationHeader);
    quiz.appendChild(evaluation);
};

function goToOtherPage(event) {
    let target = event.target;
    let parent = target.parentNode;
    let index = [].indexOf.call(parent.children, target);
    yourAnswers.push(index);

    i++;
    clearPage();

    if (i < questionsNumber) {
        setQuizPage(i);
    } else {
        setEvaluationHeader()

    };
};




/*
SUPERKVÍZ - cílem je naprogramovat klasický kvíz.
Tj. uživatelce se postupně ukazují otázky a u každé má na výběr z několika možných odpovědí.
Když na jednu odpověď klikne,  posune se na další otázku.
Když odpoví na všechny otázky, ukáže se jí hodnocení úspěšnosti v procentech
a pod tím seznam s výsledkem.
V seznamu bude vždy otázka, její odpověď a správná odpověď.
*/
