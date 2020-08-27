function startingWedding(input) {
    let countMAN = Number(input.shift());
    let countWOMEN = Number(input.shift());
    let tables = Number(input.shift());

    let count = tables;
    let table_couple = "";


    for (let m = 1; m <= countMAN; m++) {
        if (count == 0) {
            break;
        }
        for (let w = 1; w <= countWOMEN; w++) {
            table_couple += `(${m} <-> ${w}) `;

            count--
            if (count == 0) {
                break;
            }
        }
    }
    console.log(table_couple);
}

startingWedding(["2", "2", "6"]);
startingWedding(["2", "2", "3"]);