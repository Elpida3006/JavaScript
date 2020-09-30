// function dataday(year, month, day) {

//     let d = new Date(year, month - 1, day);

//     d.setDate(d.getDate() + 2)
//     console.log(`${year}-${month}-${day}`);
// }
function dataday(year, month, day) {
    let newDay = new Date(year, month -= 1, day += 1);

    let newYear = newDay.getFullYear();
    let newMonth = newDay.getMonth();
    let newDate = newDay.getDate();

    console.log(`${newYear}-${newMonth + 1}-${newDate}`);
}
dataday(2016, 9, 30);
dataday(2017, 12, 31);
dataday(2016, 2, 28);