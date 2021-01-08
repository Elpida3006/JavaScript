function blackFlags(data) {
    let days = Number(data.shift());
    let dailyWin = Number(data.shift());

    let neededWin = Number(data.shift());

    let realWin = 0;

    for (let i = 1; i <= days; i++) {
        realWin += dailyWin;
        if (i % 3 == 0) {
            realWin += dailyWin * 0.5;
        }
        if (i % 5 == 0) {
            realWin *= 0.7;
        }
    }
    if (realWin >= neededWin) {
        console.log(`Ahoy! ${realWin.toFixed(2)} plunder gained.`);
    } else {
        let percentage = (realWin / neededWin) * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }


}
blackFlags([5, 40, 100]);
blackFlags([10, 20, 380]);