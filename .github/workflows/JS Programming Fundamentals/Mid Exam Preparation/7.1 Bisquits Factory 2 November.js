function bisquits(data) {

    let bisquits_per_day = Number(data.shift());
    let workers = Number(data.shift());
    let concurent_per_30days = Number(data.shift());

    let production_per_day = bisquits_per_day * workers;
    let total_bisquits = 0;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            total_bisquits += Math.trunc(production_per_day * 0.75);
        } else {
            total_bisquits += Math.trunc(production_per_day);
        }
    }



    console.log(`You have produced ${total_bisquits} biscuits for the past month.`);
    if (total_bisquits > concurent_per_30days) {
        let percent = ((total_bisquits - concurent_per_30days) / concurent_per_30days) * 100;
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        let percent = ((concurent_per_30days - total_bisquits) / concurent_per_30days) * 100;
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }
}
bisquits([78, 8, 16000]);
bisquits([65,
    12,
    26000
])