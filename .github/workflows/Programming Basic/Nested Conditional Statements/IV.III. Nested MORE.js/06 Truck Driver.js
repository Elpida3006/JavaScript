function truckDriver(season, km) {
    season = season;
    km = +(km);
    let kmForSeason = km * 4;
    let salary = 0;

    if (km <= 5000) {
        if (season == "Spring" || season == "Autumn") {
            salary = 4 * km * 0.75;
        }
        else if (season == "Summer") {
            salary = 4 * km * 0.90;
        }
        else if (season == "Winter") {
            salary = 4 * km * 1.05;
        }
    }
    if (km > 5000 && km <= 10000) {
        if (season == "Spring" || season == "Autumn") {
            salary = 4 * km * 0.95;
        }
        else if (season == "Summer") {
            salary = 4 * km * 1.10;
        }
        else if (season == "Winter") {
            salary = 4 * km * 1.25;
        }
    }
    if (km > 10000 && km <= 20000) {
            salary = 4 * km * 1.45;
        
    }

salary = salary * 0.90;
console.log(salary.toFixed(2));

}
truckDriver("Summer", 3455);
truckDriver("Winter", 4350);
truckDriver("Winter", 5678);
truckDriver("Winter", 16042);
truckDriver("Spring", 1600);
truckDriver("Autumn", 8600);
truckDriver("Spring", 16942);
