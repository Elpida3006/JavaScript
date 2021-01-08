class Stringer {

    constructor(innerString, innerLength) {
        this.innerString = innerString
        this.innerLength = +innerLength
        this.initialState = innerString
    }
    increase(length) {
        length = Number(length)

        if (this.innerLength + length < 0) { this.innerLength = 0 } else { this.innerLength += length }
        this.initialState = this.innerString.substring(0, this.innerLength)
    }
    decrease(length) {
        length = Number(length)

        if (this.innerLength - length < 0) { this.innerLength = 0 } else { this.innerLength -= length }
        this.initialState = this.innerString.substring(0, this.innerLength)
    }
    toString() {
        if (this.innerString.length > this.innerLength) {
            return `${this.initialState}...`

        } else if (this.innerLength == 0) {
            return "..."
        } else {
            return this.initialState;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test