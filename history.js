if (localStorage.getItem("fullname")) {
	console.log("fullname is defined.")
} else {
	console.log("Not logged in. Going to login screen.")
	self.location = "login.html"
}
if (localStorage.getItem("fullname") == undefined) {
	console.log("User invalid, please log in.")
    self.location = ("login.html")
} else {
	console.log("User vaild.")
}
let totalhours = 0;
if (localStorage.getItem("totalhours")) {
    totalhours = Number(localStorage.getItem("totalhours"));
}
var newhours = 0
var fullname = localStorage.getItem("fullname")
document.getElementById("name").textContent = fullname;
var elem = document.getElementById("progress");
var progress = totalhours * 1.25
elem.style.width = progress + "vw";
newhours = totalhours
progressFloat = parseFloat(newhours)
progressPercent = progressFloat * 1.25
progressPercent = Math.round(progressPercent)
progressPercent = parseInt(progressPercent)
elem.style.width = progressPercent + "vw";
console.log(progressPercent + "vw")
localStorage.removeItem(totalhours)
localStorage.setItem("totalhours", newhours)
newHours(newhours);
function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}
function clickBack() {
    lastpage = localStorage.getItem("lastpage")
    self.location = lastpage
}