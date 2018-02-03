var Letter = require(‘./letter.js’);
var Word = require(‘./word.js’);
var inquirer = require(‘inquirer’);

var word = ‘’;
var blankWord = [];
var arrWord = [];
var newWord = {};

var words = [
   ‘Java’,
   ‘Javascript’,
   ‘C’,
   ‘Ruby’,
   ‘PHP’,
   ‘SQL’,
   ‘Python’
];

function randWord() {
   var n = Math.floor(Math.random() * 8);
   var word = words[n].toString();
   return word;
}

function startGame(){
   console.log(“Starting game...“);
   currentWord = randWord();
   newWord = new Word(currentWord);
   arrWord = newWord.returnArr(newWord.word).toString();
   blankWord = newWord.returnBlank(newWord.word).toString();
   console.log(“This is the current word: “+ newWord.word);
   console.log(“This is the current array word: ” + arrWord);
   console.log(“This is the current blank word: ” + blankWord);
   //console.log() to test function...
}


function runGame() {
   //Question when the game starts to get the letter the user guesses.
   inquirer.prompt([
       {
           name: “character”,
           message: ‘Guess a letter: ’
       }
   ]).then(response => {
       var letter = response.character.toString();
       var newLetter = new Letter(letter);
       //should console.log “Correct Guess”
       if (newLetter.check(newLetter.char, newWord.word) > -1) {
           return newWord.guess(newWord.char, arrWord, blankWord);
       } else {
           return newWord.guess(newWord.char, arrWord, blankWord);
           // return newWord.returnBlank(newWord.word)
       }

   })

   //check and display current word
   //check();
   //recrusion to run runGame() again
   //runGame();
}

startGame();
runGame();