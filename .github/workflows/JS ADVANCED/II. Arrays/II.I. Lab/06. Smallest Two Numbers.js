function smallestTwoNumbers(array) {
    let minArray = []

    let smallest = array.sort((a, b) => { return a - b });
    minArray = smallest.slice(0, 2);


    console.log(minArray.join(' '));
}