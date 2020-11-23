function easterGifts(array) {
    let plannedGifts = array.shift().split(' ');

    let message = array.shift()
    while (message !== "No Money") {
        let step = message.split(' ');
        let command = step[0];
        let gift = step[1]
        let index = Number(step[2]);

        if (command == "OutOfStock") {
            while (plannedGifts.includes(gift)) {
                plannedGifts[plannedGifts.indexOf(gift)] = 'None';
            }
        }

        if (command == "Required") {
            for (let i = 0; i < plannedGifts.length; i++) {
                if (index <= plannedGifts.length && index >= 0) {
                    plannedGifts[index] = gift;
                }
            }

        }
        if (command == "JustInCase") {
            plannedGifts.pop()
            plannedGifts.push(gift)
        }

        message = array.shift()
    }
    let n = 'None'
    plannedGifts = plannedGifts.filter(el => el !== n);
    console.log(plannedGifts.join(' '));



}
easterGifts([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);