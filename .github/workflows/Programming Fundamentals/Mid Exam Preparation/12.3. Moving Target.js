function movingTarget(array) {

    let sequenceOfTargets = array.shift().split(' ').map(Number);

    function shoot(index, power) {
        index = Number(index);
        power = Number(power)
        if (index >= 0 && index < sequenceOfTargets.length) {
            if (sequenceOfTargets[index] > power) {
                sequenceOfTargets[index] -= power;
            } else {
                sequenceOfTargets.splice(index, 1);
            }
        }
    }

    function add(index, value) {
        index = Number(index);
        value = Number(value);
        if (index >= 0 && index < sequenceOfTargets.length) {
            sequenceOfTargets.splice(index, 0, value);
        } else {
            console.log(`Invalid placement!`);
        }
    }

    function strike(index, radius) {
        index = Number(index);
        radius = Number(radius);
        if (sequenceOfTargets[index + radius] !== undefined && sequenceOfTargets[index - radius] !== undefined) {
            sequenceOfTargets.splice(index - radius, (radius * 2) + 1);

        } else {
            console.log(`Strike missed!`);
        }
    }
    let commands = array.shift()
    while (commands !== 'End') {
        let command = commands.split(' ');

        switch (command[0]) {
            case 'Shoot':
                shoot(command[1], command[2]);
                break;
            case 'Add':
                add(command[1], command[2]);
                break;
            case 'Strike':
                strike(command[1], command[2]);
                break;

        }

        commands = array.shift()
    }
    console.log(sequenceOfTargets.join('|'));
}
movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
])
movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
])

// console.log