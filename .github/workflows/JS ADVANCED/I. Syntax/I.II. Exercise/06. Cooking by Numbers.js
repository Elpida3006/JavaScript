// function cookingByNumbers(array) {
//     let points = Number(array.shift());
//     let command = array.shift()

//     while (command != undefined) {

//         switch (command) {
//             case "chop":
//                 points = points / 2;
//                 break;
//             case "dice":
//                 points = Math.sqrt(points);
//                 break;
//             case "spice":
//                 points += 1;
//                 break;
//             case "bake":
//                 points = points * 3;
//                 break;
//             case "fillet":
//                 points -= points * 0.2;
//                 break;
//         }
//         console.log(points)
//         command = array.shift()
//     }

// }

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])

cookingByNumbers = (array) => {
    let points = Number(array.shift());

    while (command = array.shift()) {
        command == "chop" ? points /= 2 : command == "dice" ? points = (Math.sqrt(points)) : command == "spice" ? (points += 1) : command == "bake" ? (points = points * 3) : command == "fillet" ? (points -= points * 0.2) : 'pass'
        console.log(points)
    }
}

//вал
function cookingByNumbers(arr) {
    let number = Number(arr.shift());

    const operations = {
        chop: (n) => { return n / 2; },
        dice: (n) => { return Math.sqrt(n); },
        spice: (n) => { return n + 1; },
        bake: (n) => { return n * 3; },
        fillet: (n) => { return (n * 10 * 8) / 100; },
    };

    return arr.reduce((acc, cur, index) => {
        if (index !== 0) {
            console.log(acc);
        }

        return operations[cur](acc);
    }, number);
}