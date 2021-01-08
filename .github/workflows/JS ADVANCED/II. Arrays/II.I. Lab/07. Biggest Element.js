// function biggest(matrix) {
//     let maxArray = []

//     matrix.forEach(line => {
//         let maxInLine = Math.max(...line)
//         maxArray.push((maxInLine))
//     });
//     let maxNum = Math.max(...maxArray)
//     console.log(maxNum);
// }

biggest = (matrix) => {
    const maxNumber = matrix
        .map(line => Math.max(...line))
        .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);
    return maxNumber;
}
console.log(biggest([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]))

// function biggestElement(input) {
//     let biggest = input[0][0];
//     for (let i = 0; i < input.length; i++) {
//         for (let j = 0; j < input[i].length; j++) {
//             if (biggest < input[i][j]) {
//                 biggest = input[i][j]
//             }
//         }
//     }
//     console.log(biggest)
// }