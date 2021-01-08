function tanksCollector(array) {

    let gumi = array.shift().split(', ')
    let countCommands = Number(array.shift());

    function add(tankName) {
        if (gumi.includes(tankName)) {
            console.log(`Tank is already bought`);
        } else {
            gumi.push(tankName);
            console.log(`Tank successfully bought`);
        }
    }

    function remove(tankName) {
        if (gumi.includes(tankName)) {
            console.log(`Tank successfully sold`);
            gumi.splice(gumi.indexOf(tankName), 1)
        } else {
            console.log(`Tank not found`);
        }
    }

    function removeAt(index) {
        if (gumi[index] !== undefined) {
            gumi.splice(index, 1)
            console.log(`Tank successfully sold`);
        } else {
            console.log(`Index out of range`);
        }
    }

    function insert(index, tankName) {
        if (gumi[index] == undefined) {
            console.log(`Index out of range`);
        } else {
            if (gumi.includes(tankName)) {
                console.log(`Tank is already bought`);
            } else {
                gumi.splice(index, 0, tankName)
                console.log(`Tank successfully bought`);
            }
        }
    }

    for (let i = 1; i <= countCommands; i++) {
        let command = array.shift().split(', ')

        switch (command[0]) {
            case 'Add':
                add(command[1]);
                break;
            case 'Remove':
                remove(command[1])
                break;
            case 'Remove At':
                removeAt(command[1])
                break;
            case 'Insert':
                insert(command[1], command[2])
                break;

        }

    }
    console.log(gumi.join(', '));
}
tanksCollector([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 2, IS-2M',
    'Remove, T-34-85 Rudy'
]);
tanksCollector([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
]);
tanksCollector([
    'T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Remove, SU-100Y',
    'Remove, T-34-85',
    'Remove, STG'
])