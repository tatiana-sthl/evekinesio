document.addEventListener('DOMContentLoaded', function() {
  const marginAfterScrollStop = 20; // Ajustez cette valeur selon vos besoins
  let isScrollStopped = false;

  function applyMargin() {
    window.scrollTo(0, marginAfterScrollStop);
    isScrollStopped = false;
  }

  function handleScroll() {
    if (window.scrollY === 0) {
      // Si la fenêtre est remontée au début de la page, appliquez la marge
      if (isScrollStopped) {
        applyMargin();
      }
      isScrollStopped = true;
    } else {
      // Si le défilement ne s'est pas arrêté, réinitialisez le drapeau
      isScrollStopped = false;
    }
  }

  // Ajoutez un écouteur d'événements de défilement
  window.addEventListener('scroll', handleScroll);
});
