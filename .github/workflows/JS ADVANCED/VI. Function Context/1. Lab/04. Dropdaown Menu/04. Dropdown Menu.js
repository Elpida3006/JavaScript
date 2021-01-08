function solve() {
    const box = document.querySelector("#box");
    const dropdown = document.querySelector("#dropdown");
    const menu = document.querySelector("#dropdown-ul");

    function showOptions(e) {

        if (menu.style.display === "block") {
            menu.style.display = "none";
            box.style.backgroundColor = "black";
            box.style.color = "white";
        } else {
            menu.style.display = "block";
        }
    }

    function changeColor(e) {
        const color = e.target.innerText;
        box.style.backgroundColor = color;
        box.style.color = "black";
    }

    dropdown.addEventListener('click', showOptions);
    menu.addEventListener('click', changeColor);
}