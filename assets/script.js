const chatInput = document.querySelector('.chat-input input');
const chatHistory = document.querySelector('.chat-history');
const click = document.querySelector('.click');
const audio = document.querySelector('#au');


chatInput.addEventListener('keyup', function(event) {
    if (chatInput.value === '') {
        return;
    }
    if (event.key === 'Enter') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('user-message');
        userMessage.textContent = chatInput.value;
        chatHistory.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        if (chatInput.value.includes('hello')) {
            botMessage.textContent = 'hello';
        } else if (chatInput.value.includes('gâu')) {
            botMessage.textContent = 'gâu gâu';
        } else if (chatInput.value.includes('tuyền')) {
            botMessage.textContent = 'Tuyền đẹp trai';
        } else {
            botMessage.textContent = 'éc éc éc';
        }

        chatHistory.appendChild(botMessage);

        chatInput.value = '';
        chatInput.focus();

        chatHistory.scrollTop = chatHistory.scrollHeight;

        audio.play();
    }
});
click.addEventListener('click', function(event) {
    if (chatInput.value === '') {
        return;
    }
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = chatInput.value;
    chatHistory.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    if (chatInput.value.includes('hello')) {
        botMessage.textContent = 'hello';
    } else if (chatInput.value.includes('gâu')) {
        botMessage.textContent = 'gâu gâu';
    } else if (chatInput.value.includes('tuyền')) {
        botMessage.textContent = 'Tuyền đẹp trai';
    } else {
        botMessage.textContent = 'éc éc éc';
    }

    chatHistory.appendChild(botMessage);

    chatInput.value = '';
    chatInput.focus();

    chatHistory.scrollTop = chatHistory.scrollHeight;

    audio.play();

});