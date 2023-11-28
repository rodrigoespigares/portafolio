window.onload = () => {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slider.children.length - 1;
        }
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slider.children.length - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    });

    function updateSlider() {
        const newTranslateValue = -currentSlide * 100;
        slider.style.transform = `translateX(${newTranslateValue}%)`;
    }
}