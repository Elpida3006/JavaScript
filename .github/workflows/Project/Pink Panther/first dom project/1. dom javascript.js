function pinkochoiseColour(color) {


    let colorG = document.getElementsByClassName('Green');
    let colorY = document.getElementsByClassName('Yellow')
    let colorP = document.getElementsByClassName('Pink')
    let colorB = document.getElementsByClassName('Blue')
    let colorT = document.getElementsByClassName('Turquoise')
    let colorBk = document.getElementsByClassName('Black')

    if (colorG) {
        alert(`You choose color Green`);
    } else if (colorY) {
        alert(`You choose color Yellow`);
    } else if (colorP) {
        alert(`You choose color Pink`);
    } else if (colorB) {
        alert(`You choose color Blue`);
    } else if (colorT) {
        alert(`You choose color Turquoise`);
    } else if (colorBk) {
        alert(`You choose color Black`);
    }
    let liter1 = document.getElementsByClassName('liters_1')
    let liter2 = document.getElementsByClassName('liters_2')
    let liter5 = document.getElementsByClassName('liters_5')
    let liter10 = document.getElementsByClassName('liters_10')
    let liter15 = document.getElementsByClassName('liters_15')
    let liter20 = document.getElementsByClassName('liters_20')

    if (liter1) {
        alert(`You choose 1 Liters paint`);
    }

}