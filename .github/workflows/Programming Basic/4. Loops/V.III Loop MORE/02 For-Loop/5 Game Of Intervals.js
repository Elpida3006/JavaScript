function game(input) {

    let count_step = +(input[0]);
    let perc1 = 0;
    let perc2 = 0;
    let perc3 = 0;
    let perc4 = 0;
    let perc5 = 0;
    let perc6 =0;

let point = 0;
    for (let i = 1; i <= count_step; i++) {
        let step = +(input[i]);
      

        if (step >= 0 && step <= 9) {
          
            point += step * 0.20;
            perc1++
        }
        else if (step >= 10 && step <= 19) {
           
            point += step * 0.30;
            perc2++
        }
        else if (step >= 20 && step <= 29) {
           
            point += step * 0.40;
            perc3++
        }
        else if (step >= 30 && step <= 39) {
           
            point += 50;
            perc4++
        }
        else if (step >= 40 && step <= 50) {
            
            point += 100;
            perc5++
        }
        else {
            
            point = point / 2;
            perc6++
        }

    }

 

    console.log(`${point.toFixed(2)}`);
    console.log(`From 0 to 9: ${(perc1 / count_step * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(perc2 / count_step * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(perc3 / count_step * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(perc4 / count_step * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(perc5 / count_step * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(perc6 / count_step * 100).toFixed(2)}%`);

}
game(["10", "43", "57", '-12', "23", "12", "0", "50", "40", "30", "20"]);
