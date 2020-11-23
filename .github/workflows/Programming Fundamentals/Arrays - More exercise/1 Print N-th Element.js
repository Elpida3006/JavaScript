function printNth_Element(array) {
    let stepArray = array[array.length - 1];
    let collection = ""

    for (let i = 0; i < array.length - 1; i++) {
        // collection[i] = array[0];
        if (i % stepArray === 0) {
            collection += array[i] + " ";
        }

    }

    console.log(collection);
    // console.log(`${collection.join(' ')}`);
}

function printNth_Element(array) {
    let stepArray = array[array.length - 1];
    array.pop(stepArray);

    const every_nth = (array, stepArray) => array.filter((e, i) => i % stepArray === stepArray - 2);

    console.log(`${every_nth(array, stepArray).join('\n')}`);
}





printNth_Element(['5', '20', '31', '4', '20', '2'])
printNth_Element(["dsa", "asd", "test", "test", "2"])
printNth_Element(["1", "2", "3", "4", "5", "6"])