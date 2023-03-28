let header = `<div id="header">
<div>
  <ul>
    <li style="float: left;padding: 10px;" id="facultyName"><label>Faculty of computers and artificial intelligence</label></li>
    <ul>
      <li><a href="about.html">About</a></li>
      <li><a href="login.html">Login</a></li>
      <li><a href="register.html">Register</a></li>
      <li><a href="menu.html" class=""> Menu</a></li>
      <li><a href="home.html">Home</a></li>

    </ul>
</ul></div>`

document.getElementById('header').innerHTML=header;
let footer = `<dev class="footer">
<a href="home.html">HOME</a>
<a href="about.html">ABOUT</a>
<a href="login.html">LOGIN</a>
<a href="register.html"> REGISTER</a>
<a href="menu.html"> MENU</a>
</dev>`

document.getElementById('footer').innerHTML=footer;