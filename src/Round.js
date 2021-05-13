const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn;
    this.incorrectGuesses = [];
    this.timer;
    this.totalTime;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    this.turn = new Turn(userGuess, this.currentCard)
    let result = this.turn.evaluateGuess();
    if (!result) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns ++;
    this.currentCard = this.deck.cards[this.turns];
    return this.turn.giveFeedback(result);
  }

  calculatePercentageCorrect() {
    let percentCorrect = Math.floor((1 - this.incorrectGuesses.length / this.turns) * 100);
    return percentCorrect;
  }

  startTimer(limit) {
    this.totalTime = 0;
    this.timer = setInterval(() => {
      this.totalTime ++;
      if (this.totalTime === limit) {
        clearInterval(this.timer);
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.timer);
    return this.totalTime;
  }

  formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let minutesSeconds = {minutes: minutes, seconds: seconds};
    return minutesSeconds;
  }

  endRound() {
    let finishTime = this.stopTimer()
    let formattedTime = this.formatTime(finishTime);
    let percentage = this.calculatePercentageCorrect();
    let message = `** Round over! ** You answered ${percentage}% of the questions correctly and finished in ${formattedTime.minutes} minutes and ${formattedTime.seconds} seconds`;
    console.log(message);
    return message;
  }
}
module.exports = Round;
