
// 1. create a start button to start the quiz 
//     - link to html 
//     - query selector

// 2. create a function that is a timer (set timeout)
// 2.b. add variable to track time 
// 3. creating quiz questions (array )
        // example: questions = [{question_1: 'qeustion', choice_1: 'choice', choice_2: 'choice', answer: 'your answer' }, {question_2: 'qeustion', choice_1: 'choice', choice_2: 'choice', answer: 'your answer' }, ]
        // look up Object mapping (key value pairs )
// 4. create a loop to cycle through question 
// 5. function to check if the users guess matches the answer (if statement)
// 5. b. if the answer is wrong subtract (number) from the timer



// 6. when the user has been told if there answer is wrong or right display the next question  

// 7. we either needs a function or to include something in the for loop to determine if all questions have been answered or if the timer is 0

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my inittials and my score */



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
        options: ["var carName;", "variable carName;", "v carName;", "vb = carName"],
        answer: "var carName"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
        answer: "Math.round(7.25)"
    },
];


// This function will assign each button to its particular answer choice
function renderQuestions() {
    questionsTextbox.textContent = questionsAsked[questionsIndex].question;
    choiceA.textContent = questionsAsked[questionsIndex].options[0];
    choiceB.textContent = questionsAsked[questionsIndex].options[1];
    choiceC.textContent = questionsAsked[questionsIndex].options[2];
    choiceD.textContent = questionsAsked[questionsIndex].options[3];
}

// This function will check if your answer and if it's incorrect time is subtracted.
function checkChoice (choice) {

    if (questionsAsked[questionsIndex].answer === questionsAsked[questionsIndex].options[choice]) {
        choiceReview.textContent = "Thats Right!"
        numberCorrect++
    } else {
        timer -= 10;
        timeCount.textContent = timer;
        choiceReview.textContent = 'WRONG! The correct answer is ${questionsAsked[questionsIndex].answer}, and you lose 10 seconds.';
    }

    questionsIndex++

    if (questionsIndex < questionsAsked.length) {
        renderQuestions();
    } else {
        endGame();
    }
}

// set of functions that incorporates the checkChoice function with each possible selected answer choice
function optionA () { checkChoice(0); }
function optionB () { checkChoice(1); }
function optionC () { checkChoice(2); }
function optionD () { checkChoice(3); }

// each individual button is assigned its own function on click which also triggers the checkChoice function
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