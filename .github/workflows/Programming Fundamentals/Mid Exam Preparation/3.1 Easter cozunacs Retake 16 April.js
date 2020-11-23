function easterCozunacs(products) {
    let budget = Number(products.shift());
    let priceFlour = Number(products.shift());
    let priceEggsPackage = priceFlour * 0.75;
    let priceLiterMilk = priceFlour * 1.25;

    let oneCozunacs = priceFlour + priceEggsPackage + (priceLiterMilk / 4);
    let coloredEggs = 0;
    let countCozunacs = 0;

    while (budget > 0) {

        if (budget - oneCozunacs <= 0) {
            break;
        }
        budget -= oneCozunacs;
        countCozunacs++
        coloredEggs += 3;

        if (countCozunacs % 3 == 0) {
            coloredEggs -= (countCozunacs - 2);
        }

    }


    console.log(`You made ${countCozunacs} cozonacs! Now you have ${coloredEggs} eggs and ${budget.toFixed(2)}BGN left.`);


}
easterCozunacs([20.50, 1.25]);
easterCozunacs([15.75,
    1.4
]);