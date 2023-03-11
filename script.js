// Get the images 
const images = document.querySelectorAll('.carousel-picture');
let pictures = document.querySelector('.pictures');
const leftArrow = document.querySelector('#carousel-left');
const rightArrow = document.querySelector('#carousel-right');
const navCircles = document.querySelectorAll('.nav-circle'); 

let currentSlide = 0;

function goToNextImage() {
    if (currentSlide === 3) {
        pictures.style.transform = `translateX(0)`
        currentSlide = 0; 
    } else {
        pictures.style.transform = `translateX(-${25 + (currentSlide * 25)}%)`
        currentSlide++;
    }
}

function goToPreviousImage() {
    if (currentSlide === 0) {
        pictures.style.transform = `translateX(-75%)`;
        currentSlide = 3;
    } else {
        pictures.style.transform = `translateX(${25 + (currentSlide * -25)}%)`
        currentSlide--;
    } 

}

leftArrow.addEventListener('click', () => {
    goToPreviousImage();
})

rightArrow.addEventListener('click', () => {
    goToNextImage(); 
})