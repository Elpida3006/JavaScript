const { expect } = require('chai')
const { describe } = require('mocha')
const route = require('./index')


describe('isOddOrEven', () => {
    it('should return odd', () => {
        expect(route.isOddOrEven('Tom')).to.equal('odd')
    });
    it('should return even', () => {
        expect(route.isOddOrEven('Toni')).to.equal('even')
    });
    it('should return undefined', () => {
        expect(route.isOddOrEven(8)).to.equal(undefined);
        expect(route.isOddOrEven([])).to.equal(undefined);
        expect(route.isOddOrEven({})).to.equal(undefined);
    });
    it('should return even with an empty string', function() {
        expect(route.isOddOrEven('')).to.equal('even');
    });
});