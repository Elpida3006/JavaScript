function systemComponents(array) {
    const catalog = {}
    for (let line of array) {
        const [system, component, sub] = line.split(' | ')
        if (!catalog[system]) {
            catalog[system] = {}
        }
        if (!catalog[system][component]) {
            catalog[system][component] = []
        }

        catalog[system][component].push(sub);
    }
    let sorted = Object.entries(catalog).sort((a, b) => {
        return Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0])
    }).forEach(([system, components]) => {
        console.log(system);
        Object.entries(components)
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(([name, oth]) => {
                console.log(`|||${name}`);
                oth.forEach(o => console.log(`||||||${o}`));
            });
    });

}
systemComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])