const form = document.querySelector('#form')
const pass1 = document.querySelector('#password1')
const pass2 = document.querySelector('#password2')
const messageContainer = document.querySelector('.message-container')
const message = document.querySelector('#message')

let isValid = false
let pass = false

function validateForm () {
    // USING CONSTRAINT API
    isValid = form.checkValidity();
    if  (!isValid){
        message.textContent = 'Please, fill out all fields!'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red'
    }else {
        message.textContent = 'Thank you for registering! :)'
        messageContainer.style.borderColor = 'green'
        message.style.color = 'green'
        return;
    }

    if (pass1.value === pass2.value) {
        pass = true
        pass1.style.borderColor = 'green'
        pass2.style.borderColor = 'green'
        message.textContent = 'Thank you for registering! :)'
        messageContainer.style.borderColor = 'green'
        message.style.color = 'green'

    }else {
        pass = false;
        message.textContent = 'Password does not match!'
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red'
        pass1.style.borderColor = 'red'
        pass2.style.borderColor = 'red'
        return;
    }
    
}
function storeData () {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    // send to a database
}
function processData (e) {
    e.preventDefault()
    // FORM VALIDITY
    validateForm();
    if (isValid && pass)
    storeData()
}

// EVENT LISTENERS
form.addEventListener('submit', processData)