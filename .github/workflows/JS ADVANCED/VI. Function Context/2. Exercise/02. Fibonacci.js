function getFibonator() {
    let first = 1;
    let last = 0;


    return (() => {
        let newLast = first + last;
        first = last;
        last = newLast;
        return last;
    });

}
// с closure!
function getFibonator() {
    let first = 1;
    let last = 0;


    //връща изпълнение на функция - за това е кложър, ако връща стойност, не е, ако е с this, не е кложър, ако ретърнва резултат - fibonator(), също не е !

    return fibonator = () => {
        let newLast = first + last;
        first = last;
        last = newLast;

        return last;
        //тук връща стойност, запазва в паметта, не ни трябва да конзол логваме, защото искаме крайния реултат от най-външната функция, а това ни е само парче код, на изпълнението и;
    }

}
// референция към нашата функция
let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13