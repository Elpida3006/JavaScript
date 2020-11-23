function winnerTickets(strings) {
    let tickets = strings[0].split(/\, /g).map(x => x.trim())
        // console.log(tickets);
    let winnerHalfTicket = /[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}/g


    for (let ticket of tickets) {
        if (ticket.length !== 20) {
            console.log('invalid ticket');
        } else {
            let firstPart = ticket.slice(0, ticket.length / 2)
            let secondPart = ticket.slice(ticket.length / 2, ticket.length)
                // console.log(firstPart);
                // console.log(secondPart);
            if (!firstPart.match(winnerHalfTicket) || !secondPart.match(winnerHalfTicket)) {
                console.log(`ticket "${ticket}" - no match`);
            } else if (firstPart.match(winnerHalfTicket) && secondPart.match(winnerHalfTicket)) {
                let firstWinChance = firstPart.match(winnerHalfTicket)
                let secondWinChance = secondPart.match(winnerHalfTicket)
                if (firstWinChance[0][0] !== secondWinChance[0][0]) {
                    console.log(`ticket "${ticket}" - no match`);
                } else {


                    if (firstWinChance[0].length == secondWinChance[0].length) {

                        if ((firstWinChance[0].length === secondWinChance[0].length) && firstWinChance[0].length === 10) {
                            console.log(`ticket "${ticket}" - ${firstPart.length}${ticket[0]} Jackpot!`);
                        } else {
                            console.log(`ticket "${ticket}" - ${firstWinChance[0].length}${firstWinChance[0][0]}`)
                        }

                    } else {
                        if (firstWinChance[0].length < secondWinChance[0].length) {

                            console.log(`ticket "${ticket}" - ${firstWinChance[0].length}${firstWinChance[0][0]}`);
                        } else {
                            console.log(`ticket "${ticket}" - ${secondWinChance[0].length}${secondWinChance[0][0]}`);
                        }
                    }

                }
            }

        }

    }





}
winnerTickets(['^^^^^^Ca^^^^^^shCash, $$$$$$$$$$$$$$$$$$$$, Ca$$$$$$$Caa$$$$$$sh, aabb, th@@@@@@eemo@@@@@@ey, validticketnomatch:('])

winnerTickets(['$$$$$$$$$$##########'])

// function solve(input) {
//     let pattern = /[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}/g;
//     let lines = input[0].split(/[\,]/g).map(line => line.trim());

//     for (const line of lines) {

//         if (line.length === 20) {
//             let firstHalf = line.slice(0, line.length / 2);
//             let secHalf = line.slice(line.length / 2, line.length);

//             if (valid = firstHalf.match(pattern)) {
//                 if (validSec = secHalf.match(pattern)) {
//                     let first = valid.join('');
//                     let sec = validSec.join('');
//                     if (sec.length > first.length) {
//                         let temp = first;
//                         first = sec;
//                         sec = temp;
//                     }
//                     if (first.includes(sec) && sec.length >= 6) {
//                         if (sec.length >= 6 && sec.length <= 9) {
//                             console.log(`ticket "${line}" - ${sec.length}${sec[0]}`);
//                         } else if (sec.length === 10) {
//                             console.log(`ticket "${line}" - ${sec.length}${sec[0]} Jackpot!`);
//                         }
//                     } else {
//                         console.log(`ticket "${line}" - no match`)
//                     }
//                 } else {
//                     console.log(`ticket "${line}" - no match`)
//                 }
//             } else {
//                 console.log(`ticket "${line}" - no match`)
//             }
//         } else {
//             console.log('invalid ticket');
//         }
//     }
// }
// solve(['Ca$$$$$$$Caa$$$$$$sh'])