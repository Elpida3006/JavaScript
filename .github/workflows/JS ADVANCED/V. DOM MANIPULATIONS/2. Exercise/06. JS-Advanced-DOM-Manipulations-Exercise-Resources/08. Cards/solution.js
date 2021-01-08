function solve() {
    const cards = document.getElementsByTagName('img');

    let upperCard = 0;
    let upperCardNode;
    let bottomCard = 0;
    let bottomCardNode;

    for (const card of cards) {
        card.addEventListener('click', function(e) {
            card.setAttribute('src', 'images/whiteCard.jpg');

            const parentID = this.parentNode.getAttribute('id');

            if (parentID === 'player1Div') {
                const span = document.querySelectorAll('#result span')[0];
                const name = this.getAttribute('name');
                upperCard = Number(name);
                upperCardNode = this;

                span.textContent = name;
            } else if (parentID === 'player2Div') {
                const span = document.querySelectorAll('#result span')[2];
                const name = this.getAttribute('name');
                bottomCard = Number(name);
                bottomCardNode = this;

                span.textContent = name;
            }
            if (upperCard > bottomCard && upperCard !== 0 && bottomCard !== 0) {
                upperCardNode.style = 'border: 2px solid green';
                bottomCardNode.style = 'border: 2px solid red';

                document.getElementById('history').textContent += `[${upperCard} vs ${bottomCard}] `;
                const spanUpRes = document.querySelectorAll('#result span')[0];
                const spanDownRes = document.querySelectorAll('#result span')[2];
                spanUpRes.innerHTML = '';
                spanDownRes.innerHTML = '';
                upperCard = 0;
                bottomCard = 0;
            } else if (
                upperCard < bottomCard &&
                upperCard !== 0 &&
                bottomCard !== 0
            ) {
                bottomCardNode.style = 'border: 2px solid green';
                upperCardNode.style = 'border: 2px solid red';

                document.getElementById('history').textContent += `[${upperCard} vs ${bottomCard}] `;
                const spanUpRes = document.querySelectorAll('#result span')[0];
                const spanDownRes = document.querySelectorAll('#result span')[2];
                spanUpRes.innerHTML = '';
                spanDownRes.innerHTML = '';
                upperCard = 0;
                bottomCard = 0;
            } else if (upperCard === bottomCard) {
                const spanUpRes = document.querySelectorAll('#result span')[0];
                document.getElementById('history').textContent += `[${upperCard} vs ${bottomCard}] `;
                const spanDownRes = document.querySelectorAll('#result span')[2];
                spanUpRes.innerHTML = '';
                spanDownRes.innerHTML = '';
                upperCard = 0;
                bottomCard = 0;
            }
        });
    }
}