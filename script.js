const form = document.getElementById('signup-form');
const terms = document.querySelector('.terms');
const successMessage = document.getElementById('success-message');
const userFirstName = document.getElementById('user-first-name');
const resetBtn = document.getElementById('reset-btn');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateInputs()) {
    userFirstName.textContent = firstName.value.trim();
    form.classList.add('hidden');
    terms.classList.add('hidden');
    successMessage.classList.remove('hidden');
  }
});

resetBtn.addEventListener('click', () => {
  form.reset();
  successMessage.classList.add('hidden');
  form.classList.remove('hidden');
  terms.classList.remove('hidden');
});

function validateInputs() {
  let isValid = true;

  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (firstNameVal === '') {
    setError(firstName, 'First Name cannot be empty');
    isValid = false;
  } else {
    clearError(firstName);
  }

  if (lastNameVal === '') {
    setError(lastName, 'Last Name cannot be empty');
    isValid = false;
  } else {
    clearError(lastName);
  }

  if (emailVal === '') {
    setError(email, 'Email cannot be empty');
    isValid = false;
  } else if (!isValidEmail(emailVal)) {
    setError(email, 'Looks like this is not an email');
    isValid = false;
  } else {
    clearError(email);
  }

  if (passwordVal === '') {
    setError(password, 'Password cannot be empty');
    isValid = false;
  } else {
    clearError(password);
  }

  return isValid;
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

[firstName, lastName, email, password].forEach((input) => {
  input.addEventListener('input', () => clearError(input));
});