
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()
    // console.log(event)

    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены');
    } else {
        console.log({ Email: email.value, Password: password.value });
        event.currentTarget.reset();
    }
}

