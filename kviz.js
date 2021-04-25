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

const questionsNumber = questions.length;

let quizHeaderBody, quizHeader, quizBody;
let fotoElement, obrazekImg;
let moznostiDiv, odpovediUl, answerLi;
let quiz;

let i = 0;
setQuizPage();

function setQuizPage() {
    setQuizHeaderBody();
    setImage();
    setAnswers();
    appendAllToQuiz();
};

function setQuizHeaderBody() {
    let questionText = questions[i].question;
    quizHeaderBody = document.createElement("h2");
    quizHeader = document.createElement("div");
    quizBody = document.createElement("div");
    quizHeader.setAttribute("id", "poradi");
    quizBody.setAttribute("id", "otazka");
    quizHeader.innerHTML = `Otázka ${i + 1}/${questionsNumber}`;
    quizBody.innerHTML = questionText;    
    quizHeaderBody.appendChild(quizHeader);
    quizHeaderBody.appendChild(quizBody);
};

function setImage() {    
    fotoElement = document.createElement("foto");
    obrazekImg = document.createElement("img");    
    obrazekImg.setAttribute("id", "obrazek");
    obrazekImg.src = questions[i].photo;
    fotoElement.appendChild(obrazekImg);
};

function setAnswers() {    
    moznostiDiv = document.createElement("div");
    moznostiDiv.setAttribute("id", "moznosti");
    odpovediUl = document.createElement("ul");
    odpovediUl.setAttribute("id", "odpovedi");
    moznostiDiv.appendChild(odpovediUl)
    setAnswer(i, odpovediUl)
};

function appendAllToQuiz() {
    quiz = document.querySelector(".kviz");
    quiz.appendChild(quizHeaderBody);
    quiz.appendChild(fotoElement);
    quiz.appendChild(moznostiDiv);
};

function setAnswer(i, odpovediUl) {
    let answerText;
    for (let j = 0; j < questions[i].answers.length; j++) {
        answerText = questions[i].answers[j];
        answerLi = document.createElement("li");
        answerLi.setAttribute("data-odpoved", j.toString());
        answerLi.innerHTML = answerText;
        odpovediUl.appendChild(answerLi);
        answerLi.addEventListener("click", goToOtherPage);
    };
};

function goToOtherPage() {
    i++;
    clearPage();
    if (i < questionsNumber) {
        setQuizPage(i);
    } else {
        console.log("hey");
    }
};

function clearPage() {    
    quiz = document.querySelector(".kviz");
    while (quiz.firstChild) {
        quiz.removeChild(quiz.firstChild);
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
