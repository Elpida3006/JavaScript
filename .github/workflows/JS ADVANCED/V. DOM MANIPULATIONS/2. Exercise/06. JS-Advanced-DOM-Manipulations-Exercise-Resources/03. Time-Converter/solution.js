function attachEventsListeners() {

    //ввзимаме референции към всички полета
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')
        //закачаме eventhandler
    document.querySelector('#daysBtn').addEventListener('click', onclick);
    document.querySelector('#hoursBtn').addEventListener('click', onclick);
    document.querySelector('#minutesBtn').addEventListener('click', onclick);
    document.querySelector('#secondsBtn').addEventListener('click', onclick);

    //обект с съотношение между единиците
    let metric = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    //функция която конвертира
    function convert(value, parametar) {
        const inDays = value / metric[parametar]
        return {
            days: inDays * metric.days,
            hours: inDays * metric.hours,
            minutes: inDays * metric.minutes,
            seconds: inDays * metric.seconds,
        };
    }

    function onclick(e) {
        const typeMetric = e.target.parentElement.querySelector('input[type = "text"] ')
        const number = Number(typeMetric.value);
        const id = typeMetric.id
            //id go vzimame ot browsera
        const convertNumbers = convert(number, id);
        display(convertNumbers)
    }

    function display(number) {
        days.value = number.days
        hours.value = number.hours
        minutes.value = number.minutes
        seconds.value = number.seconds
    }

    //поредели контекста на бутона - стойност и мерна единица
    // document.querySelector('#daysBtn').addEventListener('click', convertDays);

    // function convertDays(e) {
    //     const number = Number(days.value);
    //     const convertNumbers = convert(number, 'days');
    //     display(convertNumbers)
    // }
    // document.querySelector('#hoursBtn').addEventListener('click', convertHours);

    // function convertHours(e) {
    //     const number = Number(hours.value);
    //     const convertNumbers = convert(number, 'hours');
    //     display(convertNumbers)
    // }
    // document.querySelector('#minutesBtn').addEventListener('click', convertMinutes);

    // function convertMinutes(e) {
    //     const number = Number(minutes.value);
    //     const convertNumbers = convert(number, 'minutes');
    //     display(convertNumbers)
    // }
    // document.querySelector('#secondsBtn').addEventListener('click', convertSec);

    // function convertSec(e) {
    //     const number = Number(seconds.value);
    //     const convertNumbers = convert(number, 'seconds');
    //     display(convertNumbers)
    // }

    // function display(number) {
    //     days.value = number.days
    //     hours.value = number.hours
    //     minutes.value = number.minutes
    //     seconds.value = number.seconds
    // }
    //извиква конвертиращата функция
    //изобразяваме всички стойности

}