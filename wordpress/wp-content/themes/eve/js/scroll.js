document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    const sideElements = document.querySelectorAll('.side-appear');
  
    function fadeInElements(elements) {
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (elementPosition < screenHeight) {
          element.style.opacity = 1;
          element.style.transform = 'translateY(0)';
        }
      });
    }
  
    function fadeInSideElements() {
      sideElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
  
        if (elementPosition < screenHeight) {
          element.style.opacity = 1;
          element.style.transform = 'translateX(0)';
        }
      });
    }
  
    // Appelez les fonctions initialement
    fadeInElements(fadeElements);
    fadeInSideElements();
  
    // Ajoutez des écouteurs d'événements de défilement
    window.addEventListener('scroll', function() {
      fadeInElements(fadeElements);
      fadeInSideElements();
    });
  });
  