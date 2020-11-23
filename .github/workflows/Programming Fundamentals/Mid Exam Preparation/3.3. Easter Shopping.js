function easterShopping(array) {
    let shoppingList = array.shift().split(' ');
    let numberCommands = Number(array.shift());



    while (numberCommands > 0) {
        let command = array.shift().split(' ')

        switch (command[0]) {
            case 'Include':
                shoppingList.push(command[1]);
                break;
            case 'Visit':
                if (command[1] == 'first') {
                    let numberOfshops = Number(command[2])
                    if (numberOfshops <= shoppingList.length && numberOfshops >= 0) {
                        for (let i = 1; i <= numberOfshops; i++) {
                            ///                    if (numberOfshops <= shoppingList.length && numberOfshops >= 0) {

                            shoppingList.shift()
                        }
                    }

                } else if (command[1] == 'last') {

                    let numberOfshops = Number(command[2])
                    if (numberOfshops <= shoppingList.length && numberOfshops >= 0) {
                        for (let i = 1; i <= numberOfshops; i++) {
                            shoppingList.pop()
                        }
                    }
                }
                break;
            case "Prefer":
                let index1 = Number(command[1]);
                let index2 = Number(command[2]);
                let shop1 = shoppingList[index1];
                let shop2 = shoppingList[index2];
                if (shop1 !== undefined && shop2 !== undefined) {
                    shoppingList.splice(index2, 1, shop1);
                    shoppingList.splice(index1, 1, shop2);

                }

                break;
            case "Place":
                let neededIndex = Number(command[2]) + 1;
                if (neededIndex < shoppingList.length && neededIndex >= 0) {
                    shoppingList.splice(neededIndex, 0, command[1]);
                }

                break;


        }
        numberCommands--

    }

    console.log(`Shops left:`);
    console.log(shoppingList.join(' '));


}
easterShopping([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);
easterShopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
])

// function easterShopping(array) {
//     let shoppingList = array.shift().split(' ');
//     let numberCommands = Number(array.shift());

//     function include(shop) {
//         shoppingList.push(shop);
//     }

//     function visitfirst(numberOfshops) {
//         let number = Number(numberOfshops)
//         if (number <= shoppingList.length && number >= 0) {
//             for (let i = 1; i <= number; i++) {
//                 shoppingList.shift()
//             }
//         }
//     }

//     function visitlast(numberOfshops) {
//         let number = Number(numberOfshops)
//         if (number <= shoppingList.length && number >= 0) {
//             for (let i = 1; i <= number; i++) {
//                 shoppingList.pop()
//             }
//         }
//     }

//     function pref(index1ofshops, index2ofshops) {
//         let index1 = Number(index1ofshops);
//         let index2 = Number(index2ofshops);
//         let shop1 = shoppingList[index1];
//         let shop2 = shoppingList[index2];
//         if (shop1 !== undefined && shop2 !== undefined) {
//             shoppingList.splice(index2, 1, shop1);
//             shoppingList.splice(index1, 1, shop2);
//         }
//     }

//     function place(shop, shopIndex) {
//         let neededIndex = Number(shopIndex) + 1;
//         if (neededIndex < shoppingList.length && neededIndex >= 0) {
//             shoppingList.splice(neededIndex, 0, shop);
//         }
//     }




//     while (numberCommands > 0) {
//         let command = array.shift().split(' ')

//         switch (command[0]) {
//             case 'Include':
//                 include(command[1]);
//                 break;
//             case 'Visit':
//                 if (command[1] == 'first') {

//                     visitfirst(Number(command[2]));
//                 } else if (command[1] == 'last') {

//                     visitlast(Number(command[2]));
//                 }
//                 break;
//             case "Prefer":
//                 pref((command[1], (command[2])));
//                 break;
//             case "Place":

//                 place((command[1], (command[2])));
//                 break;


//         }
//         numberCommands--

//     }





//     console.log(`Shops left:`);
//     console.log(shoppingList.join(' '));


// }



easterShopping([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);
easterShopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
])