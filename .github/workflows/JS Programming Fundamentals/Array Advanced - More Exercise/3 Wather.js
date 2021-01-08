// function weather(array, commands) {
//     let airPolution = array.map(el => el.split(' ').map(Number));


//     let breeze = row => {
//         for (let i = 0; i < 5; i++) {
//             airPolution[row][i] - 15 < 0 ?
//                 airPolution[row][i] = 0 :
//                 airPolution[row][i] -= 15;
//         }
//     };
//     let gale = col => {
//         for (let row = 0; row < 5; row++) {
//             airPolution[row][col] - 20 < 0 ?
//                 airPolution[row][col] = 0 :
//                 airPolution[row][col] -= 20
//         }
//     };
//     let smog = el => {
//         for (let row = 0; row < 5; row++) {
//             for (let col = 0; col < 5; col++) {

//                 airPolution[row][col] += el
//             }

//         }
//     };
//     while (commands.length > 0) {

//         let rows = commands.shift().split(' ');
//         let command = rows[0]
//         let index = Number(rows[1]);

//         if (command == 'breeze') {
//             breeze(index);
//         } else if (command == 'gale') {
//             gale(index);
//         } else if (command == 'smog') {
//             smog(index);
//         }
//     }


//     let isPopulated = false;
//     let result = []
//     for (let r = 0; r < 5; r++) {
//         for (let c = 0; c < 5; c++) {
//             let current = airPolution[r][c];
//             if (current >= 50) {

//                 let areaString = `[${r}-${c}]`;
//                 result.push(areaString);

//                 isPopulated = true;
//             }
//         }
//     }
//     console.log(isPopulated ? `Polluted areas: ${result.join(', ')}` : 'No polluted areas')
// }
// weather(["5 7 72 14 4",
//     "41 35 37 27 33",
//     "23 16 27 42 12",
//     "2 20 28 39 14",
//     "16 34 31 10 24"
// ], ["breeze 1", "gale 2", "smog 25"]);
// weather(["5 7 2 14 4",
//     "21 14 2 5 3",
//     "3 16 7 42 12",
//     "2 20 8 39 14",
//     "7 34 1 10 24"
// ], ["breeze 1", "gale 2", "smog 35"]);

function weather(array, commands) {
    let airPolution = array.map(el => el.split(' ').map(Number));

    while (commands.length > 0) {

        let rows = commands.shift().split(' ');
        let command = rows[0]
        let index = Number(rows[1])
        for (let row = 0; row < airPolution.length; row++) {
            for (let col = 0; col < airPolution[row].length; col++) {

                if (command == 'breeze') {
                    if (row == index) {
                        airPolution[index][col] - 15 < 0 ?
                            airPolution[index][col] = 0 :
                            airPolution[index][col] -= 15;
                    }
                }
                if (command == 'gale') {
                    if (col == index) {
                        airPolution[row][index] - 20 < 0 ?
                            airPolution[row][index] = 0 :
                            airPolution[row][index] -= 20
                    }
                }
                if (command == 'smog') {
                    airPolution[row][col] += index
                }

            }
        }
    }
    let isPopulated = false;
    let result = []
    for (let r = 0; r < airPolution.length; r++) {
        for (let c = 0; c < airPolution[r].length; c++) {
            let current = airPolution[r][c];
            if (current >= 50) {
                result.push(`[${r}-${c}]`)
                isPopulated = true;
            }
        }
    }
    console.log(isPopulated ? `Polluted areas: ${result.join(', ')}` : 'No polluted areas')
}
weather(["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"
], ["breeze 1", "gale 2", "smog 35"]);
//Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]