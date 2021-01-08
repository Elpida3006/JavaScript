function deserizlizeString(input) {

    let line = input.shift()
    let result = []
    while (line !== 'end') {
        [char, indexes] = line.split(':')

        let index = indexes.split('/')
        for (let i = 0; i < index.length; i++) {
            let value = index[i]
                // result.splice(key, 0, char)
            result[value] = char;
        }


        line = input.shift()
    }
    console.log(result.join(''));
}
deserizlizeString([
    'a:0/3/5/11', 'v:1/4',
    'j:2', 'm:6/9/15',
    's:7/13', 'd:8/14',
    'c:10', 'l:12',
    'end'
])

// function serializeString(input) {

//     let string = input.shift()
//     let object = {};

//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];

//         if (object[char]) {

//             object[char] += `/${i}`
//         } else {
//             object[char] = `${i}`;
//         }

//     }

//     Object.entries(object).forEach(kvp => {
//         console.log(`${kvp[0]}:${kvp[1]}`);
//     });



// }