const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Deck', () => {
  let cards, deck1, questions;

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
