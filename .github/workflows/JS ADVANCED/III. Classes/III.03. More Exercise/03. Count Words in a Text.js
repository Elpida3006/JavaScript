 countWordsInText = (array) => {
         let object = {}
         array.forEach(str => {
             let currentWords = str.split(/[^0-9a-zA-Z_]/).filter(a => a !== '')
             currentWords.forEach(word => { object[word] ? object[word]++ : object[word] = 1 });
         });
         console.log(JSON.stringify(object))
     }
     //JSON.stringify go prevryshta v JSON
     //JSON.parse go pravi na string OT JSON