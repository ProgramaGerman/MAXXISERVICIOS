document.addEventListener('DOMContentLoaded', () => {
    // Efecto de desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== '#') {
                window.location.href = href;
            }
        });
    });

    // Efecto de parallax en el hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.hero-content').style.transform = 
            `translateY(${scrolled * 0.5}px)`;
    });

    // Animación de las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = 'rgba(255,255,255,0.2)';
        });
        card.addEventListener('mouseout', () => {
            card.style.backgroundColor = 'rgba(255,255,255,0.1)';
        });
    });

    // Animación del botón CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.location.href = '#agendar';
        });
    }
});