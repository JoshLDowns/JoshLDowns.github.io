if (location.href.split("/").slice(-1)[0]!=="" && location.href.split("/").slice(-1)[0]!=="index.html") {
    document.getElementById('home').addEventListener('click', homeClick);
    document.getElementById('linkedIn').addEventListener('click', linkedInClick);
    document.getElementById('gitHub').addEventListener('click', gitHubClick);
    document.getElementById('facebook').addEventListener('click', facebookClick);
}

if (location.href.split("/").slice(-1)[0]!=="bio.html") {
    document.getElementById('bioLink').addEventListener('click', bioClick);
}

if (location.href.split("/").slice(-1)[0]!=="art.html") {
    document.getElementById('artLink').addEventListener('click', artClick);
}

if (location.href.split("/").slice(-1)[0]!=="web.html") {
    document.getElementById('webLink').addEventListener('click', webClick);
}

if (location.href.split("/").slice(-1)[0]!=="blog.html") {
    document.getElementById('blogLink').addEventListener('click', blogClick);
}

function homeClick() {
    window.location = '../index.html'
}

function bioClick() {
    window.location = '../bio.html'
}

function artClick() {
    window.location = '../art.html'
}

function webClick() {
    window.location = '../web.html'
}

function blogClick() {
    window.location = '../blog.html'
}

function linkedInClick() {
    window.location = 'https://www.linkedin.com/in/josh-l-downs/'
}

function gitHubClick() {
    window.location = 'https://github.com/JoshLDowns?tab=repositories'
}

function facebookClick() {
    window.location = 'https://www.facebook.com/UltraDowny'
}
