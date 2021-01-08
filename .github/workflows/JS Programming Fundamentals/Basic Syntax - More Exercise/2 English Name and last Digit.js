function nameOfLastDigit(n) {
    let last = n % 10;
    let lastDigit = "";
    switch (last) {
        case 1:
            lastDigit = "one";
            break;
        case 2:
            lastDigit = "two";
            break;
        case 3:
            lastDigit = "three";
            break;
        case 4:
            lastDigit = "four";
            break;
        case 5:
            lastDigit = "five";
            break;
        case 6:
            lastDigit = "six";
            break;
        case 7:
            lastDigit = "seven";
            break;
        case 8:
            lastDigit = "eight";
            break;
        case 9:
            lastDigit = "nine";
            break;
        default:
            lastDigit = "zero";
            break;
    }
    console.log(lastDigit);



}

function nameOfLastDigit(n) {
    n = Number(n);
    let last = n % 10;
    let lastDigit = "";


    if (last == "1") {
        lastDigit = "one"
    }
    if (last == "2") {
        lastDigit = "two"
    }
    if (last == "3") {
        lastDigit = "three"
    }
    if (last == "4") {
        lastDigit = "four"
    }

    if (last == "5") {
        lastDigit = "five"
    }
    if (last == "6") {
        lastDigit = "six"
    }
    if (last == "7") {
        lastDigit = "seven"
    }
    if (last == "8") {
        lastDigit = "eight"
    }
    if (last == "9") {
        lastDigit = "nine"
    }
    if (last == "0") {
        lastDigit = "zero"
    }
    console.log(lastDigit);
}
nameOfLastDigit(512);