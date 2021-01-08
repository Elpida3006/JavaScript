function flowers(countHrizantems, countRose, countTulip, season, holiday) {

    countHrizantems = +(countHrizantems);
    countRose = +(countRose);
    countTulip = +(countTulip);
    season = season;
    holiday = holiday;



    let hrizantema = {
        "Spring": 2,
        "Summer": 2,
        "Autumn": 3.75,
        "Winter": 3.75

    }
             let rose = {
                    "Spring": 4.1,
                    "Summer": 4.1,
                    "Autumn": 4.5,
                    "Winter": 4.5

    }
    let tulip = {
        "Spring": 2.5,
        "Summer": 2.5,
        "Autumn": 4.15,
        "Winter": 4.15

    }
let priceRose = countRose * rose[season];
let pricehrizantems = countHrizantems * hrizantema[season]  
let priceTulip = countTulip * tulip[season];
let price = priceRose + pricehrizantems + priceTulip;
if (holiday === "Y") {
    price *= 1.15;
    
}
if (countTulip > 7 && season === "Spring") {
    price *= 0.95;
}
if (countRose >= 10 && season === "Winter") {
    price *= 0.90;
}
if ((countRose + countTulip + countHrizantems) > 20) {
    price *= 0.80;
}
let Last_price = price + 2;
console.log(Last_price.toFixed(2));
}
flowers(2, 4, 8, "Spring", "Y");
flowers(3, 10 ,9, "Winter", "N");
flowers(10, 10, 10, "Autumn", "N");