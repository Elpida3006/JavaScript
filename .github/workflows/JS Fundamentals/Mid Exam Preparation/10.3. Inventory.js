// function inventory(array) {

//     let invetorys = array.shift().split(', ')

//     function collectItem(item) {
//         if (!invetorys.includes(item)) {
//             invetorys.push(item)
//         }
//     }

//     function dropItem(item) {
//         let index = invetorys.indexOf(item)
//         if (index > -1) {
//             invetorys.splice(index, 1)
//         }
//         // return invetorys.filter(x => x !== item);
//     }

//     function combineItems(oldItem, newItem) {
//         let itemIndexOld = invetorys.indexOf(oldItem)
//         if (itemIndexOld > -1) {
//             invetorys.splice(itemIndexOld + 1, 0, newItem)
//         }
//     }

//     function renewItem(item) {

//         let itemindex = invetorys.indexOf(item)
//         if (itemindex > -1) {
//             invetorys.splice(itemindex, 1)
//             invetorys.push(item)
//         }
//     }


//     let commandLine = array.shift();
//     while (commandLine != 'Craft!') {
//         let command = commandLine.split(' - ');

//         switch (command[0]) {
//             case 'Collect':
//                 collectItem(command[1]);
//                 break;
//             case 'Drop':
//                 dropItem(command[1]);
//                 break;
//             case 'Combine Items':
//                 let [oldItem, newItem] = command[1].split(':');
//                 combineItems(oldItem, newItem);
//                 break;
//             case 'Renew':
//                 renewItem(command[1]);
//                 break;
//         }


//         commandLine = array.shift();
//     }

//     console.log(invetorys.join(', '));

// }
function inventory(input) {
    let inventory = input.shift().split(", ");


    for (const commands of input) {
        let command = input.shift();
        if (command !== "Craft!") {
            let splitCommand = command.split(" - ");
            let action = splitCommand[0];
            let item = splitCommand[1];
            switch (action) {
                case "Collect":
                    if (!inventory.includes(item)) {
                        inventory.push(item);



                    }
                    break;
                case "Drop":
                    let itemIndex = inventory.indexOf(item);
                    if (itemIndex != -1) {
                        inventory.splice(itemIndex, 1)


                    }
                    break;
                case "Combine Items":
                    let [oldItem, newItem] = item.split(":");
                    let oldIndex = inventory.indexOf(oldItem);
                    if (oldIndex != -1) {
                        inventory.splice(oldIndex + 1, 0, newItem);
                    }


                    break;
                case "Renew":
                    itemIndex = inventory.indexOf(item);
                    if (itemIndex != -1) {
                        inventory.splice(itemIndex, 1);
                        inventory.push(item);
                    }


                    break;
            }


        }




    }
    console.log(inventory.join(","));



}
// inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])