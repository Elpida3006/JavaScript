function pets(input) {

let days = Number(input.shift());
let totalfood = Number(input.shift());
let dogdays= Number(input.shift());
let catday = Number(input.shift());
let turtledaygr = Number(input.shift());




let turtleday = turtledaygr / 1000;
let animaldays = days * (dogdays + catday + turtleday);

if (totalfood >= animaldays) {
    console.log(`${Math.floor(totalfood - animaldays)} kilos of food left.`)
}
else 
{
    console.log(`${Math.ceil(animaldays - totalfood)} more kilos of food are needed.`)
}

}
pets(2, 10, 1, 1, 1200);
pets(5, 10, 2.1, 0.8, 321);
