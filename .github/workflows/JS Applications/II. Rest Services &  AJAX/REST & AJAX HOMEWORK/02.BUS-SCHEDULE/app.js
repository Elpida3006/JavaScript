function solve() {
    let currentId = 'depot'
        // let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`

    let info = document.querySelector('.info')
    let arrivebtn = document.getElementById('arrive')
    let departBtn = document.getElementById('depart')

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then((res) => res.json()).then(res => {


                info.textContent = `Next stop ${ res.name}`
                currentId = res.next
                stopName = res.name

                arrivebtn.disabled = false
                departBtn.disabled = true

            })



    }

    function arrive() {


        info.textContent = `Arriving at ${stopName}`

        arrivebtn.disabled = true
        departBtn.disabled = false


    }


    return {
        depart,
        arrive
    };
}

let result = solve();