const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', () => {
  let cards, deck1, questions;

  beforeEach('Setup', () => {
    questions = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }, {
      "id": 4,
      "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "accessor method"
    }]
    cards = questions.map((question) => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return card;
    })
  })

  it('Should be an instance of Deck', () => {
    deck1 = new Deck();

    expect(deck1).to.be.an.instanceOf(Deck);
  })

  it('Should be able to be intialized with an array of Cards', () => {
    deck1 = new Deck(cards);

    expect(deck1.cards.length).to.equal(4);
    expect(deck1.cards).to.deep.equal(questions);
  })

  it('Should be able to know how many cards it has', () => {
    deck1 = new Deck(cards);
    let deckCount = deck1.countCards();

    expect(deckCount).to.equal(4);
  })
})
