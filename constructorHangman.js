var inquirer = require("inquirer");
//var wordInPlay = require("./wordInPlay");
//var guessedLetter = require("./letterGuess");
var hangmanWordsArr = ['cheeseburger', 'computer', 'bicycle', 'riverfront', 'stereo', 'guitar', 'mountain', 'firestarter', 'ewok', 'minivan', 'argentina', 'snowboard', 'javascript', 'lightning', 'eggnog' ];
var encodedWord = [];
var word = [];
var encodedWord = [];
var tuesday = '';
var checkWord = "";
word = '';
var guess = function(letterGuess){
	this.letterGuess = letterGuess;

  };
function startGame() {
  //encodedWord = "";
    word = hangmanWordsArr[Math.floor(Math.random() * hangmanWordsArr.length)];
    console.log(word);
    hideWord();
    var a = 0;
    if (a == 5) {
      return;
    } else {

    question();
    a++;
  }
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
     if (checkWord == word){
      console.log("YOU WIN! Play again? ( y or n )")
      if (tuesday == "y"){
        startGame();
      }

      return;
    }
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
    console.log("You Guessed " + letterGuessed.letterGuess + "--------------------");
    console.log(tuesday);
    wordInPlay();
     });
};
startGame();
