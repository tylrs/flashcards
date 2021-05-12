const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

class Game {
  constructor(round) {
    this.currentRound = round;
  }

  start() {
    
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
