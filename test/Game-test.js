const expect = require('chai').expect;
const Game = require('../src/Game.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Game', () => {
  let card1;
  let card2;
  let card3;
  let deck1;
  let round1;
  
  beforeEach('Setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck1 = new Deck([card1, card2, card3]);
    round1 = new Round(deck1);
  })

  it('should keep track of the current round', () => {
    const game1 = new Game(round1);

    expect(game1.currentRound).to.equal(round1);
  })
})
