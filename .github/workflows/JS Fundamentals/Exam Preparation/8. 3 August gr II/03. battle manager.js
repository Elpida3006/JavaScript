function battleManager(stringOfArray) {

    let users = {}
    let countUsers = 0;

    function added(personName, health, energy) {
        health = Number(health)
        energy = Number(energy)
        if (!users[personName]) {
            users[personName] = { health: health, energy: energy };
            countUsers++
        } else {
            users[personName].health += health;

        }
    }

    function attack(atackerName, defenderName, damage) {
        damage = Number(damage)
        if (users[atackerName] && users[defenderName]) {
            users[defenderName].health -= damage
            if (users[defenderName].health <= 0) {
                delete users[defenderName];
                countUsers--
                console.log(`${defenderName} was disqualified!`);

            }
            users[atackerName].energy -= 1
            if (users[atackerName].energy == 0) {
                delete users[atackerName];
                countUsers--
                console.log(`${atackerName} was disqualified!`);
            }
        }
    }

    function deletet(userName) {
        if (userName == 'All') {
            users = {}
            countUsers = 0;

        }
        if (users[userName]) {
            delete users[userName];
            countUsers--
        }
    }

    let commands = stringOfArray.shift()
    while (commands !== 'Results') {
        let command = commands.split(':')

        switch (command[0]) {
            case 'Add':
                added(command[1], command[2], command[3]);
                break;
            case 'Attack':
                attack(command[1], command[2], command[3]);
                break;
            case 'Delete':
                deletet(command[1]);
                break;

        }
        commands = stringOfArray.shift()
    }
    console.log(`People count: ${countUsers}`);
    let sorted = Object.entries(users).sort((a, b) => {
        if (b[1].health !== a[1].health) {
            return b[1].health - a[1].health
        } else {
            return a[0].localeCompare(b[0])
        }
    });

    for (let kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1].health} - ${kvp[1].energy} `);
    }

}
battleManager([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
])
battleManager([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
])
battleManager([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results'
])