body = document.querySelector("body");
icons = document.querySelectorAll(".icon-link");

selectedArea = {};

body.addEventListener("poinerdown", drawRectangleStart);
body.addEventListener("mousedown", drawRectangleStart);
body.addEventListener("poinermove", drawRectangleMove);
body.addEventListener("mousemove", drawRectangleMove);
body.addEventListener("pointerup", drawRectangleEnd);
body.addEventListener("mouseup", drawRectangleEnd);
body.addEventListener("onblur", drawRectangleCancel);

function drawRectangleStart(event) {
    selectedArea.x = event.x;
    selectedArea.y = event.y;
    selectedArea.active = true;
}

function drawRectangleMove(event) {
    selectedArea.width = event.x - selectedArea.x;
    selectedArea.height = event.y - selectedArea.y;
    setSelectedAreaDiv();
}

function drawRectangleEnd(event) {
    selectedArea.active = false;
}

function drawRectangleCancel(event) {
    selectedArea.active = false;
}

function setSelectedAreaDiv() {
    selectedAreaDiv.style.width = Math.abs(selectedArea.width) + "px";
    selectedAreaDiv.style.height = Math.abs(selectedArea.height) + "px";
    selectedAreaDiv.style.left = selectedArea.x - Math.abs(selectedArea.width) / 2 + selectedArea.width / 2 + "px";
    selectedAreaDiv.style.top = selectedArea.y - Math.abs(selectedArea.height) / 2 + selectedArea.height / 2 + "px";
    if (selectedArea.active) {
        selectedAreaDiv.classList.remove("hidden");
    } else {
        selectedAreaDiv.classList.add("hidden");
    }
    collideAll();
}

function rectCollision(rect1, rect2) {
    if (rect1.left > rect2.right || rect2.left > rect1.right) return false;
    if (rect1.top > rect2.bottom || rect2.top > rect1.bottom) return false;
    return true;
}

function collideAll() {
    icons.forEach(icon => {
        if (rectCollision(icon.getBoundingClientRect(), selectedAreaDiv.getBoundingClientRect())) {
            icon.classList.add("selected");
        }else{
            icon.classList.remove("selected");
        }
    });
}
