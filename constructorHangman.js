var inquirer = require("inquirer");
var guessMe = require("./wordInPlay");
var lettersGuessed = require("./letterGuess");

var encodedWord = [];
var word = "";
var checkWord = "";
var playCount = 0;
var guessedLetterArr = [];

// function to prompt the start of the game with a random word and initialize guess count
function startGame() {
    playCount = 15;
    guessedLetterArr = [];
    word = guessMe.wordArr[Math.floor(Math.random() * guessMe.wordArr.length)];
    hideWord();
    question();
}

//function to create underscore placeholder for hangman word
function hideWord() {
    encodedWord = [];
    for (var i = 0; i < word.length; i++) {
        encodedWord.push("_");
    }
}


// updates the underscore placeholder with correct letter when guessed
function updateCurrentMaskedWord(letterGuessed) { 
    for (var i = 0; i < word.length; i++) {
        if (letterGuessed == word[i]) {
            encodedWord.splice(i, 1, word[i]);

        }      
    }
    guessedLetterArr.push(letterGuessed);
    return updateApplicationState(letterGuessed);

}  

// this consoles out your current state of play after each guess and checks to see if you have won
function updateApplicationState(letterGuessed) {
    checkWord = encodedWord.join('');
    console.log("Current word: " + checkWord);
    //console.log("You Guessed: " + letterGuessed); 
    console.log("You Guessed: " + guessedLetterArr); 
    playCount--;
    console.log("Guesses left: " + playCount);
    

    if (checkWord === word) { // added the "or" to kick out after playcount hits 0
        console.log("YOU WIN!");
        return true;
    } else if (playCount === 0){
        console.log("Try Again");
        return true;
    } else {
      return false;
    }
}  

// function to create game play prompts with inquirer node package
function startNewGame() {
    inquirer.prompt([
        {
            name: 'startNewGame',
            message: "Play again? ( y or n )"
        }
    ]).then(function(answer) {
        if (answer.startNewGame == "y"){
            startGame();
        }
    });
};

// function to create guess prompts with inquirer node package
function question() {  
    inquirer.prompt([
        {
            name: "letterGuess",
            message: "Guess a letter..."
        }
    ]).then(function(answers) { 
        let guessedLetter = answers.letterGuess;       
        if (updateCurrentMaskedWord(guessedLetter)) {
            startNewGame();
        } else {
            question();
        }
    }); 
};
// first call of the startGame function
startGame();
