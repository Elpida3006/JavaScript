function bossRush(stringOfArray) {

    let count = Number(stringOfArray.shift());

    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;

    for (let i = 0; i < count; i++) {
        let line = stringOfArray.shift();

        if (valid = pattern.exec(line)) {
            console.log(`${valid.groups.boss}, The ${valid.groups.title}`);
            console.log(`>> Strength: ${valid.groups.boss.length}`);
            console.log(`>> Armour: ${valid.groups.title.length}`);
        } else {
            console.log(`Access denied!`);
        }


    }


}

bossRush(['3', '|GEORGI|:#Lead architect#', '|Hristo|:#High Overseer#', '|STEFAN|:#Assistant Game Developer#']);