//  listProcessor = (arrayOfStrings) => {

//      return arrayOfStrings.reduce(function(acc, comand) {
//          const [operation, ...text] = comand.split(' ')
//          const word = text.join(' ');

//          if (operation === 'add') {
//              return acc.concat(word)
//          } else if (operation === 'remove') {
//              return acc.filter(i => i !== word)
//          }

//          console.log(acc);
//          return acc;
//      }, []).join(',')
//  }
listProcessor = (closure) => {
    const obj = {
        add: (acc, word) => acc.concat(word),
        remove: (acc, word) => acc.filter(i => i !== word),
        print: (acc) => { console.log(acc); return acc; }
    }
    return closure.reduce(function(acc, comand) {
        const [operation, ...text] = comand.split(' ')
        const word = text.join(' ');
        return obj[operation](acc, word);

    }, []).join(',')
}

function solve(input) {
    const listProcessorBuilder = function() {
        let list = [];

        return {
            // add: text => list.push(text),
            add: text => list = [...list, text],
            // remove: text => list.splice(list.indexOf(text), 1),
            remove: text => list = list.filter(x => x != text),
            print: () => console.log(list.join()),
        };
    }

    let listProcessor = listProcessorBuilder();

    input
        .map(x => x.split(' '))
        .forEach(([command, argument]) => {
            listProcessor[command](argument)
        });
}

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])