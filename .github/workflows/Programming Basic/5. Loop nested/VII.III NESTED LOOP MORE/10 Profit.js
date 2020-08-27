function money(input) {

    let monets1 = Number(input.shift());
    let monets2 = Number(input.shift());
    let banknots5 = Number(input.shift());

    let moneySum = Number(input.shift());

    for (let i = 0; i <= monets1; i++) {
        for (let j = 0; j <= monets2; j++) {
            for (let k = 0; k <= banknots5; k++) {
                if ((i * 1) + (j * 2) + (k * 5) == moneySum) {

                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${moneySum} lv.`);
                }

            }

        }

    }
}
money(["3", "2", "3", "10"]);