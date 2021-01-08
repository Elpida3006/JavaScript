function attachEvents() {
    const locationUrl = `https://judgetests.firebaseio.com/locations.json`
    const weatherLink = `https://judgetests.firebaseio.com/forecast/`


    const location = document.getElementById('location')
    const getWeather = document.getElementById('submit')
    const currentDiv = document.getElementById('current')
    const upcomingDiv = document.getElementById('upcoming')

    const initialIcons = {
        'Sunny': '&#x2600', // ☀
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176' // °
    }

    getWeather.addEventListener('click', () => {

        fetch(locationUrl)
            .then((res) => res.json())
            .then((res) => {
                const forecast = document.getElementById('forecast').style.display = 'block'

                const { code } = res.find(city => city.name === location.value)
                    // console.log(code);
                const firstPromise = fetch(weatherLink + `today/${code}.json`)
                    .then(res => res.json())

                const secondPromise = fetch(weatherLink + `upcoming/${code}.json`)
                    .then(res => res.json())

                Promise.all([firstPromise, secondPromise])
                    .then(([todayWeather, upcomingWeather]) => {

                        todayView(todayWeather);
                        upcommingView(upcomingWeather);
                        location.value = ''
                    })
            }).catch(err)

    });

    creator = (el, values, classN) => {
        const domElement = document.createElement(el);
        domElement.innerHTML = values;
        domElement.className = classN;
        return domElement;
    }

    const todayView = (todayWeather) => {
        const symbolW = initialIcons[todayWeather.forecast.condition]
        const degreesArea = `${todayWeather.forecast.low}${initialIcons.Degrees}/${todayWeather.forecast.high}${initialIcons.Degrees}`

        const divForcast = creator('div', '', 'forcasts');
        currentDiv.appendChild(divForcast)

        const spanSymbol = creator('span', symbolW, 'condition symbol');
        divForcast.appendChild(spanSymbol)

        const spanGenericCondition = creator('span', "", 'condition');
        divForcast.appendChild(spanGenericCondition)

        const spanDataCity = creator('span', todayWeather.name, 'forecast-data');
        const spanDataLowHight = creator('span', degreesArea, 'forecast-data');
        const spanDatatype = creator('span', todayWeather.forecast.condition, 'forecast-data');

        spanGenericCondition.appendChild(spanDataCity)
        spanGenericCondition.appendChild(spanDataLowHight)
        spanGenericCondition.appendChild(spanDatatype)

        return todayView;
    }

    const upcommingView = (upcomingWeather) => {

        const divForcastInfo = creator('div', '', 'forcasts-info');
        upcomingDiv.appendChild(divForcastInfo)

        upcomingWeather.forecast.forEach(day => {
            const symbolW = initialIcons[day.condition]
            const degreesArea = `${day.low}${initialIcons.Degrees}/${day.high}${initialIcons.Degrees}`

            const spanGenericCondition = creator('span', "", 'upcoming');
            divForcastInfo.appendChild(spanGenericCondition)

            const spanSymbol = creator('span', symbolW, 'symbol');
            const spanDataLowHight = creator('span', degreesArea, 'forecast-data');
            const spanDatatype = creator('span', day.condition, 'forecast-data');

            spanGenericCondition.appendChild(spanSymbol)
            spanGenericCondition.appendChild(spanDataLowHight)
            spanGenericCondition.appendChild(spanDatatype)
        })

        return upcommingView;
    }
    const err = () => {

        forecast.innerHTML = '<div class="label">Error</div>';
        location.value = ''
        return err;
    }
}

attachEvents();