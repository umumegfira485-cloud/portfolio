
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = form.querySelector('input[name="name"]');
    const nameValue = nameInput.value.trim();

    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(nameValue)) {
      alert("Please enter a valid name.");
      nameInput.focus();
      return; 
    }

    alert("Thank You For Your Message!");
    form.reset();
  });
}
