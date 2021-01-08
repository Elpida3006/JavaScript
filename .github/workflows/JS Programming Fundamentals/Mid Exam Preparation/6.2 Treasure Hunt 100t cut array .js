function treasureHunt(array) {

    let treasureChest = array.shift().split('|')


    function loot(commands) {
        for (let i = 1; i < commands.length; i++) {
            if (!treasureChest.includes(commands[i])) {
                treasureChest.unshift(commands[i]);
            }
        }
    }

    function drop(index) {
        let dropped = treasureChest[index];
        // if (dropped !== undefined) {
        if (index >= 0 && index < treasureChest.length) {
            treasureChest.splice(index, 1)
            treasureChest.push(dropped);
        }

    }

    function steel(count) {
        count = Number(count)
        let steles = []
        if ((treasureChest.length - count) >= 0) {
            steles = treasureChest.splice(treasureChest.length - count, count)
        } else {
            steles = treasureChest.splice(0)
        }
        console.log(steles.join(', '));
        // for (let i = 1; i <= count; i++) {
        //     let steeles = treasureChest.pop()
        //     steles.push(steeles)
        // } 80t
        // console.log(steles.reverse().join(', '));
    }
    let command = array.shift();
    while (command !== 'Yohoho!') {
        let com = command.split(' ')
        switch (com[0]) {
            case 'Loot':
                loot(com);
                break;
            case 'Drop':
                drop(+com[1]);
                break;
            case 'Steal':
                steel(+com[1]);
                break;
        }

        command = array.shift();
    }


    if (treasureChest.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let wordSDevide = treasureChest.length;
        let sum = treasureChest.reduce((a, b) => a + b).length;
        console.log(`Average treasure gain: ${(sum / wordSDevide).toFixed(2)} pirate credits.`);


    }


}





treasureHunt([
    'Gold|Silver|Bronze|Medallion|Cup',
    'Loot Wood Gold Coins',
    'Loot Silver Pistol',
    'Drop 3',
    'Steal 3',
    'Yohoho!'
]);
treasureHunt(['Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!',
])