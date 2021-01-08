// let sortingNumbers = ([2, 1, 3]);
// sortingNumbers.sort(function(a, b, c) {
//     return b - a;

// });
// console.log(sortingNumbers);

function sortingNumbers(a, b, c) {
    let newArray = [];
    newArray.push(a, b, c);
    let sorted = newArray.sort((a, b) => b - a);
    console.log(sorted.join(`\n`));
}
sortingNumbers(2, 1, 3);