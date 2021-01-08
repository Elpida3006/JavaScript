const { addFive, subtractTen, sum } = require('./index')
const { describe } = require('mocha')
const { expect } = require('chai');




describe('addFive', function() {
    it('should return undefined with a non-number type', function() {
        expect(addFive('Ina')).to.equal(undefined, 'The result is incorrect!');

    });
    it('should return correct with a number type', function() {
        expect(addFive(51)).to.equal(56, 'The result is incorrect!');

    });

});
describe('subtractTen', function() {
    it('should return undefined with a non-number type', function() {
        expect(subtractTen('Ina')).to.equal(undefined, 'The result is incorrect!');

    });
    it('should return correct with a number type', function() {
        expect(subtractTen(51)).to.equal(41, 'The result is incorrect!');

    });

});
describe('sum', function() {
    it('should return undefined with a incorrect first param', function() {
        expect(sum('Ina', 5)).to.equal(undefined, 'The result is incorrect!')

    });
    it('should return undefined with a incorrect second param', function() {
        expect(sum(5, 'Ina')).to.equal(undefined, 'The result is incorrect!');

    });
    it('should return undefined with a incorrect first and second type of params', function() {
        expect(sum("5", "3")).to.equal(undefined, 'The result is incorrect!');

    });
    it('should return correct with a number type', function() {
        expect(sum(5, 3)).to.equal(15, 'The result is incorrect!');

    });


});