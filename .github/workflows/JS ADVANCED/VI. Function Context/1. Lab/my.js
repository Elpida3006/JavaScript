//  function speak(message) {
//      this.grades.forEach(grade => {
//          console.log(`${this.name}:${message} - ${grade}`);
//      });
//      //  console.log(end);
//  }

speak = (message) => { console.log(`${person.name}:${message}`) }
let person = {
    name: 'Pesho',
    grades: [2, 3, 6, 4],

}
let bindfunction = speak.bind(person)

console.log(bindfunction('Hello'))
console.log(speak.call(person, 'Hello'))