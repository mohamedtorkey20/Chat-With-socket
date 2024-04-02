
const socket = io()

function sendMessage(e) {
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
        socket.emit('message', input.value)
        input.value = ""
    }
    input.focus()
}

document.querySelector('form')
    .addEventListener('submit', sendMessage)

// Listen for messages 
socket.on("message", (data) => {
    const p = document.createElement('p');
    const div = document.createElement('div');
    div.classList.add("flex-shrink-1", "bg-light", "rounded", "py-2", "px-3", "ml-3");

    const t = document.querySelector('#mesge1');
    t.appendChild(div);
    div.appendChild(p); 

    p.textContent = data;
});
