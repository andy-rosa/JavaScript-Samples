function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide'),
    backgrImg = [
        "url('https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')",
        "url('https://images.unsplash.com/photo-1561703142-b883827407ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')",
        "url('https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')",
        "url('https://images.unsplash.com/photo-1528834342297-fdefb9a5a92b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80')",
        "url('https://images.unsplash.com/photo-1524219726159-3cbf91ce4b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80')"
    ];
    let backgroundPicture = document.querySelector('.background'); 

    slides[activeSlide].classList.add('active');

    function clearActiveClass() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        }) 
    }
    
    for (let slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClass();
            for (let i = 0; i < slides.length; i++) {
                installBackImg(slides[i], backgrImg[i]);
            }
    
            slide.classList.add('active');
        })
    }

    let installBackImg = function(slideElement, urlAdress) {
        slideElement.addEventListener('click', () => backgroundPicture.style.backgroundImage = urlAdress )
    }
}

slidesPlugin();