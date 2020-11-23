function archeryTournament(array) {
    let archeryTarget = array.shift().split('|').map(Number);
    let points = 0;

    function direct(targetIndex) {
        if (archeryTarget[targetIndex] < 5) {
            points += archeryTarget[targetIndex];
            archeryTarget[targetIndex] = 0
        } else {
            archeryTarget[targetIndex] -= 5;
            points += 5;
        }
    }

    function directionLeft(start, len) {
        let targetIndex;
        if (start < archeryTarget.length && start >= 0) {
            if ((start - len) < 0) {
                targetIndex = archeryTarget.length + (start - len) % archeryTarget.length
            } else {
                targetIndex = (start - len)
            }
            direct(targetIndex);
        }
    }

    function directionRight(start, len) {
        let targetIndex;
        if (start < archeryTarget.length && start >= 0) {
            if (start + len > archeryTarget.length) {
                targetIndex = ((start + len) % archeryTarget.length)
            } else {
                targetIndex = (start + len);
            }
            direct(targetIndex);
        }
    }

    let commands = array.shift()

    while (commands !== 'Game over') {
        let command = commands.split(" ")

        switch (command[0]) {
            case 'Shoot':
                let [direction, startIndex, length] = command[1].split('@')

                switch (direction) {
                    case "Left":
                        directionLeft(Number(startIndex), Number(length));
                        break;
                    case "Right":
                        directionRight(Number(startIndex), Number(length));
                        break;
                }
                break;

            case 'Reverse':
                archeryTarget.reverse()
                break;
        }
        commands = array.shift()
    }

    console.log(archeryTarget.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}
archeryTournament([
        '20|30|40|50|60',
        'Shoot Left@0@12',
        'Shoot Right@4@15',
        'Shoot Left@6@5',
        'Reverse',
        'Game over'
    ])
    // archeryTournament([
    //     '10|10|10|10|10',
    //     'Shoot Left@0@2',
    //     'Shoot Right@4@5',
    //     'Shoot Right@6@5',
    //     'Reverse',
    //     'Game over',

// ])