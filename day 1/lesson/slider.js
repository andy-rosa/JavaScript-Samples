const slides = document.querySelectorAll('.slide');

for (let slide of slides) {
    slide.addEventListener('click', function() {
        clearActiveClass();

        this.classList.add('active');
    })
}

function clearActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    }) 
}