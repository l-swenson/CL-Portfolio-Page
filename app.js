// let person = {
//     firstName: 'John',
//     lastName: 'Adams'
// };
// showMessage(person.firstName);
// console.log(person);

// the Termary Operator 
// let price = 2;

// (price > 10) ? showMessage('yes') : showMessage('no');


// Else If statements
// if (price > 10) { 
//     showMessage('true');
// }

// else if (price < 5) {
//     showMessage('false');
// }

// for Loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 4
// while (i > 0) {
//     console.log(i);
//     i--;
// }

// function showMessage(message) {
//     document.getElementById('message').textContent = message;
// }


// function toggleMenu() {
//   document.getElementById("mainNavJs").classList.toggle("hide");
// }

// let x =document.getElementById('hamburgerMenu');
// x.onclick = toggleMenu;

// function myFunction(x) {
//   x.classList.toggle("change");
// }

// On mobile, hamburger menu appears
// Nav needs to disappear 
// On Click, hamnurger menu expands to show nav 
// If menu is open, click x to close page

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

var fields = {};
document.addEventListener("DOMContentLoaded", function() {
  fields.fullName = document.getElementById('fullName');
  fields.email = document.getElementById('email');
  fields.textArea = document.getElementById('textArea');
})

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined') return false;

  return (value.length > 0);
}

function isValid() {
  var valid = true;
  valid &= fieldValidation(fields.fullName, isNotEmpty);
  valid &= fieldValidation(fields.email, isNotEmpty);
  return valid;
 }

function sendContact() {
  if (isValid()) {
    let usr = new User(fullName.value, email, textArea);

    alert ('${usr.fullName} thanks for registering.')
  }

  else {
    window.alert('There was an error!')
  }

}