document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor22__tabs__button');
    const codeMenu = document.getElementById('codeMenu22');
    const codeInput = document.querySelector('.editor22__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
 <div class="editor22__animation-area__text"> <div class="main">
            <span>
              <span>P</span><span>o</span><span>m</span><span>e</span><span>o</span>
            </span>
            </div>
        `,
        scss: `
.editor22__animation-area__text {
   
    
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 2vw;
    
    span {
        width: 30vw;
        font-size: 1.8vw;
        font-family: "ponur";
        color: #ffffff;
        text-transform: uppercase;
        letter-spacing: 2px;
        display: inline-flex;
        position: relative;
    
        
        span {
          display: inline-block;
          animation: explodeAndReform 7s ease-in-out infinite;
          transform-style: preserve-3d; 
          position: relative;
        }
    
        
        $text: "Ponurek to szef";
        @for $i from 1 through str-length($text) {
          span:nth-child(#{$i}) {
            animation-delay: ($i * 0.15s); 
          }
        }
      }
    
     
      @keyframes explodeAndReform {
        0% {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg) scale(1);
          opacity: 1;
        }
        20% {
          transform: translateZ(50px) rotateX(90deg) rotateY(45deg) scale(1.3); 
          opacity: 0.7;
        }
        40% {
          transform: translateZ(-30px) translateX(20px) rotateX(-180deg) rotateY(90deg) scale(0.8); 
          opacity: 0.5;
        }
        60% {
          transform: translateZ(20px) translateY(-15px) rotateX(360deg) rotateY(-45deg) scale(1.1); 
          opacity: 0.8;
        }
        80% {
          transform: translateZ(-10px) rotateX(-90deg) rotateY(180deg) scale(0.9); 
          opacity: 0.9;
        }
        100% {
          transform: translateZ(0) rotateX(0deg) rotateY(0deg) scale(1); 
          opacity: 1;
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
            tabButtons.forEach(btn => btn.classList.remove('editor22__tabs__button--active'));
            button.classList.add('editor22__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor22__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor22__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor22__code-menu--expanded');
            codeInput.classList.remove('editor22__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});