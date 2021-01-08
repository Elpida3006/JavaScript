function fruit(string, numberWeight, numberPrice) {

    let fruit = string;
    let price = ((Number(numberWeight) * Number(numberPrice)) / 1000).toFixed(2);
    let weight = (Number(numberWeight) / 1000).toFixed(2);
    console.log(`I need $${(price)} to buy ${(weight)} kilograms ${fruit}.`);


}
fruit('orange', 2500, 1.80)
fruit = (string, numberWeight, numberPrice) => {

    let fruit = string;
    let price = ((Number(numberWeight) * Number(numberPrice)) / 1000).toFixed(2);
    let weight = (Number(numberWeight) / 1000).toFixed(2);
    return (`I need $${(price)} to buy ${(weight)} kilograms ${fruit}.`);


}