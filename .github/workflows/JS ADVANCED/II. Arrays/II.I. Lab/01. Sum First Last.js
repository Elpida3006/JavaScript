// function sum(array) {
//     let first = Number(array[0])

//     let last = Number(array[array.length - 1])

//     let result = first + last
//     console.log(result);
// }
// sum(['20', '30', '40']);

// sum = (array) => { return Number(array[0]) + Number(array[array.length - 1]) }
// console.log(sum(['20', '30', '40']));

sum = (array) => {
    let sums = array.reduce((acc, curr) => {

        return ((curr) == (array[array.length - 1])) || ((curr) == (array[0])) ? acc += Number(curr) : acc;

    }, 0);
    if (array.length == 1) { sums = array[0] * 2 }
    return sums;
}
console.log(sum(['5']));