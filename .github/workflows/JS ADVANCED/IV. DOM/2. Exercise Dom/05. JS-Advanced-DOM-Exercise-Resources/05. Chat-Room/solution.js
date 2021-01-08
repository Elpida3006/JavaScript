function solve() {
    const chatMessages = document.querySelector('#chat_messages');
    const chatInput = document.querySelector('#chat_input');
    const send = document.querySelector('#send');

    send.addEventListener('click', function() {
        const myMessage = document.createElement('div');
        chatMessages.appendChild(myMessage);

        myMessage.textContent = chatInput.value;
        myMessage.className = "message my-message";


        chatInput.value = '';
    });
}

function solve() {
    let sendButton = document.getElementById('send');
    let chat = document.getElementById('chat_messages');
    let messageContent = document.getElementById('chat_input')

    sendButton.addEventListener('click', function() {

        let message = document.createElement('div');
        chat.appendChild(message);


        message.textContent = messageContent.value;
        message.className = 'message my-message';

        messageContent.value = '';

    });
}