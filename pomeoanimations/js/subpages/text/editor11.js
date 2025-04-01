document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor11__tabs__button');
    const codeMenu = document.getElementById('codeMenu11');
    const codeInput = document.querySelector('.editor11__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor11__animation-area__text"><span>POMEOSPACE</span></div>
        `,
        scss: `
.editor11__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: shake 0.3s infinite;


}
@keyframes shake {
    0% { transform: translate(0, 0); }
    25% { transform: translate(-5px, 0); }
    50% { transform: translate(5px, 0); }
    75% { transform: translate(-5px, 0); }
    100% { transform: translate(0, 0); }
}
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor11__tabs__button--active'));
            button.classList.add('editor11__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor11__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor11__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor11__code-menu--expanded');
            codeInput.classList.remove('editor11__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});