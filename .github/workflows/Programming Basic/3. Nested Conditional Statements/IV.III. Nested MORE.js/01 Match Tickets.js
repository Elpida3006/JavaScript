function matchTickets(budjet, tickets, group) {

let price = {
 "VIP": 499.99,
 "Normal": 249.99,
}

transport = 0;

if (group >= 1 && group <= 4) {
transport = budjet * 0.75;
}
if (group >= 5 && group <= 9) {
    transport = budjet * 0.60;
    }
    if (group >= 10 && group <= 24) {
        transport = budjet * 0.50;
        }
        if (group >= 25 && group <= 49) {
            transport = budjet * 0.40;
            }
            if (group >= 50) {
                transport = budjet * 0.25;
                }
let ticketMoney = budjet - transport;
let freeMoney = ticketMoney - (price[tickets] * group);

if (freeMoney >= 0) {
console.log(`Yes! You have ${freeMoney.toFixed(2)} leva left.`);
}
else
console.log(`Not enough money! You need ${Math.abs(freeMoney).toFixed(2)} leva.`)

}
// matchTickets(1000, "Normal", 1);
matchTickets(30000, "VIP", 49);

