const studentArray = [];

const submit_button = document.getElementById("btn");

function addStudent(){
    const student = {
        student_id : document.getElementById("id").value,
        student_name : document.getElementById("name").value,
        student_dob : document.getElementById("date").value,
        student_gpa : document.getElementById("gpa").value,
        student_gender : document.getElementById("gender").value,
        student_lvl : document.getElementById("lvl").value,
        student_stat : document.getElementById("sta").value,
        student_dep : document.getElementById("department").value,
        student_num : document.getElementById("phone").value
    };
    
    // checking values if null  
    if(student.student_id !== "" && 
        student.student_name !== "" &&
        student.student_dob !== "" &&
        student.student_gpa !== "" &&
        student.student_gender !== "" &&
        student.student_lvl !== "" &&
        student.student_stat !== "" &&
        student.student_dep !== "" &&
        student.student_num !== "")
    {
        localStorage.setItem("" + localStorage.length, JSON.stringify(student));
        location.reload();
    }
    else{
        alert("Please Fill the form")
    }
}

submit_button.addEventListener("click", function() {
    addStudent();
});
