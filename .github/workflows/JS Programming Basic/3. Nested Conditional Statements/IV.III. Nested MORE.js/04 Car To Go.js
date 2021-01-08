function rentaCar(budjet, season) {

    budjet = +(budjet);
    season = season;

    let klas = 0;
    let car = 0;
    let price = 0;

    if (budjet <= 100) {
        klas = "Economy class"
        switch (season)   {
            case "Summer": car = "Cabrio" ; price = budjet * 0.35; break;
            case "Winter": car = "Jeep" ;  price = budjet * 0.65; break;
        }
        }
  
    else if (budjet > 100 && budjet <= 500) {
        klas = "Compact class"
        switch (season)   {
            case "Summer": car = "Cabrio"; price = budjet * 0.45; break;
            case "Winter": car = "Jeep"; price = budjet * 0.80; break;
        }
    }
   
    else 
    {
        klas = "Luxury class"
        car = "Jeep"
        price = budjet * 0.90;
    }
console.log(`${klas}`);
console.log(`${car} - ${price.toFixed(2)}`);

}
rentaCar(450, "Summer")
rentaCar(450, "Winter")
rentaCar(99.99, "Summer")
rentaCar(450, "Winter")
rentaCar(70.50, "Winter")
rentaCar(1010, "Summer")
rentaCar(1010, "Winter")