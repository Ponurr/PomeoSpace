document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.recommended-products__carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const scrollAmount = 350; 
  
   
    prevButton.addEventListener('click', () => {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  
   
    nextButton.addEventListener('click', () => {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  });
  