document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js');
    const codeInput = document.querySelector('.editor__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor__animation-area__text">POMEOSPACE</div>
        `,
        scss: `
.editor__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: fadeIn 2s infinite;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}
        `,
        js: `
function animateText() {
    const element = document.querySelector('.editor__animation-area__text');
    element.style.opacity = (element.style.opacity === '0' || !element.style.opacity) ? '1' : '0';
    setTimeout(animateText, 1000);
}
animateText();
        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor__tabs__button--active'));
            button.classList.add('editor__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor__code-menu--expanded');
            codeInput.classList.remove('editor__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});