const juros = require('./juros')
const expect = require('chai').expect

describe ('Modulo Juros', () => {
it('Calcula Juros Compostos', () => {
  const test = juros.calcJuros (1000, 0.01, 1)
  expect(test).to.equal(1010)
  const test2 = juros.calcJuros(1000, 0.02, 2)
  expect (test2).to.equal(1040.4)
})
})