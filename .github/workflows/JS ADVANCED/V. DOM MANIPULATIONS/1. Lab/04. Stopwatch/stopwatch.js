function stopwatch() {


    let intervalId;
    //1.trqbwa ni referenciq za startBtn, stopBtn, time

    const time = document.getElementById('time')
    const startBtn = document.getElementById('startBtn')
    const stopBtn = document.getElementById('stopBtn')
    let sec = 0;
    let min = 0;


    function formatTime(value) {
        let textTime = value.toString()
        textTime < 10 ? textTime = '0' + textTime : textTime;
        return textTime;


    }

    function setTimeDiv(min, sec) {
        time.textContent = `${formatTime(min)}:${formatTime(sec)}`
    }

    function startBtnHandler() {

        startBtn.setAttribute('disabled', true)
        stopBtn.removeAttribute('disabled')

        intervalId = setInterval(function() {
            sec++

            if (sec === 60) {
                sec = 0;
                min++

            }
            setTimeDiv(min, sec)
        }, 1000);

        time.textContent = '00:00';

        //greshka v uslovieto , ne se restartva taimera na stop, ana start, pri natiskaneto!!!!
    }

    function stopBtnHandler() {
        // sec = 0;
        // min = 0;
        // setTimeDiv(min, sec)
        stopBtn.setAttribute('disabled', true)
        startBtn.removeAttribute('disabled')
        clearInterval(intervalId)


    }

    startBtn.addEventListener('click', startBtnHandler)
    stopBtn.addEventListener('click', stopBtnHandler)




}