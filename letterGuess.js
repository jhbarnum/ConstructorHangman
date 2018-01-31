//var wordRandom = require("./constructorHangman");

var letters = function(letters){
	this.letters = letters;
	//this.letterGuess = letterGuess;
	this.console = function() {
	//console.log('Conected' + wordRandom.letters);
}
};

var lettersGuessed = new letters(["a", "b", "c","d", "e", "f", "g","h", "i", "j","k", "l", "m", "n", "o","p", "q", "r", "s","t", "u", "v","w", "x", "y", "z"]);
//var letterInWord = new letters(wordRandom);


module.exports = lettersGuessed;