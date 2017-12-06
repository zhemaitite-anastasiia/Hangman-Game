var alphabet = ['a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
];

var wordBank = ['paella', 'rice', 'tacos', 'tofu', 'marzipan', 'hummus', 'lasagna', 'pizza'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var guessesLeft = 7;
var rightGuessCounter = 0;

//----------------------------------------
function reset() {
    //Chooses word randombly from the wordBank
    choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Splits the choosen word into letters
    lettersInWord = choosenWord.split('');
    //Get the number of blanks
    numBlanks = lettersInWord.length;


    //===========================================================
    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 7;
    wrongLetters = [];
    blanksAndSuccesses = [];
    alphabet = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'
    ];
    test = false;
    startGame();
}


function startGame() {
    //Chooses word randombly from the wordBank
    choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Splits the choosen word into letters
    lettersInWord = choosenWord.split('');
    //Get the number of blanks
    numBlanks = lettersInWord.length;


    //===========================================================
    rightGuessCounter = 0;
    guessesLeft = 7;
    wrongLetters = [];
    blanksAndSuccesses = [];
    alphabet = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'
    ];


    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
    }


    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;

}


function compareLetters(userKey) {


    if (choosenWord.indexOf(userKey) > -1) {

        for (var i = 0; i < numBlanks; i++) {

            if (lettersInWord[i] === userKey) {
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
            }
        }

    } else {
        wrongLetters.push(userKey);
        guessesLeft--;

        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;

    }



}

function winLose() {
    // When number blanks filled with right words, you win
    if (rightGuessCounter === numBlanks) {
        //Counts Wins 
        winCount++;

        document.getElementById('winCounter').innerHTML = winCount;
        alert('You are the Winner!!!!');
        reset();
    }
    // When number of Guesses reaches 0, then You lose
    else if (guessesLeft === 0) {

        alert('Try one more time!');
        reset();
    }
}


startGame();

document.onkeyup = function(event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < alphabet.length; i++) {
        if (letterGuessed === alphabet[i] && test === true) {
            var spliceDword = alphabet.splice(i, 1);


            compareLetters(letterGuessed);
            winLose();
        }
    }

}