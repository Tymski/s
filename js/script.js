cell = {
    width: 130,
    heigth: 90
};

snapToGrid = true;

function onDoubleClick(item) {}

function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
}

function onDragStart(event) {
    console.log(event);
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    eventX = event.x;
    eventY = event.y;
    if(!selectedIcons.has(event.target)){
        selectedIcons = new Set();
        selectedIcons.add(event.target);
    }
    applySelectedGroupStyle();
}

function onDragEnd(event) {
    console.log(event.x, event.y);
    event.target.style.position = "absolute";

    deltaOffset = {
        x: event.x - eventX,
        y: event.y - eventY
    };
    console.log(deltaOffset);

    icons.forEach(icon => {
        if (selectedIcons.has(icon)) {
            var left = icon.style.left;
            left = parseInt(left);
            if (isNaN(left)) left = 0;
            left += deltaOffset.x;
            if (snapToGrid) {
                var off = left % cell.width;
                if (off > cell.width / 2) {
                    left += cell.width;
                }
                left -= off;
            }
            if (left < 0) left = 0;
            icon.style.left = left + "px";

            var top = icon.style.top;
            top = parseInt(top);
            if (isNaN(top)) top = 0;
            top += deltaOffset.y;
            if (snapToGrid) {
                var off = top % cell.heigth;
                if (off > cell.heigth / 2) {
                    top += cell.heigth;
                }
                top -= off;
            }
            if (top < 0) top = 0;
            icon.style.top = top + "px";
        } else {
            icon.classList.remove("selected-group");
        }
    });

}

function debugLoop() {
    setInterval(() => {
        console.log(areWeDragging);
    }, 500);
}
// debugLoop()
