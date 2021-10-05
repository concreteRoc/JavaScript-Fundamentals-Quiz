// Referencing html tags with id using queryselector
var startButton = document.querySelector("#startButton");
var timeCount = document.querySelector(".timer-count");
var questionsTextbox = document.querySelector("#questionBox");
var choiceReview = document.querySelector("#choiceReview");
var quizTextbox = document.querySelector(".quiz-textbox");
var header = document.querySelector("#header");
var form = document.querySelector("#form");
var submitButton = document.querySelector("#submit-button");
var scoretext = document.querySelector("#scoreText");
var messageBox = document.querySelector(".submit-message")
var highscores = document.querySelector("#highscores");
var userInitials = document.querySelector("#initials");
var startDiv = document.querySelector(".start-div")
var goBack = document.querySelector("#go-back");
var clearbtn = document.querySelector("#clear");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var clearedMessage = document.querySelector("#clearedText");
var highscoreList = document.querySelector("#highscores-section");
var startHighscore = document.querySelector("#start-highscore");
var quizHighscore = document.querySelector("#quiz-highscore");
var timerDiv = document.querySelector(".timer-textbox");


// defined variables
var questionsIndex = 0;
var numberCorrect = 0;
var timer = 100;

// This is the array that will hold the questions.
// Inside the objects of the array the options are in an array because we want to select just one option and not everything as a one string.


var questionsAsked = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "How does a FOR loop start?",
        options: ["for (i =0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
        answer: "for (i =0; i <= 5; i++)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        options: ["<!--This is a comment-->", "'This is a comment", "!!This is a comment", "//This is a comment  "],
        answer: "//This is a comment  "
    },
    {
        question: "How do you declare a JavaScript variable?",
        options: ["var carName", "variable carName", "v carName", "vb = carName"],
        answer: "var carName"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
];

// This function will assigns each button to its particular answer choice.
function renderQuestions() {
    questionsTextbox.textContent = questionsAsked[questionsIndex].question;
    choiceA.textContent = questionsAsked[questionsIndex].options[0];
    choiceB.textContent = questionsAsked[questionsIndex].options[1];
    choiceC.textContent = questionsAsked[questionsIndex].options[2];
    choiceD.textContent = questionsAsked[questionsIndex].options[3];
}

// function to check answer picked and if incorrect time is deduced
function checkChoice (choice) {

    if (questionsAsked[questionsIndex].answer === questionsAsked[questionsIndex].options[choice]) {
        choiceReview.textContent = "Correct!"
        numberCorrect++
    } else {
        timer -= 10;
        timeCount.textContent = timer;
        choiceReview.textContent = `Wrong!!!, the correct answer is ${questionsAsked[questionsIndex].answer}`;
    }

    questionsIndex++

    if (questionsIndex < questionsAsked.length) {
        renderQuestions();
    } else {
        endGame();
    }
}

// Set of functions that incorporates the checkChoice function with each possible selected answer choice
function optionA () { checkChoice(0); }
function optionB () { checkChoice(1); }
function optionC () { checkChoice(2); }
function optionD () { checkChoice(3); }

// Each individual button is assigned its own function on click which also triggers the checkChoice function.
choiceA.addEventListener("click", optionA);
choiceB.addEventListener("click", optionB);
choiceC.addEventListener("click", optionC);
choiceD.addEventListener("click", optionD);

// This function will start the quiz and timer
function startQuiz () {
    var timerSet = setInterval(function() {
        timer--;
        timeCount.textContent = timer;
        if(timer <= 0) {
        clearInterval(timerSet);
        if(questionsIndex < questionsAsked.length -1) {
            endGame();
        }
        }
    },1000);

    startHighscore.style.display ="none";
    startDiv.style.display = "none";
    quizTextbox.style.display ="block";
    choiceA.style.display = "block";
    choiceB.style.display = "block";
    choiceC.style.display = "block";
    choiceD.style.display = "block";
    header.style.opacity = "1";
renderQuestions();
}

// This function will end game and display final score and the form that allows initials input.
function endGame () {
header.style.opacity = "0";
quizTextbox.style.display = "none";
form.style.display = "block";
scoretext.textContent = `Your final score is ${numberCorrect}`;
}
startButton.addEventListener("click", startQuiz);

// This function will assign a class to messageBox depending on whether or not there is an input, this class makes text red if no input is given.
function displayMessage (type, message) {
    messageBox.textContent = message;
    messageBox.setAttribute("class", type);
}

// This function will store scores and initials in an array and stringified in order to be placed in local storage
function storeScores (event) {
    event.preventDefault();

    if(userInitials.value === "") {
        displayMessage("error", "Please enter your intials in order to continue");
         return;
    }

    form.style.display = "none";
    highscores.style.display = "block";

    var savedScores = localStorage.getItem("highscore");
    var scoreArray;
    

    if (savedScores === null) {
        scoreArray =[];
    } else {
        scoreArray = JSON.parse(savedScores);
    }

    var savedScores = {
        intials: userInitials.value,
        score: numberCorrect
    };

    scoreArray.push(savedScores);

    scoreArrayString = JSON.stringify(scoreArray);
    localStorage.setItem("highscore", scoreArrayString);

    getScore();
};

var i = 0;
// This function will display saved scores in order by parsing the stringified content from local storage
function getScore () {
   savedScores = localStorage.getItem("highscore");

   if(savedScores === null) {
       return;
   }

   var storedScores = JSON.parse(savedScores);

   for (; i < storedScores.length; i++) {
       var newScore = document.createElement("p");
       newScore.textContent = `${storedScores[i].intials}: ${storedScores[i].score}`;
       highscoreList.appendChild(newScore);
   }

}

// Event listener for submit button that displays the saved scores adn initials
submitButton.addEventListener("click", function(event) {
    storeScores(event);
});

// Event listener for go back button that returns to starting div and reloads the page
goBack.addEventListener("click", function() {
    highscores.style.display = "none";
    startDiv.style.display = "block";
    window.location.reload();
})

// Event listener for clear button in order to delete saved items in local storage
clearbtn.addEventListener("click", function() {
    window.localStorage.removeItem("highscore");
    clearedMessage.style.display = "block";
    highscoreList.innerHTML = "";
})

//Event listener for highscore button in the starting div that showcases saved scores and initials
startHighscore.addEventListener("click", function() {
    getScore();
    highscores.style.display = "block";
    startDiv.style.display = "none";
});

// Event listener for highscore button while the quiz is running that also displays the saved scores and initials
quizHighscore.addEventListener("click", function() {
    getScore();
    highscores.style.display = "block";
    quizTextbox.style.display = "none";
    timerDiv.style.display = "none";
});