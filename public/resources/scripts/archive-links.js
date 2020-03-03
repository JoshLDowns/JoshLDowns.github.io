let archiveDiv = document.getElementById('archived-posts');
let currentPage = decodeURIComponent(window.location.href.slice(window.location.href.lastIndexOf('/') + 1));

async function buildArchive() {
    let posts = await fetch('./../resources/blogAPI.json').then((postArray) => {
        return postArray.json();
    }).then((objArray) => {
        return objArray;
    })

    for (let post of posts) {
        if (post.title !== currentPage) {
            archiveDiv.innerHTML += `<div class='link archive'><p class='link-text'>${post.title}</p></div>`
        }
    }
    return;
}

function addListeners() {
    let archiveLinks = Array.from(document.getElementsByClassName('archive'));

    console.log(archiveLinks);

    archiveLinks.forEach((link) => { link.addEventListener('click', archiveClick) });

    function archiveClick() {
        console.log(event.target.lastChild.textContent);
        window.location = `../single-post/${event.target.lastChild.textContent}`
    }
    return;
}

(async function buildPageArchive() {
    await buildArchive();
    addListeners()
})();
