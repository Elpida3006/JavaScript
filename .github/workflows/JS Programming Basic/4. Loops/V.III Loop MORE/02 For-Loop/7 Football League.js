function fOOtBalTurnir(input) {

let stadium = +(input[0]);
let fens = +(input[1]);
let sektorA = 0;
let sektorB = 0;
let sektorV = 0;
let sektorG = 0;

for (let i = 2; i <= fens + 1; i++) {
let sektor = input[i];

if (sektor == "A") {
    sektorA++
}
if (sektor == "B") {
    sektorB++
}
if (sektor === "V") {
    sektorV++
}
if (sektor == "G") {
    sektorG++
}

}
let fensPerc = (fens / stadium) * 100;
console.log(`${((sektorA / fens) * 100).toFixed(2)}%`);
console.log(`${((sektorB / fens) * 100).toFixed(2)}%`);
console.log(`${((sektorV / fens) * 100).toFixed(2)}%`);
console.log(`${((sektorG / fens) * 100).toFixed(2)}%`);
console.log(`${fensPerc.toFixed(2)}%`);

}
fOOtBalTurnir(["76", "10", "A", "V", "V", "V", "G", 'B', "A", "V", "B", "B"])
