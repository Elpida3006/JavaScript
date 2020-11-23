function heroesOfCode(arrayOfStrings) {

    // 1. inputs
    let heroCount = Number(arrayOfStrings.shift());
    let hero = {};
    let maxHP = 100;
    let maxMP = 200;
    //podrevdame Hp, Mp s infoto im v obekta hero

    for (let i = 0; i < heroCount; i++) {
        let [heroName, currentHitPoint, currentManaPoint] = arrayOfStrings.shift().split(' ');

        currentHitPoint = Number(currentHitPoint);
        currentManaPoint = Number(currentManaPoint)

        hero[heroName] = {
            hp: currentHitPoint,
            mp: currentManaPoint
        };

    }

    function castSpell(heroName, manaPneeded, spellName) {
        manaPneeded = Number(manaPneeded);

        if (hero[heroName].mp - manaPneeded >= 0) {
            hero[heroName].mp -= manaPneeded
            console.log(`${heroName} has successfully cast ${spellName} and now has ${hero[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)

        }
    }


    function takeDamage(heroName, damage, attacker) {
        damage = Number(damage);
        hero[heroName].hp -= damage;
        if (hero[heroName].hp > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero[heroName].hp} HP left!`);
        } else {
            delete hero[heroName]
            console.log(`${heroName} has been killed by ${attacker}!`);
        }

    }

    function recharge(heroName, amount) {

        amount = Number(amount);
        let oldMp = hero[heroName].mp
        if ((oldMp + amount) > maxMP) {

            hero[heroName].mp = maxMP
            console.log(`${heroName} recharged for ${maxMP - oldMp} MP!`);
        } else {
            hero[heroName].mp += amount
            console.log(`${heroName} recharged for ${amount} MP!`);
        }

    }

    function heal(heroName, amount) {
        amount = Number(amount)

        let oldHp = hero[heroName].hp
        if ((oldHp + amount) > maxHP) {

            hero[heroName].hp = maxHP
            console.log(`${heroName} healed for ${maxHP - oldHp} HP!`);
        } else {
            hero[heroName].hp += amount
            console.log(`${heroName} healed for ${amount} HP!`);
        }
    }
    // 2. Execute commands
    let commands = arrayOfStrings.shift()

    while (commands !== 'End') {
        let command = commands.split(' - ')

        switch (command[0]) {
            case 'CastSpell':
                castSpell(command[1], command[2], command[3]);
                break;
            case 'TakeDamage':
                takeDamage(command[1], command[2], command[3]);
                break;
            case 'Recharge':
                recharge(command[1], command[2]);
                break;

            case 'Heal':
                heal(command[1], command[2]);
                break;

        }


        commands = arrayOfStrings.shift()

    }

    // 3.sorting
    let heroEntries = Object.entries(hero).sort((a, b) => a[0].localeCompare(b[0]));
    let sorted = heroEntries.sort((a, b) => b[1].hp - a[1].hp);

    // 4.Print result
    for (let kvp of sorted) {
        console.log(`${kvp[0]}`)
        console.log(`HP: ${kvp[1].hp}`);
        console.log(`MP: ${kvp[1].mp}`);
    }


}
heroesOfCode([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
heroesOfCode([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])