
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


var startQuizEL = document.getElementById("start-Quiz")

var timeRemaining = 300;

startQuizEL.addEventListener("click", function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timeRemaining--;
        startQuizEL.textContent = timeRemaining + " Time Remaining.";
        console.log('interval')

        if(timeRemaining === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            alert("You have run out of time!");
        }    
    }, 1000);
    
})


// startQuizEL.addEventListener("click", function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// })





