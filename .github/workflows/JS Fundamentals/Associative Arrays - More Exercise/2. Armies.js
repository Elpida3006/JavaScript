function solve(string) {
    let armies = new Map();
    for (const line of string) {
        if (line.includes('arrives')) {
            let parts = line.split(" ");
            parts.pop();
            let leaderName = parts.join(" ");
            armies.set(leaderName, []);
        } else if (line.includes(":")) {
            let [leaderName, army] = line.split(": ");
            if (armies.has(leaderName)) {
                let [armyName, count] = army.split(", ");
                armies.get(leaderName).push([armyName, Number(count)]);
            }
        } else if (line.includes("+")) {
            let [armyName, count] = line.split(" + ");
            for (const [key, value] of armies) {
                for (const army of value) {
                    if (army[0] == armyName) {
                        army[1] += Number(count);
                        break;
                    }
                }
            }
        } else if (line.includes("defeated")) {
            let parts = line.split(" ");
            parts.pop();
            let leaderName = parts.join(" ");
            if (armies.has(leaderName)) {
                armies.delete(leaderName);
            }
        }
    }

    let arr = Array.from(armies).sort((a, b) => {
        let sumA = 0;
        let sumB = 0;
        for (const pair of a[1]) {
            sumA += pair[1];
        }
        for (const pair of b[1]) {
            sumB += pair[1];
        }

        return sumB - sumA;
    });

    for (const register of arr) {
        for (let index = 1; index < register.length; index++) {

            let total = 0;
            let result = "";
            for (const x of register[index].sort((a, b) => b[1] - a[1])) {
                total += x[1];
                result += `>>> ${x[0]} - ${x[1]}\n`;
            }
            console.log(`${register[0]}: ${total}`);
            console.log(result.slice(0, -1));
        }
    }
}