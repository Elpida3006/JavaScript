function storeCatalgie(array) {

    let store = {}
    array.forEach(line => {
        let [productName, productPrice] = line.split(' : ')
        let letter = productName[0]
        if (!store[letter]) {
            store[letter] = {}
        }
        store[letter][productName] = productPrice
    });

    // console.log(store);
    let sortedWord = Object.keys(store).sort(
        (a, b) => a.localeCompare(b)
    )
    for (let key of sortedWord) {
        console.log(key);
        let sortedProducts = Object.keys(store[key]).sort((a, b) => a.localeCompare(b))
        for (let product of sortedProducts) {
            console.log(` ${product}: ${store[key][product]}`);
        }

    }

}
storeCatalgie(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])