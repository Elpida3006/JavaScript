function passwordGenerator(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let o = Number(input.shift());
    let result = "";

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= l; j++) {
            for (let p = 2; p <= o; p++) {

                if (i % 2 == 0 && p % 2 == 0) {
                    if (j == 2 || j == 3 || j == 5 || j == 7) {
                        result = `${i} ${j} ${p} `
                        console.log((result));
                    }

                }

            }
        }
    }



}
// passwordGenerator(["3", "5", "5"]);
passwordGenerator(["8", "2", "8"]);