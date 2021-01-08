// function passReset(arrayOfStrings) {

//     let currentString = arrayOfStrings.shift();

//     let commands = arrayOfStrings.shift();

//     while (commands !== 'Done') {
//         let command = commands.split(' ');

//         switch (command[0]) {
//             case 'TakeOdd':
//                 takeOdd();
//                 break;
//             case 'Cut':
//                 cut(command[1], command[2]);
//                 break;
//             case 'Substitute':
//                 substitute(command[1], command[2]);
//                 break;
//         }
//         commands = arrayOfStrings.shift();
//     }

//     function takeOdd() {
//         let password = []
//         for (i = 1; i < currentString.length; i += 2) {
//             password.push(currentString[i])
//         }
//         currentString = password.join('')
//         console.log(currentString);

//     }

//     function cut(index, length) {

//         index = Number(index);
//         length = Number(length);
//         // let cutting = currentString.substring(index, index + length);
//         let firstPart = currentString.substring(0, index)
//         let lastIndex = index + length
//         let secPart = currentString.substring(lastIndex)
//         currentString = firstPart + secPart
//         console.log(currentString);

//     }

//     function substitute(substring, substitute) {
//         if (currentString.includes(substring)) {
//             while (currentString.indexOf(substring) > -1) {
//                 currentString = currentString.replace(substring, substitute)

//             }
//             console.log(currentString);
//         } else {
//             console.log(`Nothing to replace!`);
//         }
//     }







//     //     console.log(`Your password is: ${currentString}`);






// }



// function passReset(arrayOfStrings) {

//     let currentString = arrayOfStrings.shift();

//     let commands = arrayOfStrings.shift();

//     while (commands !== 'Done') {
//         let command = commands.split(' ');

//         switch (command[0]) {
//             case 'TakeOdd':
//                 let password = []
//                 for (i = 1; i < currentString.length; i += 2) {
//                     password.push(currentString[i])
//                 }
//                 currentString = password.join('')
//                 console.log(currentString);
//                 break;
//             case 'Cut':

//                 index = Number(command[1]);
//                 length = Number(command[2]);
//                 let firstPart = currentString.substring(0, index)
//                 let lastIndex = index + length
//                 let secPart = currentString.substring(lastIndex)
//                 currentString = firstPart + secPart
//                 console.log(currentString);
//                 break;
//             case 'Substitute':

//                 let substring = command[1];
//                 let substitute = command[2]
//                 if (currentString.includes(substring)) {
//                     while (currentString.indexOf(substring) > -1) {
//                         currentString = currentString.replace(substring, substitute)

//                     }
//                     console.log(currentString);
//                 } else {
//                     console.log(`Nothing to replace!`);
//                 }
//                 break;
//         }
//         commands = arrayOfStrings.shift();
//     }




//     console.log(`Your password is: ${currentString}`);






// }



function passReset(data) {

    let password = data.shift();
    let command = data.shift();
    let newPass = '';

    while (command !== 'Done') {
        let [what, first, second] = command.split(' ');

        switch (what) {
            case 'TakeOdd':
                let pass = []
                for (i = 1; i < password.length; i += 2) {
                    pass.push(password[i])
                }
                password = pass.join('')
                console.log(password);


                break;

            case 'Cut':
                first = Number(first);
                second = Number(second);
                let firstPart = password.substring(0, first)
                let lastIndex = first + second
                let secPart = password.substring(lastIndex)
                password = firstPart + secPart
                console.log(password);


                break;

            case 'Substitute':


                if (password.includes(first)) {



                    while (index = password.indexOf(first) > -1) {
                        password = password.replace(first, second);

                    }
                    console.log(password);

                } else {
                    console.log('Nothing to replace!');
                }
                break;
        }
        command = data.shift();
    }
    console.log(`Your password is: ${password}`);
}
passReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])
passReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
])