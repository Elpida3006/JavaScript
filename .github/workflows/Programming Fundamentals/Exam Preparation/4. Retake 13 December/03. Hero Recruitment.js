function herorecruitment(string) {
    // 1. inputs
    let hero = {

    };

    function enroll(heroName) {
        if (hero[heroName]) {
            console.log(`${heroName} is already enrolled.`);

        } else {
            hero[heroName] = []


        }
    }

    function learn(heroName, spellName) {

        if (hero[heroName]) {
            if (hero[heroName].includes(spellName)) {

                console.log(`${heroName} has already learnt ${spellName}.`);
            } else {
                hero[heroName].push(spellName)
            }
        } else {
            console.log(`${heroName} doesn't exist.`);

        }
    }


    function unlearn(heroName, spellName) {
        if (hero[heroName]) {
            if (hero[heroName].includes(spellName)) {
                hero[heroName] = [];
            } else {
                console.log(`${heroName} doesn't know ${spellName}.`);
            }
        } else {
            console.log(`${heroName} doesn't exist.`);
        }


    }
    // 2. Execute commands
    let commands = string.shift()

    while (commands !== 'End') {
        let command = commands.split(' ')

        switch (command[0]) {
            case 'Enroll':
                enroll(command[1]);
                break;
            case 'Learn':
                learn(command[1], command[2]);
                break;

            case 'Unlearn':
                unlearn(command[1], command[2]);
                break;

        }


        commands = string.shift();

    }

    // 3.sorting

    let heroEntries = Object.entries(hero).sort((a, b) => {
        if (b[1].length != a[1].length) {
            return b[1].length - a[1].length
        } else {
            return a[0].localeCompare(b[0])
        }


    });


    // 4.Print result
    console.log(`Heroes:`);
    for (const kvp of heroEntries) {
        console.log(`== ${kvp[0]}: ${kvp[1].join(', ')}`);
    }


}

herorecruitment([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]);
herorecruitment([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan Ivanov',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
]);