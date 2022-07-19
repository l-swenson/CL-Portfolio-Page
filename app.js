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

let i = 4
while (i > 0) {
    console.log(i);
    i--;
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}