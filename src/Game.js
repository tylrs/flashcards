const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

class Game {
  constructor() {
    this.currentRound;
  }

  start(questions) {
    let cards = questions.map((question) => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return card;
    })
    let deck1 = new Deck(cards);
    this.currentRound = new Round(deck1);
    this.currentRound.startTimer(1000);
    this.printMessage(deck1);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
