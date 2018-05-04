
var secondsInAHour = 60 * 60;
var secondsInADay = secondsInAHour * 24;
var secondsInAYear = secondsInADay * 365;

function OnGoBtnClick() 
{
    var ageInput = document.getElementById("age");
    var age = ageInput.value;
    var secondsInAge = age * secondsInAYear;
    alert(secondsInAge);

	ageInput.value = "";
}

function onKeyPress(e) {
	var fireButton = document.getElementById("Go");

	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;

	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}


// init - called when the page has completed loading

window.onload = init;

function init() 
{
	var goButton = document.getElementById("Go");
	goButton.onclick = OnGoBtnClick;

	var guessInput = document.getElementById("age");
	guessInput.onkeypress = onKeyPress;
}