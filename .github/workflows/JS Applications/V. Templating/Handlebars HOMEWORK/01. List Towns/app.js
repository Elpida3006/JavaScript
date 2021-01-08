const dataFunc = {
    inputTowns: () => document.getElementById('towns'),
    btnLoad: () => document.getElementById('btnLoadTowns'),
    resultTowns: () => document.getElementById('root'),


}
dataFunc.btnLoad().addEventListener('click', getTowns);

function getTowns(e) {
    e.preventDefault();

    const { value: townsData } = dataFunc.inputTowns();
    // console.log(towns);

    appendTowns(townsData);
    appendTowns(townsData.split(', ').map((t) => { return { name: t } }));

}

function appendTowns(townsData) {
    getTemplate()
        .then((templatesourseText) => {
            // console.log(templatesourseText);

            const stringTemplate = Handlebars.compile(templatesourseText);
            const htmlString = stringTemplate({ towns: townsData })
            dataFunc.resultTowns().innerHTML = htmlString
        })
        .catch((e) => console.log(error(e)))


}

function getTemplate() {
    return fetch('./towns.hbs').then(res => res.text());
}