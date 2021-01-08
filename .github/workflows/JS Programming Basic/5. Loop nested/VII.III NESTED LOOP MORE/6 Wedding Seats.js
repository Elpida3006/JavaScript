function wedding_place(input) {
    let sektor_Last = input.shift();
    sektor_Last = sektor_Last.charCodeAt();
    let count_Row = +input.shift();
    let countEven = +input.shift();


    let counter = 0;

    for (let i = 65; i <= sektor_Last; i++) {
        for (let j = 1; j <= count_Row; j++) {

            if (j % 2 !== 0) {
                for (let k = 97; k < 97 + countEven; k++) {
                    console.log(`${String.fromCharCode(i)}${(j)}${String.fromCharCode(k)}`);
                    counter++
                }
            }

            else if (j % 2 == 0) {
                for (let k = 97; k < 97 + countEven + 2; k++) {
                    console.log(`${String.fromCharCode(i)}${(j)}${String.fromCharCode(k)}`);
                    counter++
                }
            }

        }
        count_Row++
    }

    console.log(counter);

}
wedding_place(["B", "3", "2"]);