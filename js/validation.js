export function check()
{
    var Name = document.getElementById("name").value;
    let specialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0123456789]+/;
    /* ================== Name check ================== */
    if(specialCharacter.test(Name) ){
        alert("ERROR Invalid Name:\nName can contain only letters"); 
        return false;
    }
    /* ================== ID constraints ================== */
    var ID = document.getElementById("id").value;
    if(ID > 0 && ID < 10000 && Number.isInteger(ID))
    {
        alert("Please enter a valid id , ID between 0 and 10,000");
        return false;
    }

    var Email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(Email)) {
        alert("Please enter a valid email")
    }

    /* ================== Department Level check ================== */
    var Level = document.getElementById("level").value;
    var Department = document.getElementById("dep").value;
    if(Level < 3 && Department != "GE"){
        alert("ERROR Invalid Level:\nLevel must be 3 or higher to register to a department");
        return false;
    }

    /* ================== Mobile Regex ================== */
    var Mobile_Number = document.getElementById("mobile-number").value;
    let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(Mobile_Number[0] != '0' || Mobile_Number.length != 11 || special.test(Mobile_Number)){
        alert("ERROR Invalid Mobile Number:\nMobile Number should begin with a zero and should contain only digits"); 
        return false;
    }

    /* ================== Password Match ================== */
    var Pass = document.getElementById("pass");
    var conf_pass = document.getElementById("confirm-pass");
    if(Pass !== conf_pass) {
        alert("Password are not matching");
        return false;
    }
}   