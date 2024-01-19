const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('emil');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();

    });

const validateInput = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2lValue = password2.value.trim();

}