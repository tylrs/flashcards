const expect = require('chai').expect;
const Game = require('../src/Game.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Game', () => {
  let cards;
  let deck1;
  let round1;
  let questions;

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
    deck1 = new Deck(cards);
    round1 = new Round(deck1);
  })

  it('should have a start method which creates new cards', () => {
    const game1 = new Game();

    game1.start(questions);

    expect(game1.currentRound.deck.cards).to.deep.equal(questions);
  })

  it('should have a start method which adds cards to a deck', () => {
    const game1 = new Game(round1);

    game1.start(questions);

    expect(game1.currentRound.deck).to.deep.equal(deck1);
  })

  it('should keep track of the current round', () => {
    const game1 = new Game();

    game1.start(questions);

    expect(game1.currentRound).to.deep.equal(round1);
  })
})
