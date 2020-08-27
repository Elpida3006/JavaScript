function singTheWeells(input) {

    let controlNumber = Number(input.shift());
    let currentPass = 0;
    let possiblePassword = "";
    let isTruePassword = false;
    let truePass = 0;
    let counterPassword = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {

                    if ((a < b) && (c > d)) {

                        if ((a * b) + (c * d) == controlNumber) {

                            currentPass = `${a}${b}${c}${d}`
                            possiblePassword += `${a}${b}${c}${d} `;

                            counterPassword++

                            if (counterPassword == 4) {
                                isTruePassword = true;
                                truePass = currentPass;
                            }
                            
                        }
                    }



                }
            }
        }
    }
    console.log(possiblePassword);
    if (isTruePassword) {
        console.log(`Password: ${truePass}`);
    }
    else {
        console.log(`No!`);
    }
}
singTheWeells(["11"]);
singTheWeells(["139"]);