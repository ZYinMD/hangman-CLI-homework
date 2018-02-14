var Letter = function(letter) {
  this.letter = letter;
  this.revealed = false;
  };

Letter.prototype.display = function () {
  return this.revealed ? this.letter : '_';
};

Letter.prototype.guess = function (letter) {
  return (letter == this.letter) ? (this.revealed = true) : false;
}

module.exports = Letter;

