function validate() {


    const inputEmail = document.getElementById("email");

    inputEmail.addEventListener('change', function() {

        inputEmail.classList.remove('error');

        const value = inputEmail.value
        if (value.match(/^[a-z]+@[a-z]+\.+[a-z]+$/)) { return; }
        inputEmail.classList.add("error");

    });


}

function validate() {
    function validateEmail(email) {
        const regex = /^[a-z]+@[a-z]+\.+[a-z]+$/;
        return regex.test(String(email));
    }
    const inputEmail = document.getElementById("email");
    inputEmail.addEventListener('change', updateValue);

    function updateValue(e) {
        if (!validateEmail(inputEmail.value)) {
            inputEmail.classList.add("error");
        } else {
            inputEmail.classList.remove("error");
        }
    }
}