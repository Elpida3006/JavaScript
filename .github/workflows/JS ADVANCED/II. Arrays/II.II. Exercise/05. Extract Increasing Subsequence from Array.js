// function increaseNumbers(array) {
//     let res = []
//     let max = array[0];
//     array.forEach((element, index) => {

//         if (array[index] >= max) {

//             res.push(array[index])
//             max = array[index]
//         }


//     });
//     console.log(res.join('\n'));
// }

function increaseNumbers(array) {
    let res = []
    let max = array[0];
    array.map((element) => {

        if (element >= max) {

            res.push(element)
            max = element
        }


    });
    return res.join('\n');
}
increaseNumbers([1,
    3, 3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
])
increaseNumbers([18, 20,
        3,
        2,
        15,
        6,
        1,
        30, 18
    ])
    // function solve(input) {
    //     let result = input.reduce((a, b) => {
    //         if (b >= Math.max(...a)) {
    //             a.push(b);
    //         }
    //         return a;
    //     }, [])
    //         .join('\n');

//     console.log(result);
// }