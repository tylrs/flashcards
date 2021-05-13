const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn;
    this.incorrectGuesses = [];
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

  endRound() {
    let percentage = this.calculatePercentageCorrect();
    let message = `** Round over! ** You answered ${percentage}% of the questions correctly!`;
    console.log(message);
    return message;
  }
}
module.exports = Round;
