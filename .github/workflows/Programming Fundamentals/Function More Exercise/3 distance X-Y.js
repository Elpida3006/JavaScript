// let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

function distanceXY(coordinates) {
    let x1 = Number(coordinates[0]);
    let y1 = Number(coordinates[1]);
    let x2 = Number(coordinates[2]);
    let y2 = Number(coordinates[3]);

    let functionCalculateDistance = (x1, y1, x2, y2) => {
        const a = Math.abs(x1 - x2);
        const b = Math.abs(y1 - y2);

        return Number.isInteger(Math.sqrt((a * a) + (b * b)));
    }
    functionCalculateDistance(x1, y1, 0, 0) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    functionCalculateDistance(x2, y2, 0, 0) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    functionCalculateDistance(x1, y1, x2, y2) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}





distanceXY([3, 0, 0, 4]);