function dna(number) {


    let rythmDna = 'ATCGTTAGGG'.split('');

    for (let row = 1; row <= number; row++) {
        let [partOne, partTwo] = rythmDna.splice(0, 2);
        rythmDna.push(partOne)
        rythmDna.push(partTwo)

        if (row === 1 || row % 4 === 1) {
            console.log(`**${partOne}${partTwo}**`);
        } else if (row === 2 || row % 4 === 2) {
            console.log(`*${partOne}--${partTwo}*`);
        } else if (row === 3 || row % 4 === 3) {
            console.log(`${partOne}----${partTwo}`);
        } else if (row === 4 || row % 4 === 0) {
            console.log(`*${partOne}--${partTwo}*`);
        }


    }
}


// dna(4)
dna(6)