//  sortArray = (array, order) => {
//      switch (order) {
//          case 'asc':
//              return array.sort((a, b) => a - b); // Order in ascending order.
//          case 'desc':
//              return array.sort((a, b) => b - a); // Order in descending order.
//      }
//  }




// sortArr = (arr, typeSort) => {
//     if (typeSort == 'asc') { return (arr.sort((a, b) => a - b)) } else { return (arr.sort((a, b) => b - a)) }
// }
// sortArr([14, 7, 17, 6, 8], 'asc')

function sortArr(arr, typeSort) {
    //s obekt
    let sortFunc = {
        asc: function(arr) {
            return (arr.sort((a, b) => a - b))
        },
        desc: function(arr) { return (arr.sort((a, b) => b - a)) }
    }
    let func = sortFunc[typeSort]
    return func(arr);
}
console.log(sortArr([14, 7, 17, 6, 8], 'asc'));