const slides = document.querySelectorAll('.slide');

function clearActiveClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    }) 
}

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClass();

        this.classList.add('active');
    })
}