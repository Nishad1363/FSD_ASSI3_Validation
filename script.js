const form = document.getElementById('registration-form'); // corrected form id
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const zip = document.getElementById('zip');
const zipError = document.getElementById('zip-error');
const registerBtn = document.getElementById('registration-form');

form.addEventListener('submit', (event) => { // corrected event listener syntax
    let errors = false;

    // Validate usernameS
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        errors = true;
    } else {
        usernameError.textContent = '';
    }

    // Validate email
    if (email.value.trim() === '') {
        emailError.textContent = 'Email is required';
        errors = true;
    } else if (!/\S+@\S+\.\S+/.test(email.value) || email.value.indexOf('.com') !== email.value.length - 4) {
        emailError.textContent = 'Invalid email format';
        errors = true;
    } else {
        emailError.textContent = '';
    }

    // Validate phone number
    if (phone.value.trim() === '') {
        phoneError.textContent = 'Phone number is required';
        errors = true;
    } else if (!/^\d{10}$/.test(phone.value)) {
        phoneError.textContent = 'Invalid phone number format';
        errors = true;
    } else {
        phoneError.textContent = '';
    }

    // Validate zip code
    if (zip.value.trim() === '') {
        zipError.textContent = 'Zip code is required';
        errors = true;
    } else if (!/^\d{6}$/.test(zip.value)) {
        zipError.textContent = 'Invalid zip code format';
        errors = true;
    } else {
        zipError.textContent = '';
    }

    // Validate password
    if (password.value.trim() === '') {
        passwordError.textContent = 'Password is required';
        errors = true;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[&@$#]).{7,}/.test(password.value)) {
        passwordError.textContent = 'Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character from the set (&, @, #, $)';
        errors = true;
    } else {
        passwordError.textContent = '';
    }

    // Validate confirm password
    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.textContent = 'Confirm password is required';
        errors = true;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        errors = true;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (errors) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully");
    }
});
