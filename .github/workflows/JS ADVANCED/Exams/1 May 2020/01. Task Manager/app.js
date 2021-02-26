function solve() {


    // 2. възможна грешка  - селектирането на  div - с.item, на DIV-A не на цялата секция.


    let divOpen = document.querySelectorAll('section').item(1).querySelectorAll('div').item(1);
    let divinProgressSection = document.querySelectorAll('section').item(2).querySelectorAll('div').item(1);
    let divcompleteSection = document.querySelectorAll('section').item(3).querySelectorAll('div').item(1);

    let inputTask = document.getElementById('task');
    // inputTask.value
    let inputDescription = document.getElementById('description');
    // inputDescription.value
    let inputDate = document.getElementById('date');
    // inputDate.value

    let addButton = document.getElementById('add')
        // addButton.textContent

    addButton.addEventListener('click', (e) => {

        e.preventDefault();

        //validate input

        let inputTaskValue = inputTask.value;
        let inputDescriptionValue = inputDescription.value;
        let inputTaskDateValue = inputDate.value;


        if (!(inputTaskValue && inputDescriptionValue && inputTaskDateValue)) {
            return;
        }
        //create  elements 1 childeren of 1 children of wrapper
        // or childern of parent of nextsublingElement .orange


        let articleInOpen = document.createElement('article')
        divOpen.appendChild(articleInOpen);

        let h3InOpen = document.createElement('h3')
        articleInOpen.appendChild(h3InOpen)
        h3InOpen.textContent = inputTaskValue

        let pDescription = document.createElement('p')
        articleInOpen.appendChild(pDescription)
        pDescription.textContent = `Description: ${inputDescriptionValue}`;

        let pDate = document.createElement('p')
        articleInOpen.appendChild(pDate)
        pDate.textContent = `Due Date: ${inputTaskDateValue}`;

        let divFlex = document.createElement('div');
        divFlex.classList.add('flex')

        //classList do not  overwrite previous class
        // divFlex.className = 'flex'
        articleInOpen.appendChild(divFlex);

        //attach buttons to classes
        let buttonSTART = document.createElement('button');
        divFlex.appendChild(buttonSTART)
        buttonSTART.classList.add('green')
        buttonSTART.textContent = 'Start'

        let buttonDELETE = document.createElement('button');
        divFlex.appendChild(buttonDELETE)
        buttonDELETE.classList.add('red')
        buttonDELETE.textContent = 'Delete'



        inputTask.value = ""
        inputDescription.value = ""
        inputDate.value = ""


        // attach eventListener to Start button
        buttonSTART.addEventListener('click', (e) => {
            divinProgressSection.appendChild(articleInOpen);
            buttonSTART.remove()
            let buttonFINISH = document.createElement('button');
            divFlex.appendChild(buttonFINISH)
            buttonFINISH.classList.add('orange')
            buttonFINISH.textContent = 'Finish'
            buttonFINISH.addEventListener('click', (e) => {

                divcompleteSection.appendChild(articleInOpen);
                divFlex.remove()

            })
        });

        buttonDELETE.addEventListener('click', (e) => {
            articleInOpen.remove()

        });

    })
}

function solve() {

    let allSections = document.querySelectorAll('section');
    let divOpen = allSections.item(1).querySelectorAll('div').item(1);
    let divinProgressSection = allSections.item(2).querySelectorAll('div').item(1);
    let divcompleteSection = allSections.item(3).querySelectorAll('div').item(1);

    let inputTask = document.getElementById('task');
    let inputDescription = document.getElementById('description');
    let inputDate = document.getElementById('date');

    let addButton = document.getElementById('add')
        //addButton.textContent


    addButton.addEventListener('click', (e) => {

        e.preventDefault();

        let inputTaskValue = inputTask.value;
        let inputDescriptionValue = inputDescription.value;
        let inputTaskDateValue = inputDate.value;

        if (!(inputTaskValue && inputDescriptionValue && inputTaskDateValue)) {
            return;
        }


        // let divOpen = Array.from(openSection.querySelectorAll("div"))[1]
        let articleInOpen = document.createElement('article')
        divOpen.appendChild(articleInOpen);

        let h3InOpen = document.createElement('h3')
        articleInOpen.appendChild(h3InOpen)
        h3InOpen.textContent = inputTaskValue

        let pDescription = document.createElement('p')
        articleInOpen.appendChild(pDescription)
        pDescription.textContent = `Description: ${inputDescriptionValue}`;

        let pDate = document.createElement('p')
        articleInOpen.appendChild(pDate)
        pDate.textContent = `Due Date: ${inputTaskDateValue}`;

        let divFlex = document.createElement('div');
        divFlex.classList.add('flex')
        articleInOpen.appendChild(divFlex);


        let buttonSTART = document.createElement('button');
        divFlex.appendChild(buttonSTART)
        buttonSTART.classList.add('green')
        buttonSTART.textContent = 'Start'

        let buttonDELETE = document.createElement('button');
        divFlex.appendChild(buttonDELETE)
        buttonDELETE.classList.add('red')
        buttonDELETE.textContent = 'Delete'



        inputTask.value = ""
        inputDescriptionValue.value = ""
        inputDate.value = ""


        buttonSTART.addEventListener('click', (e) => {
            divinProgressSection.appendChild(articleInOpen);
            buttonSTART.remove()
            let buttonFINISH = document.createElement('button');
            divFlex.appendChild(buttonFINISH)
            buttonFINISH.classList.add('orange')
            buttonFINISH.textContent = 'Finish'
            buttonFINISH.addEventListener('click', (e) => {

                divcompleteSection.appendChild(articleInOpen);
                divFlex.remove()

            })
        });

        buttonDELETE.addEventListener('click', (e) => {
            articleInOpen.remove()

        });






    })
}


//к
function solve() {
    let openSection = document.getElementsByTagName("section")[1];
    let progressSection = document.getElementsByTagName("section")[2];
    let completedSection = document.getElementsByTagName("section")[3];

    let addBtn = document.getElementById("add");
    addBtn.addEventListener("click", (event) => {
        event.preventDefault();
        let task = document.getElementById("task");
        let description = document.getElementById("description");
        let date = document.getElementById("date");

        if (task.value === "" || description.value === "" || date.value === "") {
            return;
        }

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.innerText = task.value;
        let pDescription = document.createElement("p");
        pDescription.innerText = `Description: ${description.value}`;
        let pDate = document.createElement("p");
        pDate.innerText = `Due Date: ${date.value}`;

        let div = document.createElement("div");
        div.className = "flex";
        let btnStart = document.createElement("button");
        btnStart.className = "green";
        btnStart.innerText = "Start";
        let btnDelete = document.createElement("button");
        btnDelete.className = "red";
        btnDelete.innerText = "Delete";

        btnDelete.addEventListener("click", deleteArticle);

        btnStart.addEventListener("click", (event) => {
            let btnFinish = document.createElement("button");
            btnFinish.className = "orange";
            btnFinish.innerText = "Finish";

            btnFinish.addEventListener("click", () => {
                article.lastElementChild.remove();
                completedSection.lastElementChild.appendChild(article);
            });

            article.lastElementChild.children[0].remove();
            article.lastElementChild.appendChild(btnFinish);
            progressSection.lastElementChild.appendChild(article);
        });

        div.appendChild(btnStart);
        div.appendChild(btnDelete);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div);

        openSection.lastElementChild.appendChild(article);

        task.value = "";
        description.value = "";
        date.value = "";
    });

    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove();
    }
}
// - move article from section 1 to section 2 - by id in-progress
// button have to change - 1-st add delete, second in class:orange create new with textxontent finish
//addEventListener to finish button - move article  to complete, delete buttons

// attach eventListener to Delete button