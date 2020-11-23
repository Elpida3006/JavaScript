let washing = function(operationCleaning) {
    let sucsessClean = 0;
    for (let i = 0; i < operationCleaning.length; i++) {
        let operation = operationCleaning[i];
        switch (operation) {
            case "soap":
                sucsessClean += 10;
                break;
            case "water":
                sucsessClean *= 1.20;
                break;
            case "vacuum cleaner":
                sucsessClean *= 1.25;
                break;
            case "mud":
                sucsessClean *= 0.90;
                break;


        }
    }
    return `The car is ${sucsessClean.toFixed(2)}% clean.`;
}
console.log(washing(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));