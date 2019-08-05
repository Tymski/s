function generateIconLink({ name, link, image }) {
    code = `
    <div class="icon-link" data-link="about:blank" ondblclick="openInNewTab('${link}')" ondragstart="onDragStart(event)" ondragend="onDragEnd(event)" draggable="true">
        <div class="icon">
            <div class="iconCell">
                <img src="${image}" alt="${name} logo" draggable="false" width="100%" />
            </div>
        </div>
        <div class="text">
            ${name}
        </div>
    </div>`;
    body.innerHTML += code;
}

function generateIconLinkFromString(urlString) {
    var url = new URL(urlString);
    var hostname = url.hostname;
    console.log('hostname', hostname);
    var icon = 'https://' + hostname + '/favicon.ico';
    generateIconLink({
        name: hostname,
        link: urlString,
        image: icon,
    });
}

demo = [];

demo.push({
    name: 'Facebook',
    link: 'https://facebook.com',
    image: 'https://facebook.com/favicon.ico',
});

demo.push({
    name: 'YouTube',
    link: 'https://youtube.com',
    image: 'https://youtube.com/favicon.ico',
});

// if(body.innerHTML.toString().length < 50)
demo.forEach(d => {
    generateIconLink(d);
});
