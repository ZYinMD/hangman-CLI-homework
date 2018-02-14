var inquirer = require('inquirer');
var Word = require('./Word.js')
var wordPool = require('./common-english-words.json') //top 1000 common English words excluding four-letter-or-less words
var randomWord = wordPool[Math.floor(Math.random() * wordPool.length)];
var word = new Word(randomWord);
console.log('Welcome to the CLI hangman game.')
prompt();

function prompt() {
  inquirer.prompt({
      type: 'input',
      name: 'letter',
      message: `${word.display()} \nWhat's your guess?`,
      prefix: ''
    })
    .then( input => {
      switch (word.guess(input.letter)) {
        case 'dupe':
          console.log('You\'ve already guessed this one!'); //when already guessed this one
          break;
        case true:
          console.log('Awesome choice!'); //when guessed right
          break;
        case false:
          console.log(`Wrong! Remaining guesses: ${--word.lives}`); //when guessed wrong
      }
      if (word.lives == 0) console.log(`You lost! The answer is "${randomWord}"`); //game over
      else if (!word.display().includes('_')) console.log(` ${word.display()}\nYou won!`); //won
      else prompt(); //recursion
    })
}

