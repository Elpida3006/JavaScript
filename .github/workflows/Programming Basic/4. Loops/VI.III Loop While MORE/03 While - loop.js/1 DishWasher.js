function dishWasher(input) {

    let bottles = +(input.shift());
    let comand = (input.shift());
    let preparat = bottles * 750;

    let free_vero = 0;
    let part = 1;
    let dishes = 0;
    let pots = 0;

    while (comand > 0 || comand == "End") {

        if (comand == "End") {
            break;
        }
        else {
            let dishes_pot = +comand;
            if (part % 3 === 0) {
                free_vero = preparat - dishes_pot * 15;
                preparat = free_vero;
                pots += dishes_pot;
            }
            else {
                free_vero = preparat - dishes_pot * 5;
                preparat = free_vero;
                dishes += dishes_pot;
            }
        }
        part++
        comand = (input.shift());
    }

    if (free_vero >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${free_vero} ml.`);
    }
    else {
        console.log(`Not enough detergent, ${Math.abs(free_vero)} ml. more necessary!`);
    }


}
dishWasher(["2", "53", "65", "55", "End"]);
dishWasher(["1", "10", "15", "10", "12", "13", "30"]);

