//ECMA 5

function Person(first, last) {

    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, 'fullName', {
        set: function(newFullName) {
            const nameArray = newFullName.split(' ');
            if (nameArray.length !== 2) {
                return;
            }
            [this.firstName, this.lastName] = nameArray

        },
        get: function() {
            return this.firstName + ' ' + this.lastName
        }

    });
}
let Person = arrayMap;
let person = new Person("Peter", "Ivanov");

let act1 = person.fullName;
let exp1 = "Peter Ivanov";
assert.equal(act1, exp1);
// 2 example - ECMA 6
class Person {
    constructor(first, last) {

        this.firstName = first;
        this.lastName = last;
    }

    set fullName(value) {
        const nameArray = value.split(' ');
        if (nameArray.length !== 2) {
            return;
        }
        this.firstName = nameArray[0];
        this.lastName = nameArray[1];


    }

    get fullName() { return `${this.firstName} ${this.lastName}` }



}

class Person {
    constructor(first, last) {

        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() { return `${this.firstName} ${this.lastName}` }

    set fullName(value) {
        const pattern = /\w\w/;
        if (pattern.test(value)) {
            let [firstName, lastName] = value.split(' ')
            this.firstName = firstName;
            this.lastName = lastName;

        }

    }




}