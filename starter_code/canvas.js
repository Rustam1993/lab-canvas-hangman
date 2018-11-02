// this.letters.push(e.key)
// console.log(this.letters)
// if(this.letters.includes(e.key)){
//   console.log('we have it')
//   if(this.letters.indexOf(e.key)!== -1){
//     this.letters.pop(e.key)
//   }
// }
class Hangman {
  constructor(words){
    this.words = words;
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;

  }
  // end
  getWord(){  
    this.secretWord = this.words[Math.floor(Math.random()*this.words.length)]

      return this.secretWord;
  }
  checkIfLetter(e){
        if  ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)){
          if(this.letters.indexOf(e.key)!== -1){
            console.log("You have that letter already")
          }
          else {
            this.letters.push(e.key)
            this.errorsLeft--;
            console.log("attempts remaining " + this.errorsLeft)
          }
          // 2. Проверяем если значение этой кнопки совпадает с какой либо буквой секретного слова.
          if(this.secretWord.includes(e.key)){
            if(!this.guessedLetters.includes(e.key)){
              
              this.addCorrectLetter(e.key)
              this.letters.pop(e.key)
              
            }
          }
          
          // if(this.secretWord.length === this.guessedLetters.length){
          //   console.log("you made it")
          // }
          // if (this.letters.indexOf(e.key) !== -1)
          // {
          //   console.log("You already tried that letter")
          //   // this.letters.splice(e.key)
          // }
          // else 
          // {
            
          //   this.letters.push(e.key)
          //   console.log("here are your letters " + this.letters);
            
          //   if (this.letters.length > this.secretWord.length){
          //     this.letters.pop(e.key)
          //     console.log("Too much")
          //   }
          // }
          console.log(this.letters)
          // this.checkWinner();
        }
      };
      
      
      
      checkGameOver(){
        return this.errorsLeft <= 0 ? true : false
      }
      checkWinner(){
        return this.secretWord.length === this.guessedLetters.length && this.errorsLeft > 0 ? console.log("NICEEE") : false

      }
  addCorrectLetter(letter){
   this.guessedLetters = this.guessedLetters.concat(letter);
   this.checkWinner();


  }
  addWrongLetter(){
    this.letters
    this.errorsLeft--;
    this.checkWinner();

  }
}

let wordsdd = ["rustam","sam","alex", "sandra", "imperial"]
let abc = new Hangman(wordsdd)








// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
// 1. iterate with secret word for for loop
// x