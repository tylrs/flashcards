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
}
module.exports = Round;
