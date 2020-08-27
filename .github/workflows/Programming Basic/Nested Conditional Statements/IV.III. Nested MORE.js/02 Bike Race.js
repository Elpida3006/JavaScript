function velo(countJuniors, countSeniors, typeTrace) {
    countJuniors = +(countJuniors);
    countSeniors = +(countSeniors);
    typeTrace = typeTrace;

//taksaJuniour[typeTrace]
let taksaJuniour = {
    "trail": 5.5,
    "cross-country": 8.00,
    "downhill": 12.25,
    "road": 20
}
//taksaSeniors[typeTrace]
let taksaSeniors = {
    "trail": 7,
    "cross-country": 9.50,
    "downhill": 13.75,
    "road": 21.50
}
let sum = (countJuniors * taksaJuniour[typeTrace]) + (countSeniors * taksaSeniors[typeTrace])

if (typeTrace === "cross-country" &&( (countJuniors + countSeniors) >= 50)) {
    sum *= 0.75;
}

let fond = sum * 0.95;
console.log(fond.toFixed(2));

}
velo(10, 20, "trail");
velo(20, 25, "cross-country");
velo(30, 25, "cross-country");
velo(10, 10, "downhill");
velo(3, 40, "road");