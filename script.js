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


window.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  function success() {
    form.reset();
    status.innerHTML = "Thanks! Your message has been sent.";
    status.style.color = 'green';
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.style.color = 'red';
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault(); // Prevents the default page reload
    const data = new FormData(form);
    
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        success();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            error();
          }
        })
      }
    }).catch(error => {
      error();
    });
  });
});