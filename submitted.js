var previoushours = 8;
var totalhours = 7;
var newhours = previoushours + totalhours;
newHours();
function newHours(newhours) {
document.getElementById("hours").textContent = newhours + " hours"
}