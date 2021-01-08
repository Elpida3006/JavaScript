function clock(input) {


    for (let hour = 0; hour <= 23; hour++) {
        for (let minutes = 0; minutes <= 59; minutes++) {
            for (let sek = 0; sek <= 59; sek++) {
                console.log(`${hour} : ${minutes} : ${sek}`);
            }
        }
    }


}