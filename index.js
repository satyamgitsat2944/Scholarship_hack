// Get the login and signup form elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Get the navbar links
const loginLink = document.querySelector('.nav-right a[href="#login"]');
const signupLink = document.querySelector('.nav-right a[href="#signup"]');

// Get the close buttons in the forms
const closeButtons = document.querySelectorAll('.cancel');

// Function to open login form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default link behavior
    loginForm.classList.add('active');
    signupForm.classList.remove('active');  // Hide signup form if it's open
});

// Function to open signup form
signupLink.addEventListener('click', (e) => {
    e.preventDefault();  // Prevent default link behavior
    signupForm.classList.add('active');
    loginForm.classList.remove('active');  // Hide login form if it's open
});

// Close the forms when the "Close" button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginForm.classList.remove('active');
        signupForm.classList.remove('active');
    });
});
