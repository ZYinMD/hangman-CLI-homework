var Letter = function(letter) {
  this.letter = letter;
  this.revealed = false;
  };

Letter.prototype.guess = function (letter) { // if guessed right, reveal it
  return (letter == this.letter) ? (this.revealed = true) : false;
}

Letter.prototype.display = function () { // display itself if revealed, otherwise display '_'
  return this.revealed ? this.letter : '_';
};

module.exports = Letter;

