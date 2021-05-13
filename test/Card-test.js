const expect = require('chai').expect;
const Card = require('../src/Card');

describe('Card', function() {
  it('should be an instance of Card', function() {
    const card = new Card();

    expect(card).to.be.an.instanceof(Card);
  });

  it('should store an id', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    expect(card.id).to.equal(1);
  });

  it('should store a question', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    expect(card.question).to.equal('What is Robbie\'s favorite animal');
  });

  it('should store a list of possible answers', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    expect(card.answers).to.deep.equal(['sea otter', 'pug', 'capybara']);
  });

  it('should store the correct answer', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

    expect(card.correctAnswer).to.equal('sea otter');
  });
});
