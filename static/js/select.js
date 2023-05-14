

document.getElementById("ok").addEventListener("click", function() {
    
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var level = JSON.parse(localStorage.getItem(id))['student_lvl'];
    
   
    if(localStorage.getItem(id) == null)
    {
        alert("Please enter a valid id");
        return false;
    }
   


    if(level==2 || level==1){
        alert("cannot edit department for this student ");
        return false;
    }
    
        var student = JSON.parse(localStorage.getItem(id));
    student.student_name = name;
    student.student_dep = department;
    localStorage.setItem(id, JSON.stringify(student));
    showSuccess();
    
    
});
function showSuccess(){
    let studentName = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let choice = confirm(department + " Department\nHas been selected\nFor student: " + studentName + "\nPress OK if you want to continue or Cancel");
    return choice;
}