function giftBox(data) {

    let sizeSide = Number(data.shift());
    let numberSide = 6;
    let neededArea = sizeSide * sizeSide * numberSide;

    let numberSheet = Number(data.shift());
    let singleSheet = Number(data.shift());
    let realArea = 0;
    for (let i = 1; i <= numberSheet; i++) {
        if (i % 3 == 0) {
            realArea += singleSheet * 0.25
        } else {
            realArea += singleSheet;
        }


    }
    let percReal = (realArea / neededArea) * 100;
    console.log(`You can cover ${percReal.toFixed(2)}% of the box.`);
}
giftBox([5,
    30,
    4,
])