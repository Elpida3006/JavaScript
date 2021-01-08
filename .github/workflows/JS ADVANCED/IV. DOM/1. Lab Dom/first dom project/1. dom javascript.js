function pinkochoiseColour(color) {




    //MOJE S ARTICLE LIST ZA IZBIRANE NA PRODUKTITE
    let colorPaint = ''
    const colorG = document.getElementsByClassName('Green')[0];
    const colorY = document.getElementsByClassName('Yellow')[0]
    const colorP = document.getElementsByClassName('Pink')[0]
    const colorB = document.getElementsByClassName('Blue')[0]
    const colorT = document.getElementsByClassName('Turquoise')[0]
    const colorBk = document.getElementsByClassName('Black')[0]

    Array.from(document.querySelector('body').querySelectorAll('button')).forEach(a => {
        a.addEventListener('click', onClick);
    });
    const choise = {
        liter: '',
        colorPaint: '',

    };

    function onClick(e) {
        //Прочитаме аккво е натиснал бутона
        const value = e.target.value;
        if (value == 'Green') {
            alert(`You choose color Green`);
            choise.colorPaint = value
        } else if (value == 'Yellow') {
            alert(`You choose color Yellow`);
            choise.colorPaint = value
        } else if (value == 'Pink') {
            alert(`You choose color Pink`);
            choise.colorPaint = value
        } else if (value == 'Blue') {
            alert(`You choose color Blue`);
            choise.colorPaint = value
        } else if (value == 'Turquoise') {
            alert(`You choose color Turquoise`);
            choise.colorPaint = value
        } else if (value == 'Black') {
            alert(`You choose color Black`);
            choise.colorPaint = value
        }

        // const newArticle = document.createElement(colorPaint);

        let liter1 = document.getElementsByClassName('liters_1')
        let liter2 = document.getElementsByClassName('liters_2')
        let liter5 = document.getElementsByClassName('liters_5')
        let liter10 = document.getElementsByClassName('liters_10')
        let liter15 = document.getElementsByClassName('liters_15')
        let liter20 = document.getElementsByClassName('liters_20')

        const liter = 0
        if (value == '1') {
            alert(`You choose 1 Liters paint`);
            choise.liter = value
        } else if (value == '2') {
            alert(`You choose 2 Liters paint`);
            choise.liter = value
        } else if (value == '5') {
            alert(`You choose 5 Liters paint`);
            choise.liter = value
        } else if (value == '10') {
            alert(`You choose 10 Liters paint`);
            choise.liter = value
        } else if (value == '15') {
            alert(`You choose 15 Liters paint`);
            choise.liter = value
        } else if (value == '20') {
            alert(`You choose 20 Liters paint`);
            choise.liter = value
        }

        const result = document.getElementById('result')

        result.textContent = `You choice is ${choise.colorPaint} color and ${choise.liter} liters paint`
    }
}