const { expect } = require('chai');
const { lookupChar } = require('./index')


describe('lookupChar', function() {
    describe('string is NOT a string or number is NOT a number', function() {
        it('should return undefined ', function() {
            expect(lookupChar(5, "5")).to.equal(undefined,
                'The function did not return the correct result!');
        });

        it('should return undefined if the first parameter is NOT a string', function() {
            expect(lookupChar([], 2)).to.equal(undefined,
                'The function did not return the correct result!');
        });
        it('should return undefined if the first parameter is NOT a string', function() {
            expect(lookupChar({}, 2)).to.equal(undefined,
                'The function did not return the correct result!');
        });

        it('should return undefined if the second parameter is NOT a number', function() {
            expect(lookupChar('Pesho', '2')).to.equal(undefined,
                'The function did not return the correct result!');
        });

        it('should return undefined if the second parameter is NOT a number', function() {
            expect(lookupChar('Pesho', {})).to.equal(undefined,
                'The function did not return the correct result!');
        });
        it('should return undefined if the second parameter is NOT a number', function() {
            expect(lookupChar('Pesho', [])).to.equal(undefined,
                'The function did not return the correct result!');
        });

    });

    describe('Incorrect index value', function() {
        it('should return incorrect index with an incorrect index value', function() {
            expect(lookupChar('Orange', 25)).to.equal('Incorrect index',
                'The function did not return the correct value!');
        });

        it('should return incorrect index with a negative index value', function() {
            expect(lookupChar('Orange', -200)).to.equal('Incorrect index',
                'The function did not return the correct value!');
        });


    });

    describe('Correct result', function() {
        it('should return correct value with correct parameters', function() {
            expect(lookupChar('You are correct string', 10)).to.equal('r',
                'The function did not return the correct value!');
        });

        it('should return correct value with correct parameters', function() {
            expect(lookupChar('Kiril Pavlov', 8)).to.equal('v',
                'The function did not return the correct value!');
        });

        it('should return correct value with correct parameters', function() {
            expect(lookupChar('The fist populate', 4)).to.equal('f',
                'The function did not return the correct value!');
        });
    });
});