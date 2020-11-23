function secretChat(arrayOfStrings) {

    let string = arrayOfStrings.shift()


    function insertSpase(index) {
        index = Number(index)
        let firstPart = string.substring(0, index)
        let secondPart = string.substring(index)

        string = firstPart + ` ` + secondPart

        // replace - МИНАВА ПРЕЗ ВСИЧКИ!! ТУК СЕ ИСКА САМО ПРЕЗ 1 - ЗАТОВА - SUBSTRING НА ПАРЧОЦИ!!!
        // string = string.replace(string[index], " " + string[index])
        console.log(string);
    }

    function reversed(string1) {


        if (string.includes(string1)) {
            let word = string1.split('').reverse().join('')
                // let word = ""
                // for (i = string1.length - 1; i >= 0; i--) {
                //     word += string1[i]
                // }
            let starTindex = string.indexOf(string1)
            let firstPartOfString = string.substring(0, starTindex)
            let secondPart = string.substring(starTindex + string1.length)
            string = firstPartOfString + secondPart + word
            console.log(string);
        } else {
            console.log('error');
        }

    }

    function change(string1, string2) {

        while (string.indexOf(string1) > -1) {
            // while (string.includes(string1)) {

            string = string.replace(string1, string2)
        }

        console.log(string);

    }
    let commands = arrayOfStrings.shift()


    while (commands !== 'Reveal') {
        let command = commands.split(':|:')

        switch (command[0]) {
            case 'InsertSpace':
                insertSpase(command[1]);
                break;
            case 'Reverse':
                reversed(command[1]);
                break;
            case 'ChangeAll':
                change(command[1], command[2]);
                break;

        }

        commands = arrayOfStrings.shift()
    }

    console.log(`You have a new text message: ${string}`)

}
// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ])
secretChat([
        'Hiwar?uiye',
        'ChangeAll:|:i:|:o',
        'Reverse:|:?uoy',
        'Reverse:|:jd',
        'InsertSpace:|:3',
        'InsertSpace:|:7',
        'Reveal'
    ])
    // function solution(input = []) {
    //     let message = input.shift();
    //     for (let i = 0; i < input.length; i++) {
    //       let line = input[i].split(":|:");
    //       if (line[0] === "InsertSpace") {
    //         let index = +line[1];
    //         let firstPart = message.substring(0, index);
    //         let secondPart = message.substring(index);
    //         message = firstPart + " " + secondPart;
    //         console.log(message);
    //       } else if (line[0] === "Reverse") {
    //         let sub = line[1];
    //         if (message.includes(sub)) {
    //           let index = message.indexOf(sub);
    //           let secondPart = message
    //             .substring(index, index + sub.length)
    //             .split("")
    //             .reverse()
    //             .join("");
    //           let firstPart = message.substring(0, index);
    //           let thirdPart = message.substring(index + sub.length);
    //           message = firstPart + thirdPart + secondPart;
    //           console.log(message);
    //         } else {
    //           console.log("error");
    //         }
    //       } else if (line[0] === "ChangeAll") {
    //         let sub = line[1];
    //         let str = line[2];
    //         while (message.includes(sub)) {
    //           let index = message.indexOf(sub);
    //           let part = message.substring(index, index + sub.length);
    //           message = message.replace(part, str);
    //         }
    //         console.log(message);
    //       } else if (line[0] === "Reveal") {
    //         console.log(`You have a new text message: ${message}`);
    //         break;
    //       }
    //     }
    //   }