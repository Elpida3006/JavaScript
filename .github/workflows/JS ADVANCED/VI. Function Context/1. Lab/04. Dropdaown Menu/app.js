function solve() {


    const dropdown = document.querySelector("#dropdown");
    dropdown.addEventListener('click', showOptions);

    function showOptions(e) {

        if (menu.style.display === "block") {
            menu.style.display = "none";
            box.style.backgroundColor = "black";
            box.style.color = "white";
        } else {
            menu.style.display = "block";
        }
    }



    const menu = document.querySelector("#dropdown-ul");
    const box = document.querySelector("#box");
    menu.addEventListener('click', changeColor);

    function changeColor(e) {
        const color = e.target.textContent;
        box.style.backgroundColor = color;
        box.style.color = "black";
    }

}