Letter = function(letter) {
  this.letter = letter;
  this.revealed = false;
  this.display = () => this.revealed ? this.letter : '_';
  this.guess = (letter) => (letter == this.letter) ? (this.revealed = true) : false;
  };

module.exports = Letter;

