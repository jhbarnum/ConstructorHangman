var inquirer = require("inquirer");
var guessMe = require("./wordInPlay");
var lettersGuessed = require("./letterGuess");
var lettersLeft = lettersGuessed;
var encodedWord = [];
var word = [];
var tuesday = '';
var checkWord = "";
var playCount = 15;
word = '';
var guess = function(letterGuess){
	this.letterGuess = letterGuess;
  };
function startGame() {
  var lettersLeft = [];
  word = guessMe.wordArr[Math.floor(Math.random() * guessMe.wordArr.length)];
  playCount = 15;
  console.log(word);
  hideWord();
  question();
  return;
}
function hideWord() {
  encodedWord = [];
  for(var i = 0; i < word.length; i++) {
    encodedWord.push("_");
  }
}
function wordInPlay() {
  for(var i = 0; i < word.length; i++) {
    if(tuesday == word[i]) {
      encodedWord.splice(i, 1, word[i]);
    }      
  }     
  encodedWordStr();
  
  }      
function encodedWordStr() {
  checkWord = encodedWord.join('');
  console.log("--------------------  " + checkWord + "  --------------------")
  console.log("You Guessed " + tuesday + "--------------------");
  playCount--;
  console.log("guess again " + playCount + " guesses left");
  for (var t = 0; t < lettersGuessed.letters.length; t++) {
    if(tuesday == lettersGuessed.letters[t]) {
      lettersGuessed.letters.splice(t, 1, "*");
    }      
    
  }
  console.log(JSON.stringify(lettersGuessed));
  if (checkWord == word){
    console.log("YOU WIN! Play again? ( y or n )")
    if (tuesday == "y"){
      startGame();
      return;
    } else {
      return;
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
    var letterGuessed = new guess(answers.letterGuess);
    tuesday = letterGuessed.letterGuess;
    if (tuesday != 'x'){
      question();
    }
    wordInPlay();
  }); 
};
startGame();
// letters();
//module.exports = word;
