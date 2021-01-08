function add(x) {
    function sum(a) {

        x += a
        return sum;
    }
    sum.toString = () => x;
    return sum;
}
//  add(1);
//  add(1)(6)(-3);
console.log(add(1));
console.log(add(1)(6)(-3));

//CURRYING