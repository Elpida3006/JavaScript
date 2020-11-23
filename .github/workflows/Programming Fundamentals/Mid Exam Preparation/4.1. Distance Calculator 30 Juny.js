function distanceCalculator(data) {
    let stepCounter = Number(data.shift());
    let lengthStepCm = Number(data.shift());
    let neededDistanceM = Number(data.shift());

    let realdistance = 0;
    for (let i = 1; i <= stepCounter; i++) {
        if (i % 5 == 0) {
            realdistance += lengthStepCm * 0.7;
        } else {
            realdistance += lengthStepCm;
        }

    }

    realdistance /= 100;
    let perc = (realdistance / neededDistanceM) * 100;
    console.log(`You travelled ${perc.toFixed(2)}% of the distance!`);

}
distanceCalculator([100, 2, 1]);
distanceCalculator([5000,
    7.5,
    500
])