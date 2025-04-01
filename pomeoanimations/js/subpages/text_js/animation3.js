document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".hidden-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".hidden-text span").forEach(span => {
      span.style.opacity = Math.random() > 0.5 ? "0" : "1";
    });
  }, 300);
});