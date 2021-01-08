function printDiagonalAttack(matrix) {
    matrix = matrix.map(row => row.split(' ').map(Number));

    let firstSumDiagonal = matrix.map((row, rowIndex) =>
            row.filter((e, colIndex) => rowIndex === colIndex))
        .reduce((a, b) => Number(a) + Number(b))

    let secondDiagonalSum = matrix
        .map((row, rowIndex) => row.filter((e, colIndex) => colIndex === row.length - 1 - rowIndex))
        .reduce((a, b) => Number(a) + Number(b));

    let isDiagonal = (row, col) => row === col || col === matrix[row].length - 1 - row;

    firstSumDiagonal !== secondDiagonalSum ?
        console.log(matrix.map(row => row.join(' ')).join('\n')) :
        console.log(matrix.map((row, rowIndex) => row
                .map((e, colIndex) => isDiagonal(rowIndex, colIndex) ?
                    e :
                    firstSumDiagonal)
                .join(' '))
            .join('\n'));
}