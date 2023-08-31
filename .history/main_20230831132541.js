const form = document.querySelector('form');
const burron = form.querySelector('[type="submit"]');

function checkEmail (e) {
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;
    if(!validateEmail(email)){
        form.classList.add('error');
    } else {
        console.log('valid');
    }
    console.log(email);
}

function validateEmail(email) {
    const re /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail);