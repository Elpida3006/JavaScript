function diagonalSum(matrix) {
    let firstIn = 0;
    let secIn = matrix[0].length - 1

    let firstD = 0
    let secD = 0

    matrix.forEach(line => {
        firstD += line[firstIn++];
        secD += line[secIn--];
    });
    console.log(`${firstD} ${secD}`);
}
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])