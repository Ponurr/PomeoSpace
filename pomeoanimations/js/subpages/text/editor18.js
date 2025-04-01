document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor18__tabs__button');
    const codeMenu = document.getElementById('codeMenu18');
    const codeInput = document.querySelector('.editor18__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor18__animation-area__text">
        <span>POMEO</span>
</div>
        `,
        scss: `
.editor18__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    
    span{
      font-size: 3.8vw;
      text-transform: uppercase;
      font-weight: bold;
      color: transparent;
      background-image: url('https://www.publicdomainpictures.net/pictures/130000/t2/gray-gradient-background.jpg'); 
      background-size: 200%; 
      background-position: 0 50%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: animation2  5s infinite alternate linear;
  }
  @keyframes animation2 {
      0% {
          background-position: 0 50%;
      }
      100% {
          background-position: 100% 50%;
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
            tabButtons.forEach(btn => btn.classList.remove('editor18__tabs__button--active'));
            button.classList.add('editor18__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor18__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor18__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor18__code-menu--expanded');
            codeInput.classList.remove('editor18__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});