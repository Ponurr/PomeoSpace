document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".wavy-3d-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
    span.style.transform = `translate3d(0, ${Math.sin(index) * 10}px, ${Math.cos(index) * 10}px)`;
  });

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY / 10;
    document.querySelectorAll(".wavy-3d-text span").forEach((span, index) => {
      span.style.transform = `translate3d(0, ${Math.sin(scrollPos + index) * 10}px, ${Math.cos(scrollPos + index) * 10}px)`;
    });
  });
});
