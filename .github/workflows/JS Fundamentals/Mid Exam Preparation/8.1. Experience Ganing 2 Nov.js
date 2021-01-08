function experienceGaining(data) {

    let neededExperience = Number(data.shift());
    let level = Number(data.shift());

    let fullExperience = 0;
    let battleCount = 0;
    for (let i = 1; i <= level; i++) {
        let getExperience = Number(data.shift());
        battleCount++
        if (i % 3 == 0) {
            fullExperience += getExperience * 0.15;
        }
        if (i % 5 == 0) {
            fullExperience += getExperience * 0.90;
        } else {
            fullExperience += getExperience;
        }
        if (fullExperience >= neededExperience) {
            break;
        }
    }


    if (fullExperience >= neededExperience) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - fullExperience).toFixed(2)} more needed.`);
    }

}
experienceGaining([500,
    5,
    50,
    100,
    200,
    100,
    30
])