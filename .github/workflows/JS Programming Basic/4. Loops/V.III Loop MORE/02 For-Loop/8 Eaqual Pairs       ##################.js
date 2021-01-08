




// function eaqualPairs(input) {
//     let count_double = Number(input.shift());

//     let sum = 0;
//     let double_sum = [];

//     for (let i = 1; i <= count_double; i++) {
//         let firstNum = Number(input.shift());
//         let secondNum = Number(input.shift());
//         sum = firstNum + secondNum;
//         double_sum.push(sum);
//     }
//     sum = 0;
//     for (let k = 0; k < count_double; k++) {
//         sum += double_sum[k];
//     }
//     if (sum / count_double == double_sum[0]) {
//         console.log(`Yes, value=${sum / count_double}`);
//     }
//     else {

//         let max = Math.max(...double_sum);
//         let min = Math.min(...double_sum);
//         let maxdiff = (max - min);

//         console.log(`No, maxdiff=${maxdiff}`);
//     }

// }






function eaqualPairs(input) {
    let count_double = +(input.shift());

    let sum1 = 0;
    let sum2 = 0;
    let same = 0;
    let maxDiff = 1;


    for (let i = 1; i <= count_double; i++) {
        let firstNum = Number(input.shift());
        let secondNum = Number(input.shift());

        sum1 = firstNum + secondNum;
        

        if (sum1 == sum2) {
            same += 1;
        }
        let diff = Math.abs(sum1 - sum2)

        if (diff > maxDiff && i >= 2) {
            maxDiff = diff;
        }
        if (sum2 != sum1) {
            sum2 = sum1;
        }

    }

    if (same == count_double - 1) {
        console.log(`Yes, value=${sum2}`);
    }
    else {
        console.log(`No, maxdiff=${maxDiff}`);
    }

}
eaqualPairs(['7', "34", "-33", "52", "12", "-32", "32", "23", "41", "7", "25", "34", "23", "124", "21"]);
//                      1   ,   64,             0,          64,             32,     57,         145
//No, maxdiff=88
eaqualPairs(["3", "1", "2", "0", "3", '4', "-1"]);
//Yes, value=3
eaqualPairs(["2", "1", "2", "2", "2"]);
//No, maxdiff=1
eaqualPairs(["1", "5", "5"]);
//Yes, value=10
//maxdiff - първоначално му давам стойност 1, тъй като няма как да е по-малко
//  от това, и от там нататък да си направих if-а за него като добавих като допълнително
//  условие и че i от цикъла трябва да е >=2. 

