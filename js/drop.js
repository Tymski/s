function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    console.log(ev);
    console.log(ev.dataTransfer);
    console.log(data);

    if (data.toString().startsWith('https://')) {
        generateIconLinkFromString(data);
    }
}
