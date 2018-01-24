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
    word = hangmanWordsArr[Math.floor(Math.random() * hangmanWordsArr.length)];
    console.log(word);
}
function wordInPlay() {
     for(var i = 0; i < word.length; i++) {
      console.log(word[i]);
      encodedWord.push("_");
      //console.log(tuesday + '-------');
      if(tuesday == word[i]) {
        console.log('yes')
        encodedWord.splice(i, 1, word[i]);
        }
        
        }
        encodedWordStr();
      console.log(checkWord)
      }

      
      
    
function encodedWordStr() {
      checkWord = encodedWord.join('');
     }   

  
inquirer.prompt([
    {
      name: "letterGuess",
      message: "Guess a letter..."
    }
  ]).then(function(answers) { 
    startGame();
    var letterGuessed = new guess(answers.letterGuess);
    tuesday = letterGuessed.letterGuess;
    console.log(letterGuessed.letterGuess + "////////");
    wordInPlay();
     });

