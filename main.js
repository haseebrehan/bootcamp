const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const inputValue = searchInput.value;
  console.log("The search value is: "+ inputValue);
});


function sendEmail() {
    const Ni=document.getElementById('first-name').value;;
    const Li=document.getElementById('last-name').value;
    const Ei=document.getElementById('email').value;
    const Pi=document.getElementById('phone-number').value;
	Email.send({
	Host: "smtp.gmail.com",
	Username : "haseeb.rehan.aziz@gmail.com",
	Password : "akjigmdjaiiaakhv",
	To : 'haseebrehan@yahoo.com',
	From : "haseeb.rehan.aziz@gmail.com",
	Subject : "Email from :"+ Ni +" " + Li,
	Body : "Email id is:" + Ei + " The phone number is: "+Pi,
	}).then(
		message => alert("mail sent successfully")
	);
}