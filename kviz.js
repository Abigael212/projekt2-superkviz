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

let i = 0;
const questionsNumber = questions.length;
setQuizPage(i);

function setQuizPage(i) {

    let questionPartH2 = document.createElement("h2");
    let headerPoradi = document.createElement("div");
    headerPoradi.setAttribute("id", "poradi");
    headerPoradi.innerHTML = `Otázka ${i + 1}/${questionsNumber}`;
    let questionOtazka = document.createElement("div");
    let questionText = questions[i].question;
    questionOtazka.setAttribute("id", "otazka");
    questionOtazka.innerHTML = questionText;
    questionPartH2.appendChild(headerPoradi);
    questionPartH2.appendChild(questionOtazka);

    let photoPartFoto = document.createElement("foto");
    let obrazekImg = document.createElement("img");
    obrazekImg.setAttribute("id", "obrazek");
    obrazekImg.src = questions[i].photo;
    photoPartFoto.appendChild(obrazekImg);

    let moznostiDiv = document.createElement("div");
    moznostiDiv.setAttribute("id", "moznosti");
    let odpovediUl = document.createElement("ul");
    odpovediUl.setAttribute("id", "odpovedi");
    moznostiDiv.appendChild(odpovediUl)
    setAnswer(i, odpovediUl)

    let quiz = document.querySelector(".kviz");
    quiz.appendChild(questionPartH2);
    quiz.appendChild(photoPartFoto);
    quiz.appendChild(moznostiDiv);
};

function setAnswer(i, odpovediUl) {
    let answerText;
    for (let j = 0; j < questions[i].answers.length; j++) {
        answerText = questions[i].answers[j];
        let answerLi = document.createElement("li");
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
        // reapply all
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
Při vytváření HTML pro odpovědi dodrž následující strukturu:

<ul id="odpovedi">
    <li data-odpoved="0">Ledová královna</li>
    <li data-odpoved="1">Sněhurka</li>
    <li data-odpoved="2">Já, já jsem nejkrásnější!</li>
</ul>

Takto připravené HTML pak pokaždé vlož na stránce do <div id="moznosti">
Musíš nejprve smazat ten starý seznam, který už tam je.
*/

/*
SUPERKVÍZ - cílem je naprogramovat klasický kvíz.
Tj. uživatelce se postupně ukazují otázky a u každé má na výběr z několika možných odpovědí.
Když na jednu odpověď klikne,  posune se na další otázku.
Když odpoví na všechny otázky, ukáže se jí hodnocení úspěšnosti v procentech
a pod tím seznam s výsledkem.
V seznamu bude vždy otázka, její odpověď a správná odpověď.
*/

/*
TODO
- možnosti - aby zaplnili šírku tým šedivým. Flex? nefunguje...
*/

