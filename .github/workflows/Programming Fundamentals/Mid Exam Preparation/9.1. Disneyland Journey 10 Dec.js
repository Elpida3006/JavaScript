function tripToDisnyland(data) {
    let neededMoneyForTrip = Number(data.shift());
    let monthForSave = Number(data.shift());

    let saveMoney = 0;

    for (let i = 1; i <= monthForSave; i++) {

        if (i % 2 !== 0 && i !== 1) {
            saveMoney += -(saveMoney * 0.16) + (neededMoneyForTrip / 4)
        }
        if (i % 4 == 0) {
            saveMoney *= 1.25;
        }
        if (i % 2 == 0 || i == 1) {
            saveMoney += (neededMoneyForTrip / 4);
        }

    }

    if (saveMoney >= neededMoneyForTrip) {
        let freeMoney = saveMoney - neededMoneyForTrip;
        console.log(`Bravo! You can go to Disneyland and you will have ${freeMoney.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(neededMoneyForTrip - saveMoney).toFixed(2)}lv. more.`);
    }




}
// tripToDisnyland([1000, 4]);
tripToDisnyland([3265, 3]);