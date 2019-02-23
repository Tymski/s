function save() {
    localStorage.setItem(savePath(), body.innerHTML);
}

function load() {
    body.innerHTML = localStorage.getItem(savePath());
}

function getPath() {
    return new URLSearchParams(location.search).get("path");
}

function savePath() {
    return "state" + getPath();
}

// window.onbeforeunload = save;
// window.onloadend = load;
