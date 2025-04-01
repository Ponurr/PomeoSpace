const text = "POMEOSPACE";
const container = document.getElementById("glitch__text");

function typeGlitch(callback) {
  container.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      const char = text[i];
      const span = document.createElement("span");
      span.className = "glitch-letter";
      span.setAttribute("data-char", char);
      span.textContent = char;
      container.appendChild(span);
      i++;
      setTimeout(type, 80 + Math.random() * 100);
    } else {
      // Po zakończeniu pisania – czekaj 5s i zresetuj
      setTimeout(() => {
        container.innerHTML = "";
        // wywołujemy ponownie typeGlitch – zapętlamy animację
        typeGlitch(callback);
      }, 4000);
    }
  }

  type();
}

// Startujemy zapętloną animację
typeGlitch();
