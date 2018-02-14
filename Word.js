var Letter = require('./Letter.js');
var Word = function (word) {
  this.letterArray = [];
  for (let i of word) {
    this.letterArray.push(new Letter(i));
  }
  this.display = () => {
    let result = [];
    for (let i of this.letterArray) {
      result.push(i.display);
    }
    return result.join(' ');
  };
  this.lives = 7;
  this.guessedLetters = [];
  this.guess = (letter) => {
    if (this.guessedLetters.includes(letter)) {
      console.log('You have guessed this one!');
      return;
    }
    for (let i of this.letterArray) {
      i.guess(letter);
    }
    var display = this.display();
    console.log(display);
    if (display.includes('_')) {
      this.lives--;
      if (this.lives == 0) {
        this.lost();
      }
    } else {
      this.won();
    }
  };
  this.won = () => console.log('You won!');
  this.lost = () => console.log('You lost!');
}

module.exports = Word;
