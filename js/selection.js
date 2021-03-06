body = document.querySelector('body');
icons = document.querySelectorAll('.icon-link');

selectedArea = {};
selectedIcons = new Set();

// body.addEventListener("poinerdown", bodyMouseDown);
body.addEventListener('mousedown', bodyMouseDown);
// body.addEventListener("poinermove", drawRectangleMove);
body.addEventListener('mousemove', drawRectangleMove);
// body.addEventListener("pointerup", drawRectangleEnd);
body.addEventListener('mouseup', drawRectangleEnd);
body.addEventListener('onblur', drawRectangleCancel);

function bodyMouseDown(event) {
    icons = document.querySelectorAll('.icon-link');
    selectedArea.x = event.x;
    selectedArea.y = event.y;
    selectedArea.active = true;
    if (document.querySelector('.icon-link:hover') === null) {
        selectedIcons = new Set();
    } else {
        selectedArea.active = false;
    }
    applySelectedGroupStyle();
}

function drawRectangleMove(event) {
    selectedArea.width = event.x - selectedArea.x;
    selectedArea.height = event.y - selectedArea.y;
    setSelectedAreaDiv();
    function setSelectedAreaDiv() {
        selectedAreaDiv.style.width = Math.abs(selectedArea.width) + 'px';
        selectedAreaDiv.style.height = Math.abs(selectedArea.height) + 'px';
        selectedAreaDiv.style.left = selectedArea.x - Math.abs(selectedArea.width) / 2 + selectedArea.width / 2 + 'px';
        selectedAreaDiv.style.top = selectedArea.y - Math.abs(selectedArea.height) / 2 + selectedArea.height / 2 + 'px';
        if (selectedArea.active) {
            selectedAreaDiv.classList.remove('hidden');
        } else {
            selectedAreaDiv.classList.add('hidden');
        }
        collideAll();
    }
}

function drawRectangleEnd(event) {
    // accept selection

    selectedIcons = collideAll();
    applySelectedGroupStyle();
    selectedArea.active = false;
}

function drawRectangleCancel(event) {
    selectedArea.active = false;
}

function applySelectedGroupStyle() {
    icons.forEach(icon => {
        if (selectedIcons.has(icon)) {
            icon.classList.add('selected-group');
        } else {
            icon.classList.remove('selected-group');
        }
    });
}

function collideAll() {
    var collidedIcons = new Set();
    function rectCollision(rect1, rect2) {
        if (rect1.left > rect2.right || rect2.left > rect1.right) return false;
        if (rect1.top > rect2.bottom || rect2.top > rect1.bottom) return false;
        return true;
    }
    selectedRect = selectedAreaDiv.getBoundingClientRect();
    icons.forEach(icon => {
        if (rectCollision(icon.getBoundingClientRect(), selectedRect)) {
            if (selectedRect.width == 0 && selectedRect.height == 0 && selectedRect.x == 0 && selectedRect.y == 0 && selectedRect.top == 0 && selectedRect.left == 0) {
            } else {
                icon.classList.add('selected');
                collidedIcons.add(icon);
            }
        } else {
            icon.classList.remove('selected');
            collidedIcons.delete(icon);
        }
    });
    return collidedIcons;
}
