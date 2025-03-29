document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    let currentIndex = 2; // Start na środkowym
    let isAnimating = false;
    const totalSlides = slides.length;

    function updateSlider(instant = false) {
        if (isAnimating) return;
        isAnimating = true;

        const slideWidth = slides[0].offsetWidth + 2; // Dynamiczna szerokość
        let offset;

        if (window.innerWidth <= 1024) {
            // Na mobile: brak przesuwania, tylko zmiana klasy
            offset = 0; // Nie ruszamy .slider
            slider.style.transition = instant ? "none" : "transform 0.8s ease-in-out";
            slider.style.transform = `translateX(${offset}px)`;
        } else {
            // Na desktopie: oryginalne przesuwanie
            offset = -currentIndex * slideWidth + (window.innerWidth / 2 - slideWidth / 2);
            slider.style.transition = instant ? "none" : "transform 0.8s ease-in-out";
            slider.style.transform = `translateX(${offset}px)`;
        }

        slides.forEach(slide => slide.classList.remove("middle-slide"));
        slides[currentIndex].classList.add("middle-slide");

        setTimeout(() => {
            isAnimating = false;
        }, instant ? 0 : 800);
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

    updateSlider(true); // Początkowe ustawienie
    window.addEventListener("resize", () => updateSlider(true)); // Reakcja na resize
});