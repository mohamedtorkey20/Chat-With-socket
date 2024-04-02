const socket = io();

function sendMessage(e) {
    e.preventDefault();
    const input = document.querySelector('#message-input');
    if (input.value.trim()) {
        socket.emit('message', input.value);
        input.value = "";
    }
    input.focus();
}

document.querySelector('#message-form')
    .addEventListener('submit', sendMessage);

// Listen for messages 
socket.on("message", (data) => {
    const chatContainer = document.querySelector('#chat-container');
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = data;
    
    // Check if the message is from the current user or another user
    if (data.includes(socket.id)) {
        div.classList.add("user-message", "flex-shrink-1", "bg-light", "rounded", "py-1", "px-1", "ml-3","mb-2");
    } else {
        div.classList.add("other-user-message", "flex-shrink-1", "bg-light", "rounded", "py-1", "px-1", "mr-3","mb-2");
    }
    
    div.appendChild(p);
    chatContainer.appendChild(div);
});
