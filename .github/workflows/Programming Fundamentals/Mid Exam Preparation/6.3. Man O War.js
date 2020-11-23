function manOWar(array) {
    let isFinished = false;
    let statustPirateShip = array.shift().split('>').map(Number);
    let statustWarShip = array.shift().split('>').map(Number);
    let healthCapacity = Number(array.shift())

    function fire(index, damage) {
        let ind = Number(index)
        let dam = Number(damage)
        if (statustWarShip[ind] !== undefined) {
            if (statustWarShip[ind] - dam <= 0) {
                //<=
                console.log(`You won! The enemy ship has sunken.`);
                isFinished = true;
                return;
            } else {
                statustWarShip[ind] -= dam;
            }
        }

    }

    function defend(startIndex, endIndex, damage) {
        let stIn = Number(startIndex)
        let endIn = Number(endIndex)
        let dam = Number(damage)
        if ((statustPirateShip[stIn] !== undefined) && (statustPirateShip[endIn] !== undefined)) {
            for (let i = stIn; i <= endIn; i++) {

                if (statustPirateShip[i] - dam <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    isFinished = true;
                    return;
                } else {
                    statustPirateShip[i] -= dam;
                }
            }
        }

    }

    function repair(index, health) {
        let ind = Number(index)
        let healthy = Number(health)
        if (statustPirateShip[ind] !== undefined) {

            if (statustPirateShip[ind] + healthy >= healthCapacity) {
                statustPirateShip[ind] = healthCapacity;
            } else {
                statustPirateShip[ind] += healthy;
            }
        }

    }

    function status() {
        let neededHealth = healthCapacity * 0.20;
        let count = 0
        statustPirateShip.filter(el => {

            if (el < neededHealth) {
                count++
            }

        })
        console.log(`${count} sections need repair.`);
    }


    let commands = array.shift()
    while (commands !== 'Retire') {
        if (isFinished == true) {
            break;
        }
        //!!!!!!prowerkata na bulevata
        let command = commands.split(' ');
        switch (command[0]) {

            case 'Fire':
                fire(command[1], command[2]);
                break;
            case 'Defend':
                defend(command[1], command[2], command[3]);
                break;
            case 'Repair':
                repair(command[1], command[2]);
                break;
            case 'Status':
                status();
                break;
        }
        commands = array.shift()
    }
    if (!isFinished) {
        let pirateShipSum = statustPirateShip.reduce((a, b) => a + b, 0)
        let warshipSum = statustWarShip.reduce((a, b) => a + b, 0)
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`)
    }



}
manOWar([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]);
manOWar([
    '2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
])