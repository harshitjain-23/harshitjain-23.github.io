<script>
        // JavaScript for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    </script>