function decreaseNOT(array) {
    let newArray = []
    let maxNumber;
    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        maxNumber = currentNumber[0]
        if ((currentNumber < array[i - 1]) || (currentNumber <= maxNumber)) {
            continue;
        } else {
            newArray += `${currentNumber} `
        }

    }

    console.log(newArray);

}
decreaseNOT([1, 3, 8, 4, 10, 12, 3, 2, 24])
decreaseNOT([1, 2, 3, 4])
decreaseNOT([20, 3, 2, 15, 6, 1])