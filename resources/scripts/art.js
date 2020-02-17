let thumbs = Array.from(document.getElementsByClassName('thumb'));
let imagePopUp = document.getElementById('imagePopUp');
let currentImage = document.getElementById('currentImage');
let imageClose = document.getElementById('imageClose');
let imHeader = document.getElementById('imHeader');

for (let thumb of thumbs) {
    thumb.addEventListener("click", () => {
        imagePopUp.style.width = '90vw';
        imagePopUp.style.height = '90vh';
        currentImage.innerHTML = `<img src='/resources/images/portfolio/${thumb.id}.png' id='clickedImage' />`
        imHeader.innerText = `${thumb.alt.slice(0, thumb.alt.lastIndexOf(' '))}`;
        setTimeout(function() {
            imageClose.style.display = 'block';
        }, 0500);
    })
}

imageClose.addEventListener("click", () => {
    imagePopUp.style.width = '0vw';
    imagePopUp.style.height = '0vw';
    imageClose.style.display = 'none';
    currentImage.innerHTML = '';
    imHeader.innerText = '';
})

