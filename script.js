const simpleContactForm =
  document.getElementById("simpleContactForm");

simpleContactForm.addEventListener("submit", function(event) {
  if (!simpleContactForm.checkValidity()) {
    return;
  }

  event.preventDefault();

  const status =
    simpleContactForm.querySelector(".form-status");

  status.textContent =
    "Form submitted successfully.";

  status.className =
    "form-status mt-3 mb-0 success";
});

const html5ContactForm =
  document.getElementById("html5ContactForm");

html5ContactForm.addEventListener("submit", function(event) {
  if (!html5ContactForm.checkValidity()) {
    return;
  }

  event.preventDefault();

  const status =
    html5ContactForm.querySelector(".form-status");

  status.textContent =
    "HTML5 validation completed.";

  status.className =
    "form-status mt-3 mb-0 success";
});

const bootstrapContactForm =
  document.getElementById("bootstrapContactForm");

bootstrapContactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  bootstrapContactForm.classList.add("was-validated");

  if (!bootstrapContactForm.checkValidity()) {
    const status =
      bootstrapContactForm.querySelector(".form-status");

    status.textContent =
      "Please correct the highlighted fields.";

    status.className =
      "form-status mt-3 mb-0 error";

    return;
  }

  const status =
    bootstrapContactForm.querySelector(".form-status");

  status.textContent =
    "Form submitted successfully.";

  status.className =
    "form-status mt-3 mb-0 success";
});

const registrationForm =
  document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const password =
    document.getElementById("password");

  const confirmPassword =
    document.getElementById("confirmPassword");

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity(
      "Passwords do not match"
    );
  } else {
    confirmPassword.setCustomValidity("");
  }

  registrationForm.classList.add("was-validated");

  if (!registrationForm.checkValidity()) {
    const status =
      registrationForm.querySelector(".form-status");

    status.textContent =
      "Please correct the highlighted fields.";

    status.className =
      "form-status mb-0 error";

    return;
  }

  const status =
    registrationForm.querySelector(".form-status");

  status.textContent =
    "Registration completed successfully.";

  status.className =
    "form-status mb-0 success";
});

const password =
  document.getElementById("password");

const confirmPassword =
  document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", function() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity(
      "Passwords do not match"
    );
  } else {
    confirmPassword.setCustomValidity("");
  }
});

registrationForm.addEventListener("reset", function() {
  registrationForm.classList.remove("was-validated");

  const status =
    registrationForm.querySelector(".form-status");

  status.textContent = "";
  status.className = "form-status mb-0";
});