function crystals(array) {
    let neededthinkness = array.shift();

    let realThinkness = array.shift();
    while (realThinkness) {
        console.log(`Processing chunk ${realThinkness} microns`);

        let cut = 0;

        while (realThinkness / 4 >= neededthinkness) {
            realThinkness /= 4;
            cut++
        }
        if (cut != 0) {
            console.log(`Cut x${cut}`);

            console.log(`Transporting and washing`);
        }
        realThinkness = Math.floor(realThinkness);

        let lap = realThinkness * 0.80;
        let grind = realThinkness - 20;
        let lapCount = 0;
        let grindCount = 0;
        while (lap < grind && lap > neededthinkness) {
            while (realThinkness * 0.80 > neededthinkness) {
                realThinkness *= 0.80;
                lapCount++
            }
            if (lapCount != 0) {
                console.log(`Lap x${lapCount}`);
                realThinkness = Math.floor(realThinkness);
                console.log(`Transporting and washing`);
            }

            lap = realThinkness * 0.80;
            grind = realThinkness - 20;
        }

        while (realThinkness - 20 > neededthinkness) {
            realThinkness -= 20;
            grindCount++
        }
        if (grindCount != 0) {
            console.log(`Grind x${grindCount}`);
            realThinkness = Math.floor(realThinkness);
            console.log(`Transporting and washing`);
        }

        let eth = 0;
        let xRay = 0;
        while (realThinkness - 2 >= neededthinkness) {
            realThinkness -= 2;
            eth++
            if (realThinkness - 1 === neededthinkness && xRay !== 1) {
                realThinkness += 1;
                xRay++
            }

        }
        if (eth != 0) {
            console.log(`Etch x${eth}`);
            realThinkness = Math.floor(realThinkness);
            console.log(`Transporting and washing`);
        }


        if (xRay != 0) {
            console.log(`X-ray x${xRay}`);
        }
        if (realThinkness === neededthinkness) {
            console.log(`Finished crystal ${realThinkness} microns`);
        }


        realThinkness = array.shift();
    }


}




// crystals([1375, 50000]);
// crystals([1000,
//     4000,
//     8100
// ])
crystals([100, 101.9]);