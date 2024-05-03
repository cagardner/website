document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        if (this.classList.contains('active')) {
            navMenu.style.visibility = 'visible'; // Ensure visibility is turned on before sliding
        } else {
            setTimeout(() => {
                navMenu.style.visibility = 'hidden'; // Hide after transition
            }, 300); // Corresponds to the transition time
        }
    });
});