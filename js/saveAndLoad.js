

function save(){
    var payload = body.innerHTML;
    localStorage.setItem("state",payload);
}

function load(){
    var payload = localStorage.getItem("state");
    body.innerHTML = payload;
    return payload;
}