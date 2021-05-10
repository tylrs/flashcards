const expect = require('chai').expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', () => {
  it('should be a function', () => {
    let turn1 = new Turn();

    expect(Turn).to.be.a('function');
  })

  it('should be an instance of Turn', () => {
    let turn1 = new Turn();

    expect(turn1).to.be.an.instanceOf(Turn);
  })

  it('should take in two arguments: a user guess and a Card object', () => {
    let card1 = new Card(1,'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('Avocado Toast', card1);

    expect(turn1.userGuess).to.equal('Avocado Toast');
    expect(turn1.card).to.deep.equal(card1);
  })

  it('should have a method that returns a guess', () => {
    let card1 = new Card(1,'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('Avocado Toast', card1);

    let guess = turn1.returnGuess();

    expect(guess).to.equal('Avocado Toast');
  })

  it('should have a method that returns the card', () => {
    let card1 = new Card(1,'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('Avocado Toast', card1);

    let returnedCard = turn1.returnCard();

    expect(returnedCard).to.deep.equal(card1);
  })

  it('should have a method that checks whether a guess matches the correct answer', () => {
    let card1 = new Card(1,'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('Avocado Toast', card1);
    let turn2 = new Turn('sea otter', card1);

    let result1 = turn1.evaluateGuess();
    let result2 = turn2.evaluateGuess();

    expect(result1).to.be.false;
    expect(result2).to.be.true;
  })

  it('should have a method that returns correct or incorrect depending on the guess', () => {
    let card1 = new Card(1,'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('Avocado Toast', card1);
    let turn2 = new Turn('sea otter', card1);

    let result1 = turn1.evaluateGuess();
    let result2 = turn2.evaluateGuess();

    let result1Message = turn1.giveFeedback(result1);
    let result2Message = turn2.giveFeedback(result2);

    expect(result1Message).to.equal('incorrect');
    expect(result2Message).to.equal('correct')
  })
})
