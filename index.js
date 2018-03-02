var inquirer = require('inquirer');
var Word = require('./Word.js');
var wordPool = require('./common-english-words.json'); // top 1000 common English words excluding four-letter-or-less words
var randomWord = wordPool[Math.floor(Math.random() * wordPool.length)]; // generate a random word in string
var word = new Word(randomWord); // construct the new Word object
console.log('\n - Welcome to the CLI hangman game.\n\n - Starting new game...\n')
prompt();

function prompt() {
  inquirer.prompt({ //prompt a user input
      type: 'input',
      name: 'letter',
      message: `${word.display()} \n Please guess a letter:`, //word.display() returns the word with unrevealed letters represented by _
      prefix: ''
    })
    .then( input => {
      switch (word.guess(input.letter)) { // call the word.guess() method, passing in the user input. Return is either true or false or dupe.
        case 'dupe':
          console.log('You\'ve already guessed this one!'); // when already guessed this one
          break;
        case true:
          console.log('Awesome choice!'); // when guessed right
          break;
        case false:
          console.log(`Wrong! Remaining guesses: ${--word.lives}`); // when guessed wrong, lives - 1
      }
      if (word.lives == 0) console.log(`You lost! The answer is "${randomWord}"`); // game over
      else if (!word.display().includes('_')) console.log(` ${word.display()}\nYou won!`); // won
      else prompt(); // recursion
    })
}

