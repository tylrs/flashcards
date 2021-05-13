const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Round = require('../src/Round.js');

describe('Round', () => {
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
    deck1 = new Deck(cards);
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

    expect(round1.currentCard).to.deep.equal(questions[0]);
  })

  it('should have a returnCurrentCard method', () => {
    const round1 = new Round(deck1);
    let currentCard1 = round1.returnCurrentCard()

    expect(currentCard1).to.deep.equal(questions[0]);
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

  it('should have a takeTurn method which updates current card to next card', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');

    expect(round1.currentCard).to.deep.equal(questions[1]);
  })

  it('should have an empty array for incorrect guesses', () => {
    const round1 = new Round(deck1);

    expect(round1.incorrectGuesses).to.be.an('array');
  })

  it('should have a takeTurn method which stores incorrect guesses', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');

    expect(round1.incorrectGuesses[0]).to.equal(1);
  })

  it('should have a takeTurn method which returns feedback if its correct', () => {
    const round1 = new Round(deck1);

    let feedback = round1.takeTurn('sea otter');

    expect(feedback).to.equal('correct');
  })

  it('should have a takeTurn method which returns feedback if its incorrect', () => {
    const round1 = new Round(deck1);

    let feedback = round1.takeTurn('potato');

    expect(feedback).to.equal('incorrect');
  })

  it('should be able to calculate the percentage of correct answers', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');
    round1.takeTurn('potato');
    round1.takeTurn('Fitzgerald');

    let percentage = round1.calculatePercentageCorrect();

    expect(percentage).to.equal(Math.floor(100 / 3));
  })

  it('should have an endRound method', () => {
    const round1 = new Round(deck1);

    round1.takeTurn('potato');
    round1.takeTurn('potato');
    round1.takeTurn('Fitzgerald');

    let percentage = round1.calculatePercentageCorrect();

    let message = round1.endRound(percentage);

    expect(message).to.equal(`** Round over! ** You answered ${Math.floor(100 / 3)}% of the questions correctly!`);
  })
})
