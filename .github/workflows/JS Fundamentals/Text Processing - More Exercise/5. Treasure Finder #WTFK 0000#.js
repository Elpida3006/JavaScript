function treasureFinder(string) {

    let key = string.shift().split(" ").map(Number);

    // let result = '';

    // let material = /&(?<mat>[A-Za-z]+)&/g
    // let coordinates = /<(?<coord>[\w]+)>/g

    let commands = string.shift()

    while (commands !== 'find') {
        let number = 0;
        let clearC = ""
        let clearM = ""
        let material = false;
        let coordinates = false;

        for (let char of commands) {
            if (number === key.length) {
                number = 0;
            }

            let numberChar = char.charCodeAt() - key[number];
            let stringChar = String.fromCharCode(numberChar);



            // let clearMat = result.match(material);
            // let clearM = clearMat[0].split('').filter(x => x !== '&').join('');

            // let clearCoord = result.match(coordinates);
            // let clearC = clearCoord[0].split('').filter(x => x !== '>' && x !== '<').join('')
            if (stringChar === '&') {
                material = !material;
                number++;
                continue;
            }
            if (stringChar === '<') {
                coordinates = !coordinates;
                number++;
                continue;
            }
            if (material) {
                clearM += `${stringChar}`
            }
            if (coordinates && stringChar !== '>') {
                clearC += `${stringChar}`
            }

            number++;
        }
        if (clearM.length > 0 && clearC.length > 0) {
            console.log(`Found ${clearM} at ${clearC}`);
        }


        commands = string.shift()
    }


}



treasureFinder([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
])
treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
])