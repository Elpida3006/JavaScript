function lockedProfile() {
    //закачаме event Handlers
    document.querySelector('main').addEventListener('click', onClick);

    function onClick(button) {
        //проверяваме дали е натиснат бутона само с   nodeName! не с локал или друго
        if (button.target.nodeName === 'BUTTON') {
            //намираме родителя на бутона s parentNode, селектираме с "е"
            const parentDiv = button.target.parentElement


            //в него намираме дали е локнат -> ако е заключен,
            //прекратяваме изпълнение
            const lock = parentDiv.querySelector('input[type="radio"][value="lock"]')
            if (lock.checked) {
                return;
            }
            //в него намираме скритото поле
            //ако е видимо, скриваме и изписваме  show more
            //иначе показваме Hide It
            const hiddenfiels = Array.from(parentDiv.querySelectorAll('div')).filter(d => d.id.includes('HiddenFields'))[0];
            if (hiddenfiels.style.display !== 'block') {
                hiddenfiels.style.display = 'block';
                button.target.textContent = 'Hide it';
            } else {
                hiddenfiels.style.display = 'none';
                button.target.textContent = 'Show more';
            }

        }

    }

}

lockedProfile = () => {
    Array.from(document.getElementsByClassName("profile")).forEach((parent) => {
        let btn = parent.querySelectorAll("button")[0];
        btn.addEventListener("click", () => {
            let unlock = parent.querySelectorAll("input")[1].checked;
            let hidden = parent.querySelectorAll("div")[0];
            if (unlock) {
                if (btn.textContent == 'Show more') {
                    hidden.style.display = "block";
                    btn.textContent = 'Hide it';
                } else if (btn.textContent == 'Hide it') {
                    hidden.style.display = "none";
                    btn.textContent = 'Show more';
                }
            }
        });
    });
}