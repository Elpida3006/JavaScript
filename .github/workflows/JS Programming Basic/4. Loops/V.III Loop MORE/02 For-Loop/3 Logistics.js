function logistics(input) {
    let package = +input[0];

    let sumTons = 0;
  
    let tons_M = 0;
    let tons_K = 0;
    let tons_T = 0;

    for (i = 1; i <= package; i++) {
        let packageTONS = +input[i];
        sumTons += packageTONS;

        if (packageTONS <= 3) {
            tons_M += packageTONS;
        }
        else if  (packageTONS >= 4 && packageTONS <= 11) {
            tons_K += packageTONS;
        }
        else {
            tons_T += packageTONS;

        }
    }
   

    let price_MIKROBUS = tons_M * 200;
    let price_KAMION = tons_K * 175;
    let price_TRAIN = tons_T * 120
    let sumPrice = price_MIKROBUS + price_KAMION + price_TRAIN;
    let aver_priceTon = sumPrice / sumTons;

    let perc_M = tons_M / sumTons * 100;
    let perc_K = tons_K / sumTons * 100;
    let perc_T = tons_T / sumTons * 100;

    

    console.log(`${aver_priceTon.toFixed(2)}`);
    console.log(`${perc_M.toFixed(2)}%`);
    console.log(`${perc_K.toFixed(2)}%`);
    console.log(`${perc_T.toFixed(2)}%`);

}
logistics(["4", "1", "5", "16", "3"]);


