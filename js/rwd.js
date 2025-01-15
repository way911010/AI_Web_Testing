function updateHeight() {
    var newWidth = window.innerWidth-200;
    var newHeight = window.innerHeight-200;
    var langflowChat = document.querySelector('langflow-chat');
    langflowChat.setAttribute('width', newWidth);
    langflowChat.setAttribute('height', newHeight);
}

updateHeight();

window.addEventListener('resize', updateHeight);