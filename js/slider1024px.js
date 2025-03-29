document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");
    let currentIndex = 2; // Start na środkowym
    const totalSlides = slides.length;
    let isAnimating = false;

    // Funkcja obsługująca slider dla mniejszych ekranów
    function updateSliderMobile(instant = false) {
        if (isAnimating) return;
        isAnimating = true;

        // Oblicz szerokość slajdu + marginesy
        const slideWidth = slides[0].offsetWidth + 2;
        const offset = -currentIndex * slideWidth + (window.innerWidth / 2 - slideWidth / 2);
        slider.style.transition = instant ? "none" : "transform 0.8s ease-in-out";
        slider.style.transform = `translateX(${offset}px)`;

        // Przypisanie klasy 'middle-slide' tylko dla aktualnego slajdu
        slides.forEach(slide => slide.classList.remove("middle-slide"));
        slides[currentIndex].classList.add("middle-slide");

        setTimeout(() => {
            isAnimating = false;
        }, 800);
    }

    // Funkcja do przełączania slajdów
    function moveLeft() {
        if (isAnimating) return;
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSliderMobile();
    }

    function moveRight() {
        if (isAnimating) return;
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSliderMobile();
    }

    // Obsługuje kliknięcie strzałek
    leftArrow.addEventListener("click", moveLeft);
    rightArrow.addEventListener("click", moveRight);

    // Funkcja do ustawienia odpowiedniego slidera
    function setSlider() {
        // Tylko na rozdzielczościach poniżej 1024px, aktywujemy nasz responsywny slider
        if (window.innerWidth < 1024) {
            updateSliderMobile(true);  // Natychmiastowe ustawienie slidera
        } else {
            // Twój oryginalny kod JS może być tu uruchomiony na większych ekranach
            // Jeśli chcesz użyć starego kodu JS, możesz go tu po prostu wkleić
            console.log("Desktop version - Use your original JS here.");
        }
    }

    // Sprawdzamy rozdzielczość od razu po załadowaniu strony
    setSlider();

    // Nasłuchujemy zmian rozdzielczości
    window.addEventListener("resize", setSlider);
});
