function nationalCourt(data) {
    let firstgroupPerHour = Number(data.shift());
    let secondgroupPerHour = Number(data.shift());
    let thirdgroupPerHour = Number(data.shift());
    let allPeople = Number(data.shift());

    let allpeoplePerHour = firstgroupPerHour + secondgroupPerHour + thirdgroupPerHour;
    let hours = 0;

    while (allPeople > 0) {
        hours++
        allPeople -= allpeoplePerHour;
        if (hours % 4 == 0) {
            hours++
        }
    }


    console.log(`Time needed: ${hours}h.`);


}
nationalCourt(['5', '6', '4', '20']);
nationalCourt([1, 2, 3, 45]);
nationalCourt([3,
    2,
    5,
    40,
])