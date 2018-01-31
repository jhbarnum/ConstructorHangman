var inquirer = require("inquirer");
var guessMe = require("./wordInPlay");
var lettersGuessed = require("./letterGuess");

var encodedWord = [];
var word = "";
var checkWord = "";
var playCount = 0;

function startGame() {
    playCount = 15;
    word = guessMe.wordArr[Math.floor(Math.random() * guessMe.wordArr.length)];

    console.log(word);

    hideWord();
    question();
}

function hideWord() {
  
    encodedWord = [];

    for (var i = 0; i < word.length; i++) {
        encodedWord.push("_");
    }
}

// this used to be word in play
function updateCurrentMaskedWord(letterGuessed) {
  
    for (var i = 0; i < word.length; i++) {
        if (letterGuessed == word[i]) {
            encodedWord.splice(i, 1, word[i]);
        }      
    }

    return updateApplicationState(letterGuessed);
}  

function updateApplicationState(letterGuessed) {
    checkWord = encodedWord.join('');
    


    console.log("Current word: " + checkWord);
    console.log("You Guessed: " + letterGuessed);
    
    playCount--;
    
    console.log("Guesses left: " + playCount);
    
    
    // for (var i = 0; i < lettersGuessed.letters.length; i++) {
    //     if (letterGuessed == lettersGuessed.letters[i]) {
    //         lettersGuessed.letters.splice(i, 1, "*"); 
    //     }      
    // }
    

    if (checkWord === word) {
        return true;
    } else {
        return false;
    }
}  

function startNewGame() {
    
    inquirer.prompt([
        {
            name: 'startNewGame',
            message: "YOU WIN! Play again? ( y or n )"
        }
    ]).then(function(answer) {
        if (answer.startNewGame == "y"){
            startGame();
        }
    });
};

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

startGame();
