function fishLand(input) {

let price_kg_skumria =Number(input.shift());
let price_kg_caca = Number(input.shift());
let price_kg_palamud = ((price_kg_skumria) + ((price_kg_skumria / 100) * 60));
let price_kg_safrid =((price_kg_caca) +  ((price_kg_caca/ 100) * 80));
let price_kg_midi = 7.50;

let kg_palamud  = Number(input.shift());
let kg_safrid = Number(input.shift());
let kg_midi = Number(input.shift());

let sum = (((price_kg_palamud * kg_palamud) + (price_kg_safrid * kg_safrid) + (price_kg_midi * kg_midi)).toFixed(2));

console.log(sum);
    
}

