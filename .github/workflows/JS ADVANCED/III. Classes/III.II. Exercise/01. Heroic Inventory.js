// function heroInventory(array) {

//     let result = [];

//     for (const line of array) {
//         let [name, level, itemString] = line.split(' / ');
//         let parts = line.split(' / ');
//         if (parts.length > 2) {
//             let [name, level, itemString] = line.split(' / ');
//             let items = itemString.split(', ');
//             result.push({ name, level: Number(level), items });
//         } else {
//             let [name, level] = line.split(' / ');
//             let items = [];
//             result.push({ name, level: Number(level), items });
//         }
//         // itemString = itemString ? itemString.split(', ') : []
//         // result.push({ name, level: Number(level), itemString });
//     }
//     console.log(JSON.stringify(result));
// }

heroInventory(['Isacc / 25 ',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'
]);

function heroInventory(array) {
    let itemslist = []
    let obj = {}


    for (let index = 0; index < array.length; index++) {
        // console.log(array[line]);
        let line = array[index].split(' / ');
        if (line.length > 2) {
            let [name, level, items] = line

            name = (name);
            level = Number(level);
            if (items.length > 1)
                items = items.split(', ');
            obj = {
                name: name,
                level: level,
                items: items
            }
        } else {
            let [name, level] = line

            name = (name);
            level = Number(level);
            obj = {
                name: name,
                level: level,

            }
        }

        itemslist.push(obj)
    }


    // itemslist.length > 0 




    console.log(JSON.stringify(itemslist));
}