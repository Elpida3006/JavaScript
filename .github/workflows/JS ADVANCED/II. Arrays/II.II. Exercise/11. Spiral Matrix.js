function spiralMatrix(number1, number2) {
    let total = number1 * number2;
    let result = [];

    for (let i = 0; i < number1; i++) {
        let rs = [];
        for (let j = 0; j < number2; j++) {
            rs.push(0);
        }
        result.push(rs);
    }

    let x = 0;
    let y = 0;
    let step = 0;
    for (let i = 0; i < total;) {
        while (y + step < number1) {
            i++;
            result[x][y] = i;
            y++;

        }
        y--;
        x++;

        while (x + step < number2) {
            i++;
            result[x][y] = i;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            i++;
            result[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            i++;
            result[x][y] = i;
            x--;
        }
        x++;
        y++;
    }

    for (let row of result) {

        console.log(row.join(' '));

    }
}