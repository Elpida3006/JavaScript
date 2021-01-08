// прототипно наследяване

// function classPT() {
//     function Person(name, email) {

//         this.email = email;
//         this.getName = () => {
//             return name;
//         }

//         this.setname = (newname) => {
//             name = newname;
//             return name;
//         }
//     }
//     Person.prototype.getAllData = function() {
//         return {
//             name: this.getName(),
//             email: this.email
//         }
//     }

//     function Teacher(name, email, subject) {
//         Person.call(this, name, email); //super
//         this.subject = subject;

//     }
//     Teacher.prototype = Object.create(Person.prototype); //extend

//     Teacher.prototype.getAllData = function() {
//         // const proto = super.getAllData()
//         return {
//             ...Person.prototype.getAllData.call(this),
//             subject: this.subject
//         };
//     }
// }

// класическо наследяване

PersonAndTeacher = () => {
    class Person {
        // The Person class should have a name and an email
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        // The Teacher class should have a name, an email, and a subject
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        // Return an object containing the classes Person and Teacher
        Person,
        Teacher,
    }
}
const t = new Teacher('Nadq', 'djuzi@gmail.com', 'JS');
console.log(t.getAllData());