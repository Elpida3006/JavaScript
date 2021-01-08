function agregate(numbers) {


    let sum = 0;
    let sum2 = 0
    let result = ''

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        sum2 += 1 / numbers[i];
        result += `${numbers[i]}`


    }

    console.log(sum);
    console.log(sum2);
    console.log(result);

}
agregate([1, 2, 3]);