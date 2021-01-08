function add(num1) {

    return function(num2) {
        return num1 + num2
    };
}

// closure & high order function

add = (num1) => {
    return (num2) => {
        return num1 + num2
    };
}