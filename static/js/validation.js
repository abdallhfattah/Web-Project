import axios from 'axios';
import { reverse } from 'django.urls';

const form = document.getElementById("form");
const student_id = document.getElementById("id");
const student_email = document.getElementById("email");
const student_mobile_number = document.getElementById("phone");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = () => {
    const idValue = student_id.value.trim();
    const emailValue = student_email.value.trim();
    const mobileValue = student_mobile_number.value.trim();
    let isValid = true;

    if (idValue !== '') {
        checkIfExists('stud_id', idValue)
            .then(response => {
                if (response.data.exists) {
                    setError(student_id, 'This ID already exists.');
                    isValid = false;
                } else {
                    setSuccess(student_id);
                }
            })
            .catch(error => {
                console.log(error);
                isValid = false;
            });
    }

    if (emailValue !== '') {
        checkIfExists('email', emailValue)
            .then(response => {
                if (response.data.exists) {
                    setError(student_email, 'This email already exists.');
                    isValid = false;
                } else {
                    setSuccess(student_email);
                }
            })
            .catch(error => {
                console.log(error);
                isValid = false;
            });
    }

    if (mobileValue !== '') {
        checkIfExists('mobileNumber', mobileValue)
            .then(response => {
                if (response.data.exists) {
                    setError(student_mobile_number, 'This phone number already exists.');
                    isValid = false;
                } else {
                    setSuccess(student_mobile_number);
                }
            })
            .catch(error => {
                console.log(error);
                isValid = false;
            });
    }

    if (isValid) {
        // Proceed with form submission
        form.submit();
    }
}

const checkIfExists = (field, value) => {
    const url = reverse('base:check_exists');  // Replace with the actual URL to your Django view for checking existence
    const data = { field, value };

    return axios.post(url, data);
}

/* ================== Error ================== */
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


/* ================== Success ================== */
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
