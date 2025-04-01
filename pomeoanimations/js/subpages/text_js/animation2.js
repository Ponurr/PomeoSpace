document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".wave-text");
    const text = textElement.innerText;
    textElement.innerHTML = "";
    
    text.split("").forEach((char, index) => {
      let span = document.createElement("span");
      span.textContent = char;
      span.style.setProperty("--delay", index);
      textElement.appendChild(span);
    });
  });