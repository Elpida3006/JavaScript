function vacation(budjet, season) {
    budjet = +(budjet);
    season = season;

    let location;
    let place;
    let price;

    if (budjet <= 1000) {
        place = "Camp";
        if (season == "Summer") {
            location = "Alaska"
            price = budjet * 0.65;
        }
        else if (season == "Winter") {
            location = "Morocco"
            price = budjet * 0.45;
        }
        
    }
    if (budjet > 1000 && budjet <= 3000) {
        place = "Hut";
        if (season == "Summer") {
            location = "Alaska"
            price = budjet * 0.80;
        }
        else if (season == "Winter") {
            location = "Morocco"
            price = budjet * 0.60;
        }
        
    }
    if (budjet > 3000) {
        place = "Hotel";
        price = budjet * 0.90;
        if (season == "Summer") {
            location = "Alaska"
        }
        else if (season == "Winter") {
            location = "Morocco"
        }
        
    }

console.log(`${location} - ${place} - ${price.toFixed(2)}`);
}
vacation(800, "Summer")
vacation(799.50, "Winter")
vacation(1100, "Summer")
vacation(2543.99, "Winter")
vacation(3460, "Summer")
vacation(5000, "Winter")