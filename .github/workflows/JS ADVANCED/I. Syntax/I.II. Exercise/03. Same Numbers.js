function same(numbers) {
    numbers = numbers.toString()
    let isSame = true
    let total = 0
    for (let index = 0; index < numbers.length; index++) {
        let element = Number(numbers[index]);
        if (element !== Number(numbers[index + 1]) && index != numbers.length - 1) {
            isSame = false
        }
        total += element

    }
    if (isSame) {
        console.log(`true`);
    } else {
        console.log(`false`);
    }
    console.log(total);
}
// same(2222222)
same(1222)