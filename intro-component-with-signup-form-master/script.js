const form = document.getElementById('signup-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (firstNameVal === '') {
    setError(firstName, 'First Name cannot be empty');
  } else {
    clearError(firstName);
  }

  if (lastNameVal === '') {
    setError(lastName, 'Last Name cannot be empty');
  } else {
    clearError(lastName);
  }

  if (emailVal === '') {
    setError(email, 'Email cannot be empty');
  } else if (!isValidEmail(emailVal)) {
    setError(email, 'Looks like this is not an email');
  } else {
    clearError(email);
  }

  if (passwordVal === '') {
    setError(password, 'Password cannot be empty');
  } else {
    clearError(password);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector('.error-msg');
  errorMsg.textContent = message;
  formControl.classList.add('error');
}

function clearError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Clear error state as the user types
[firstName, lastName, email, password].forEach((input) => {
  input.addEventListener('input', () => clearError(input));
});