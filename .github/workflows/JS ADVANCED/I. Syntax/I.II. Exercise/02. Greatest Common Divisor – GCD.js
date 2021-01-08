function greatestDivisior(number1, number2) {
    //алгоритъм на еклипт за намиране на най-малко общо кратно
    // итеративното решение е винаги по-добре ор рекурсивното

    //1. определяме по-малкото число
    let min = Math.min(number1, number2)
    let minDevisior = 1
        //2.изпълняваме цикъл 1..по-малкото число в което проверяваме дали се делят без остатък, и запазваме числото
    for (let index = 1; index <= min; index++) {
        if ((number1 % index == 0) && (number2 % index == 0)) {
            minDevisior = index
        }

    }

    //отпечатваме числото
    console.log(minDevisior);
}
//задачата може д асе реши с алгоритъм на еклипт
greatestDivisior(15, 5)
greatestDivisior(2154, 458)

// [] == true ? console.log('true') : console.log('false'); //false
// [] ? console.log('true'): console.log('false'); //true