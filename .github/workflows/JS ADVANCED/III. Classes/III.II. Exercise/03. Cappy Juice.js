function cappyJuice(array) {
    let juices = {};
    let bottles = new Map();
    for (const line of array) {
        let [juiceName, juiceQuantity] = line.split(' => ');
        if (!juices[juiceName]) {
            juices[juiceName] = Number(juiceQuantity);
        } else {
            juices[juiceName] += Number(juiceQuantity);
        }
        if (juices[juiceName] >= 1000) {
            let currQuantity = bottles.get(juiceName);
            if (currQuantity === undefined) {
                currQuantity = 0;
            }
            bottles.set(juiceName, Math.floor(juices[juiceName] / 1000) + currQuantity);

            juices[juiceName] -= Math.floor(juices[juiceName] / 1000) * 1000;
        }
    }
    for (const kvp of bottles) {
        console.log(`${kvp[0]} => ${kvp[1]}`);
    }
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);