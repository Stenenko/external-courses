function Hangman(word) {
    this.word = word.toLowerCase();
    this.errorsLeft = 6;
    this.guessedSymbols = "_".repeat(word.length);
    this.wrongSymbols = [];
    this.guess = function(symbol) {
        symbol = symbol.toLowerCase();
        if(this.word.includes(symbol)) {
            var position = 0;
            while (this.word.indexOf(symbol, position) !== -1) { 
                this.guessedSymbols = this.guessedSymbols.substr(0, this.word.indexOf(symbol, position))
                    + symbol + this.guessedSymbols.substr(this.word.indexOf(symbol, position) + 1);
                position = this.word.indexOf(symbol, position) + 1;
              }
            if(!this.guessedSymbols.includes("_")) {
                console.log(this.word + " | You won!");
            }
            else {
                this.getGuessedString();
            }
        }
        else {
            if(this.errorsLeft > 0) {
                this.wrongSymbols.push(symbol);
                this.errorsLeft--;
                console.log("Wrong letter, errors left " + this.errorsLeft + " | " + this.wrongSymbols);
            }
            if(this.errorsLeft == 0){
                this.word = "";
                console.log("Game Over. Start a new game.");
            }
        }
        return this;
    }
    this.getGuessedString = function() {
        console.log(this.guessedSymbols);
        return this;
    }
    this.getErrorsLeft = function() {
        console.log(this.errorsLeft);
        return this;
    }
    this.getWrongSymbols = function() {
        console.log(this.wrongSymbols);
        return this;
    }
    this.getStatus = function() {
        console.log(this.guessedSymbols + " | errors left " + this.errorsLeft);
        return this;
    }
    this.startAgain = function(word){
        this.word = word.toLowerCase();
        this.errorsLeft = 6;
        this.guessedSymbols = "_".repeat(word.length);
        return this;
    }
}

var hangman = new Hangman("WebPurple");

hangman.guess('W'); // "w________"
hangman.guess('e'); // "we______e"
hangman.getStatus(); // "we______e | errors left 6"
hangman.guess('f'); // "wrong letter, errors left 5 | f"
hangman.guess('P'); // "we_p__p_e"
hangman.guess('j'); // "wrong letter, errors left 4 | f,j"
hangman.getGuessedString();
hangman.guess('b') // "webp___p_e"
  .guess('l') // "webp__ple"
  .getErrorsLeft() // 4
  .getWrongSymbols() // [f,j]
  .guess('u') // "webpu_ple"
  .guess('r'); // "webpurple | You won!"