function lastK(n, k) {


    let sumArray = [1]

    for (let i = 1; i < n; i++) {

        let sum = 0;
        for (let j = i - 1; j >= i - k; j--) {
            if (j < 0) {
                break;
            } else {
                sum += sumArray[j]
            }

        }
        sumArray.push(sum)

    }
    console.log(sumArray.join(' '));

}
lastK(6, 3);