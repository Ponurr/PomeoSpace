document.addEventListener("DOMContentLoaded", function () {
  const footerButtons = document.querySelectorAll(".footer__button");

  footerButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();

      const list = this.closest(".footer-section").querySelector(".footer-section--list");
      if (list) {
        list.classList.toggle("active");
      }
    });
  });
});
