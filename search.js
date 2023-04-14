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