let rightEye = document.getElementById('rightEye');
let bioLink = document.getElementById('bioLink');
let artLink = document.getElementById('artLink');
let webLink = document.getElementById('webLink');
let blogLink = document.getElementById('blogLink');

bioLink.addEventListener('mouseover', () => {
    rightEye.style.bottom = '305px';
    rightEye.style.right = '135px';
})

bioLink.addEventListener('mouseleave', () => {
    rightEye.style.bottom = '290px';
    rightEye.style.right = '150px';
})

artLink.addEventListener('mouseover', () => {
    rightEye.style.bottom = '298px';
    rightEye.style.right = '130px';
})

artLink.addEventListener('mouseleave', () => {
    rightEye.style.bottom = '290px';
    rightEye.style.right = '150px';
})

webLink.addEventListener('mouseover', () => {
    rightEye.style.bottom = '283px';
    rightEye.style.right = '130px';
})

webLink.addEventListener('mouseleave', () => {
    rightEye.style.bottom = '290px';
    rightEye.style.right = '150px';
})

blogLink.addEventListener('mouseover',() => {
    rightEye.style.bottom = '275px';
    rightEye.style.right = '135px';
})

blogLink.addEventListener('mouseleave', () => {
    rightEye.style.bottom = '290px';
    rightEye.style.right = '150px';
})