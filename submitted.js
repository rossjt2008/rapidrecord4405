
if (localStorage.getItem("fullname")) {
	console.log("fullname is defined.")
} else {
	console.log("Not logged in. Going to login screen.")
    self.location = ("login.html")
}
if (localStorage.getItem("fullname") == undefined) {
	console.log("User invalid, please log in.")
    self.location = ("login.html")
} else {
	console.log("User vaild.")
}
if (localStorage.getItem("addHours")) {
	console.log("Hours accepted.")
} else {
	console.log("No hours submitted. Going to login screen.")
}
let previoushours = 0;
if (localStorage.getItem("totalhours")) {
    previoushours = Number(localStorage.getItem("totalhours"));
}
let totalhours = localStorage.getItem("addHours");
totalhours = parseInt(totalhours)
var newhours = previoushours + totalhours;
totalhours = 0
localStorage.setItem("addHours", totalhours)
var elem = document.getElementById("progress");
var progress = (previoushours + totalhours) * 1.25
elem.style.width = progress + "vw";
localStorage.removeItem(totalhours)
localStorage.setItem("totalhours", newhours)
newHours(newhours);
function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}
// run whenDonePressed() when it is clicked, essentially does the same thing as onclick=“whenDonePressed()” in the HTML
document.getElementById("done").addEventListener("click", whenDonePressed);
function whenDonePressed() {
    //add code here to manage whatever needs to be managed in the JS, saving info, etc
    if (localStorage.getItem("fullname")) {
                //and then switch page
        self.location = "index.html";  //or whichever file comes next
    } else {
        self.location = "login.html"
    }
}
function logout() {
    localStorage.getItem("fullname")
    localStorage.removeItem("fullname")
    self.location = "login.html"
}