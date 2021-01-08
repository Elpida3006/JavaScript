function attachEvents() {

    const addForm = document.querySelector('#addForm');
    const catchesDiv = document.querySelector('#catches')

    const btnLOAD = document.querySelector('.load')
    const btnADD = document.querySelector('.add')

    const fnLOADReq = () => {
        const loadURL = 'https://fisher-game.firebaseio.com/catches.json'
            //GET
        fetch(loadURL)
            .then(res => res.json())
            .then((res) => {
                fnCRUD(res)
            });
        //return [object object]
        return fnLOADReq;
    }

    const fnCREATEReq = () => {
        const createURL = 'https://fisher-game.firebaseio.com/catches.json'

        const obj = JSON.stringify({
            angler: addForm.querySelector('input.angler').value,
            weight: addForm.querySelector('input.weight').value,
            species: addForm.querySelector('input.species').value,
            location: addForm.querySelector('input.location').value,
            bait: addForm.querySelector('input.bait').value,
            captureTime: addForm.querySelector('input.captureTime').value

        });
        fetch(createURL, {
                method: "POST",
                body: obj,
                //returned object with key
            })
            .then(res => res.json())

        return fnCREATEReq;
    }

    const creator = (el, values, classN, type) => {
        const domElement = document.createElement(el);
        el === "input" ? ((domElement.type = type) && (domElement.value = values)) : (domElement.innerHTML = values)
        domElement.className = classN;

        return domElement;
    }
    const fnCRUD = (res) => {
        Object.keys(res).forEach(key => {
            const { angler, weight, species, location, bait, captureTime } = res[key]
                // creator = (el, values, classN, type) 

            const divCatch = creator('div', '', "catch", '')


            const hr = () => {
                const hr = document.createElement('hr')
                return hr;
            }
            const lebelAngler = creator('label', "Angler", '', '')
            const inputAngler = creator('input', angler, "angler", "text")

            const lebelWeight = creator('label', "Weight", '', '')
            const inputWeight = creator('input', weight, "weight", "number")

            const lebelSpecies = creator('label', "Species", '', '')
            const inputSpecies = creator('input', species, "species", "text")

            const lebelLocation = creator('label', "Location", '', '')
            const inputLocation = creator('input', location, "location", "text")

            const lebelBait = creator('label', "Bait", '', '')
            const inputBait = creator('input', bait, "bait", "text")

            const lebelCaptureTime = creator('label', "Capture Time", '', '')
            const inputCaptureTime = creator('input', captureTime, "captureTime", "number")

            const btnEdit = creator('button', "Update", "update", '')
            const btnDelete = creator('button', "Delete", "delete", '')

            btnEdit.addEventListener('click', () => {

                const obj = JSON.stringify({
                    angler: inputAngler.value,
                    weight: inputWeight.value,
                    species: inputSpecies.value,
                    location: inputLocation.value,
                    bait: inputBait.value,
                    captureTime: inputCaptureTime.value

                });
                const updateURL = 'https://fisher-game.firebaseio.com/catches/' + `${key}.json`
                    //PUT
                fetch(updateURL, {
                    method: "PUT",
                    body: obj,
                    //returned object with key
                })
            })
            btnDelete.addEventListener('click', () => {
                const deleteURL = 'https://fisher-game.firebaseio.com/catches/' + `${key}` + '.json'
                    //DELETE
                fetch(deleteURL, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            })

            const arr = [lebelAngler, inputAngler, hr(), lebelWeight, inputWeight, hr(), lebelSpecies, inputSpecies, hr(), lebelLocation, inputLocation, hr(), lebelBait, inputBait, hr(), lebelCaptureTime, inputCaptureTime, hr(), btnEdit, btnDelete]

            arr.forEach(x => divCatch.appendChild(x))

            catchesDiv.appendChild(divCatch)

        });

        return fnCRUD;

    }
    btnLOAD.addEventListener('click', fnLOADReq)
    btnADD.addEventListener('click', fnCREATEReq)

}

attachEvents();