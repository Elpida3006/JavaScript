function solve() {
    const input = document.getElementById('expressionOutput');
    const output = document.getElementById('resultOutput');


    [...document.querySelector('div.keys').querySelectorAll('button')].forEach(a => {
        a.addEventListener('click', onClick);
    });

    const memory = {
        first: '',
        sec: '',
        operator: ''
    };
    const operators = {
        '+': () => Number(memory.first) + Number(memory.sec),
        '-': () => Number(memory.first) - Number(memory.sec),
        '*': () => Number(memory.first) * Number(memory.sec),
        '/': () => Number(memory.first) / Number(memory.sec),
        '%': () => Math.floor(Number(memory.first) % Number(memory.sec)),
        '=': true,
        'Back': true,
        '(': () => {
            let result = `${memory.first} ${memory.operator} ${memory.sec}`
            input.textContent = `${result }` + "("



        },
        ')': () => {},
        '.': () => {},
    };

    function onClick(e) {
        //Прочитаме аккво е натиснал бутона
        const value = e.target.value;
        // const number = Number.parseInt(value)

        if (operators[value]) {
            //Натисната е функция
            if (value === '=') {
                output.textContent = operators[memory.operator]();
            } else {
                memory.operator = value
            }

        } else {
            //натиснато е число
            if (memory.operator === '') {
                memory.first += value
            } else {
                memory.sec += value
            }
        }

        input.textContent = `${memory.first} ${memory.operator} ${memory.sec}`;





    }
    document.querySelector('.clear').addEventListener('click', () => {
        memory.first = '';
        memory.sec = '';
        memory.operator = '';
        input.textContent = '';
        output.textContent = '';


    });
    document.querySelector('.Back').addEventListener('click', () => {
        memory.first = '';
        memory.sec = '';
        memory.operator = '';
        input.textContent = 0
        output.textContent = '';


    });
}