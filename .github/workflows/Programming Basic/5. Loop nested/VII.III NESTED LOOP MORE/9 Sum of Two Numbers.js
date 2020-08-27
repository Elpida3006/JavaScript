function magicNumber(input) {
    let number1 = Number(input.shift());
    let number2 = Number(input.shift());
    let specialNumbeR = Number(input.shift());
    let magic = "";
    let counter_Combination = 0;

    for (let i = number1; i <= number2; i++) {
        for (let j = number1; j <= number2; j++) {
            counter_Combination++
            if (i + j == specialNumbeR) {
                magic = `${i}${j} `;
                console.log(`Combination N:${counter_Combination} (${i} + ${j} = ${specialNumbeR})`);
                return;
            }
        }
    }

    console.log(`${counter_Combination} combinations - neither equals ${specialNumbeR}`);

}
magicNumber(["1", "10", "5"]);
magicNumber(["23", "24", "20"]);