const expect = require('chai').expect;
const Game = require('../src/Game.js');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

describe('Game', () => {
  let cards, deck1, round1, questions;

  beforeEach('Setup', () => {
    questions = [
      {
        id: 1,
        question: 'What is Robbie\'s favorite animal',
        answers: [ 'sea otter', 'pug', 'capybara' ],
        correctAnswer: 'sea otter'
      },
      {
        id: 2,
        question: 'What organ is Khalid missing?',
        answers: [ 'spleen', 'appendix', 'gallbladder' ],
        correctAnswer: 'gallbladder'
      },
      {
        id: 3,
        question: 'What is Travis\'s middle name?',
        answers: [ 'Lex', 'William', 'Fitzgerald' ],
        correctAnswer: 'Fitzgerald'
      },
      {
        id: 4,
        question: 'Is Taylor Funny?',
        answers: [ 'Yes', 'No', 'Sometimes' ],
        correctAnswer: 'Sometimes'
      }
    ]
    cards = questions.map((question) => {
      let card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      return card;
    })
    deck1 = new Deck(cards);
    round1 = new Round(deck1);
  })

  it('should keep track of the current round', () => {
    const game1 = new Game();

    game1.start(questions);

    expect(game1.currentRound).to.be.an.instanceOf(Round);
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
})
