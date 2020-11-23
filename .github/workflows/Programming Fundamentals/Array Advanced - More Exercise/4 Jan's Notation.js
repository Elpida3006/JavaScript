function notation(array) {

    let operand = '+, -, *, /';

    let po = (a, b) => {
        return a * b
    };

    let del = (a, b) => {
        return b / a;
    };
    let sub = (a, b) => {
        return a + b;
    };
    let extract = (a, b) => {
        return b - a;
    };
    let result = []

    for (i = 0; i < array.length; i++) {
        if (Number.isFinite(array[i])) {
            result.push(array[i])
        } else {
            if (result.length < 2) {
                return `Error: not enough operands!`
            } else {
                if (array[i] === "*") {
                    result.push(po(result.pop(), result.pop()));
                } else if (array[i] === "/") {
                    result.push(del(result.pop(), result.pop()));
                } else if (array[i] === "+") {
                    result.push(sub(result.pop(), result.pop()));
                } else if (array[i] === "-") {
                    result.push(extract(result.pop(), result.pop()));
                }
            }

        }
    }
    return result.length > 1 ?
        `Error: too many operands!` :
        result[0];

}
console.log(notation([5,
    3,
    4,
    '*',
    '-'
]));
console.log(notation([3,
    4,
    '+'
]));
console.log(notation([31,
    2,
    '+',
    11,
    '/'
]));