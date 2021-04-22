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

let questionsNumber = questions.length;
let i = 0;

let questionPart = document.createElement("h2");
let header = document.createElement("div");
header.setAttribute("id", "poradi");
header.innerHTML = `Otázka ${i + 1}/${questionsNumber}`;
let question = document.createElement("div");
question.setAttribute("id", "otazka");
question.innerHTML = questions[i].question;
questionPart.appendChild(header);
questionPart.appendChild(question);

let photoPart = document.createElement("foto");
let questionPhoto = document.createElement("img");
questionPhoto.setAttribute("id", "obrazek");
questionPhoto.src = questions[i].photo;
photoPart.appendChild(questionPhoto);

let answersPart = document.createElement("div");
answersPart.setAttribute("id", "moznosti");
let answers = document.createElement("ul");
answers.setAttribute("id", "odpovedi");
answersPart.appendChild(answers)
setAnswer()

let quiz = document.querySelector(".kviz");
quiz.appendChild(questionPart);
quiz.appendChild(photoPart);
quiz.appendChild(answersPart);

function setAnswer() {
    let answer;
    for (let j = 0; j < questions[i].answers.length; j++) {
        answer = questions[i].answers[j];
        let answerPart = document.createElement("li");
        answerPart.setAttribute("data-odpoved", j.toString());
        answerPart.innerHTML = answer;
        answers.appendChild(answerPart);
    }
}
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

