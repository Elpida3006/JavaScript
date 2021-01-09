const data = {
    allCats: () => document.getElementById('allCats'),

}

Promise.all([
        renderCatTemplate('./templateCats.hbs'),
        renderCatTemplate('./templateCat.hbs')
    ])
    .then(([catsSrc, catSrc]) => {

        Handlebars.registerPartial('cat', catSrc);
        let template = Handlebars.compile(catsSrc);
        let html = template({ cats })
        data.allCats().innerHTML = html;
        getEvents()
    }).catch((e) => console.error(e))



function renderCatTemplate(templateRoot) {
    return fetch(templateRoot).then(res => res.text());

}

function getEvents() {
    data.allCats().addEventListener('click', (e) => {
        const { target } = e
        if (target.nodeName == 'BUTTON') {


            const div = target.parentNode.querySelector('.status');

            if (div.style.display == 'none') {
                div.style.display == 'block'
                e.target.textContent = 'Hide status code';
                div.removeAttribute('style');
            } else {
                e.target.textContent = 'Show status code';
                div.style.display = 'none';
            }
        }
    });
}