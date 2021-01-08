function muOnline(array) {
    // array = array.split(' ')
    let room = array.split('|');
    let maxhealth = 100
    let coins = 0;
    let isWin = true;
    let currentDungeon = 0
    for (let i = 0; i < room.length; i++) {
        let command = room[i].split(' ')[0]
        let number = Number(room[i].split(' ')[1]);
        currentDungeon++
        if (command === 'potion') {
            // maxhealth = Math.min(100, number + maxhealth);
            // console.log(`You healed for ${number} hp.`);
            // console.log(`Current health: ${maxhealth} hp.`);

            console.log(`You healed for ${number + maxhealth > 100 ? 100 - maxhealth : number} hp.`);
            number + maxhealth > 100 ? maxhealth = 100 : maxhealth += number;
            console.log(`Current health: ${maxhealth} hp.`);
        } else if (command === 'chest') {
            coins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            maxhealth -= number;
            if (maxhealth > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                // console.log(`Best room: ${i + 1}`);
                console.log(`Best room: ${currentDungeon}`);
                isWin = false;
                break;
            }
        }
    }

    if (isWin) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${maxhealth}`);
    }

}
// muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
// You slayed rat.
// You slayed bat.
// You healed for 10 hp.
// Current health: 80 hp.
// You slayed rat.
// You found 100 bitcoins.
// You died! Killed by boss.
// Best room: 6
muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')
    // function my(data) {

//     let mydata = [...data]
//     console.log(...mydata);
// }
// my('1', '2', '3');