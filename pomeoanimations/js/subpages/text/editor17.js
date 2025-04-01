document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor17__tabs__button');
    const codeMenu = document.getElementById('codeMenu17');
    const codeInput = document.querySelector('.editor17__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor17__animation-area__text">
    <h1>
      <em><a>P</a></em>
      <em class="planet left">O</em>
      <em>M</em>
      <em>E</em>
      <em class="planet right">O</em>
    </h1>
</div>
        `,
        scss: `
.editor17__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;

h1 {
    margin: 0;
    height: 12vmin;
    width: 15vw;
    display: flex;
    justify-content: center;
    position: relative;
  }
  
  h1::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: -26vmin;
    left: 29vmin;
    width: 62vmin;
    height: 62vmin;
    border-radius: 50%;
    border: 1.3vmin solid currentColor;
    box-sizing: border-box;
  }
  
  em {
    font-family: 'ponur', sans-serif;
    color: currentColor;
    font-size: 5vmin;
    position: relative;
    font-style: normal;
    width: 20vmin;
    text-align: center;
    color: rgb(255, 255, 255);
  }
  a {
      color: purple !important;
  }
  
  em.planet {
    -webkit-animation: planet-rotate 4s linear infinite;
    animation: planet-rotate 4s linear infinite;
    position: relative;
  }
  
  em.planet::before {
    content: "";
    position: absolute;
    top: -.5vmin;
    left: 3.5vmin;
    z-index: -1;
    width: 13vmin;
    height: 13vmin;
    border-radius: 50%;
    background: black;
    opacity: 0;
  }
  
  em.planet.left {
    -webkit-transform-origin: 0vw 1vw;
    transform-origin: 6vw 1vw;
    color: purple;
  }
  
  em.planet.right {
    -webkit-transform-origin: 0vw 1vw;
    transform-origin: -3vw 1vw;
  }
  
  @-webkit-keyframes planet-rotate {
    to {
      -webkit-transform: rotate(1turn);
    }
  }
  
  @keyframes planet-rotate {
    to {
      transform: rotate(1turn);
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