class Hex {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return '0x' + this.value.toString(16).toUpperCase()
    }
    valueOf() {
        return this.value;
    }
    plus(hex) {
        return new Hex(this.value + hex);
    }
    minus(hex) {
        return new Hex(this.value - hex);
    }
    parse(hexValue) {

        return parseInt(hexValue, 16)
    }
}





























class Hex {
    // TODO: implement this class...
    constructor(value) {
        this.value = value;

    }
    toString() {
        return '0x' + this.value.toString(16).toUpperCase()
    }
    valueOf() {

        return this.value;
    }

    /**
     * Add to current value
     * @param {Hex} hex Hex number to add
     */
    // This Function Should Return the Value Property of the Hex Class.

    // This function will show its hexidecimal value starting with "0x"
    plus(hex) {

        return new Hex(this.value + hex);
    }

    /**
     * Substract from current value
     * @param {Hex} hex Hex number to substract
     */


    // This function should add a number or Hex object and return a new Hex object.
    minus(hex) {
        return new Hex(this.value - hex);
    }

    // This function should subtract a number or Hex object and return a new Hex object.
    parse(hexValue) {
        //parse
        return parseInt(hexValue, 16)
    }

}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');