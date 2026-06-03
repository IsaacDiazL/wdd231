const getString = new URLSearchParams(window.location.search);
const displaydata = document.querySelector('#formdata');
const i = new Date();
const dateform = i.toLocaleDateString("en-US", {weekday:"long", year:"numeric", month:"short", day:"numeric"});
const timeform = i.toLocaleTimeString();
const tagdate = dateform + " " + timeform;
console.log(getString);

getString.set('timestamp', tagdate);

const fname = getString.get('fname');
const lname = getString.get('lname');
const title = getString.get('title');
const email = getString.get('email');
const phone = getString.get('phone');
const business = getString.get('business');
const membershiplevel = getString.get('membershipLevel');
const businessorg = getString.get('businessorg');
const timestamp = getString.get('timestamp');
getString.get('timestamp');

console.log(getString.get('fname'));
console.log(getString.get('lname'));
console.log(getString.get('title'));
console.log(getString.get('email'));
console.log(getString.get('phone'));
console.log(getString.get('business'));
console.log(getString.get('membershipLevel'));
console.log(getString.get('businessorg'));
console.log(getString.get('timestamp'));

displaydata.innerHTML = `
<p>Thank you for completing this form</p> <br>
<p><strong>First Name: </strong>${fname}<p> <br>
<p><strong>Last Name: </strong>${lname}<p> <br>
<p><strong>Title: </strong>${title}<p> <br>
<p><strong>Email: </strong>${email}<p> <br>
<p><strong>Phone: </strong>${phone}<p> <br>
<p><strong>Business: </strong>${business}<p> <br>
<p><strong>Membership Level: </strong>${membershiplevel}<p> <br>
<p><strong>Business Organization: </strong>${businessorg}<p> <br>
<p>${timestamp}<p> <br>
<a href="index.html">Return to Homepage</a>`;