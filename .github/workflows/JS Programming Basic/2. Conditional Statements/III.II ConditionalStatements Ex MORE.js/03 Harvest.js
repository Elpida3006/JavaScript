function harvest(input) {
    X = Number(input.shift());
    Y = Number(input.shift());
    Z = Number(input.shift());
    countWORKER = Number(input.shift());

}


function harvest(X, Y, Z, countWORKER) {
X = Number(X);
Y = Number(Y);
Z = Number(Z);
countWORKER = Number(countWORKER);


let productionLiters = X * 0.40 * (Y / 2.5);

if (productionLiters  < Z) {
    console.log(`It will be a tough winter! More ${Math.floor(Z - productionLiters)} liters wine needed.`);
}

else
{
    console.log(`Good harvest this year! Total wine: ${Math.floor(productionLiters)} liters.`);
    console.log(`${Math.ceil(productionLiters - Z)} liters left -> ${Math.ceil((productionLiters - Z) / countWORKER)} liters per person.`)
}


 


}
harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);
