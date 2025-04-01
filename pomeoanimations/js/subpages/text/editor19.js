document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor19__tabs__button');
    const codeMenu = document.getElementById('codeMenu19');
    const codeInput = document.querySelector('.editor19__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
    <div class="editor19__animation-area__text">   
          <span>POMEO</span>  
    </div>
        `,
        scss: `
.editor19__animation-area__text {
   
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 2vw;
    color: #fff;

    @keyframes neonGlow {
        0% {
          text-shadow: 0 0 5px #ff00d4, 0 0 10px #ff0088, 0 0 15px #ff0088, 0 0 20px #ff0088, 0 0 25px #ff0088;
          transform: translateX(-10px) rotate(-5deg);
        }
        50% {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff;
          transform: translateX(10px) rotate(5deg);
        }
        100% {
          text-shadow: 0 0 5px #ff0088, 0 0 10px #ff0088, 0 0 15px #ff0088, 0 0 20px #ff0088, 0 0 25px #ff0088;
          transform: translateX(-10px) rotate(-5deg);
        }
      }

    span{
        width: 30vw;
        font-size: 1.8vw;
        font-family: "ponur";

        animation: neonGlow 1.5s ease-in-out infinite, bounce 2s ease-in-out infinite;

    }
    
    @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
}
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor19__tabs__button--active'));
            button.classList.add('editor19__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor19__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor19__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor19__code-menu--expanded');
            codeInput.classList.remove('editor19__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});