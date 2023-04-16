

document.getElementById("ok-button").addEventListener("click", function() {
    
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var department = document.getElementById("department").value;
    var level = localStorage.getItem('student-lvl');
    const lvl= '3';
    if(localStorage.getItem(id) == null)
    {
        alert("Please enter a valid id");
        return false;
    }
   


    if(level< lvl){
        alert("cannot edit department for this student ");
        return false;
    }
    


        var student = JSON.parse(localStorage.getItem(id));
    student.student_name = name;
    student.student_dep = department;
    localStorage.setItem(id, JSON.stringify(student));
    
    
});