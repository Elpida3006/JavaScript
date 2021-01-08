function orbit(matrix) {
    let rows = matrix[0];
    let columns = matrix[1];
    let startPositionX = matrix[2];
    let startPositionY = matrix[3];

    let fullMatrixDesign = [];
    for (let i = 0; i < rows; i++) {
        fullMatrixDesign.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            fullMatrixDesign[row][col] = Math.max(Math.abs(row - startPositionX), Math.abs(col - startPositionY)) + 1;
        }
    }

    console.log(fullMatrixDesign.map(row => row.join(" ")).join("\n"));
}
orbit([4, 4, 0, 0])