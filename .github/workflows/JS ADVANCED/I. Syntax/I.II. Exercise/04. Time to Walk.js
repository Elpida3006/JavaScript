function timeToWalk(steps, footprintM, speed) {

    let distanse = steps * footprintM
    let time = Math.round(distanse / speed * 3.600)
    time += Math.floor(distanse / 500) * 60

    let sec = time % 60
    time -= sec;

    let minutees = (time / 60) % 60;
    time -= minutees * 60

    let hours = time / 3600

    console.log((hours < 10 ? "0" + hours : hours) + ":" + (minutees < 10 ? "0" + minutees : minutees) + ":" + (sec < 10 ? "0" + sec : sec));





}
timeToWalk(4000, 0.60, 5)