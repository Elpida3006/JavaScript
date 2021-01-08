// function songEncryption(input) {



//     //escape spaces and put array into string with join
//     let line = input.shift();
//     let mappedSong = [];
//     while (line !== 'end') {
//         let pattern = /^([A-Z][a-z'\s]+):([A-Z][A-Z\s]+[A-Z])$/gm;
//         let result = pattern.exec(line);
//         if (result) {
//             let [artist, song] = line.split(':');
//             let len = artist.length;

//             for (let i = 0; i < len; i++) {
//                 let currentChar = artist.charCodeAt(i);
//                 let newChar = currentChar + len;

//                 if (currentChar === 32) {
//                     mappedSong.push(' ');
//                     continue;
//                 }

//                 if (currentChar === 39) {
//                     mappedSong.push("'");
//                     continue;
//                 }

//                 if (i !== 0) {
//                     if (newChar > 122) {
//                         let calcChar = newChar - 122;
//                         let calcCharFinal = 96 + calcChar;
//                         newChar = calcCharFinal;
//                     }
//                 } else if (newChar > 90) {
//                     let calcChar = newChar - 90;
//                     let calcCharFinal = 65 + calcChar;
//                     newChar = calcChar;
//                 }

//                 let mappedChar = String.fromCharCode(newChar);
//                 mappedSong.push(mappedChar);

//             }

//             mappedSong.push('@');

//             let lenSong = song.length;

//             for (let i = 0; i < song.length; i++) {


//                 let currentChar = song.charCodeAt(i);
//                 let newChar = currentChar + len;

//                 if (currentChar === 32) {
//                     mappedSong.push(' ');
//                     continue;
//                 }

//                 if (currentChar === 39) {
//                     mappedSong.push("'");
//                     continue;
//                 }

//                 if (newChar > 90) {
//                     let calcChar = newChar - 90;
//                     let calcCharFinal = 64 + calcChar;
//                     newChar = calcCharFinal;
//                 }

//                 let mappedChar = String.fromCharCode(newChar);
//                 mappedSong.push(mappedChar);

//             }
//         }

//         if (mappedSong.join('') === '') {
//             console.log(`Invalid input!`)
//         } else {
//             console.log(`Successful encryption: ${mappedSong.join('')}`);
//         }

//         mappedSong = [];
//         line = input.shift();
//     }
// }



songEncryption([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
])
songEncryption([
    'Michael Jackson:ANOTHER PART OF ME',
    'Adele:ONE AND ONLY',
    "Guns n'roses:NOVEMBER RAIN",
    'Christina Aguilera: HuRt',
    'end'
])

function songEncryption(stringOfarray) {
    let command = stringOfarray.shift();

    let pattern = /^(?<artist>[A-Z][a-z\' ]+):(?<song>[A-Z ]+)$/;

    while (command !== 'end') {

        if (match = pattern.exec(command)) {

            let keyArtistLength = match.groups.artist.length;
            let artistSong = match[0]
            let output = [];

            for (let char of artistSong) {
                let newChar;
                if (char === ' ' || char === "'") {
                    newChar = char;
                    output.push(newChar);
                    continue;
                } else if (char === ':') {
                    newChar = '@';
                    output.push(newChar);
                    continue;
                } else {
                    let asciiOld = char.charCodeAt(0);
                    let asciiNew = Number(asciiOld) + keyArtistLength;
                    if (asciiOld >= 65 && asciiOld <= 90) {
                        if (asciiNew > 90) {
                            let diff = asciiNew - 90;
                            let fromStartUpper = 65 + diff - 1;
                            newChar = String.fromCharCode(fromStartUpper);
                        } else {
                            newChar = String.fromCharCode(asciiNew);
                        }
                    } else if (asciiOld >= 97 && asciiOld <= 122) {
                        if (asciiNew > 122) {
                            let diffTwo = asciiNew - 122;
                            let fromStartLower = 97 + diffTwo - 1;
                            newChar = String.fromCharCode(fromStartLower);
                        } else {
                            newChar = String.fromCharCode(asciiNew);
                        }
                    }
                    output.push(newChar);
                }
            }
            console.log(`Successful encryption: ${output.join('')}`);
        } else {
            console.log('Invalid input!');
        }
        command = stringOfarray.shift();
    }
}