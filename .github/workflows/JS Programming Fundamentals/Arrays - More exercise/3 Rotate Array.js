function rotate(array) {
    let countrotate = array.pop();
    let actualarray = array;


    while (countrotate > 0) {
        let lastElement = actualarray[actualarray.length - 1];
        array.pop()
        array.unshift(lastElement)
        countrotate--
    }
    console.log(array.join(' '));
}
rotate(['1', '2', '3', '4', '2']);
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])