document.addEventListener("DOMContentLoaded", function () {
   
    const productCards = document.querySelectorAll(".product-card");
  
    productCards.forEach((card) => {
      const minusBtn = card.querySelector(".product-card__quantity-controls button:first-child"); // Przycisk "-"
      const plusBtn = card.querySelector(".product-card__quantity-controls button:last-child"); // Przycisk "+"
      const quantityInput = card.querySelector(".product-card__quantity-controls .product-card__quantity-input"); // Pole ilości
  
      
      minusBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value) || 1; 
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1; 
        }
      });
  
     
      plusBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityInput.value) || 1; 
        quantityInput.value = currentValue + 1; 
      });
  
      
      quantityInput.addEventListener("input", () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
          quantityInput.value = 1; 
        }
      });
    });
  });
  