const chatInput = document.querySelector('.chat-input input');
const chatHistory = document.querySelector('.chat-history');
const click = document.querySelector('.click');
const audio = new Audio('../sound.mp3'); // thay path/to/sound.mp3 bằng đường dẫn tới tệp âm thanh của bạn

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
        botMessage.textContent = 'éc éc éc';
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
    botMessage.textContent = 'éc éc éc';
    chatHistory.appendChild(botMessage);

    chatInput.value = '';
    chatInput.focus();

    chatHistory.scrollTop = chatHistory.scrollHeight;

    audio.play();

});