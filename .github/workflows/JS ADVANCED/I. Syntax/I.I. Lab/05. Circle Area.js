function circleArea(data) {
    let circle = 0
    if (data === Number(data)) {
        circle = Math.PI * (data ** 2)
        console.log(circle.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof data}.`);
    }
}
circleArea(5)
circleArea('string')
circleArea([])
circleArea({})
circleArea('')