// function matricessMagic(matrix) {
//     // let matrix = array.map(row => row.split(' ').map(Number));
//     let firstMatrix = matrix[0].reduce((a, b) => a + b, 0);

//     for (let row = 0; row < matrix.length; row++) {
//         let sumRow = matrix[row].reduce((a, b) => a + b, 0);

//         if (sumRow != firstMatrix) {
//             return false;
//         }
//     }

// for (let col = 0; col < matrix[0].length; col++) {
//     let sumCol = 0;
//     for (let row = 0; row < matrix.length; row++) {
//         sumCol += matrix[col][row];
//     }
//     if (sumCol != firstMatrix) {
//         return false;
//     }
// }

//     return true;
// }
// console.log(matricessMagic([
//     [4, 5, 6],
//     [3, 8, 4],
//     [8, 2, 5]
// ]));



function matricessMagic(matrix) {
    let sumFirstmatrix = 0;
    let sumRow = 0;
    let sumCol = 0;
    let isEqual = true;
    let firstMatrix = matrix[0];

    for (let countFirst = 0; countFirst < firstMatrix.length; countFirst++) {
        let el = Number(firstMatrix[countFirst]);
        sumFirstmatrix += el;
    }
    for (row = 0; row < matrix.length; row++) {
        let el = matrix[row];
        for (countRow = 0; countRow < el.length; countRow++) {
            let oneOfel = el[countRow]
            sumRow += oneOfel;


        }
        if (sumFirstmatrix != sumRow) {
            isEqual = false;
            console.log('false');
            return;
        }
        sumRow = 0;
    }

    for (col = 0; col < matrix[0].length; col++) {
        sumCol = 0;

        for (row = 0; row < matrix.length; row++) {
            sumCol += matrix[row][col];

        }
        if (sumCol != sumFirstmatrix) {
            isEqual = false;
            console.log('false');
            return;
        }
    }


    if (isEqual) {
        console.log('true');
    }
}

function magicMatrices(matrix = []) {

    let result = true;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let rowSum = 0;
    let colSum = 0;
    let sum = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            rowSum += matrix[i][j];
            if (i === 0) {
                sum += matrix[i][j];
            }
        }
        if (rowSum != sum) {
            result = false;
            break;
        }
        rowSum = 0;
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            colSum += matrix[j][i];
        }
        if (colSum != sum) {
            result = false;
            break;
        }
        colSum = 0;
    }


    console.log(result);
}
// matricessMagic([
//     [11, 32, 45],
//     [32, 11, 45],
//     [11, 32, 45]
// ]);
matricessMagic([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])