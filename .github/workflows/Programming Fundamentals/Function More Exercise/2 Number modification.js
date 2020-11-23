function largeFiveModification(number) {
    let average_sum = 0;
    number = number.toString();
    while (average_sum < 5) {

        let sum = 0;
        average_sum = 0
        for (i = 0; i < number.length; i++) {

            let index = Number(number[i]);
            sum += index;

        }
        average_sum = sum / number.length;
        if (average_sum < 5) {
            number = number + "9"
        }

    }
    console.log(Number(number));
}
largeFiveModification(101)