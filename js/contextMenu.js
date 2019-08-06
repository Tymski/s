window.addEventListener('contextmenu', onContextMenu);

function onContextMenu(event) {
    event.preventDefault();
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';
    showContextMenu();
}

window.addEventListener('mousedown', event => {
    hideContextMenu();
});

function showContextMenu(x, y) {
    contextMenu.classList.remove('hidden');
}
function hideContextMenu() {
    contextMenu.classList.add('hidden');
}
hideContextMenu();

// var contextMenu = document.createElement('div');
// contextMenu.innerHTML = `

// `;

// document.getElementsByTagName('body')[0].appendChild(contextMenu);
