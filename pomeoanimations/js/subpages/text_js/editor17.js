document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor17__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js17');
    const codeInput = document.querySelector('.editor17__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
 <div class="scale-in">
                        <h2>POMEOSPACE (scroll)</h2>
                    </div>

        `,
        scss: `
  .scale-in {
        opacity: 0;
        transform: scale(0.5);
        filter: blur(10px);
        transition: transform 0.6s ease-out, opacity 0.6s ease-out, filter 0.6s ease-out;
    }
    
    .scale-in--visible {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
    }
    
    
   

        `,
        js: `
const scaleInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Gdy element wejdzie na ekran – dodajemy klasę aktywującą animację
      entry.target.classList.add('scale-in--visible');
    } else {
      // Gdy element zniknie z ekranu – resetujemy animację
      entry.target.classList.remove('scale-in--visible');
    }
  });
}, { threshold: 0.4 }); // 40% elementu musi być widoczne, żeby odpalić

// Pobieramy wszystkie elementy z klasą "scale-in" i obserwujemy je
document.querySelectorAll('.scale-in').forEach(el => {
  scaleInObserver.observe(el);
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor17__tabs__button--active'));
            button.classList.add('editor17__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor17__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor17__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor17__code-menu--expanded');
            codeInput.classList.remove('editor17__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});