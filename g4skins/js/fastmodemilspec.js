const timerDiv = document.querySelector('.MilSpec__Info-timer');
const notification = timerDiv.querySelector('.notification');

// Pokazanie powiadomienia przy najechaniu
timerDiv.addEventListener('mouseenter', function() {
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.opacity = 1; 
  }, 10); 
});


timerDiv.addEventListener('mouseleave', function() {
  notification.style.opacity = 0;
  setTimeout(() => {
    notification.style.display = 'none'; // Ukryj powiadomienie
  }, 300); // Czas, który pozwala na zakończenie efektu zanikania
});