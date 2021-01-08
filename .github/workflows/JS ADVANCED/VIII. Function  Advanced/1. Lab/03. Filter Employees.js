solve = (jsanData, criteria) => {
    let data;
    let propName, propValue;
    criteria !== 'all' ? [propName, propValue] = criteria.split('-') : false
    try {
        data = JSON.parse(jsanData)
    } catch {
        data = []
    }
    data.filter(function(i) {
        return propName ? i[propName] === propValue : true
    }).forEach((item, index) => {
        console.log(`${index}. ${item.first_name} ${item.last_name} - ${item.email}`);
    });

}

const res1 = solve(JsanData, 'gender-Female')

let JsanData = (
    `[{
        "id": "1",
        "first_name": "Ardine",
        "last_name": "Bassam",
        "email": "abassam0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Jost",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      },  
    {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }]`,
    'gender-Female'

)

// let result = ((a) => {
//     return a + 1
// })(10);
// console.log(result);