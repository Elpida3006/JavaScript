function evenCouple(input) {
    let firstPartOf1Couple = Number(input.shift());
    let firstPartOf2Couple = Number(input.shift());
    let different1whithot2Part1 = Number(input.shift());
    let different1whithot2Part2 = Number(input.shift());

    let secondPartOf1Couple = firstPartOf1Couple + different1whithot2Part1;
    let secondPartOf2Couple = firstPartOf2Couple + different1whithot2Part2;

    let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

    for (let i = firstPartOf1Couple; i <= secondPartOf1Couple; i++) {
        for (let j = firstPartOf2Couple; j <= secondPartOf2Couple; j++) {


            if (primeNumbers.includes(i) && primeNumbers.includes(j)) {

                console.log(`${i}${j}`);

            }
        }
    }
}
evenCouple(["10", "20", "5", "5"]);


function evenCouple(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    let ac = a + c;
    let bd = b + d;


    for (let i = a; i <= ac; i++) {
        for (let j = b; j <= bd; j++) {

            let isPrime2 = false;
            let isPrime1 = false;





            if (i % i == 0 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
                isPrime1 = true;
            }
            else {
                isPrime1 = false;
            }


            if (j % j == 0 && j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0 && j % 7 !== 0) {
                isPrime2 = true;
            }
            else {
                isPrime1 = false;
            }


            if ((isPrime1) && (isPrime2)) {
                console.log(`${i}${j}`);
            }

        }
    }
}
evenCouple(["10", "20", "5", "5"]);



function evenCouple(input) {

    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    let ac = a + c;
    let bd = b + d;


    for (let num1 = a; num1 <= ac; num1++) {
        for (let num2 = b; num2 <= bd; num2++) {

            let isPrime2 = true;
            let isPrime1 = true;


            for (let k = 2; k <= Math.sqrt(num1); k++) {
                for (let m = 2; m <= Math.sqrt(num2); m++) {
                    if (num1 % k == 0) {
                        isPrime2 = false;
                        break;
                    }
                    if (num2 % m == 0) {
                        isPrime1 = false;
                        break;
                    }



                }


            }

            if ((isPrime1) && (isPrime2)) {
                console.log(`${num1}${num2}`);

            }


        }
    }
}

evenCouple(["10", "20", "5", "5"]);
evenCouple([
    "13",
    "22",
    "4",
    "2"]);
//1123
// 1323
