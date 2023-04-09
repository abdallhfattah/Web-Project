let header = `<div id="header">
<div>
  <ul>
    <li style="float: left;padding: 10px;" id="facultyName"><label>Faculty of computers and artificial intelligence</label></li>
    <ul>
      <li><a href="about.html">About</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="register.html">Register</a></li>
      <li><div class="dropdown">
      <button onclick="myFunction()" class="dropbtn">Menu</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="search.html">Search</a>
        <a href="edit.html">Edit</a>
        <a href="select.html">Select</a>
        <a href="show.html">Show</a>
      </div>
    </div></li>
      <li><a  href="home.html">Home</a></li>

    </ul>
</ul></div>`

document.getElementById('header').innerHTML=header;
let footer = `<dev class="footer">
</dev>`

document.getElementById('footer').innerHTML=footer;


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
