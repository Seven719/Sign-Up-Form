const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const email = document.querySelector('#email');

let samePassword = false;
let sameEmail = false;

confirmPassword.addEventListener('keyup', function () {
    if(password.value == confirmPassword.value) {
        samePassword = true;
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

function submitBtn() {
    if(samePassword != true) {
        shakePasswords();
        return false;
    }
    return true;
}

function shakePasswords() {
    password.classList.add('shake');
    confirmPassword.classList.add('shake');
    setTimeout(function() {
        password.classList.remove('shake');
        confirmPassword.classList.remove('shake');
    }, 300)
}
