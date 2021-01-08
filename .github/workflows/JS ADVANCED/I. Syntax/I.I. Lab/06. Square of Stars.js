function squareOfStars(stars) {
    stars = Number(stars);
    for (let i = 1; i <= stars; i++) {
        console.log("* ".repeat(stars))
    }
}
squareOfStars(5)