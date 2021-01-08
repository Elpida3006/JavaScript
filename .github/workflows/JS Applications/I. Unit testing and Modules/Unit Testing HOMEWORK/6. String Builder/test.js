const { describe } = require('mocha')
const { expect } = require('chai');
const StringBuilder = require("./index")

describe('StringBuilder', () => {
    const rightExampleString = 'Welcome';



    describe('StringBuilder functions', () => {
        let instance = null;

        beforeEach(() => {
            instance = new StringBuilder(rightExampleString);
        });

        it('should append string', () => {
            instance.append(', Vanq');
            expect((instance._stringArray).join('')).to.equal('Welcome, Vanq');
        });
        it('should prepend string', () => {
            instance.prepend('Vanq says ');
            expect((instance._stringArray).join('')).to.equal('Vanq says Welcome');
        });

        it('should throw error when params is not a string', () => {
            expect(() => instance.append(4840)).to.throw('Argument must be string');
        });
        it('should throw error when params is not a string', () => {
            expect(() => instance.prepend(20)).to.throw('Argument must be string');
        });




        it('should insert a string at index as expected', () => {
            instance.insertAt(', Peter', 5);
            expect((instance._stringArray).join('')).to.equal('Welcom, Petere');
        });

        it('should throw error when type argument who have to inserted at a given index is not a string ', () => {
            expect(() => instance.insertAt([], 5)).to.throw('Argument must be string');
        });

        it('should remove part of string with given startIndex and length as expected', () => {
            instance.remove(2, 3);
            expect((instance._stringArray).join('')).to.equal('We');
        });

        it('should return a result as string when a method toString() is called', () => {
            expect(instance.toString()).to.equal('Welcome');
        });

    });


    describe('StringBuilder instantiation and structure', () => {

        it('should work with valid parameter - string', () => {
            expect(() => new StringBuilder(rightExampleString)).to.not.throw();
        });

        it('should work with valid parameter ', () => {
            expect(() => new StringBuilder()).to.not.throw();
        });



        it('should not work with invalid parameter - type: Number', () => {
            expect(() => new StringBuilder(5)).to.throw();
        });
    });



    describe('Properties of an instance of StringBuilder', () => {
        let instance = null;

        beforeEach(() => {
            instance = new StringBuilder();
        });

        it('should hasOwnProperty', () => {
            expect(instance.hasOwnProperty('_stringArray')).to.be.true;
        });

        it('should have functions attached to the prototype', function() {
            expect(Object.getPrototypeOf(instance).hasOwnProperty('append')).to.be.true;
            expect(Object.getPrototypeOf(instance).hasOwnProperty('prepend')).to.be.true;
            expect(Object.getPrototypeOf(instance).hasOwnProperty('insertAt')).to.be.true;
            expect(Object.getPrototypeOf(instance).hasOwnProperty('remove')).to.be.true;
            expect(Object.getPrototypeOf(instance).hasOwnProperty('toString')).to.be.true;
        });
    });
});