cell = {
    width: 130,
    heigth: 90
};

snapToGrid = false;

function onDoubleClick(item) {}

function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
}

function onDragStart(event) {
    console.log(event);
    offsetX = event.offsetX;
    offsetY = event.offsetY;
}

function onDragEnd(event) {
    console.log(event.x, event.y);
    event.target.style.position = "absolute";
    var top = event.y;
    var left = event.x;
    if (snapToGrid) {
        top -= top % cell.heigth;
        left -= left % cell.width;
    } else {
        left -= offsetX;
        top -= offsetY;
    }
    event.target.style.top = top + "px";
    event.target.style.left = left + "px";
}

