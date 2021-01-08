// function notify(message) {
//     //намираме кутийката

//     const notification = document.querySelector('#notification')
//         //поставяме съобщението
//     notification.textContent = message;
//     //визуализираме
//     notification.style.display = 'block'

//     //активираме таймер който след 2 сек да скрие кутийката
//     setTimeout(() => {
//         notification.style.display = 'none';
//     }, 2000);
// }
//пишем функция на самия бутон, когато с екликне
// notify = (message) => {

//     //фиксираме клетката на нотификацията която искаме да с епояви
//     let notifyMessage = document.querySelector('#notification')
//         //задаваме че съобщението което искаме д ас епояви, зависи от стрига който ни е подаден въвъ функцията
//     notifyMessage.textContent = message
//         //задаваме, че когато бутона е натиснат, дисплея трябва да стане блок, т.е. да с епояви
//     notifyMessage.style.display = 'block'

//     setTimeout(() => {
//         notifyMessage.style.display = 'none'
//     }, 2000)

//     //зададохме, след колко време пак да с ескрие съобщението

// }






notify = (message) => {

    const notification = document.querySelector('#notification');
    notification.style.display = 'block';
    notification.textContent = message;

    // const button = document.getElementsByTagName('button');


    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000)



}