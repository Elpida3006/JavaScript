// function eaqual_neughtbors(matrix) {

//     let isEaqual = 0;

//     for (let a = 0; a < matrix.length - 1; a++) {
//         for (let b = 0; b < matrix[a].length; b++) {
//             if (matrix[a][b] == matrix[a + 1][b]) {
//                 isEaqual++;
//             }
//             if (matrix[a][b] == matrix[a][b + 1]) {
//                 isEaqual++;
//             }

//             if (a == matrix.length - 2 && matrix[a + 1][b] == matrix[a + 1][b + 1]) {
//                 isEaqual++;
//             }
//         }

//     }


//     console.log(isEaqual);
// }
eaqual_neughtbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])

function eaqual_neughtbors(matrix) {

    const eaqual = matrix.reduce((acc, currRow, rowIndex) => {

        const count = currRow.reduce((acc, currItem, itemIndex) => {
            if (currItem == currRow[itemIndex + 1]) {
                acc++
            }
            if (currItem == (matrix[rowIndex + 1] || [])[itemIndex]) {
                acc++
            }
            return acc;
        }, 0);
        return acc + count;
    }, 0);

    console.log(eaqual);
}