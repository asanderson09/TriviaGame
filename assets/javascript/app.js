// $(document).ready(function () {
//     //Start button to kick everything off
$('#startButton').on('click', function () {
    game.start();
})

// // Array for questions, 
var questions = [{
    question: 'What letter grade would you give this Triva game?',
    answers: [" A ", " A ", ' A ', ' A '],
    rightAnswer: ' A '
}, {
    question: 'What is the largest bone in the human body?',
    answers: [" Jaw ", " Scapula ", ' Femur ', ' Tibia '],
    rightAnswer: ' Femur '
}, {
    question: 'Which pop album is the best selling of all time?',
    answers: [" M.J. Thriller ", "Prince Purple Rain ", ' The Beatles The Beatles '],
    rightAnswer: ' M.J. Thriller '
}, {
    question: 'What is the total number of dots on a pair of dice?',
    answers: [" 50 ", " 42 ", ' 38 ', ' 40 '],
    rightAnswer: ' 42 '
}, {
    question: 'Which part of the body would a chiropodist treat?',
    answers: [" The arm ", " The back ", ' The feet ', ' The butt '],
    rightAnswer: ' The feet '
}, {
    question: 'How many rings make up the symbol of the Olympic Games?',
    answers: [" 3 ", " 6 ", ' 4 ', ' 5 '],
    rightAnswer: ' 5 '
}, {
    question: 'What is the colored part of the human eye called?',
    answers: [" Cornea ", " Iris ", ' Bulbus ', ' Retina '],
    rightAnswer: ' Iris '
}, {
    question: 'What is a group of lions called?',
    answers: [" A pack ", " A mob ", ' A pride ', ' A flock '],
    rightAnswer: ' A pride '
}, {
    question: 'The Statue of Liberty was a gift to what specific group of Americans?',
    answers: [" Military Troops ", " American Patriots ", ' Hippies ', ' Slaves '],
    rightAnswer: ' Slaves '
}];

var game = {
    right: 0,
    wrong: 0,
    counter: 90,
    // function for counting down timer, decreases the timer count by 
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log('Youre out of time!!');
            game.done();
        }
    },
    start: function () {
        //removes start button once pressed
        $('#startButton').remove();
        // Displays timer after button is pressed and removed
        $("#container").prepend('<h2> Clock\'s ticking: <span id= "counter">90</span></h2>');

        // timer in terms of 1 second
        timer = setInterval(game.countdown, 1000);
        // for loop that runs through the questions array
        for (var i = 0; i < questions.length; i++) {
            // Takes the question from the questions array and appends them displaying them in a header
            $('#container').append('<h2>' + questions[i].question + '</h2>');
            // for loop that runs through the answers from their respective questions index
            for (var j = 0; j < questions[i].answers.length; j++) {
                //  append each answer with a radio type,  a name that is equal to the question, and a value that is equal to the answer.
                $('#container').append("<input type= 'radio' name='question- " + i + " " + "' value= '" + questions[i].answers[j] + "' >" + questions[i].answers[j]);

            }

        }
    }
}       //console.log("It's working");






