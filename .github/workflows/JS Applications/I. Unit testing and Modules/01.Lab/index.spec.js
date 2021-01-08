const describe = require('mocha').describe;
const expect = require('chai').expect;
const library = require('./index.js');


describe('My library test', function() {
    it('should return is different result', function() {
        const arg = ['11', '2', '3'];
        const res = library.sum(arg);
        expect(res).to.eq(16);

    });
    it('should return NaN when the arg is a string', function() {
        const arg = 'string';
        const res = library.sum(arg);
        expect(res).to.be.NaN;

    });
    it('should return is different result', function() {
        const arg = ['1', '2', '4'];;
        const res = library.sum(arg);
        expect(res).to.eq(7);

    });
});