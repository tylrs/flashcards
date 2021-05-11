const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', () => {
    let card1;
    let card2;
    let card3;
    let deck1;
  beforeEach('Setup', () => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(3, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck1 = new Deck([card1, card2, card3]);
  })
  it('should be an instance of the Round class', () => {
    const round1 = new Round(deck1);

    expect(round1).to.be.an.instanceOf(Round);
  })

  it('should have a turns counter with a default value of 0', () => {
    const round1 = new Round(deck1);

    expect(round1.turns).to.equal(0);
  })

  it('should take in a new deck and store it', () => {
    const round1 = new Round(deck1);

    expect(round1.deck).to.be.an.instanceOf(Deck);
  })

  it('should start out with the current card being the first card', () => {
    const round1 = new Round(deck1);

    expect(round1.currentCard).to.deep.equal(card1);
  })

  it('should have a returnCurrentCard method', () => {
    const round1 = new Round(deck1);
    let currentCard1 = round1.returnCurrentCard()

    expect(currentCard1).to.deep.equal(card1);
  })

  it('should have a takeTurn method which creates new turn instance', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');

    expect(round1.turn).to.be.an.instanceOf(Turn);
  })

  it('should have a takeTurn method which takes in a user guess', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');
    let userGuess = round1.turn.returnGuess();

    expect(userGuess).to.equal('potato');
  })

  it('should have a takeTurn method which updates turn count', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');

    expect(round1.turns).to.equal(1);
  })

  it.skip('should have a takeTurn method which updates current card to next card', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceOf(Round);
  })

  it.skip('should have a takeTurn method which stores incorrect guesses', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceOf(Round);
  })

  it.skip('should have a takeTurn method which returns feedback', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceOf(Round);
  })

  it.skip('should have a calculatePercentageCorrect method', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceOf(Round);
  })

  it.skip('should have a endRound method', () => {
    const round1 = new Round();

    expect(round1).to.be.an.instanceOf(Round);
  })
})
