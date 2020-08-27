

function passwordGenerator(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());

    let maxPassword = Number(input.shift());

    let result = "";
    let count_combination = 0;
    let A = 35;
    let B = 64;



    for (let k = 1; k <= a; k++) {
        if (count_combination == maxPassword) {
            break;
        }
        for (let m = 1; m <= b; m++) {
            if (count_combination == maxPassword) {
                break;
            }
            if (A > 55) {
                A = 35;
            }

            if (B > 96) {
                B = 64;
            }
            result += `${String.fromCharCode(A)}${String.fromCharCode(B)}${(k)}${(m)}${String.fromCharCode(B)}${String.fromCharCode(A)}|`
            count_combination++
            A++
            B++



        }
    }
    console.log(result);
}
passwordGenerator(["2", "3", "10"]);