// Button click: change color randomly
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorBtn.style.backgroundColor = randomColor;
});

// Hover effects on div
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.classList.add('hovered'));
hoverBox.addEventListener('mouseleave', () => hoverBox.classList.remove('hovered'));
hoverBox.addEventListener('focus', () => hoverBox.classList.add('hovered'));
hoverBox.addEventListener('blur', () => hoverBox.classList.remove('hovered'));

// Keypress detection on input
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// Double-click secret action
const secretBtn = document.getElementById('secretBtn');
const secretMsg = document.getElementById('secretMsg');
secretBtn.addEventListener('dblclick', () => {
    secretMsg.style.display = secretMsg.style.display === 'none' ? 'block' : 'none';
});

// Image gallery slideshow
const slides = document.querySelectorAll('#gallery img');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevSlide.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
nextSlide.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Initialize first slide
showSlide(currentSlide);

// Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(target).classList.add('active');
    });
});

// Form validation
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMsg = document.getElementById('formMsg');

function validateEmail(email) {
    // Simple email regex
    return /^\S+@\S+\.\S+$/.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
    } else {
        emailError.textContent = "";
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters";
    } else {
        passwordError.textContent = "";
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(emailInput.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters";
        valid = false;
    }

    if (valid) {
        formMsg.style.color = "green";
        formMsg.textContent = "Form submitted successfully!";
        form.reset();
        emailError.textContent = "";
        passwordError.textContent = "";
    } else {
        formMsg.style.color = "red";
        formMsg.textContent = "Please fix errors before submitting.";
    }
});
