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
      

module.exports = wordInPlay;
