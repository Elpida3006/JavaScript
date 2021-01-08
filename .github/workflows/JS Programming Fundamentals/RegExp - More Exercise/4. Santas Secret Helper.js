function santaChrithmass(arrayOfString) {
    let unicodeArray = ""
    let pattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*!(?<status>[GN])!/g;

    let key = Number(arrayOfString.shift())
    let string = arrayOfString.shift()

    while (string !== 'end') {

        for (let i = 0; i < string.length; i++) {
            let char = string[i]
            let unicode = char.charCodeAt() - key
            unicodeArray += (String.fromCharCode(unicode))
        }

        while (name = pattern.exec(unicodeArray)) {
            if ((name.groups['status'] == "G")) {
                console.log(name.groups['name']);
            }

        }

        unicodeArray = ""
        string = arrayOfString.shift()
    }

}



// santaChrithmass(
//     [
//         '3',
//         'CNdwhamigyenumje$J$',
//         'CEreelh-nmguuejn$J$',
//         'CVwdq&gnmjkvng$Q$',
//         'end'


//     ])
// function santaChrithmass(input) {
//     let key = Number(input.shift());
//     let pattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*!(?<status>[GN])!/g;

//     for (const string of input) {
//         if (string != 'end') {
//             let unicodeArray = '';
//             for (const char of string) {
//                 unicodeArray += String.fromCharCode(char.charCodeAt() - key);
//             }

//             while (name = pattern.exec(unicodeArray))
//                 if (name.groups['status'] === 'G') {
//                     console.log(name.groups['name']);
//                 }
//         } else {
//             break;
//         }
//     }
// }
santaChrithmass([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
])