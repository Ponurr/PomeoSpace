const scaleInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Gdy element wejdzie na ekran – dodajemy klasę aktywującą animację
      entry.target.classList.add('scale-in--visible');
    } else {
      // Gdy element zniknie z ekranu – resetujemy animację
      entry.target.classList.remove('scale-in--visible');
    }
  });
}, { threshold: 0.4 }); // 40% elementu musi być widoczne, żeby odpalić

// Pobieramy wszystkie elementy z klasą "scale-in" i obserwujemy je
document.querySelectorAll('.scale-in').forEach(el => {
  scaleInObserver.observe(el);
});
