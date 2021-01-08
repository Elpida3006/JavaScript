function bills(input) {
let monts = +(input[0]);

// let water = 20;
// // let internet = 15;
// let other = 0;
let sum_electro = 0;
// other = (electro + water + internet ) * 1.20;



for (let i = 1; i <= monts; i++) {
    let electro = +input[i];
    sum_electro += electro
    
}

let sum_water = 20 * monts;
let sum_internet = 15 * monts;
let sum_other = (sum_electro + sum_water + sum_internet ) * 1.20;
let average = (sum_water + sum_internet + sum_other + sum_electro) / monts;

console.log(`Electricity: ${sum_electro.toFixed(2)} lv`);
console.log(`Water: ${sum_water.toFixed(2)} lv`);
console.log(`Internet: ${sum_internet.toFixed(2)} lv`);
console.log(`Other: ${sum_other.toFixed(2)} lv`);
console.log(`Average: ${average.toFixed(2)} lv`);

}
bills(["5", "68.63", " 89.25", '132.53', '93.53', "63.22"])