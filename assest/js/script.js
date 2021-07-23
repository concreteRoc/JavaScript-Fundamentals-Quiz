
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

