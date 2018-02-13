Letter = function(letter) {
  this.letter = letter;
  this.revealed = false;
  this.display = () => this.revealed ? this.letter : '_';
  this.guess = (guess) => (guess == letter) ? (this.revealed = true) : false;
  };

module.exports = Letter;
