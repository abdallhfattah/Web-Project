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
    const url = reverse('base:add');  // Replace with the actual URL to your Django view for checking existence
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


form.addEventListener('submit' , e => {
    e.preventDefault();

    validate_Inputs();
});



/* ================== Validation ================== */ 
// const validate_Inputs = () =>{
//     var vaild = true;
//     const id_value = student_id.value.trim();
//     const name_value= student_name.value.trim();
//     const email_value = student_email.value.trim();
//     const mobile_value = student_mobile_number.value.trim();
//     const password_value = student_pass.value.trim();
//     const confirm_value  = student_conf_pass.value.trim();

//     // ID
//     if(id_value === ''){
//         setError(student_id, "ID is required");
//         vaild = false;
        
//     }
//     else if(!isValidateID(id_value)){
//         setError(student_id , "Please provide valid ID");
//         vaild = false;
//     }
//     else{
//         setSuccess(student_id);
//     }

//     // Email
//     if(email_value === '') {
//         setError(student_email, 'Email is required');
//         vaild = false;
//     } else if (!isValidEmail(email_value)) {
//         setError(student_email, 'Provide a valid email address');
//         vaild = false;
//     } else {
//         setSuccess(student_email);
//     }

//     // Name
//     if(name_value === ''){
//         setError(student_name, "name is required");
//         vaild = false;
//     }else if(!isValidName(name_value)){
//         setError(student_name, "please enter valid name");
//         vaild = false;
//     }
//     else{
//         setSuccess(student_name);
//     }

//     // Phone
//     if(mobile_value === ''){
//         setError(student_mobile_number, "phone number is required");
//         vaild = false;
//     }
//     else if(!isValidPhoneNumber(mobile_value)){
//         setError(student_mobile_number , "please enter valid phone number");
//         vaild = false;
//     }
//     else{
//         setSuccess(student_mobile_number);
//     }

//     // password
//     if(password_value === '') {
//         setError(student_pass, 'Password is required');
//         vaild = false;
//     } else if (password_value.length < 8 ) {
//         setError(student_pass, 'Password must be at least 8 character.');
//         vaild = false;
//     } else {
//         setSuccess(student_pass);
//     }

//     if(confirm_value === '') {
//         setError(student_conf_pass, 'Please confirm your password');
//         vaild = false;
//     } else if (confirm_value !== password_value) {
//         setError(student_conf_pass, "Passwords doesn't match");
//         vaild = false;
//     } else {
//         setSuccess(student_conf_pass);
//     }
//    //level
//     if(level.value < 3){
//         dep.value = "None";
//     }
//     if(vaild){
//         addStudent();
//     }

// }

// const isValidName = name => {
//     const ok = /^[a-zA-Z ]+$/;
//     return ok.test(name);
// }

// const isValidPhoneNumber = number => {    
//     const pattern = /^0(10|11|12|15)\d{8}$/;
//     return pattern.test(number);
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


function isValidateID(id) {
    const pattern = /^[0-9]{1,5}$/;
    return pattern.test(id) && parseInt(id) >= 0 && parseInt(id) <= 20219999;
}