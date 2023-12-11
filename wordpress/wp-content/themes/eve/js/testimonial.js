document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.testimonial');
    const carousel = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i >= index && i < index + 3) {
                testimonial.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % (testimonials.length - 2);
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + (testimonials.length - 2)) % (testimonials.length - 2);
        showTestimonial(currentIndex);
    }

    // Afficher les trois premiers témoignages au chargement
    showTestimonial(currentIndex);

    // Définir les événements pour les boutons suivant et précédent
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Vous pouvez également ajouter une fonction pour naviguer avec les touches du clavier
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
            nextTestimonial();
        } else if (e.key === 'ArrowLeft') {
            prevTestimonial();
        }
    });
});
