import {addStudent} from './localStorage.js';


var form = document.getElementById("form");
var student_id = document.getElementById("id");
var student_name = document.getElementById("name");
var student_email = document.getElementById("email");
var student_mobile_number = document.getElementById("phone");
var student_pass = document.getElementById("pass");
var student_conf_pass = document.getElementById("confirm-pass");
var level = document.getElementById("level");
var dep =  document.getElementById("department");



form.addEventListener('submit' , e => {
    e.preventDefault();
    
    validate_Inputs();
});

/* ================== Error ================== */
const setError = (element , messsage) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = messsage;
    inputControl.classList.add('error');
    inputControl.classList.remove("success");
}

/* ================== Success ================== */
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

/* ================== Validation ================== */ 
const validate_Inputs = () =>{
    var vaild = true;
    const id_value = student_id.value.trim();
    const name_value= student_name.value.trim();
    const email_value = student_email.value.trim();
    const mobile_value = student_mobile_number.value.trim();
    const password_value = student_pass.value.trim();
    const confirm_value  = student_conf_pass.value.trim();

    // ID
    if(id_value === ''){
        setError(student_id, "ID is required");
        vaild = false;
        
    }
    else if(!isValidateID(id_value)){
        setError(student_id , "Please provide valid ID");
        vaild = false;
    }
    else{
        setSuccess(student_id);
    }

    // Email
    if(email_value === '') {
        setError(student_email, 'Email is required');
        vaild = false;
    } else if (!isValidEmail(email_value)) {
        setError(student_email, 'Provide a valid email address');
        vaild = false;
    } else {
        setSuccess(student_email);
    }

    // Name
    if(name_value === ''){
        setError(student_name, "name is required");
        vaild = false;
    }else if(!isValidName(name_value)){
        setError(student_name, "please enter valid name");
        vaild = false;
    }
    else{
        setSuccess(student_name);
    }

    // Phone
    if(mobile_value === ''){
        setError(student_mobile_number, "phone number is required");
        vaild = false;
    }
    else if(!isValidPhoneNumber(mobile_value)){
        setError(student_mobile_number , "please enter valid phone number");
        vaild = false;
    }
    else{
        setSuccess(student_mobile_number);
    }

    // password
    if(password_value === '') {
        setError(student_pass, 'Password is required');
        vaild = false;
    } else if (password_value.length < 8 ) {
        setError(student_pass, 'Password must be at least 8 character.');
        vaild = false;
    } else {
        setSuccess(student_pass);
    }

    if(confirm_value === '') {
        setError(student_conf_pass, 'Please confirm your password');
        vaild = false;
    } else if (confirm_value !== password_value) {
        setError(student_conf_pass, "Passwords doesn't match");
        vaild = false;
    } else {
        setSuccess(student_conf_pass);
    }
    //level
    if(level.value < 3){
        dep.value = "None";
    }
    if(vaild){
        addStudent();
    }

}

const isValidName = name => {
    const ok = /^[a-zA-Z ]+$/;
    return ok.test(name);
}

const isValidPhoneNumber = number => {    
    const pattern = /^0(10|11|12|15)\d{8}$/;
    return pattern.test(number);
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function isValidateID(id) {
    const pattern = /^[0-9]{1,5}$/;
    return pattern.test(id) && parseInt(id) >= 0 && parseInt(id) <= 10000;
}