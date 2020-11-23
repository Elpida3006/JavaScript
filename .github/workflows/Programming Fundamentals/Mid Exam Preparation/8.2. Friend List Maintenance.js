function friendListMaintenance(array) {

    let listUsernames = array.shift().split(', ');

    let commands = array.shift()
    let black = 0;
    let lose = 0;;

    function blacklist(name) {

        if (listUsernames.includes(name)) {
            console.log(`${name} was blacklisted.`);
            listUsernames.splice(listUsernames.indexOf(name), 1, 'Blacklisted');
            black++
        } else {
            console.log(`${name} was not found.`);
        }
        return black;
    }

    function error(index) {
        index = Number(index)
        let name = listUsernames[index]
        if (name !== 'Blacklisted' && name !== 'Lost') {
            console.log(`${listUsernames[index]} was lost due to an error.`);
            listUsernames.splice(index, 1, 'Lost');
            lose++
        }
        return lose;
    }

    function change(index, newName) {
        index = Number(index)
        let name = listUsernames[index]
        if (name !== undefined) {
            listUsernames.splice(index, 1, newName);
            console.log(`${name} changed his username to ${newName}. `);

        }
    }

    while (commands !== "Report") {
        let command = commands.split(' ')

        switch (command[0]) {
            case 'Blacklist':
                blacklist(command[1]);
                break;
            case 'Error':
                error(+command[1]);
                break;

            case 'Change':
                change(+command[1], command[2]);
                break;

        }


        commands = array.shift()
    }

    console.log(`Blacklisted names: ${black} `);
    console.log(`Lost names: ${lose} `);
    console.log(listUsernames.join(' '));

}

// function friendListMaintenance(input) {

//     let friendList = input.shift().split(', ');

//     let enter;

//     while ((enter = input.shift()) !== "Report") {
//         let [command, arg1, arg2] = enter.split(' ');

//         switch (command) {
//             case 'Blacklist':
//                 let index = friendList.indexOf(arg1);
//                 if (index > -1) {
//                     friendList.splice(index, 1, 'Blacklisted');
//                     console.log(`${arg1} was blacklisted.`);
//                     // black++
//                 } else {
//                     console.log(`${arg1} was not found`);
//                 }
//                 break;
//             case 'Error':


//                 let name = friendList[arg1];
//                 if (name !== 'Blacklisted' && name !== 'Lost') {

//                     friendList.splice(arg1, 1, 'Lost');
//                     console.log(`${name} was lost due to an error.`);
//                     // lose++
//                 }
//                 break;

//             case 'Change':

//                 if (arg1 >= 0 && arg1 < friendList.length) {
//                     console.log(`${friendList[arg1]} changed his username to ${arg2}. `);
//                     friendList.splice(arg1, 1, arg2);

//                 }
//                 break;

//         }


//     }


//     let countOccurences = (arr, str) => arr.filter(el => el === str).length;
//     console.log(`Blacklisted names: ${countOccurences(friendList, 'Blacklisted')}`);
//     console.log(`Lost names: ${countOccurences(friendList, 'Lost')}`);

//     // console.log(`Blacklisted names: ${black} `);
//     // console.log(`Lost names: ${lose} `);
//     console.log(friendList.join(' '));

// }
friendListMaintenance([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]);