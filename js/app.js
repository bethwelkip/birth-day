


form.addEventListener('submit', e => {
	e.preventDefault();
  alert("here");
	validate();
});

function validate(){
  const day = document.getElementsByName('date').value();
  var date = new Date(day);
  const weekday = date.getDay();
  alert( "Please provide your name!" );
  alert(weekday);

}
