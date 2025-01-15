function updateHeight() {
    var newWidth = window.innerWidth-140;
    var newHeight = window.innerHeight-150;
    var langflowChat = document.querySelector('langflow-chat');
    langflowChat.setAttribute('width', newWidth);
    langflowChat.setAttribute('height', newHeight);
}

updateHeight();

window.addEventListener('resize', updateHeight);