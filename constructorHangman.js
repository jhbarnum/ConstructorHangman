var inquirer = require("inquirer");
var guessMe = require("./wordInPlay");
//var guessedLetter = require("./letterGuess");
var encodedWord = [];
var word = [];
var tuesday = '';
var checkWord = "";
word = '';
var guess = function(letterGuess){
	this.letterGuess = letterGuess;

  };
function startGame() {
  word = guessMe.wordArr[Math.floor(Math.random() * guessMe.wordArr.length)];
  console.log(word);
    hideWord();
    question();
}
function hideWord() {
  encodedWord = [];
  for(var i = 0; i < word.length; i++) {

      console.log(word[i]);
      encodedWord.push("_");
    }
}
function wordInPlay() {
     for(var i = 0; i < word.length; i++) {
      //console.log(tuesday + '-------');
      if(tuesday == word[i]) {
        console.log('yes')
        encodedWord.splice(i, 1, word[i]);
        }      
        }     
      encodedWordStr();
      }      
function encodedWordStr() {
      checkWord = encodedWord.join('');
      console.log("--------------------  " + checkWord + "  --------------------")
      console.log("You Guessed " + tuesday + "--------------------");
     if (checkWord == word){
      console.log("YOU WIN! Play again? ( y or n )")
      if (tuesday == "y"){
        startGame();
      }      
    }
    return;
     }   
function question() {  
inquirer.prompt([
    {
      name: "letterGuess",
      message: "Guess a letter..."
    }

  ]).then(function(answers) { 

    //startGame();
    var letterGuessed = new guess(answers.letterGuess);
    tuesday = letterGuessed.letterGuess;
    if (tuesday != 'x'){
      question();
    }
    wordInPlay();
     });
  
};
startGame();
//module.exports = word;
