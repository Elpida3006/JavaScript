function secretDoor(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let thirdnumber = Number(input.shift());

for (let i = 1; i <= firstNumber; i++) {
    for (let j = 1; j <= secondNumber; j++) {
        for (let k = 1; k <= thirdnumber; k++) {
            if (i % 2 == 0 && k % 2 == 0 && ( (j == 2 || j == 3 || j == 5 || j == 7) ) ) {
                console.log(`${i} ${j} ${k}`);
            }
        }
    }
}

}
secretDoor(["3", "5", "5"]);