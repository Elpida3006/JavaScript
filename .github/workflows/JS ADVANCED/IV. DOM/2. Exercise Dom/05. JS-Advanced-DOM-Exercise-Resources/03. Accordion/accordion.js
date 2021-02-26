function toggle() {


    const hidden = document.querySelector('#extra')
    const buttonShowHide = document.querySelectorAll('.button')[0]
        //1 бутон,ако е с аповече, С querySelectorAll
    if (hidden.style.display === 'block') {
        buttonShowHide.textContent = 'More';
        hidden.style.display = 'none'
    } else {
        buttonShowHide.textContent = 'Less'
        hidden.style.display = 'block'
    }


}
//намираме референция
//намираме свойство 
//проверяваме дали елемента е видим го скриваме и изписваме more, иначе го показваме и изписваме less

//