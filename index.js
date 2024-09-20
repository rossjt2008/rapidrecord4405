/*
The JS. I'm thinking let's LOCALSTORAGE *and* MYSQL the data?
*/
var button1 = 1;
var button2 = 2;
var button3 = 3;
var button4 = 4;
var button5 = document.getElementById("customhours").value;
var totalhours = button1+button2+button3+button4+button5;





///////////////////////////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Hi Ross, here's what I'm thinking. Here's an array (list) of current hours.
//Right now, it's empty because no buttons have been pressed, so therefore no hours have been added.

let hours = [0]

//Once some buttons are pressed, 'hours' might look a little more like:
/*
    hours = [1, 4]
*/
//which would mean that buttons "1 Hour" and "4 Hours" have been pressed.

// Now we add a function. This function takes in a number of hours (ex, 4).
// If that number of hours already exists in the hours[] array, then we remove it.
// If it's not in, we add it. That's the "toggle" part.
// The function also takes in what button pressed it, so that we can edit that button's
// styling accordingly.

function toggleHour(h,button) {

	//if the button hours pressed is already in the hours[] array...
	if (hours.includes(h)) {

		//then 'toggle off' that button (remove it), and change it's style to the 'off' style.
		hours.splice(hours.indexOf(h),1);
		button.classList.toggle("selected-button");

	//otherwise...
	} else {

		//add it in, and change it's style to the 'on' style.
		hours.push(h);
		button.classList.toggle("selected-button");
	}

	//and then we update the 'hours' counter thing.
	document.getElementById("hours").textContent = (hours.reduce((a,b) => a + b)) + " hours"
}