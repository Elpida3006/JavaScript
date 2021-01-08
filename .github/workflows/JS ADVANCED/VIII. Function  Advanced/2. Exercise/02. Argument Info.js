// function solve() {
//     //създаваме обект с броя аегументи от всеки тип
//     const argTypes = {};
//     //обхождаме аргумрнтите
//     for (let arg of arguments) {
//         const type = typeof(arg);
//         const value = String(arg)
//             //отпечатваме типа и стойността на всеки аргумент
//             //  if (type === "object") {
//             //      console.log(`${type}: ${JSON.stringify(arg)}`)
//             //  } else {
//         console.log(`${type}: ${value}`);
//         //  }
//         //броим типа на аргумента
//         if (!argTypes[type]) {
//             argTypes[type] = 0
//         }
//         argTypes[type]++
//     }



//     //печатаме броя
//     Object.entries(argTypes).sort((kvp1, kvp2) => kvp2[1] - kvp1[1]).forEach(kvp => {
//         console.log(`${kvp[0]} = ${kvp[1]}`);
//     });

// }


function solve() {
    let count = {};
    let result = [];

    [...arguments].forEach(arg => {
        let type = typeof(arg);

        result.push({ type, value: arg })
        if (!count[type]) {
            count[type] = 0
        }
        count[type]++

    })
    result.forEach(row => console.log(`${row.type}: ${row.value}`))
    let sort = Object.entries(count).sort((a, b) => (a[1] - b[1]));
    sort.forEach((ele) => console.log(`${ele[0]} = ${ele[1]}`))

}
solve('cat', 42, function() { console.log('Hello world!'); })