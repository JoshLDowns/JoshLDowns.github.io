let thumbs = Array.from(document.getElementsByClassName('thumb'));
let imagePopUp = document.getElementById('imagePopUp');
let currentImage = document.getElementById('currentImage');
let imageClose = document.getElementById('imageClose');
let imHeader = document.getElementById('imHeader');

for (let thumb of thumbs) {
    thumb.addEventListener("click", () => {
        imagePopUp.style.width = '90vw';
        imagePopUp.style.height = '95vh';
        imageClose.style.display = 'block';
        currentImage.innerHTML = `<img src='/images/emoRobot/${thumb.id}.png' id='clickedImage' />`
        imHeader.innerText = `${thumb.id}`;
    })
}

imageClose.addEventListener("click", () => {
    imagePopUp.style.width = '0vw';
    imagePopUp.style.height = '0vw';
    imageClose.style.display = 'none';
    currentImage.innerHTML = '';
    imHeader.innerText = '';
})

