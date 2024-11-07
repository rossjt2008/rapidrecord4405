let validpage = 0
if (localStorage.getItem("teachername")) {
    console.log("teachername is defined.")
} else {
    console.log("Instructed is not logged in, going to the login screen.")
    validpage = 1
}
if (localStorage.getItem("teachername") == undefined) {
    console.log("User is not an instructor.")
    validpage = 1
} else {
    console.log("Instructor valid.")
}
if (localStorage.getItem("fullname")) {
	console.log("fullname is defined.")
} else {
	console.log("fullname is not defined.")
}
if (localStorage.getItem("fullname") == undefined) {
	console.log("User is not a student.")
} else {
    if (localStorage.getItem("teachername") == undefined) {
        console.log("Student logged in. Going to hours input screen.")
        validpage = 2
    } else {
        console.log("Teacher has accessed a student's hours.")
    }
}
if (validpage == 1) {
	self.location = "login.html"
} else if (validpage == 2) {
	self.location = "index.html"
}
var newhours = 0
var fullname = localStorage.getItem("logname")
document.getElementById("name").textContent = fullname;

getTotalHours(localStorage.getItem("logname"),(th) => {
	localStorage.setItem("totalhours",th);
	previousHours = th;
	elem.style.width = (th * 1.25) + "vw";
	document.getElementById("hours").textContent = th + " hours";
})

function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}
function clickBack() {
    self.location = "systemtools.html"
}

fetch(`getData.php?name=${fullname}&num=` + Math.random())
	.then(response => response.text())
	.then((txt) => {
		if (txt != "") {
			let data = JSON.parse(txt);
			data.forEach((val) => {
				let new_data = document.createElement('h1');
				new_data.innerHTML = "Hours: " + val.hours + "<br><span class='history-date'>" + val.date + "</span>";
				new_data.className = "history-container";
				document.getElementById("loghistory").appendChild(new_data);
			})
		}
	})