//иво
function solve() {
    let buttonElement = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
    let adoptionUlElement = document.querySelector('#adoption ul');
    let adoptedUlElement = document.querySelector('#adopted ul');

    buttonElement.addEventListener('click', e => {
        e.preventDefault();

        if (!inputElements.every(x => x.value)) {
            return;
        }

        if (!Number(ageElement.value)) { // What if cat is 0 year old?
            return;
        }

        // Create list item 
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let petButtonElement = document.createElement('button');

        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        spanElement.textContent = `Owner: ${ownerElement.value}`;
        petButtonElement.textContent = `Contact with owner`;

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(petButtonElement);

        // Add list item to #adoption
        adoptionUlElement.appendChild(liElement);

        // clear all input fields
        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';

        // Attach event handler
        petButtonElement.addEventListener('click', petButtonClick);
    });

    function petButtonClick(e) {
        let parent = e.currentTarget.parentElement;

        e.currentTarget.remove();

        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        let takeItButtonElement = document.createElement('button');

        inputElement.setAttribute('placeholder', 'Enter your names');
        takeItButtonElement.textContent = 'Yes! I take it!';

        divElement.appendChild(inputElement);
        divElement.appendChild(takeItButtonElement);

        parent.appendChild(divElement);

        takeItButtonElement.addEventListener('click', onTakeItButtonClick);
    }

    function onTakeItButtonClick(e) {
        let parentButtonElement = e.currentTarget.parentElement
        let liElement = parentButtonElement.parentElement;

        let newOwnerInputElement = liElement.querySelector('input');
        let ownerNameSpanElement = liElement.querySelector('span');

        let newOwnerName = newOwnerInputElement.value;

        if (!newOwnerName) {
            return;
        }

        ownerNameSpanElement.textContent = `New Owner: ${newOwnerName}`;

        adoptedUlElement.appendChild(liElement);

        parentButtonElement.remove();

        let checkedButtonElement = document.createElement('button');
        checkedButtonElement.textContent = 'Checked';

        liElement.appendChild(checkedButtonElement);

        checkedButtonElement.addEventListener('click', e => {
            // liElement.remove();
            e.currentTarget.parentElement.remove();
        });
    }
}


// function solve() {

//     let container = document.querySelector('#container')

//     let nameInput = container.children[0]
//     let ageInput = container.children[1]
//     let kindInput = container.children[2]
//     let ownerInput = container.children[3]

//     const ul = document.querySelectorAll('#adoption ul')[0];
//     const adoptedElement = document.querySelectorAll('#adopted ul')[0];

//     document.querySelector('button').addEventListener('click', function(e) {

//         if (!isNaN(ageInput.value) && nameInput.value != "" && kindInput.value != "" &&
//             ownerInput.value != "") {

//             const li = document.createElement('li');
//             ul.appendChild(li);
//             const p = document.createElement('p');
//             p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
//             li.appendChild(p);

//             const span = document.createElement('span');
//             span.textContent = `Owner: ${ownerInput.value}`;
//             li.appendChild(span);

//             const btn = document.createElement('button');
//             btn.textContent = 'Contact with owner'
//             li.appendChild(btn);

//             nameInput.value = "";
//             ageInput.value = "";
//             kindInput.value = "";
//             ownerInput.value = "";
//             // 
//             btn.addEventListener('click', function() {
//                 const div = document.createElement('div');
//                 li.appendChild(div);

//                 const newInput = document.createElement('input');
//                 newInput.placeholder = "Enter your names";
//                 div.appendChild(newInput);

//                 btn.textContent = "Yes! I take it!";
//                 div.appendChild(btn);

//                 btn.addEventListener('click', function() {
//                     if (newInput.value != "") {

//                         span.textContent = `New Owner: ${newInput.value}`;
//                         div.removeChild(newInput);
//                         btn.textContent = "Checked";
//                         adoptedElement.appendChild(li);

//                         btn.addEventListener('click', function() {
//                             adoptedElement.removeChild(li);
//                         });
//                     }
//                 });

//             })

//         }

//         e.preventDefault();
//     }, false);

// }