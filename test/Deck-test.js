const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', () => {
  it('Should be an instance of Deck', () => {
    let deck1 = new Deck();

    expect(deck1).to.be.an.instanceOf(Deck);
  })

  it('Should be able to be intialized with an array of Cards', () => {
    let originalCards = [
        [
          1,
          'What allows you to define a set of related information using key-value pairs?',
          [ 'object', 'array', 'function' ],
          'object'
        ],
        [
          2,
          'What is a comma-separated list of related values?',
          [ 'array', 'object', 'function' ],
          'array'
        ],
        [
          3,
          'What type of prototype method directly modifies the existing array?',
          [ 'mutator method', 'accessor method', 'iteration method' ],
          'mutator method'
        ]
      ]
    let cards = originalCards.map((card) => {
      newCard = new Card(card[0], card[1], card[2], card[3]);
      return newCard;
    })
    let deck1 = new Deck(cards);

    expect(deck1.cards.length).to.equal(3);
    expect(Object.values(deck1.cards[2])).to.deep.equal(originalCards[2]);
  })

  it('Should be able to know how many cards it has', () => {
    let originalCards = [
        [
          1,
          'What allows you to define a set of related information using key-value pairs?',
          [ 'object', 'array', 'function' ],
          'object'
        ],
        [
          2,
          'What is a comma-separated list of related values?',
          [ 'array', 'object', 'function' ],
          'array'
        ],
        [
          3,
          'What type of prototype method directly modifies the existing array?',
          [ 'mutator method', 'accessor method', 'iteration method' ],
          'mutator method'
        ]
      ]
    let cards = originalCards.map((card) => {
      newCard = new Card(card[0], card[1], card[2], card[3]);
      return newCard;
    })
    let deck1 = new Deck(cards);
    let deckCount = deck1.countCards();

    expect(deckCount).to.equal(3);
  })
})
