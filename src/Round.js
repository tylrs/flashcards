const Turn = require('./Turn.js');

class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    this.turns ++;
    this.turn = new Turn(userGuess, this.currentCard)
  }
}
module.exports = Round;
