import confetti from "https://cdn.skypack.dev/canvas-confetti";

let nameField = document.getElementById('name');
let emailField = document.getElementById('email');
let phoneField = document.getElementById('tel');
let submitBtn = document.getElementById('submit-button');
let form = document.getElementById('customerForm');

function handleFormSubmission(event) {
    event.preventDefault();

    
    nameField.value = '';
    emailField.value = '';
    phoneField.value = '';

    
    submitBtn.disabled = true;

   
    party();
}

function party() {
    confetti();
}

function checkFormInputs() {
    if (nameField.value && emailField.value && phoneField.value) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}


form.addEventListener('submit', handleFormSubmission);
form.addEventListener('input', checkFormInputs);