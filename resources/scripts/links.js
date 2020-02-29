if (!document.URL.includes('index.html')) {
    document.getElementById('home').addEventListener('click', homeClick);
    document.getElementById('linkedIn').addEventListener('click', linkedInClick);
    document.getElementById('gitHub').addEventListener('click', gitHubClick);
    document.getElementById('facebook').addEventListener('click', facebookClick);
}

if (!document.URL.includes('bio.html')) {
    document.getElementById('bioLink').addEventListener('click', bioClick);
}

if (!document.URL.includes('art.html')) {
    document.getElementById('artLink').addEventListener('click', artClick);
}

if (!document.URL.includes('web.html')) {
    document.getElementById('webLink').addEventListener('click', webClick);
}

if (!document.URL.includes('blog.html')) {
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
