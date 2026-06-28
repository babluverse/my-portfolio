// ── EmailJS Init ──
emailjs.init('25rjG-6-7nbwP11vB');

// ── Contact Form ──
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) return;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    emailjs.send('service_4mw2ojq', 'template_m2i83le', {
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      submitBtn.textContent = 'Sent! ✓';
      submitBtn.style.backgroundColor = '#22c55e';
      contactForm.reset();

      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      submitBtn.textContent = 'Failed. Try again.';
      submitBtn.disabled = false;
    });
  });
}