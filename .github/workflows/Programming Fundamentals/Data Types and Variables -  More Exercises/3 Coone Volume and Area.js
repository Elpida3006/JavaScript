function coone(r, h) {

    let volume = (1 / 3) * Math.PI * r ** 2 * h
    let totalSurfaceArea = Math.PI * r * (r + (Math.sqrt(r ** 2 + h ** 2)));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
coone(3, 5);