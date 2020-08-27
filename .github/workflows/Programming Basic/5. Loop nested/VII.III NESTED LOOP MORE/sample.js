
function simple() {

    let a = 1;
    let b = 3;
    let ac = 3;
    let bd = 7;

let isPrime1 = false;
let isPrime2 = false;

    for (let i = 1; i <= (ac); i++) {
        for (let j = 3; j <= (bd); j++) {

        if (a % i == 0 && i % 2 !== 0) {
            isPrime1 = true;
        
        }
        else {
            isPrime1 = false;
        }

        
            if (b % j == 0 && j % 2 !== 0) {
                isPrime2 = true;
            }
            else {
                isPrime2 = false;
            }
            if ((isPrime1) && (isPrime2)) {
                console.log(`${i}${j}`);
            }

        }
    }

   
}
simple();