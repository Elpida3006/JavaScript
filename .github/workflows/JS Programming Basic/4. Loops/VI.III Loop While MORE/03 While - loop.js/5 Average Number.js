function average(input) {
    let n = +(input.shift());
    let sum = 0;
for (let i = 1; i <= n; i++) {
    let number = +(input.shift());
sum += number;
average_sum = sum / n;
}

console.log(average_sum.toFixed(2));

}
average(["4", "3", "2", "4", "2"]);