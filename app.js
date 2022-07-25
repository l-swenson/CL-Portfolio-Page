
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

// Email verification and contact form greeting
var submitButton = document.getElementById('btn');

submitButton.addEventListener("click", function(){

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email.value.match(mailFormat)){
    let name = fullName.value
    alert ("Thank you " + name + " for registering! This form is for demonstration purposes only.")
  }

  else {
    alert("You have entered an invalid email address!");
  }

});





// // function isValid() {
// //   var valid = true;
// //   valid &= fieldValidation(fields.fullName, isNotEmpty);
// //   valid &= fieldValidation(fields.email, isNotEmpty);
// //   return valid;
// //  }

// function sendContact() {
//   if (isNotEmpty()) {
//     let usr = fullName.value;

//     alert (usr + "thanks for registering.")
//     console.log(fullName.value)
//   }


//   else {
//     window.alert('There was an error!')
//   }

// }






