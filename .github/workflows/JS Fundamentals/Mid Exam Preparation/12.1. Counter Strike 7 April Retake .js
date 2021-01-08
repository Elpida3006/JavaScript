function counterStrike(data) {
    let beginEnergy = Number(data.shift());
    let command = data.shift()
    let won = 0;

    while (command !== "End of battle") {
        let distance = Number(command);
        if (beginEnergy - distance < 0) {

            console.log(`Not enough energy! Game ends with ${won} won battles and ${beginEnergy} energy`);
            break;
        }

        won++
        beginEnergy -= distance;
        if (won % 3 == 0) {
            beginEnergy += won;
        }


        command = data.shift()
    }
    if (command == "End of battle") {
        console.log(`Won battles: ${won}. Energy left: ${beginEnergy} `);
    }
}
counterStrike([100,
    10,
    10,
    10,
    1,
    2,
    3,
    73,
    10,
])
counterStrike([200,
    54,
    14,
    28,
    13,
    "End of battle"
])