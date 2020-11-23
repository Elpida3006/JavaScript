function shootForTheWin(array) {

    let targetShots = array.shift().split(' ').map(Number);

    let commands = array.shift()

    while (commands !== 'End') {
        let index = Number(commands.split(' '));
        if (targetShots[index] !== undefined && targetShots[index] !== -1) {
            let targetValue = targetShots[index]
            targetShots[index] = -1
            targetShots = targetShots.map(e => {
                if (e === -1) { return e; }

                if (e > targetValue) {
                    return e - targetValue;
                }
                return e + targetValue;
            });

        }


        commands = array.shift()
    }

    let shootTargets = targetShots.filter(e => e === -1).length;

    console.log(`Shot targets: ${shootTargets} -> ${targetShots.join(' ')}`);

}
shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End'])