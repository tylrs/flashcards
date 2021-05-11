const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', () => {
  beforeEach('Setup', () => {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck1 = new Deck([card1, card2, card3]);
  })
  it('should be an instance of the Round class', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceOf(Round);
  })

  it('should have a turns counter with a default value of 0', () => {
    const round1 = new Round();

    expect(round1.turns).to.equal(0);
  })
})
