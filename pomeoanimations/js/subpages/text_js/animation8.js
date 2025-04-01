document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".explode-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  textElement.addEventListener("click", () => {
    document.querySelectorAll(".explode-text span").forEach(span => {
      let x = (Math.random() - 0.5) * 300;
      let y = (Math.random() - 0.5) * 300;
      let rotation = Math.random() * 720;

      span.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
      span.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      span.style.opacity = "0";
    });

    setTimeout(() => {
      document.querySelectorAll(".explode-text span").forEach(span => {
        span.style.transition = "transform 0.5s ease-in, opacity 0.5s ease-in";
        span.style.transform = "translate(0, 0) rotate(0deg)";
        span.style.opacity = "1";
      });
    }, 4000); // Powrót po 4 sekundach
  });
});
