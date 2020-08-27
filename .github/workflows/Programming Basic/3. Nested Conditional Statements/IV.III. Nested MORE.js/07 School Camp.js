function schoolCamp(vacation, group, school, night) {
    vacation = vacation;
    group = group;
    school = +(school);
    night = +(night);

price = 0;

if (vacation == "Winter") {
    if (group == "girls" || group == "boys") {
price = 9.60 * night * school;
        if (group == "girls") {
            typeSport = "Gymnastics"
        }
        else {
            typeSport = "Judo"
        }
    }
    else if (group == "mixed") {
        price = 10 * night * school;
        typeSport = "Ski"
    }
}
if (vacation == "Spring") {
    if (group == "girls" || group == "boys") {
price = 7.20 * night * school;
                if (group == "girls") {
                    typeSport = "Athletics"
                    }
                    else {
                     typeSport = "Tennis"
                    }
    }
    else if (group == "mixed") {
        price = 9.50 * night * school;
        typeSport = "Cycling"
    }
}
if (vacation == "Summer") {
      if (group == "girls" || group == "boys") {
        price = 15 * night * school;
        if (group == "girls") {
                    typeSport = "Volleyball"
                    }
                    else {
                     typeSport = "Football"
                    }
    }
    else if (group == "mixed") {
        price = 20 * night * school;
        typeSport = "Swimming"
    }
}
if (school >= 50) {
    price *= 0.50;
}
else if (school < 50, school >= 20) {
    price *= 0.85;
} 
else if (school < 20, school >= 10) {
    price *= 0.95;
} 


    console.log(`${typeSport} ${price.toFixed(2)} lv.`);

}
schoolCamp("Spring", "girls", 20, 7);
schoolCamp("Winter", "mixed", 9, 15);
schoolCamp("Summer", "boys", 60, 7);
schoolCamp("Spring", "mixed", 17, 14);