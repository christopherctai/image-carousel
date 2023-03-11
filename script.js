// Get the images 
const images = document.querySelectorAll('.carousel-picture');
let pictures = document.querySelector('.pictures');
const leftArrow = document.querySelector('#carousel-left');
const rightArrow = document.querySelector('#carousel-right');
const navCircles = document.querySelectorAll('.nav-circle'); 

let currentSlide = 0;

function goToNextSlide() {
    if (currentSlide === 3) {
        pictures.style.transform = `translateX(0)`
        currentSlide = 0; 
    } else {
        currentSlide++;
        updateSlide();
    }
    updateNavCircle();
}

function goToPreviousSlide() {
    if (currentSlide === 0) {
        pictures.style.transform = `translateX(-75%)`;
        currentSlide = 3;
    } else {
        currentSlide--;
        updateSlide();
    } 
    updateNavCircle();
}

function updateNavCircle() {
    navCircles.forEach((circle) => {
        circle.classList.remove('selected');
    })
    navCircles[currentSlide].classList.add('selected');
}

function updateSlide() {
    pictures.style.transform = `translateX(${(currentSlide * -25)}%)`;
}

navCircles.forEach((circle) => {
    circle.addEventListener('click', () => {
        currentSlide = circle.id;
        pictures.style.transform = `translateX(${(currentSlide * -25) + 25})`;
        updateSlide();
        updateNavCircle();
    })
})

leftArrow.addEventListener('click', () => {
    goToPreviousSlide();
})

rightArrow.addEventListener('click', () => {
    goToNextSlide(); 
})

