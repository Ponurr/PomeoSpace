
const menuButton = document.querySelector(".menu__button"); 
const navigationList = document.querySelector(".navigation__list"); 

menuButton.addEventListener("click", () => {
  navigationList.classList.toggle("active"); 
});
