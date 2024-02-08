let words = [
    "Abjure",	"Future"	,"Picnic",
    "Agonistic",	"Garland",	"Protect",
    "Airline"	,"Gigantic",	"Publish",
    "Bandit",	"Goofy"	,"Quadrangle",
    "Banquet",	"Government"	,"Recount",
    "Binoculars",	"Grandnieces",	"Redoubtable",
    "Biologist",	"Handbook",	"Reflection",
    "Blackboard",	"Himself"	,"Reporter",
    "Board"	,"Indulge",	"Ring",
    "Bookworm",	"Inflatable",	"Salesclerk",
    "Butterscotch",	"Inimical"	,"Snapshot",
    "Camera","Interim",	"Shellfish",
    "Campus"	,"Invest",	"Ship",
    "Catfish",	"Jackpot"	,"Significance",
    "Carsick",	"Kitchenette"	,"Sometimes",
    "Celebrate"	,"Law"	,"Sublime",
    "Celery"	,"Life"	,"Tabletop",
    "Citizen",	"Lifeline"	,"Teamwork",
    "Coloring",	"Love"	,"Tennis",
    "Compact"	,"Magnificent"	,"Timesaving",
    "Dark"	,"Malevolence",	"Tree",
    "Damage",	"Man"	,"Termination",
    "Dangerous",	"Mascot"	,"Underestimate",
    "Decorum",	"Marshmallow",	"Vineyard",
    "Endorse"	,"Mine",	"War",
    "Engender"	,"Moonwalk",	"Way",
    "Erratic"	,"Near",	"Wealth",
    "Envelope",	"Nephogram"	,"Wednesday",
    "Etymology"	,"Newborn",	"World",
    "Eyewitness"	,"Noisome",	"Xerox",
    "Eulogy",	"Owl"	,"You",
    "Fish"	,"Parenthesis"	,"Zestful",
    "Food",	"Perpetrator"	,
    "Foreclose",	"Phone"
];

let resultDialog = document.getElementById("resultDialog");

let wordToGuess = words[Math.floor(Math.random() * 100)].toLowerCase();
console.log(wordToGuess);
let wordLength = wordToGuess.length;
// console.log(wordLength);
let actualAnswer = wordToGuess;
let guessedWordDiv = document.getElementById("guessedWord");
let alphabetDiv = document.getElementById("alphabet");
let remaingLives = document.getElementById("remaingLives");
let count = 0;
let lives = 8;
remaingLives.innerHTML = lives;

let emptySpanString = "";
for(let i=0;i<wordToGuess.length;i++){
    emptySpanString += "<span></span>";
}
guessedWordDiv.innerHTML = emptySpanString;

let guessedWordSpans = document.querySelectorAll("#guessedWord span");

let alphabetsSpanString = "";
for (i = 97; i <= 122; i++) {
    alphabetsSpanString += `<span onclick="alphabetClick('${String.fromCharCode(i)}')">${String.fromCharCode(i)}</span>`;
}
alphabetDiv.innerHTML = alphabetsSpanString;
let alphabetBtnSpans = document.querySelectorAll("#alphabet span");





// s.toLowerCase().charCodeAt(0) - 97
const alphabetClick = (x) => {
    // console.log(x);
    let idx = wordToGuess.indexOf(x);
    let ele = alphabetBtnSpans[x.charCodeAt(0)-97];
    if (idx !== -1) {
        do {
            guessedWordSpans[idx].innerHTML = x;
            wordToGuess = wordToGuess.substring(0, idx) + '_' + wordToGuess.substring(idx+1);
            idx = wordToGuess.indexOf(x);
            count++;
        } while (idx != -1);
        ele.style.background = "green";
        ele.style.cursor = "not-allowed";
    }else if(ele.style.background !== "red" && ele.style.background !== "green"){
        lives--;
        remaingLives.innerHTML = lives;
        ele.style.background = "red";
    }
    ele.style.cursor = "not-allowed";
    ele.removeAttribute("onclick");

        if (count == wordLength) {
            resultDialog.innerHTML = `<img src="./Assets/congrats.gif" alt="" srcset="">
            <h1>Congratualations !!</h1>
            <h2>You won the game</h2>
            <button onclick="closeDialog()">Contionue playing</button>`;
            resultDialog.showModal();
        }else if(lives == 0){
            resultDialog.innerHTML = `<img src="./Assets/oops.png" alt="" srcset="">
            <h1>Answer : ${actualAnswer}</h1>
            <button onclick="closeDialog()">Contionue playing</button>`;
            resultDialog.showModal();
        }
    
}



// keyboard functionality
window.addEventListener("keypress",(event)=>{
    alphabetClick(event.key);
});


const closeDialog = () => {
    resultDialog.close();
    location.reload();
}
