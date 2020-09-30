function distanceBetweenPoints(x1, y1, x2, y2) {
    let distanceBetweenX = x1 - x2;
    let distanceBetweenY = y1 - y2;
    let totalDistanceX = Math.pow(distanceBetweenX, 2);
    let totalDistanceY = Math.pow(distanceBetweenY, 2);
    let totalDistance = Math.sqrt(totalDistanceX + totalDistanceY)
    console.log(totalDistance);
}
distanceBetweenPoints(2, 4, 5, 0);