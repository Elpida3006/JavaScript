function vacationToFrance(array) {
    let budget = Number(array.pop());
    let startBudget = budget;
    let commandArray = array[0].split('|');
    let haveShopping = 0;
    let shoppingArray = []
    for (let i = 0; i < commandArray.length; i++) {
        let command = commandArray[i].split('->')
        let type = command[0];
        let price = Number(command[1]);

        if (type == "Clothes") {
            if (price > 50.00 || startBudget - price < 0) {
                continue;
            } else {
                startBudget -= price
                haveShopping += price;
                shoppingArray.push((price * 1.4).toFixed(2))
            }
        }
        if (type == "Shoes") {
            if (price > 35.00 || startBudget - price < 0) {
                continue;
            } else {
                startBudget -= price
                haveShopping += price;
                shoppingArray.push((price * 1.4).toFixed(2))
            }
        }
        if (type == "Accessories") {
            if (price > 20.50 || startBudget - price < 0) {
                continue;
            } else {
                startBudget -= price
                haveShopping += price;
                shoppingArray.push((price * 1.4).toFixed(2))
            }
        }

    }
    console.log(shoppingArray.join(' '));

    let profit = ((haveShopping * 1.4) + startBudget) - budget;
    console.log(`Profit: ${profit.toFixed(2)}`);
    let isTickets = (haveShopping * 1.4) + startBudget
    if (isTickets > 150) {
        console.log(`Hello, France!`);
    } else {
        console.log(`Time to go.`);
    }

}
vacationToFrance([
    'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
    '120'
]);
vacationToFrance(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60',
    '90'
])