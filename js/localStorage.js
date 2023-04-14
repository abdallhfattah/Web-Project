// const submit_button = document.getElementById("btn");

function addStudent(){
    var ID = document.getElementById("id").value;
    console.log(ID);
    var Name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var gpa = document.getElementById("gpa").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("lvl").value;
    var stat= document.getElementById("sta").value;
    var email = document.getElementById("ema").value; // error
    var dep =  document.getElementById("department").value;
    var phone = document.getElementById("phone").value;

    var student = {
        student_id : ID,
        student_name : Name,
        student_dob : date,
        student_gpa : gpa,
        student_gender : gender,
        student_lvl : level,
        student_stat : stat,
        student_email : email,
        student_dep : dep,
        student_num : phone
    }
    console.log(student);
    // checking values if null
    let is_valid = true;
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const stored_student = JSON.parse(localStorage.getItem(key));
        if(student.student_id === stored_student.student_id){
            alert("This ID already exists");
            is_valid = false;
            break;
        }
        else if(student.student_email === stored_student.student_email){
            alert("This email already exists");
            is_valid = false;
            break;
        }
        else if(student.student_num === stored_student.student_num){
            alert("This phone number already exists");
            is_valid = false;
            break;
        }
    }
    if(is_valid){
        localStorage.setItem(ID, JSON.stringify(student));
    }
}

// let is_valid = true
// for(let i = 0; i < localStorage.length; i++){
//     const key = localStorage.key(i);
//     const stored_student = JSON.parse(localStorage.getItem(key));
//     if(student.student_id === stored_student.student_id){
//         alert("This ID already exists");
//         is_valid = false;
//         break;
//     }
//     else if(student.student_id === stored_student.student_email){
//         alert("This email already exists");
//         is_valid = false;
//         break;
//     }
//     else if(student.student_id === stored_student.student_num){
//         alert("This phone number already exists");
//         is_valid = false;
//         break;
//     }
// }