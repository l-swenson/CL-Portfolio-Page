
// Hamburger menu functionality
document.querySelector('#hamburgerMenu').addEventListener('click', () => {

    const menu = document.querySelector('#headerNav');
    var menuIsOpen = menu.style.display === 'flex';

  if (menuIsOpen) {
    document.querySelector('#hamburgerMenu').classList.remove('change');
    menu.style.display = 'none';
  } 

  else  {
    document.querySelector('#hamburgerMenu').classList.add('change');
    menu.style.display = 'flex';
  }

});



document.querySelector('.main-nav a').addEventListener('click', () => {
  const menu = document.querySelector('#headerNav');

  document.querySelector('#hamburgerMenu').classList.remove('change');
  menu.style.display = 'none';
});


// Email verification and contact form greeting
var submitButton = document.getElementById('btn');

submitButton.addEventListener("click", function(){

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(document.getElementById("fullName"). value. length == 0)
  {
    alert("Please enter your name!")
    }

  if(email.value.match(mailFormat)){
    let name = fullName.value
    alert ("Thank you " + name + " for your message!")
  }

  else {
    alert("You have entered an invalid email address!");
  }

});

