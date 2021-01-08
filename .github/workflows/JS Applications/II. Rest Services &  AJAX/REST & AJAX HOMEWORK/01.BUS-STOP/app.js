function getInfo() {


    isValid = ['1287', '1308', '1327', '2334']
    let stopId = document.getElementById('stopId')
    let stopName = document.getElementById('stopName')
    let ul = document.getElementById('buses')

    let url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    err = () => {
        if (!isValid.includes(stopId.value)) {
            stopName.textContent = "Error"
            stopId.value = ""
            return;
        }

    }

    fetch(url)
        .then((res) => res.json())
        .then((data) => {

            stopName.textContent = data.name;

            Object.entries(data.buses).forEach(kvp => {
                let li = document.createElement('li')
                ul.appendChild(li)
                li.textContent = `Bus ${kvp[0]} arrives in ${kvp[1]} minutes`

            });

        })
        .catch(err)


    ul.textContent = ""

    stopId.value = ""


}