function clickMe() {
    const button = document.querySelector('button');
    button.addEventListener('click', click);

    function click(e) {
        const target = e.target.currentTarget;
        const targetText = target.textContent;
        target.value = Number(targetText) ++

            let value = Number(e.target.value);
        e.target.value = ++value
    }
}