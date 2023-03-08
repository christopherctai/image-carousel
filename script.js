// Get the images 
const images = document.querySelectorAll('.carousel-picture');
let pictures = document.querySelector('.pictures');
const leftArrow = document.querySelector('#carousel-left');
const rightArrow = document.querySelector('#carousel-right');
const navCircles = document.querySelectorAll('.nav-circle'); 

console.log(pictures);
console.log(pictures.style.marginLeft); 


function goToNextImage() {


}

function goToPreviousImage() {
    
}

leftArrow.addEventListener('click', () => {
    goToPreviousImage();
})

rightArrow.addEventListener('click', () => {
    goToNextImage(); 
})

function getStyle(image) {
    if (image.id === '1') {
        return '0vw';
    } else if (image.id === '2') {
        return '-100vw';
    } else if (image.id === '3') {
        return '-200vw';
    } else if (image.id === '4') {
        return '-300vw';
    }
}

function changeImage(image) {
    pictures.style.marginLeft = `${getStyle(image)}`;
}

/* 



*/