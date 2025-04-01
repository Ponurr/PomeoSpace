document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor20__tabs__button');
    const codeMenu = document.getElementById('codeMenu20');
    const codeInput = document.querySelector('.editor20__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="editor20__animation-area__text"> <div class="main">
            <svg viewBox="0 0 800 300">
              <symbol id="s-text">
                  <text text-anchor="middle" x="50%" y="40%" class="text--line">
                      pomeo
                  </text>
                  <text text-anchor="middle" x="50%" y="75%" class="text--line2">
                      Space
                  </text>
              </symbol>
    
              <g class="g-ants">
                  <use xlink:href="#s-text" class="text-copy"></use>
                  <use xlink:href="#s-text" class="text-copy"></use>
                  <use xlink:href="#s-text" class="text-copy"></use>
                  <use xlink:href="#s-text" class="text-copy"></use>
                  <use xlink:href="#s-text" class="text-copy"></use>
              </g>
          </svg>
           
  </div>
        `,
        scss: `
.editor20__animation-area__text {
   

    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 2vw;
  
    svg {
        width: 100%;
        height: 100%;
    }

    text {
        font-size: 4.6vw;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        text-transform: uppercase;
        fill: rgb(255, 255, 255); 
        stroke-width: $stroke-width;
    }

    .text-copy {
        fill: none;
        stroke-width: $stroke-width;
        stroke-linecap: round;
        stroke-dasharray: 0, 100%; 
        animation: draw-text $animation-duration forwards ease-in-out infinite;

        @for $i from 1 through length($colors) {
            &:nth-child(#{$i}) {
                stroke: nth($colors, $i);
                animation-delay: ($i - 1) * 0.2s;
            }
        }
    }
}

@keyframes draw-text {
0% {
    stroke-dasharray: 0, 100%;
}
50% {
    stroke-dasharray: 100%, 0;
}
100% {
    stroke-dasharray: 0, 100%;
}
}
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor20__tabs__button--active'));
            button.classList.add('editor20__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor20__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor20__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor20__code-menu--expanded');
            codeInput.classList.remove('editor20__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});