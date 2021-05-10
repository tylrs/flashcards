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
})
