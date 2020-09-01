const males = [];
const females = [];
const gender = document.getElementById('gender').value();

form.addEventListener('submit', e => {
	e.preventDefault();
	validate();
});

function validate(){
  const day = document.getElementsByName('date').value();
  var date = new Date(Date.parse(day));
  const dateString = date.toDateString().split(" ");
	var weekday = dateString[0];
	if (dateString[3] > 2020 || dateString[3] < 1900){
		document.innerHTML
	}
	else{
		console.log(weekday);
		akanName(weekday);
	}

}
function dayOfWeek(weekday){
	if weekday === 'Mon'{return 1;}
	else if(weekday === 'Tue'){ return 2;}
	else if(weekday === 'Wed'){return 3;}
	else if (weekday === 'Thu'){return 4;}
	else if(weekday === 'Fri'){return 5;}
	else if (weekday=== 'Sat'){return 6;}
	else{return 0;}
}
function akanName(weekday){
	if (gender == 'male'){
		document.getElementById("result").innerHTML = "You were born on a" + weekday + "and your Akan Name is" + males[dayOfWeek(weekday)] + "!"
	}
	else{
	document.getElementById("result").innerHTML = "You were born on a" + weekday + "and your Akan Name is" + females[dayOfWeek(weekday)] + "!"
	}
}
