
function vegetableMarket(input) {
    let pricekgVegetable = Number(input.shift());
    let pricekgFruit = Number(input.shift());
    let totalkgVegetable = Number(input.shift());
    let totalkgFruit = Number(input.shift());
    let total = (((pricekgVegetable * totalkgVegetable)  + (pricekgFruit * totalkgFruit )) / 1.94).toFixed(2) ;

    console.log(total);
    
}

vegetableMarket();


function vegetableMarket(input) {
    let pricekgVegetable = parseFloat(input.shift());
    let pricekgFruit = parseFloat(input.shift());
    let totalkgVegetable = parseInt(input.shift());
    let totalkgFruit = parseInt(input.shift());
    let total = (((pricekgVegetable * totalkgVegetable)  + (pricekgFruit * totalkgFruit )) / 1.94).toFixed(2);

    console.log(total);
    
}
vegetableMarket();

function vegetableMarket() {
    let pricekgVegetable = 0.194;
    let pricekgFruit = 19.4;
    let totalkgVegetable = 10;
    let totalkgFruit = 10;
    let total = (((pricekgVegetable * totalkgVegetable)  + (pricekgFruit * totalkgFruit )) / 1.94).toFixed(2);

    console.log(total);
}
vegetableMarket();


function vegetableMarket(arg) {
    let pricekgVegetable = parseFloat(arg.shift());
    let pricekgFruit = parseFloat(arg.shift());
    let totalkgVegetable = parseInt(arg.shift());
    let totalkgFruit = parseInt(arg.shift());
    let total = (((pricekgVegetable * totalkgVegetable)  + (pricekgFruit * totalkgFruit )) / 1.94).toFixed(2);

    console.log(total);
    
}
vegetableMarket();

function vegetableMarket([arg1, arg2, arg3, arg4]) {
    let pricekgVegetable = parseFloat(arg1);
    let pricekgFruit = parseFloat(arg2);
    let totalkgVegetable = parseInt(arg3);
    let totalkgFruit = parseInt(arg4);
    let total = (((pricekgVegetable * totalkgVegetable)  + (pricekgFruit * totalkgFruit )) / 1.94).toFixed(2);

    console.log(total);
    
}
vegetableMarket();