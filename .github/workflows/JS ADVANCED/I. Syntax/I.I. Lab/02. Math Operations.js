function mathPeration(number1, number2, operation) {
    let result = 0
    switch (operation) {
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '+':
            result = number1 + number2;
            break;
        case '%':
            result = number1 % number2;
            break;
        case '**':
            result = number1 ** number2;
            break;
    }
    console.log(result);



}