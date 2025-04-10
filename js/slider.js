document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    let currentIndex = 2; 
    let isAnimating = false;
    const slideWidth = slides[0].offsetWidth + 2;
    const totalSlides = slides.length;

    function updateSlider(instant = false) {
        if (isAnimating) return;
        isAnimating = true;

        const offset = -currentIndex * slideWidth + (window.innerWidth / 2 - slideWidth / 2);
        slider.style.transition = instant ? "none" : "transform 0.8s ease-in-out";
        slider.style.transform = `translateX(${offset}px)`;

        slides.forEach(slide => slide.classList.remove("middle-slide"));
        slides[currentIndex].classList.add("middle-slide");

        setTimeout(() => {
            isAnimating = false;
        }, 800);
    }

    function moveLeft() {
        if (isAnimating) return;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSlider();
    }

    function moveRight() {
        if (isAnimating) return;
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSlider();
    }

    leftArrow.addEventListener("click", moveLeft);
    rightArrow.addEventListener("click", moveRight);

    updateSlider(true);
});
