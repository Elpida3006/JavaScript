const PaymentPackage = require('./index.js')

const { describe } = require('mocha')
const { expect } = require('chai');


describe("PaymentPackage", () => {


    describe("constructor", () => {

        it("should create an instance for ('Pesho, 13')", name = () => {
            let newPayment = new PaymentPackage("Pesho", 13);
            expect(newPayment instanceof PaymentPackage).to.be.true;
        });

        it("should have correct values for ('apple', 21.5)", name = () => {
            let params = new PaymentPackage('apple', 21.5);


            expect(params.name).to.be.equal("apple");
            expect(params.active).to.be.true;
            expect(params._active).to.be.true;
            expect(params.VAT).to.be.greaterThan(0);
            expect(params._VAT).to.be.greaterThan(0);

        });

    });


});