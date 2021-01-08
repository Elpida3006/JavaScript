function transportPrice(input) {

    let n = Number(input.shift());
    let dayNight = input.shift();

}


function transportPrice(n, dayNight) {

n = Number(n);
dayNight = dayNight;

let taxiday = 0.70 + n * 0.79
let taxinight = 0.70 + n * 0.90

if (n >= 100) {
    let traindayNight = n * 0.06
    console.log(traindayNight.toFixed(2));
}
else if (n >= 20) {
    let busdayNight = n * 0.09
    console.log(busdayNight.toFixed(2));
}
else 
{ 
    if (dayNight === "day") {
    console.log(taxiday.toFixed(2));
}
else if (dayNight === "night") {
console.log(taxinight.toFixed(2));
}
}
}

transportPrice("5", "day");
transportPrice("7", "night");
transportPrice("25", "day");
transportPrice("180", "night");






