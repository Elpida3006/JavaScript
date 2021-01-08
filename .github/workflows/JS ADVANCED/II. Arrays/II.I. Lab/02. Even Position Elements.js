//  even = (array) => {
//      let result = [];

//      array.forEach((element, index) => {
//          if (index % 2 == 0) {
//              result.push(element)
//          }
//      });
//      return result.join(' ');
//  }
//  console.log(even(['20', '30', '40']))


evenPositionElement = (input) => {
    let reducedResult = input.reduce((acc, curr, index) => {
        (index % 2 === 0) ? acc.push((i)): acc;
        return acc;
    }, []);
    return (reducedResult.join(' '));
}
console.log(evenPositionElement(['20', '30', '40']))