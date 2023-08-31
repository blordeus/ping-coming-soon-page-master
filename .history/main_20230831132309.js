const form = document.querySelector('form');
const burron = form.querySelector('[type="submit"]');

function checkEmail (e) {
    e.preventDefault();
    const email = e.target.querySelector('[type="email"]').value;
    if(!validateEmail(email)){
        form.classList.add('error');
    } else {
        console.log('valid')
    }

}