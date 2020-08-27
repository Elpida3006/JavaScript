
function system(input) {

    let needed_money = +(input.shift());
    let comand = input.shift();

    let count = 1;
    let money = 0;
    let sum_money_kesh = 0;
    let sum_money_card = 0;
    let kesh = 0;
    let card = 0;


    while (money < needed_money || comand == "End") {
        if (comand == "End") {
            break;
        }
        else {
            let price = +comand;
            if (price <= 100 && count % 2 != 0) {
                console.log(`Product sold!`);
                sum_money_kesh += price;
                kesh++
            }
            else if (price >= 10 && count % 2 == 0) {
                console.log(`Product sold!`);
                sum_money_card += price;
                card++
            }
            else {
                console.log(`Error in transaction!`);
            }
            money = sum_money_kesh + sum_money_card;
            comand = input.shift();
            count++
           
        }
       
    }
    if (money >= needed_money) {
        console.log(`Average CS: ${(sum_money_kesh / kesh).toFixed(2)}`);
        console.log(`Average CC: ${(sum_money_card / card).toFixed(2)}`);

    }
    else {
        console.log(`Failed to collect required money for charity.`)
    }



}
system(["500", "120", "8", "63", "256", "78", "317"]);
// system(["600", "86", "150", "98", "227", "End"]);