document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".block13");

  function checkPosition() {
      const blockRect = block.getBoundingClientRect();
      const triggerBottom = window.innerHeight * 0.8;

      if (blockRect.top < triggerBottom) {
          block.classList.add("active");
      } else {
          block.classList.remove("active");
      }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();
});
