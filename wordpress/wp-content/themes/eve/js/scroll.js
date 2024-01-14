document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in');

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

  // Appelez les fonctions initialement
  fadeInElements(fadeElements);

  // Ajoutez des écouteurs d'événements de défilement
  window.addEventListener('scroll', function() {
    fadeInElements(fadeElements);
  });
});
