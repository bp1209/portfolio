const slides = document.querySelectorAll('.hero-slideshow .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// Auto slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
