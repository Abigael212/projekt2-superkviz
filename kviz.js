let questions = [
    {
        question: "hejheHHH1?",
        photo: 'obrazky/moncicak.jpg',
        answers: ["correct1", "b", "c", "g"],
        correctAnswerIndex: 0
    },
    {
        question: "aaaa?",
        photo: 'obrazky/ovoce.jpg',
        answers: ["d", "correct2", "f"],
        correctAnswerIndex: 1
    }
];

let yourAnswers = [];
let correctAnswersNumber = 0;

const questionsNumber = questions.length;

let quizHeader, quizOrder, quizQuestion;
let quizFotoElement, quizImage;
let quizOptions, quizAnswersSet, quizAnswer;
let quiz;
let evaluation, evalHeader, evalBody, evalQuestion, yourAnswer, correctAnswer, totalResult;

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
        setEvaluationHeader();
        setEvaluationBody();
        setEvaluationFooter();
    };
};

function setEvaluationHeader() {
    evaluation = document.createElement("div");
    evalHeader = document.createElement("h2");
    evaluation.setAttribute("class", "vysledek");
    evalHeader.innerHTML = "Tvoje hodnocení";
    evaluation.appendChild(evalHeader);
    quiz.appendChild(evaluation);
};

function setEvaluationBody() {
    for (let i = 0; i < questionsNumber; i++) {
        let yourAnswerIndex = yourAnswers[i];
        let correctAnswerIndex = questions[i].correctAnswerIndex;
        let otazka = questions[i].question;
        let tvojeOdpoved = questions[i].answers[yourAnswerIndex];
        let spravnaOdpoved = questions[i].answers[correctAnswerIndex];

        evalBody = document.createElement("div");
        evalQuestion = document.createElement("div");
        yourAnswer = document.createElement("div");
        correctAnswer = document.createElement("div");

        evalQuestion.setAttribute("class", "vysledekOtazky");
        yourAnswer.setAttribute("class", "vysledekOdpoved");
        correctAnswer.setAttribute("class", "vysledekOdpoved");

        evalQuestion.innerHTML = `${i + 1}. ${otazka}`;
        yourAnswer.innerHTML = `Tvoje odpověď: ${tvojeOdpoved}`;

        if (tvojeOdpoved === spravnaOdpoved) {
            correctAnswer.innerHTML = "To je SPRÁVNĚ.";
            correctAnswersNumber++;
        } else {
            correctAnswer.innerHTML = `Správná odpověď: ${spravnaOdpoved}`;
        };

        evalBody.appendChild(evalQuestion);
        evalBody.appendChild(yourAnswer);
        evalBody.appendChild(correctAnswer);
        evaluation.appendChild(evalBody);
    };
};

function setEvaluationFooter() {
    let resultPercent = (correctAnswersNumber / questionsNumber) * 100;
    totalResult = document.createElement("h2");
    totalResult.innerHTML = `Správně ${correctAnswersNumber} ze ${questionsNumber} otázek, úspěšnost ${resultPercent} %.`;
    evaluation.appendChild(totalResult);
}
