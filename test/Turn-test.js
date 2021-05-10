const expect = require('chai').expect;

const Card = require('../src/Card.js');
const Turn = require('../src/Turn.js');

describe('Turn', () => {
  it('should be a function', () => {
    let turn1 = new Turn();

    expect(Turn).to.be.a('function');
  })
})
