document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".glitch-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".glitch-text span").forEach(span => {
      if (Math.random() > 0.7) {
        let x = (Math.random() - 0.5) * 10;
        let y = (Math.random() - 0.5) * 10;
        span.style.transform = `translate(${x}px, ${y}px)`;
        span.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      } else {
        span.style.transform = "translate(0, 0)";
        span.style.color = "";
      }
    });
  }, 100);
});
