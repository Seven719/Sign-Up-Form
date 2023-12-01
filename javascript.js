const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const email = document.querySelector('#email');

let samePassword = false;
let sameEmail = false;

confirmPassword.addEventListener('keyup', function () {
    if(password.value == confirmPassword.value) {
        same = true;
        password.style.textDecorationColor = 'green';
        confirmPassword.style.textDecorationColor = 'green';
    }
    else {
        password.style.textDecorationColor = 'red';
        confirmPassword.style.textDecorationColor = 'red';
    }
})

email.addEventListener('keyup', function () {
    if(!email.checkValidity()) {
        email.style.textDecorationColor = 'red';
    }
    else {
        email.style.textDecorationColor = 'green';
    }
})
