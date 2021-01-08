function matricessMagic(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    matrix.forEach((line, indx, matrix) => {

        let sumRow = line.reduce((a, b) => a + b, 0)
        let sumCol = matrix.map(line => line[indx]).reduce((a, b) => a + b, 0)

        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false
        }

    });
    return isMagic
}
console.log(matricessMagic([
    [4, 5, 6],
    [3, 8, 4],
    [8, 2, 5]
]));


// function matricessMagic(matrix) {
//     let sumFirstmatrix = 0;
//     let sumRow = 0;
//     let sumCol = 0;
//     let isEqual = true;
//     let firstMatrix = matrix[0];

//     for (let countFirst = 0; countFirst < firstMatrix.length; countFirst++) {
//         let el = Number(firstMatrix[countFirst]);
//         sumFirstmatrix += el;
//     }
//     for (row = 0; row < matrix.length; row++) {
//         let el = matrix[row];
//         for (countRow = 0; countRow < el.length; countRow++) {
//             let oneOfel = el[countRow]
//             sumRow += oneOfel;


//         }
//         if (sumFirstmatrix != sumRow) {
//             isEqual = false;
//             console.log('false');
//             return;
//         }
//         sumRow = 0;
//     }

//     for (col = 0; col < matrix[0].length; col++) {
//         sumCol = 0;

//         for (row = 0; row < matrix.length; row++) {
//             sumCol += matrix[row][col];

//         }
//         if (sumCol != sumFirstmatrix) {
//             isEqual = false;
//             console.log('false');
//             return;
//         }
//     }


//     if (isEqual) {
//         console.log('true');
//     }
// }