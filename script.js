document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you! Your message has been captured. A follow-up email will be sent shortly.');
    form.reset();
  });
});
