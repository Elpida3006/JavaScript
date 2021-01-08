// class Person {
//     constructor(firstname, lastname, age, email) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.email = email;
//     }
//     toString() {
//         return `${this.firstname} ${this.lastname} (age: ${this.age}, email: ${this.email})`;
//     }
// }
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}
// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// console.log(person.toString());

let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
console.log(p.toString());
// expect(Person.length).to.be.equal(4,
//     "'Rectangle.constructor' should take 4 parameters");
console.log(typeof Person);
console.log(typeof p);