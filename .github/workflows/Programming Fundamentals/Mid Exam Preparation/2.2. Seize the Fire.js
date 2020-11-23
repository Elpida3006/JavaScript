function seizeTheFire(array) {

    let water = Number(array.pop());
    let cells = []

    let data = array;
    let commandArray = data[0].split('#');

    for (let i = 0; i < commandArray.length; i++) {
        let command = commandArray[i].split(' = ')
        let typeOfFire = command[0];
        let range = Number(command[1]);

        if (typeOfFire === "High") {
            if ((range > 125 || range < 81) || (water - range < 0)) {
                continue;
            } else {
                water -= range
                cells.push(range)
            }
        }
        if (typeOfFire === "Medium") {
            if ((range > 80 || range < 51) || (water - range < 0)) {
                continue;
            } else {
                water -= range;
                cells.push(range)
            }
        }
        if (typeOfFire === "Low") {
            if ((range > 50 || range < 1) || (water - range < 0)) {
                continue;
            } else {
                water -= range;
                cells.push(range)
            }
        }




    }
    console.log(`Cells:`);
    // if (cells.length < 1) {
    //     cells = [0];
    // }
    let totalFire = cells.reduce((a, b) => a + b, 0);
    cells.forEach(el => {
        console.log(` - ${el}`);

    });
    let effort = totalFire * 0.25;
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`);

}
seizeTheFire(['High = 1#Low = 128#Medium = 177#Low = 123', '1250'])