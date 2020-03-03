
//variable declaration
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
let robotImg = document.getElementById('mobileHead');
let fixed = false;

window.addEventListener('scroll', fixImage);

//animates robot image to slide into frame at certain point on screen
function fixImage () {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 700 && window.innerWidth > 768 && fixed === false) {
        robotImg.style.left= '40px';
        fixed = true;
    } else if (scrollTop < 700 && window.innerWidth > 768 && fixed === true) {
        robotImg.style.left= '-300px';
        fixed = false;
    }
}


