function circleareaandperimetar (input) {

    let radius = Number(input.shift());

    let calculatedarea = (Math.PI * radius * radius).toFixed(2);
    let calculatedparametar = (2 * Math.PI * radius).toFixed(2);
    

    console.log(calculatedarea);
    console.log(calculatedparametar);

}
circleareaandperimetar();
