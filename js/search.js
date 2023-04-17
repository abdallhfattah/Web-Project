function mysearchfun(){
let input=document.getElementById("myinput");
let filter= input.value.toUpperCase();
let table_row=document.getElementsByTagName("tr");
var td, theValue;
for(let i=0 ; i<table_row.length; i++){
    td = table_row[i].getElementsByTagName("td")[1];
    if (td) {
      theValue = td.textContent;
      if (theValue.toUpperCase().indexOf(filter) > -1) {
        table_row[i].style.display = "";
      } else {
        table_row[i].style.display = "none";
      }
    }
  }
}
//----------------------------------------------------------------------------//


function loadTableData() {
  
  var tableBody = document.getElementById("mytable").getElementsByTagName("tbody")[0];
  

  tableBody.innerHTML = "";
  

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var stored_student = JSON.parse(localStorage.getItem(key));
   if(stored_student.student_stat== 'act'){
     var row = tableBody.insertRow(-1);
    var idCell = row.insertCell(0);
    var nameCell = row.insertCell(1);
    var gpaCell = row.insertCell(2);
    var levelCell = row.insertCell(3);
    var departmentCell = row.insertCell(4);
    var dobCell = row.insertCell(5);
    var genderCell = row.insertCell(6);
    var statusCell = row.insertCell(7);
    var emailCell = row.insertCell(8);
    var mobileCell = row.insertCell(9);

 
    idCell.innerHTML = stored_student.student_id;
    nameCell.innerHTML = stored_student.student_name;
    gpaCell.innerHTML = stored_student.student_gpa;
    levelCell.innerHTML = stored_student.student_lvl;
    departmentCell.innerHTML = stored_student.student_dep;
    dobCell.innerHTML = stored_student.student_dob;
    genderCell.innerHTML = stored_student.student_gender;
    statusCell.innerHTML = stored_student.student_stat;
    emailCell.innerHTML = stored_student.student_email;
    mobileCell.innerHTML = stored_student.student_num;
   }
   
  }
}

window.onload=loadTableData;