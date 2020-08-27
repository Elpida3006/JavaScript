function happyCat(input) {
    let day = Number(input.shift());
    let hour = Number(input.shift())
    let price_hours = 0;
    let sum = 0;
let total = 0;
    for (let d = 1; d <= day; d++) {
       sum = 0;
        for (let h = 1; h <= hour; h++) {
           
            if (d % 2 == 0 && h % 2 !== 0) {
                price_hours = 2.5;
                sum += price_hours;

            }
            else if (d % 2 !== 0 && h % 2 == 0) {
                price_hours = 1.25;
                sum += price_hours;

            }

            else {
                price_hours = 1.00;
                sum += price_hours;
            }


        }
        console.log(`Day: ${d} - ${sum.toFixed(2)} leva`);
        total += sum;
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
   


}
happyCat(["2", "5"]);
happyCat(["5", "2"]);