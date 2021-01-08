



//     //  // {Name: [price, discount]}


function fulelTank2(input) {
    gorivo = input.shift();
    litrigorivo = Number(input.shift());
    karta = input.shift();

    let pricepromo = {
        "Gasoline": [2.22, 0.18],
        "Diesel": [2.33, 0.12],
        "Gas": [0.93, 0.08]
    };
    // zadavame masiv ot tipa [0,1], ot koito izvikva po mqsto v "" si proverqva inputa koi e, 
    // v [] 0 i 1 mqsto


    let price = litrigorivo * pricepromo[gorivo][0];
    //deklarirame funkciq che cenata bez vsqkakvi promocii e 0-ta ot masiva

    if (karta === "Yes") {
        price -= litrigorivo * pricepromo[gorivo][1];
    }
    if (litrigorivo >= 20 && litrigorivo <= 25) {
        price *= 0.92;
    }
    else if (litrigorivo > 25) {
        price *= 0.90;
    }

    console.log(`${price.toFixed(2)} lv.`);
}








function fulelTank2(input) {
    gorivo = input.shift();
    litrigorivo = Number(input.shift());
    karta = input.shift();
    let price = 0;

    if (gorivo === "Gasoline") {
        if (karta === "Yes") {
            price = itrigorivo * (2.22 - 0.18);
        }
        else {
            price = litrigorivo * 2.22;
        }
    }

    if (gorivo === "Diesel") {
        if (karta === "Yes") {
            price = litrigorivo * (2.33 - 0.12);
        }
        else {
            price = litrigorivo * 2.33;
        }
    }
    if (gorivo === "Gas") {
        if (karta === "Yes") {
            price = litrigorivo * (0.93 - 0.08);
        }
        else {
            price = litrigorivo * 0.93;
        }

    }


    if (litrigorivo >= 20 && litrigorivo <= 25) {
        price *= 0.92;
    }
    else if (litrigorivo > 25) {
        price *= 0.90;
    }

    console.log(`${price.toFixed(2)} lv.`);
}
fulelTank2(["Gas", "30", "Yes"]);
fulelTank2(["Gasoline", "25", "No"]);
fulelTank2(["Diesel", "19", "No"]);