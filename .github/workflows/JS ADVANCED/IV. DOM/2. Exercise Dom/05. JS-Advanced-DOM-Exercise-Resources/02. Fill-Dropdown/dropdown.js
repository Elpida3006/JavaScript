// function addItem() {
//     //взимаме референции и четем свойства
//     const text = document.querySelector('#newItemText').value;
//     const value = document.querySelector('#newItemValue').value;

//     ////създаваме нов елемент и променяме неговите свойства
//     const added = document.createElement('option')
//     added.textContent = text;
//     //не се ползва innerText, ..
//     added.value = value;


//     //добавяме новия елемент късм списъка - взимаме селектора от хтмл-а, от мдн виждаме че на тага select отговаря child - option, и създаваме с appendchild с този таг; за да го приеме и създаде все едно в хтм-ла, но в броузера динамично с js
//     document.querySelector('#menu').appendChild(added);
//     //зануляваме полетатта
//     document.querySelector('#newItemText').value = ''
//     document.querySelector('#newItemValue').value = ''
//         //vaLue-to не се вижда в дроп доуна, но си се създава и си го има в браузера и паметта
// }

addItem = () => {
    const menu = document.querySelector('#menu');
    const element = document.createElement('option')
    menu.appendChild(element);

    const newItemValue = document.querySelector('#newItemValue');
    element.value = newItemValue.value
    const newItemText = document.querySelector('#newItemText');
    element.textContent = newItemText.value


    newItemValue.value = ""
    newItemText.value = ""
}