function backInTheDays(input) {
  let money = +(input.shift());
  let live = +(input.shift());
// function backInTheDays(money, live) {
//      money = +(money);
//      live = +(live);


    for (let i = 1800; i <= live; i++) {
        if (i % 2 == 0) {
            money -= 12000;
        }
        else {
            
            money -= (12000 + (50 * (i - 1800 + 18)));
        }
    }


    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }
}
backInTheDays(50000, 1802)
backInTheDays(100000.15, 1808) 