var males = ['Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', "Kofi", "Kwame", 'Kwasi'];
var females = ['Adwoa', 'Abenaa', 'Akua', 'Yaa', "Afua", "Ama", 'Akosua'];
var gender = form.elements["gender"];


form.addEventListener('submit', e => {
	e.preventDefault();
	validate();
});

function validate() {
	var day = document.getElementById("date").value;
	var date = new Date(Date.parse(day));
	var today = new Date();

	var weekday = date.getDay();

	if ((date.getFullYear() > today.getFullYear() || date.getFullYear() < 1900) ||
		date.getFullYear() === today.getFullYear() && date.getMonth() >= today.getMonth()
		&& date.getDate() > today.getDate()) {
		alert("Please Enter a Valid Date");
	}
	else {
		akanName(weekday);
	}
}

function akanName(weekday) {
	if (gender[0].checked) {
		document.getElementById("result").innerHTML = "Your Akan Name is " + males[weekday] + "!";
	}
	else {
		document.getElementById("result").innerHTML = "Your Akan Name is " + females[weekday] + "!";
	}
}
