const studentArray = [];

const submit_button = document.getElementById("btn");

function addStudent(){
    var ID = document.getElementById("id").value;
    console.log(ID);
    var Name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var gpa = document.getElementById("gpa").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("lvl").value;
    var stat= document.getElementById("sta").value;
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
        student_dep : dep,
        student_num : phone
    }
    console.log(student);
    // // checking values if null
    // if(ID !== "" && 
    //     Name !== "" &&
    //     student.student_dob !== "" &&
    //     student.student_gpa !== "" &&
    //     student.student_gender !== "select" &&
    //     student.student_lvl !== "" &&
    //     student.student_stat !== "select" &&
    //     student.student_dep !== "select" &&
    //     student.student_num !== "")
    // {
        let is_valid = true;
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const stored_student = JSON.parse(localStorage.getItem(key));
            if(student.student_id === stored_student.student_id){
                alert("This ID already exists");
                is_valid = false;
                break;
            }
            else if(student.student_id === stored_student.student_email){
                alert("This email already exists");
                is_valid = false;
                break;
            }
            else if(student.student_id === stored_student.student_num){
                alert("This phone number already exists");
                is_valid = false;
                break;
            }
        }
        if(is_valid){
            localStorage.setItem(ID, JSON.stringify(student));
        }
        else{
            alert('aready exits idiit')
        }
    }
    // else{
    //     alert("Please fill the form");
    // }



submit_button.addEventListener("click", function() {
    addStudent();
});



// let is_valid = true;
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