document.querySelector('.MilSpec__Info-sound').addEventListener('click', function() {
    const icon = this.querySelector('i');
    
    if (icon.classList.contains('fa-volume-high')) {
      icon.classList.remove('fa-volume-high');
      icon.classList.add('fa-volume-xmark'); 
    } else {
      icon.classList.remove('fa-volume-xmark');
      icon.classList.add('fa-volume-high');
    }
  });