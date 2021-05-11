class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = deck.cards[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }
}
module.exports = Round;
