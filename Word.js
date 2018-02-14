var Letter = require('./Letter.js');
var Word = function (word) {
  this.lives = 7; //initial remaining guesses

  // construct the new word as an array containing letter objects
  this.letterArray = [];
  for (let i of word) this.letterArray.push(new Letter(i));

  // method that returns a string to display the current word status
  this.display = () => {
    let result = [];
    for (let i of this.letterArray) result.push(i.display());
    return result.join(' ');
  };

  // array that contains the already tried letters
  this.guessedLetters = [];

  // method that takes a letter input and perform the guess
  this.guess = (letter) => {
    if (this.guessedLetters.includes(letter)) return 'dupe'; // first check if this letter has been guessed
    else this.guessedLetters.push(letter); // if not, push letter into guessedLetters
    let result = false; // the return value of this method
    for (let i of this.letterArray) {
      if (i.guess(letter)) result = true; // if the letter matches any letter in the word, return true
    }
    return result;
  };
}

module.exports = Word;
