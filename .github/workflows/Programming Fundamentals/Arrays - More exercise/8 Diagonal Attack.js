function diagonal(array) {
    let matrix = array.map(row => row.split(' ').map(Number));

    let sumfirst = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumfirst += (matrix[i][i]);
    }
    let sumSecon = 0;
    for (let j = 0; j < matrix.length; j++) {
        sumSecon += matrix[j][matrix.length - 1 - j];
    }
    if (sumfirst === sumSecon) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {

                if (matrix[i][j] !== sumSecon && matrix[i][j] !== matrix[j][j] && matrix[i][j] !== matrix[j][matrix.length - i - 1]) {
                    matrix[i][j] = sumfirst;
                }
            }
        }

    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '))
    }

}



diagonal(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
);

// function printDiagonalAttack(matrix) {
//     matrix = matrix.map(row => row.split(' ').map(Number));

//     let firstSumDiagonal = matrix.map((row, rowIndex) =>
//             row.filter((e, colIndex) => rowIndex === colIndex))
//         .reduce((a, b) => Number(a) + Number(b))

//     let secondDiagonalSum = matrix
//         .map((row, rowIndex) => row.filter((e, colIndex) => colIndex === row.length - 1 - rowIndex))
//         .reduce((a, b) => Number(a) + Number(b));

//     let isDiagonal = (row, col) => row === col || col === matrix[row].length - 1 - row;

//     firstSumDiagonal !== secondDiagonalSum ?
//         console.log(matrix.map(row => row.join(' ')).join('\n')) :
//         console.log(matrix.map((row, rowIndex) => row
//                 .map((e, colIndex) => isDiagonal(rowIndex, colIndex) ?
//                     e :
//                     firstSumDiagonal)
//                 .join(' '))
//             .join('\n'));
// }

// printDiagonalAttack(
//     ['5 3 12 3 1',
//         '11 4 23 2 5',
//         '101 12 3 21 10',
//         '1 4 5 2 2',
//         '5 22 33 11 1'
//     ]
// );