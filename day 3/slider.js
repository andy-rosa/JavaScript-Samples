const upBtn = document.querySelector('.up-button'),
downBtn = document.querySelector('.down-button'),
sidebar = document.querySelector('.sidebar'),
mainSlide = document.querySelector('.main-slide'),
slideCount = mainSlide.querySelectorAll('div').length;
let activeSlideIndex = 0;
const container = document.querySelector('.container');

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
    
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowUp') {
        changeSlide('up')
    } else if (evt.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++ 
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}